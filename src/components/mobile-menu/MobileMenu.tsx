'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Plus, X } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { SmartLink } from '@/components/ui/SmartLink'
import { SocialLinks } from '@/components/ui/SocialIcons'
import { useFocusTrap } from '@/components/ui/useFocusTrap'
import { flattenNav, HEADER_CTA, MAIN_NAV, type NavLink } from '@/data/navigation'
import { SITE } from '@/data/site'
import { lockScroll, scrollToTop } from '@/lib/lenis'
import { isActivePath } from '@/lib/routes'
import { cn } from '@/lib/utils'

const EASE = [0.16, 1, 0.3, 1] as const

interface MobileMenuProps {
  open: boolean
  pathname: string
  onClose: () => void
}

/**
 * Full-screen navigation below the desktop breakpoint. Every folder of the
 * source menu is an accordion, so the whole hierarchy (including nested
 * Hybrid and En Español programs) stays one tap away.
 */
export function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  useFocusTrap(panelRef, open, onClose)

  const currentGroup = MAIN_NAV.find((g) => flattenNav(g.links).some((l) => isActivePath(pathname, l.href)))?.id ?? null
  const [expanded, setExpanded] = useState<string | null>(currentGroup)

  useEffect(() => {
    if (!open) return
    lockScroll(true)
    return () => lockScroll(false)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[var(--z-dialog)] flex flex-col overflow-y-auto overscroll-contain bg-plum text-cream lg:hidden"
          initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
          exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: reduce ? 0.15 : 0.65, ease: EASE }}
          data-lenis-prevent
        >
          <div className="container-x flex h-[var(--header-height)] shrink-0 items-center justify-between">
            <Link
              href="/"
              onClick={(e) => {
                onClose()
                if (pathname !== '/') return
                // Already home: close the menu, then return to the top once scrolling is unlocked.
                e.preventDefault()
                window.setTimeout(scrollToTop, 0)
              }}
              className="shrink-0 rounded-sm"
              aria-label="Radiantly Alive, home"
            >
              <Logo compact />
            </Link>
            <button type="button" onClick={onClose} className="-mr-2.5 grid size-11 place-items-center rounded-full hover:bg-cream/10">
              <X className="size-6" strokeWidth={1.5} aria-hidden />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-between gap-12 pt-4 pb-10">
            <ul className="border-t border-cream/12">
              {MAIN_NAV.map((group, i) => {
                const isOpen = expanded === group.id
                return (
                  <motion.li
                    key={group.id}
                    className="border-b border-cream/12"
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.15 + i * 0.05, duration: 0.55, ease: EASE }}
                  >
                    <h2>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`mobile-group-${group.id}`}
                        onClick={() => setExpanded(isOpen ? null : group.id)}
                        className={cn(
                          'type-display-sm flex w-full items-center justify-between gap-4 py-4 text-left',
                          currentGroup === group.id && 'text-saffron',
                        )}
                      >
                        {group.label}
                        <Plus
                          aria-hidden
                          strokeWidth={1.25}
                          className={cn('size-6 shrink-0 transition-transform duration-500', isOpen && 'rotate-45')}
                        />
                      </button>
                    </h2>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`mobile-group-${group.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-1 pb-6">
                            {group.links.map((link) => (
                              <MobileLink key={link.label} link={link} pathname={pathname} onNavigate={onClose} />
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                )
              })}
            </ul>

            <div className="space-y-8">
              <Link
                href={HEADER_CTA.href}
                onClick={onClose}
                className="type-button flex min-h-12 w-full items-center justify-center rounded-control bg-saffron px-6 text-plum transition-colors hover:bg-cream"
              >
                {HEADER_CTA.label}
              </Link>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6">
                <a href={`mailto:${SITE.email}`} className="type-meta text-mist hover:text-cream">
                  {SITE.email}
                </a>
                <SocialLinks className="-mr-3" />
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileLink({ link, pathname, onNavigate }: { link: NavLink; pathname: string; onNavigate: () => void }) {
  const active = isActivePath(pathname, link.href)
  return (
    <li lang={link.lang}>
      <SmartLink
        href={link.href}
        onClick={onNavigate}
        aria-current={active ? 'page' : undefined}
        className="type-h4 group flex min-h-11 items-center justify-between gap-3 py-1.5 text-cream/90 transition-colors hover:text-cream aria-[current=page]:text-saffron"
      >
        <span>
          {link.label}
          {link.description && <span className="type-meta mt-0.5 block font-normal text-mist">{link.description}</span>}
        </span>
        <ArrowRight aria-hidden strokeWidth={1.5} className="size-4 shrink-0 text-mist transition-transform group-hover:translate-x-1" />
      </SmartLink>
      {link.children && (
        <ul className="mb-2 ml-1 flex flex-wrap gap-2 border-l border-cream/15 py-1 pl-4">
          {link.children.map((child) => (
            <li key={child.href} lang={child.lang}>
              <SmartLink
                href={child.href}
                onClick={onNavigate}
                aria-current={isActivePath(pathname, child.href) ? 'page' : undefined}
                className="type-meta inline-flex min-h-10 items-center rounded-full border border-cream/20 px-4 font-medium text-cream/85 hover:border-cream hover:text-cream aria-[current=page]:border-saffron aria-[current=page]:text-saffron"
              >
                {child.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
