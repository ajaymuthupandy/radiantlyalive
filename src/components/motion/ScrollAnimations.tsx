'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap, MQ, prefersReducedMotion, ScrollTrigger } from '@/animations/gsap'
import { initReveal } from '@/animations/reveal'
import { initTextReveal } from '@/animations/textReveal'
import { initImageReveal } from '@/animations/imageReveal'
import { initParallax } from '@/animations/parallax'
import { initCounters, initStagger } from '@/animations/stagger'
import { initHorizontalScroll } from '@/animations/horizontalScroll'

/**
 * Wires declarative `data-*` animation hooks (rendered by Server Components)
 * to GSAP. Re-runs on every route change and reverts everything it created
 * on cleanup, so navigations never leak ScrollTriggers.
 *
 * Important: this effect mutates page DOM (SplitText lines, pin spacers), so
 * it must run after the page has hydrated. Do not add a route-level
 * `loading.tsx` (or another Suspense boundary around page content): the
 * layout effect would then fire before the page hydrates, React would hit a
 * hydration mismatch and re-render the page, discarding every animation.
 */
export function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.getElementById('main')
    const html = document.documentElement
    if (!root || prefersReducedMotion()) {
      html.classList.add('motion-ready')
      return
    }

    const ctx = gsap.context(() => {
      initReveal(root)
      initTextReveal(root)
      initImageReveal(root)
      initStagger(root)
      initCounters(root)
    }, root)

    const mm = gsap.matchMedia(root)
    mm.add(MQ.tabletUp, () => initParallax(root))
    mm.add(MQ.desktopUp, () => initHorizontalScroll(root))
    mm.add(MQ.belowDesktop, () => initHorizontalScroll(root, 'horizontal-mobile'))

    html.classList.add('motion-ready')

    // Layout settles once web fonts and lazy images arrive.
    let cancelled = false
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh()
    })
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    return () => {
      cancelled = true
      window.removeEventListener('load', onLoad)
      mm.revert()
      ctx.revert()
    }
  }, [pathname])

  return null
}
