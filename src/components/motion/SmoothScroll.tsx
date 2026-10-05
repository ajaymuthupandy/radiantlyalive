'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, prefersReducedMotion, ScrollTrigger } from '@/animations/gsap'
import { setLenis } from '@/lib/lenis'

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger and Lenis
 * share one frame loop. Touch devices keep native scrolling (syncTouch off),
 * in-page anchors are handled by Lenis, and reduced-motion users get native
 * scrolling throughout.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
      smoothWheel: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    })
    setLenis(lenis)

    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
