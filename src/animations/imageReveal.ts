import { gsap } from './gsap'

/**
 * `data-image-reveal` (on an overflow-hidden wrapper): the frame opens from the
 * bottom while the image inside settles from a slight zoom. One-shot, so the
 * clip-path cost is paid once per image.
 */
export function initImageReveal(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-image-reveal]').forEach((frame) => {
    const img = frame.querySelector('img')
    const tl = gsap.timeline({
      scrollTrigger: { trigger: frame, start: 'top 85%', once: true },
      defaults: { duration: 1.4, ease: 'expo.out' },
    })

    tl.fromTo(frame, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', clearProps: 'clipPath' })
    if (img) tl.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.8 }, 0)
  })
}
