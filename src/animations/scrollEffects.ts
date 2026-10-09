import { gsap } from './gsap'

/**
 * Scroll effects added in the second design pass. Each is opt-in through a
 * data attribute, runs once (or scrubs) and never touches layout properties.
 *
 * - `data-window`: a full-bleed photograph opens from an inset frame to the
 *   full width while the image inside settles from a slight zoom (scrubbed).
 * - `data-rule`: a hairline draws in from the left when it enters.
 * - `data-slide="left|right"`: the element slides in from that side.
 */
export function initScrollEffects(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-window]').forEach((frame) => {
    const img = frame.querySelector('img')
    const tl = gsap.timeline({
      scrollTrigger: { trigger: frame, start: 'top bottom', end: 'center center', scrub: 0.6 },
    })
    tl.fromTo(
      frame,
      { clipPath: 'inset(8% 6% 8% 6% round 0.5rem)' },
      { clipPath: 'inset(0% 0% 0% 0% round 0rem)', ease: 'none' },
    )
    if (img) tl.fromTo(img, { scale: 1.18 }, { scale: 1, ease: 'none' }, 0)
  })

  root.querySelectorAll<HTMLElement>('[data-rule]').forEach((rule) => {
    gsap.fromTo(
      rule,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: rule, start: 'top 92%', once: true } },
    )
  })

  root.querySelectorAll<HTMLElement>('[data-slide]').forEach((el) => {
    const from = el.dataset.slide === 'left' ? -60 : 60
    gsap.fromTo(
      el,
      { autoAlpha: 0, x: from },
      { autoAlpha: 1, x: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } },
    )
  })
}
