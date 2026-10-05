import type Lenis from 'lenis'

/**
 * Module-level handle to the single Lenis instance, so UI such as the mobile
 * menu and dialogs can pause smooth scrolling without a context provider.
 */
let instance: Lenis | null = null

export function setLenis(lenis: Lenis | null) {
  instance = lenis
}

export function getLenis() {
  return instance
}

/** Scrolls back to the top of the page (works with or without Lenis). */
export function scrollToTop() {
  if (instance) instance.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

/** Locks page scroll for modal UI (works with or without Lenis). */
export function lockScroll(locked: boolean) {
  const root = document.documentElement
  if (locked) instance?.stop()
  else instance?.start()
  // Hold the scrollbar's width so the page doesn't jump sideways when it hides.
  root.style.paddingRight = locked ? `${window.innerWidth - root.clientWidth}px` : ''
  root.style.overflow = locked ? 'hidden' : ''
}
