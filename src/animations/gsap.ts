import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

gsap.defaults({ ease: 'power3.out' })

export { gsap, ScrollTrigger, SplitText }

/** Media queries shared by every animation module. */
export const MQ = {
  motionOk: '(prefers-reduced-motion: no-preference)',
  reduced: '(prefers-reduced-motion: reduce)',
  tabletUp: '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
  desktopUp: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
} as const

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia(MQ.reduced).matches
}

export function isSmallScreen() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
}
