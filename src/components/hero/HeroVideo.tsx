'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface LocalSource {
  src: string
  type: string
}

interface HeroVideoProps {
  /** Encoded copies found in public/videos/hero at build time. */
  desktop: LocalSource[]
  mobile: LocalSource[]
  youtubeId: string
  youtubeStart: number
  title: string
  poster: string
  className?: string
}

type Mode = 'none' | 'native' | 'youtube'

interface YTPlayer {
  playVideo(): void
  pauseVideo(): void
  mute(): void
  seekTo(seconds: number, allowSeekAhead: boolean): void
  destroy(): void
}

interface YTNamespace {
  Player: new (el: HTMLElement, options: Record<string, unknown>) => YTPlayer
  PlayerState: { ENDED: number; PLAYING: number }
}

declare global {
  interface Window {
    YT?: YTNamespace
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiPromise: Promise<YTNamespace> | null = null

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  apiPromise ??= new Promise<YTNamespace>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve(window.YT!)
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    script.async = true
    document.head.appendChild(script)
  })
  return apiPromise
}

/** Resolves once the page has loaded and the main thread is idle. */
function whenIdle() {
  return new Promise<void>((resolve) => {
    const idle = () =>
      'requestIdleCallback' in window ? requestIdleCallback(() => resolve(), { timeout: 2500 }) : setTimeout(resolve, 600)
    if (document.readyState === 'complete') idle()
    else window.addEventListener('load', idle, { once: true })
  })
}

/**
 * Background film for the homepage hero. Sits above the server-rendered
 * poster (the LCP image) and only fades in once frames are actually playing,
 * so a slow or blocked video never leaves a blank hero.
 */
export function HeroVideo({ desktop, mobile, youtubeId, youtubeStart, title, poster, className }: HeroVideoProps) {
  const [mode, setMode] = useState<Mode>('none')
  const [sources, setSources] = useState<LocalSource[]>([])
  const [visible, setVisible] = useState(false)

  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const ytMountRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTPlayer | null>(null)

  // Choose a strategy for this device.
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
    if (reduce || saveData) return

    const small = matchMedia('(max-width: 767px)').matches
    const local = small ? mobile : desktop
    // Local files are muted, control-free and cheap to start: play on open.
    if (local.length) {
      setSources(local)
      setMode('native')
      return
    }

    let cancelled = false
    whenIdle().then(() => {
      if (cancelled) return
      if (!small) {
        // Mobile without an encoded file keeps the poster: an embedded player
        // costs more data and battery than the moment is worth.
        setMode('youtube')
      }
    })
    return () => {
      cancelled = true
    }
  }, [desktop, mobile])

  // YouTube background player.
  useEffect(() => {
    if (mode !== 'youtube' || !ytMountRef.current) return
    let disposed = false
    let revealTimer: number | undefined

    loadYouTubeApi().then((YT) => {
      if (disposed || !ytMountRef.current) return
      playerRef.current = new YT.Player(ytMountRef.current, {
        host: 'https://www.youtube-nocookie.com',
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
          rel: 0,
          start: youtubeStart,
          origin: window.location.origin,
        },
        events: {
          onReady: (e: { target: YTPlayer }) => {
            e.target.mute()
            e.target.playVideo()
          },
          onStateChange: (e: { data: number; target: YTPlayer }) => {
            if (e.data === YT.PlayerState.PLAYING) {
              // Give the stream a moment to settle before revealing it.
              revealTimer = window.setTimeout(() => setVisible(true), 700)
            } else if (e.data === YT.PlayerState.ENDED) {
              e.target.seekTo(youtubeStart, true)
              e.target.playVideo()
            }
          },
        },
      })
    })

    return () => {
      disposed = true
      window.clearTimeout(revealTimer)
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [mode, youtubeId, youtubeStart])

  // Pause while the hero is off screen (saves CPU and data), resume on return.
  useEffect(() => {
    if (mode === 'none' || !frameRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        videoRef.current?.play().catch(() => {})
        playerRef.current?.playVideo()
      } else {
        videoRef.current?.pause()
        playerRef.current?.pauseVideo()
      }
    })
    observer.observe(frameRef.current)
    return () => observer.disconnect()
  }, [mode])

  return (
    <div
      ref={frameRef}
      aria-hidden
      className={cn(
        'hero-video-frame pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-[1.6s] ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      {mode === 'native' && (
        <video
          ref={videoRef}
          className="size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
          disablePictureInPicture
          onPlaying={() => setVisible(true)}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>
      )}
      {mode === 'youtube' && (
        <div className="hero-video-cover">
          <div ref={ytMountRef} title={title} />
        </div>
      )}
    </div>
  )
}
