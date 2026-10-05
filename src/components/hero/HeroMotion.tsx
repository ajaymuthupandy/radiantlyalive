'use client'

import { useEffect } from 'react'
import { gsap, MQ, prefersReducedMotion } from '@/animations/gsap'

/**
 * Entrance + scroll choreography for a hero rendered on the server.
 * Looks up elements by data attribute inside `#${targetId}`:
 * - [data-hero-media]    image frame: settles from a slight zoom
 * - [data-hero-parallax] image layer: drifts on scroll (tablet+)
 * - [data-hero-item]     eyebrow / CTAs: fade up in sequence
 * The headline and lead use a CSS-only entrance (`.hero-rise` in
 * globals.css) so they paint at first paint and never wait for hydration:
 * they are the LCP element on mobile.
 */
export function HeroMotion({ targetId }: { targetId: string }) {
  useEffect(() => {
    const hero = document.getElementById(targetId)
    if (!hero || prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const media = hero.querySelector('[data-hero-media]')
      const layer = hero.querySelector('[data-hero-parallax]')
      const content = hero.querySelector('[data-hero-content]')
      const items = hero.querySelectorAll('[data-hero-item]')

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      if (media) tl.fromTo(media, { scale: 1.06 }, { scale: 1, duration: 2.4, ease: 'power2.out' }, 0)

      if (items.length) {
        tl.fromTo(items, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.35)
      }

      const mm = gsap.matchMedia()
      mm.add(MQ.tabletUp, () => {
        const scrollTrigger = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
        if (layer) gsap.to(layer, { yPercent: 14, ease: 'none', scrollTrigger })
        if (content) gsap.to(content, { yPercent: -10, opacity: 0.4, ease: 'none', scrollTrigger })
      })
    }, hero)

    return () => ctx.revert()
  }, [targetId])

  return null
}
