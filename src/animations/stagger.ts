import { gsap, ScrollTrigger } from './gsap'

/**
 * `data-stagger` containers reveal their `data-stagger-item` children in
 * reading order. ScrollTrigger.batch groups items that enter together, so a
 * tall grid reveals row by row instead of all at once.
 */
export function initStagger(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>('[data-stagger-item]')
    if (!items.length) return

    gsap.set(items, { autoAlpha: 0, y: 32 })
    ScrollTrigger.batch(items, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, overwrite: true }),
    })
  })
}

/**
 * `data-counter="900"`: counts up once on entry. The final value is rendered
 * on the server, so no-JS and reduced-motion users always see the real number.
 */
export function initCounters(root: ParentNode) {
  root.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const target = Number(el.dataset.counter)
    const decimals = Number(el.dataset.counterDecimals ?? 0)
    if (!Number.isFinite(target)) return

    const state = { value: 0 }
    const render = () => {
      el.textContent = state.value.toFixed(decimals)
    }
    render()
    gsap.to(state, {
      value: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: render,
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    })
  })
}
