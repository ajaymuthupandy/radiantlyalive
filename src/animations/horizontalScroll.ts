import { gsap } from './gsap'

/**
 * `data-<attr>` section with a `data-<attr>-track` child: the section pins
 * and the track translates sideways as the user scrolls. `horizontal` is
 * registered for desktop; `horizontal-mobile` for smaller screens, where the
 * pinned panel is usually just the card rail below a normally scrolling
 * header. Both are motion-allowed only; otherwise the track is a vertical
 * stack, so content is never hidden off-canvas.
 */
export function initHorizontalScroll(root: ParentNode, attr: 'horizontal' | 'horizontal-mobile' = 'horizontal') {
  root.querySelectorAll<HTMLElement>(`[data-${attr}]`).forEach((section) => {
    const track = section.querySelector<HTMLElement>(`[data-${attr}-track]`)
    if (!track) return

    const distance = () => Math.max(0, track.scrollWidth - section.clientWidth)

    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        // GSAP turns spacing off when the pin's parent is flex (the mobile rail's is).
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
  })
}
