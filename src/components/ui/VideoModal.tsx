'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Play, X } from 'lucide-react'
import { lockScroll } from '@/lib/lenis'
import { cn } from '@/lib/utils'
import { useFocusTrap } from './useFocusTrap'

interface VideoModalProps {
  videoId: string
  title: string
  label: string
  className?: string
}

/**
 * YouTube player chrome is switched off (`controls=0`): no centre play/pause
 * overlay and no volume / captions / settings bar, so the film reads as one
 * clean frame. Closing unmounts the iframe, which stops playback; reopening
 * starts the film from the beginning.
 */
function embedSrc(videoId: string) {
  const params = new URLSearchParams({
    autoplay: '1',
    controls: '0',
    rel: '0',
    playsinline: '1',
    iv_load_policy: '3',
  })
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params}`
}

/**
 * Click-to-load YouTube player. Nothing is fetched from YouTube until the
 * visitor asks for it, and the embed uses the no-cookie domain.
 *
 * The dialog is portalled to <body>: its triggers sit inside GSAP-animated,
 * overflow-hidden sections, and a transformed ancestor would otherwise become
 * the containing block for `position: fixed`, pushing the player off-centre
 * and clipping it.
 */
const noopSubscribe = () => () => {}

export function VideoModal({ videoId, title, label, className }: VideoModalProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // True only on the client, after hydration, so the portal never mismatches.
  const canPortal = useSyncExternalStore(noopSubscribe, () => true, () => false)

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useFocusTrap(dialogRef, open, close)

  useEffect(() => {
    if (!open) return
    lockScroll(true)
    return () => lockScroll(false)
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={cn('group inline-flex min-h-11 items-center gap-3 text-left', className)}
      >
        <span className="relative grid size-12 place-items-center rounded-full border border-current/40 transition-colors duration-500 group-hover:border-current group-hover:bg-cream group-hover:text-plum">
          <Play className="ml-0.5 size-4 fill-current" aria-hidden />
        </span>
        <span className="type-eyebrow">{label}</span>
      </button>

      {canPortal &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label={title}
                className="fixed inset-0 z-[var(--z-dialog-top)] flex items-center justify-center bg-shade/90 px-3 py-16 backdrop-blur-sm md:px-8 md:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) close()
                }}
              >
                {/* Width is the smallest of the gutter-bound viewport, 80rem, and
                    the 16:9 width that fits the viewport height, so the frame is
                    never cropped, stretched or taller than the screen. */}
                <motion.div
                  className="relative aspect-video w-[min(100%,80rem,calc((100dvh-8rem)*16/9))] md:w-[min(100%,80rem,calc((100dvh-10rem)*16/9))]"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    type="button"
                    onClick={close}
                    className="absolute right-0 bottom-full mb-2 grid size-11 place-items-center rounded-full text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream md:mb-3"
                  >
                    <X className="size-6" strokeWidth={1.5} aria-hidden />
                    <span className="sr-only">Close video</span>
                  </button>
                  <iframe
                    className="block size-full bg-black shadow-2xl shadow-black/50"
                    src={embedSrc(videoId)}
                    title={title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  )
}
