import { gsap } from './gsap'

/**
 * `data-parallax="0.15"`: scrubbed vertical drift relative to the parent.
 * The element should be taller than its parent (e.g. `-inset-y-[10%]`) so the
 * drift never exposes an edge. Registered for tablet+ only by the caller.
 */
export function initParallax(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const strength = Number(el.dataset.parallax || 0.15) * 100
    gsap.fromTo(
      el,
      { yPercent: -strength / 2 },
      {
        yPercent: strength / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })
}
