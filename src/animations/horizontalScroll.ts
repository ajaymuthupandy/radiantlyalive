import { gsap } from './gsap'

/**
 * `data-horizontal` section with a `data-horizontal-track` child: the section
 * pins and the track translates sideways as the user scrolls. Registered for
 * desktop + motion-allowed only; elsewhere the track is a vertical stack
 * (see Testimonials), so content is never hidden off-canvas.
 */
export function initHorizontalScroll(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-horizontal]').forEach((section) => {
    const track = section.querySelector<HTMLElement>('[data-horizontal-track]')
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
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
  })
}
