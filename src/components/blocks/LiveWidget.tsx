'use client'

import { useEffect, useRef, useState } from 'react'
import type { UiStrings } from '@/content/ui-strings'
import { INTEGRATIONS } from '@/data/site'

type Widget = 'ribbon-schedule' | 'momence-workshops'

/**
 * Mounts the source site's own booking widgets (same scripts, same
 * attributes) when they approach the viewport, so third-party JavaScript
 * never competes with the first paint.
 */
export function LiveWidget({ widget, fallback, strings }: { widget: Widget; fallback: React.ReactNode; strings: UiStrings }) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'failed'>('idle')

  useEffect(() => {
    const host = ref.current
    if (!host) return
    let script: HTMLScriptElement | null = null
    let watchdog: number | undefined

    const mount = () => {
      setState('loading')
      const target = document.createElement('div')
      target.id = 'ribbon-schedule'
      host.replaceChildren(target)

      script = document.createElement('script')
      if (widget === 'ribbon-schedule') {
        const cfg = INTEGRATIONS.ribbonSchedule
        script.id = 'ribbon-schedule-view-scriptroot'
        script.src = cfg.src
        script.dataset.host = cfg.host
        script.dataset.token = cfg.token
        script.dataset.location = cfg.location
      } else {
        const cfg = INTEGRATIONS.momenceWorkshops
        // The plugin finds its own tag via script[host_id][src$="host-schedule.js"], so the URL
        // must stay exact. It is an IIFE, so a classic script (unlike a module) re-runs on
        // every mount, including after client-side navigation.
        script.async = true
        script.src = cfg.src
        for (const [k, v] of Object.entries({
          host_id: cfg.hostId,
          teacher_ids: '[]',
          location_ids: '[]',
          tag_ids: '[]',
          session_type: cfg.sessionType,
          lite_mode: 'true',
          default_filter: 'show-all',
          locale: 'en',
        })) {
          script.setAttribute(k, v)
        }
      }
      script.onerror = () => setState('failed')
      host.appendChild(script)

      // Ready once the widget has rendered something of substance.
      const observer = new MutationObserver(() => {
        if (host.querySelectorAll('*').length > 12) {
          setState('ready')
          observer.disconnect()
          window.clearTimeout(watchdog)
        }
      })
      observer.observe(host, { childList: true, subtree: true })
      watchdog = window.setTimeout(() => {
        observer.disconnect()
        setState((s) => (s === 'ready' ? s : 'failed'))
      }, 15000)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect()
          mount()
        }
      },
      { rootMargin: '600px 0px' },
    )
    io.observe(host)

    return () => {
      io.disconnect()
      window.clearTimeout(watchdog)
      script?.remove()
      host.replaceChildren()
    }
  }, [widget])

  return (
    <div className="live-widget">
      <div ref={ref} data-lenis-prevent-wheel className="min-h-[12rem]" />
      {state !== 'ready' && (
        <div className="flex min-h-[12rem] flex-col items-center justify-center gap-4 rounded-frame border border-dashed border-ink/20 p-8 text-center" role="status">
          {state === 'failed' ? (
            <p className="text-ink-soft">{strings.widgetFailed}</p>
          ) : (
            <p className="type-eyebrow text-ink-soft">{strings.widgetLoading}</p>
          )}
          {fallback}
        </div>
      )}
    </div>
  )
}
