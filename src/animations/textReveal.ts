import { gsap, isSmallScreen, SplitText } from './gsap'

/**
 * `data-text-reveal`: headline lines rise out of clipping masks.
 * SplitText keeps an aria-label with the full sentence, so screen readers
 * read the heading normally; `autoSplit` re-splits on resize and font load.
 */
export function initTextReveal(root: ParentNode) {
  const duration = isSmallScreen() ? 0.8 : 1.15

  root.querySelectorAll<HTMLElement>('[data-text-reveal]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 110,
          duration,
          ease: 'expo.out',
          stagger: 0.09,
          scrollTrigger: { trigger: el, start: 'top 86%', once: true },
        })
      },
    })
  })
}

