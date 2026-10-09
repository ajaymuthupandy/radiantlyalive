'use client'

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { MegaMenuPanel } from '@/components/mega-menu/MegaMenuPanel'
import { MobileMenu } from '@/components/mobile-menu/MobileMenu'
import { flattenNav, HEADER_CTA, HEADER_SCHEDULE, MAIN_NAV, type NavGroup } from '@/data/navigation'
import { scrollToTop } from '@/lib/lenis'
import { isActivePath } from '@/lib/routes'
import { cn } from '@/lib/utils'

const SCROLLED_AFTER = 64
const HIDE_AFTER = 560
/** Hover intent: a pointer passing over an item doesn't open its panel. */
const OPEN_DELAY = 150
const CLOSE_DELAY = 220
/** An open panel closes once the page has scrolled this far. */
const CLOSE_ON_SCROLL = 48

const HEADER_NAV = MAIN_NAV.filter((g) => g.inHeader)
const hasPanel = (group: NavGroup) => group.links.length > 1

/**
 * Site header: a quiet announcement bar, then a solid plum bar with the
 * logo, four linked sections, a schedule link and one call to action.
 *
 * - Each top-level label is a real link to its hub page. Hovering it (with
 *   intent) opens a short panel of destinations; keyboard and touch users
 *   open the same panel with the small chevron button beside the label.
 * - Panels close on Escape, outside click, route change and scroll.
 * - The bar tucks away on scroll down and returns on scroll up.
 */
export function SiteHeader({ announcement }: { announcement?: ReactNode }) {
  const pathname = usePathname()
  const [openId, setOpenId] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const timer = useRef<number | undefined>(undefined)

  // Scroll state, throttled to one update per frame.
  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > SCROLLED_AFTER)
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > HIDE_AFTER && y > lastY)
        lastY = y
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  // Moving between groups swaps panels instantly instead of replaying the open animation.
  const [prevOpenId, setPrevOpenId] = useState(openId)
  const [switching, setSwitching] = useState(false)
  if (openId !== prevOpenId) {
    setSwitching(prevOpenId !== null && openId !== null)
    setPrevOpenId(openId)
  }

  // Close everything on navigation (render-time state adjustment).
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpenId(null)
    setMobileOpen(false)
  }

  const clearTimer = () => window.clearTimeout(timer.current)
  const schedule = (fn: () => void, delay: number) => {
    clearTimer()
    timer.current = window.setTimeout(fn, delay)
  }
  useEffect(() => clearTimer, [])

  const close = useCallback((returnFocusTo?: string) => {
    setOpenId(null)
    if (returnFocusTo) triggerRefs.current[returnFocusTo]?.focus()
  }, [])

  // While a panel is open: Escape, outside clicks and scrolling close it.
  useEffect(() => {
    if (!openId) return
    const y0 = window.scrollY
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') close(openId)
    }
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close()
    }
    const onScroll = () => {
      if (Math.abs(window.scrollY - y0) > CLOSE_ON_SCROLL) close()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [openId, close])

  const focusPanelLink = (id: string, which: 'first' | 'last') => {
    requestAnimationFrame(() => {
      const links = document.querySelectorAll<HTMLElement>(`#mega-${id} a`)
      links[which === 'first' ? 0 : links.length - 1]?.focus()
    })
  }

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return
    e.preventDefault()
    setOpenId(id)
    focusPanelLink(id, e.key === 'ArrowDown' ? 'first' : 'last')
  }

  const onPanelKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!openId || (e.key !== 'ArrowDown' && e.key !== 'ArrowUp')) return
    const links = Array.from(document.querySelectorAll<HTMLElement>(`#mega-${openId} a`))
    const i = links.indexOf(document.activeElement as HTMLElement)
    if (i === -1) return
    e.preventDefault()
    links[(i + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length]?.focus()
  }

  // Close when keyboard focus leaves the header entirely.
  const onBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    if (openId && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenId(null)
  }

  const menuOpen = openId !== null
  const groupActive = (group: NavGroup) =>
    isActivePath(pathname, group.href) || flattenNav(group.links).some((l) => isActivePath(pathname, l.href))

  return (
    <>
      <div
        ref={headerRef}
        id="site-header"
        data-scrolled={scrolled || undefined}
        data-switching={switching || undefined}
        onBlurCapture={onBlurCapture}
        onPointerLeave={(e) => e.pointerType === 'mouse' && schedule(() => setOpenId(null), CLOSE_DELAY)}
        onPointerEnter={clearTimer}
        className={cn(
          'fixed inset-x-0 top-0 z-[var(--z-header)] transition-transform duration-500 ease-[var(--ease-out-expo)]',
          hidden && !menuOpen && !mobileOpen && 'pointer-events-none -translate-y-full',
        )}
      >
        {announcement}

        <header className="relative border-b border-cream/10 bg-plum text-cream">
          {/* Three zones on one line: logo left, sections centred, actions right. */}
          <div className="container-x grid h-[var(--header-height)] grid-cols-[1fr_auto] items-center gap-x-8 lg:grid-cols-[1fr_auto_1fr]">
            <Link
              href="/"
              data-header-home
              onClick={(e) => {
                // Already home: a same-URL link is a no-op, so return to the top instead.
                if (pathname !== '/') return
                e.preventDefault()
                setOpenId(null)
                scrollToTop()
              }}
              className="flex items-center justify-self-start rounded-sm"
              aria-label="Radiantly Alive, home"
            >
              <Logo />
            </Link>

            <nav aria-label="Main" className="hidden h-full lg:block">
              <ul className="flex h-full items-center gap-10">
                {HEADER_NAV.map((group) => {
                  const open = openId === group.id
                  const panel = hasPanel(group)
                  const active = groupActive(group)
                  return (
                    <li
                      key={group.id}
                      className="relative flex h-full items-center"
                      onPointerEnter={(e) => {
                        if (e.pointerType !== 'mouse') return
                        schedule(() => setOpenId(panel ? group.id : null), openId ? 0 : OPEN_DELAY)
                      }}
                    >
                      <Link
                        href={group.href}
                        aria-current={active ? 'true' : undefined}
                        className={cn(
                          'type-nav relative py-2 whitespace-nowrap',
                          'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)]',
                          active || open ? 'after:scale-x-100 after:bg-saffron' : 'after:scale-x-0 after:bg-cream hover:after:scale-x-100',
                        )}
                      >
                        {group.label}
                      </Link>
                      {panel && (
                        // Keyboard and touch disclosure. It takes no space, so every label sits on the same rhythm.
                        <button
                          ref={(el) => {
                            triggerRefs.current[group.id] = el
                          }}
                          type="button"
                          aria-expanded={open}
                          aria-controls={`mega-${group.id}`}
                          aria-label={`${group.label} menu`}
                          onClick={() => setOpenId(open ? null : group.id)}
                          onKeyDown={(e) => onTriggerKeyDown(e, group.id)}
                          className="absolute top-1/2 -right-6 grid size-6 -translate-y-1/2 place-items-center rounded-full text-cream opacity-0 focus-visible:opacity-100"
                        >
                          <ChevronDown aria-hidden strokeWidth={1.75} className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center justify-self-end gap-7">
              <Link
                href={HEADER_SCHEDULE.href}
                className="type-nav hidden py-2 underline decoration-transparent underline-offset-[0.5em] transition-colors hover:decoration-cream md:inline"
              >
                {HEADER_SCHEDULE.label}
              </Link>
              <Link
                href={HEADER_CTA.href}
                className="type-nav hidden h-10 items-center rounded-control bg-saffron px-5 whitespace-nowrap text-ink transition-colors duration-300 hover:bg-saffron-deep sm:inline-flex"
              >
                {HEADER_CTA.label}
              </Link>
              <button
                ref={mobileToggleRef}
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="-mr-2.5 grid size-11 place-items-center rounded-full transition-colors hover:bg-cream/10 lg:hidden"
              >
                <Menu className="size-6" strokeWidth={1.5} aria-hidden />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </div>

          {/* Desktop panels: all rendered (crawlable), only the open one is interactive */}
          <div className="hidden lg:block" onKeyDown={onPanelKeyDown}>
            {HEADER_NAV.filter(hasPanel).map((group) => (
              <MegaMenuPanel
                key={group.id}
                group={group}
                open={openId === group.id}
                pathname={pathname}
                onNavigate={() => setOpenId(null)}
              />
            ))}
          </div>
        </header>
      </div>

      {/* Light page dim behind an open panel */}
      <div
        aria-hidden
        onClick={() => setOpenId(null)}
        className={cn(
          'fixed inset-0 z-[var(--z-scrim)] hidden bg-shade/20 transition-opacity duration-300 lg:block',
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <MobileMenu
        open={mobileOpen}
        pathname={pathname}
        onClose={() => {
          setMobileOpen(false)
          mobileToggleRef.current?.focus()
        }}
      />
    </>
  )
}
