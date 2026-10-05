import { gsap, isSmallScreen } from './gsap'

/**
 * `data-reveal`: fade + rise into place once, as the element enters the viewport.
 * Optional `data-reveal-delay` (seconds).
 */
export function initReveal(root: ParentNode) {
  const distance = isSmallScreen() ? 24 : 40

  root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: distance },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    )
  })
}
