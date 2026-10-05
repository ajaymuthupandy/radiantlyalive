'use client'

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { MegaMenuPanel } from '@/components/mega-menu/MegaMenuPanel'
import { MobileMenu } from '@/components/mobile-menu/MobileMenu'
import { flattenNav, HEADER_CTA, MAIN_NAV } from '@/data/navigation'
import { scrollToTop } from '@/lib/lenis'
import { isActivePath } from '@/lib/routes'
import { cn } from '@/lib/utils'

const SOLID_AFTER = 64
const HIDE_AFTER = 560
const OPEN_DELAY = 70
const CLOSE_DELAY = 220

/**
 * Site header: announcement bar + logo + the source site's five navigation
 * folders as mega menus.
 *
 * - Transparent over each page's hero, solid after scrolling or while a menu
 *   is open; tucks away on scroll down and returns on scroll up.
 * - Mega menus open on hover (with intent delays) and on click; the keyboard
 *   model follows the WAI disclosure-navigation pattern: Enter/Space toggle,
 *   ArrowDown opens and moves into the panel, Left/Right move between
 *   folders, Escape closes and returns focus to the folder button.
 */
export function SiteHeader({ announcement }: { announcement?: ReactNode }) {
  const pathname = usePathname()
  const [openId, setOpenId] = useState<string | null>(null)
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const timer = useRef<number | undefined>(undefined)
  /** A panel opened by hover is pinned (not closed) by the first click on its trigger. */
  const openedByHover = useRef(false)

  // Scroll state, throttled to one update per frame.
  useEffect(() => {
    let lastY = window.scrollY
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      setSolid(y > SOLID_AFTER)
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

  // Moving between folders swaps panels instantly instead of replaying the open animation.
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

  // Escape anywhere, and clicks outside the header, close the open panel.
  useEffect(() => {
    if (!openId) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') close(openId)
    }
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [openId, close])

  const focusPanelLink = (id: string, which: 'first' | 'last' = 'first') => {
    requestAnimationFrame(() => {
      const links = document.querySelectorAll<HTMLElement>(`#mega-${id} a`)
      links[which === 'first' ? 0 : links.length - 1]?.focus()
    })
  }

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const id = MAIN_NAV[index].id
    const move = (delta: number) => {
      const next = MAIN_NAV[(index + delta + MAIN_NAV.length) % MAIN_NAV.length]
      triggerRefs.current[next.id]?.focus()
      if (openId) setOpenId(next.id)
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setOpenId(id)
        focusPanelLink(id)
        break
      case 'ArrowUp':
        e.preventDefault()
        setOpenId(id)
        focusPanelLink(id, 'last')
        break
      case 'ArrowRight':
        e.preventDefault()
        move(1)
        break
      case 'ArrowLeft':
        e.preventDefault()
        move(-1)
        break
      case 'Home':
        e.preventDefault()
        triggerRefs.current[MAIN_NAV[0].id]?.focus()
        break
      case 'End':
        e.preventDefault()
        triggerRefs.current[MAIN_NAV[MAIN_NAV.length - 1].id]?.focus()
        break
    }
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
  const overlay = !solid && !menuOpen && !mobileOpen
  const groupActive = (id: string) => {
    const group = MAIN_NAV.find((g) => g.id === id)
    return !!group && flattenNav(group.links).some((l) => isActivePath(pathname, l.href))
  }

  return (
    <>
      <div
        ref={headerRef}
        id="site-header"
        data-scrolled={solid || undefined}
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

        <header
          className={cn(
            'relative text-cream transition-[background-color,box-shadow] duration-500 ease-[var(--ease-out-expo)]',
            overlay ? 'bg-transparent' : 'bg-plum shadow-[0_1px_0_0_rgb(255_253_235/0.08)]',
          )}
        >
          {/* Legibility veil over bright hero footage */}
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-shade/45 to-transparent transition-opacity duration-500',
              overlay ? 'opacity-100' : 'opacity-0',
            )}
          />

          <div className="container-x relative flex h-[var(--header-height)] items-center justify-between gap-6">
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
              className="shrink-0 rounded-sm"
              aria-label="Radiantly Alive, home"
            >
              {/* Between 1024 and 1280 the five folders need the room: emblem only */}
              <Logo compact wordmarkClassName="lg:max-xl:sr-only" />
            </Link>

            <nav aria-label="Main" className="hidden h-full lg:block">
              <ul className="flex h-full items-center">
                {MAIN_NAV.map((group, index) => {
                  const open = openId === group.id
                  return (
                    <li key={group.id} className="h-full">
                      <button
                        ref={(el) => {
                          triggerRefs.current[group.id] = el
                        }}
                        type="button"
                        aria-expanded={open}
                        aria-controls={`mega-${group.id}`}
                        data-active={groupActive(group.id) || undefined}
                        onClick={(e) => {
                          const pinHover = e.detail > 0 && open && openedByHover.current
                          openedByHover.current = false
                          setOpenId(open && !pinHover ? null : group.id)
                        }}
                        onKeyDown={(e) => onTriggerKeyDown(e, index)}
                        onPointerEnter={(e) => {
                          if (e.pointerType !== 'mouse') return
                          schedule(() => {
                            if (openId !== group.id) openedByHover.current = true
                            setOpenId(group.id)
                          }, openId ? 0 : OPEN_DELAY)
                        }}
                        className={cn(
                          'type-nav group relative flex h-full items-center gap-1 px-2.5 whitespace-nowrap transition-colors 2xl:px-4',
                          'after:absolute after:inset-x-2.5 after:bottom-[calc(50%-1.1rem)] after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-[var(--ease-out-expo)] 2xl:after:inset-x-4',
                          'hover:text-saffron hover:after:scale-x-100 aria-expanded:text-saffron aria-expanded:after:scale-x-100 data-active:after:scale-x-100',
                        )}
                      >
                        {group.label}
                        <ChevronDown
                          aria-hidden
                          strokeWidth={1.75}
                          className="size-3.5 opacity-70 transition-transform duration-300 group-aria-expanded:rotate-180"
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-1.5">
              <Link
                href={HEADER_CTA.href}
                className={cn(
                  'type-button hidden min-h-11 items-center rounded-control bg-saffron px-5 whitespace-nowrap text-plum transition-colors duration-300 hover:bg-cream sm:inline-flex lg:hidden xl:inline-flex',
                )}
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

          {/* Desktop mega menus: all rendered (crawlable), only the open one is interactive */}
          <div className="hidden lg:block" onKeyDown={onPanelKeyDown}>
            {MAIN_NAV.map((group) => (
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

      {/* Page dim behind an open mega menu */}
      <div
        aria-hidden
        onClick={() => setOpenId(null)}
        className={cn(
          'fixed inset-0 z-[var(--z-scrim)] hidden bg-plum/40 transition-opacity duration-500 lg:block',
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
