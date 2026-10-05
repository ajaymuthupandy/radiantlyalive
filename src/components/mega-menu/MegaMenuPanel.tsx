import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Media } from '@/components/ui/Media'
import { SmartLink } from '@/components/ui/SmartLink'
import type { NavGroup } from '@/data/navigation'
import { isActivePath } from '@/lib/routes'
import { cn } from '@/lib/utils'

interface MegaMenuPanelProps {
  group: NavGroup
  open: boolean
  pathname: string
  onNavigate: () => void
}

/**
 * One folder of the source navigation as an editorial panel:
 * intro (left) · every link with its nested children (centre) · feature (right).
 */
export function MegaMenuPanel({ group, open, pathname, onNavigate }: MegaMenuPanelProps) {
  const twoColumns = group.links.length > 3

  return (
    <div
      id={`mega-${group.id}`}
      role="region"
      aria-label={group.label}
      data-state={open ? 'open' : 'closed'}
      inert={!open}
      className="mega-panel absolute inset-x-0 top-full text-cream"
    >
      <div className="mega-panel-inner max-h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain border-t border-cream/10 bg-plum shadow-[0_32px_60px_-30px_rgb(58_13_31/0.6)]" data-lenis-prevent>
        <div className="container-x grid grid-cols-12 gap-x-10 py-12 xl:gap-x-14">
          {/* Intro */}
          <div className="mega-stagger col-span-3 flex flex-col">
            <p className="type-eyebrow text-balance text-saffron">{group.intro.eyebrow}</p>
            <p className="type-display-sm mt-5 text-balance">
              {group.intro.title}
            </p>
            <p className="type-small mt-4 text-mist">{group.intro.text}</p>
          </div>

          {/* Links */}
          <ul className={cn('mega-stagger col-span-5 self-start', twoColumns && 'grid grid-cols-2 gap-x-8')}>
            {group.links.map((link) => {
              const active = isActivePath(pathname, link.href)
              return (
                <li
                  key={link.label}
                  lang={link.lang}
                  className={cn('border-b border-cream/12 py-4 first:pt-0', twoColumns && '[&:nth-child(2)]:pt-0')}
                >
                  <SmartLink
                    href={link.href}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className="group/link flex items-start justify-between gap-3 rounded-sm"
                  >
                    <span>
                      <span className="type-h4 block transition-colors group-hover/link:text-saffron group-aria-[current=page]/link:text-saffron">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="type-meta mt-1 block text-mist">{link.description}</span>
                      )}
                    </span>
                    <ArrowRight
                      aria-hidden
                      strokeWidth={1.5}
                      className="mt-1 size-4 shrink-0 -translate-x-1 text-saffron opacity-0 transition-all duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100 group-focus-visible/link:opacity-100"
                    />
                  </SmartLink>
                  {link.children && (
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${link.label} options`}>
                      {link.children.map((child) => (
                        <li key={child.href} lang={child.lang}>
                          <SmartLink
                            href={child.href}
                            onClick={onNavigate}
                            aria-current={isActivePath(pathname, child.href) ? 'page' : undefined}
                            className="type-meta inline-flex min-h-8 items-center rounded-full border border-cream/20 px-3 font-medium text-mist transition-colors hover:border-saffron hover:bg-saffron hover:text-plum aria-[current=page]:border-saffron aria-[current=page]:text-saffron"
                          >
                            {child.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Feature */}
          <SmartLink
            href={group.feature.cta.href}
            onClick={onNavigate}
            className="mega-stagger group/feature relative col-span-4 block aspect-[5/4] self-start overflow-hidden rounded-frame bg-wine text-cream"
          >
            <Media
              asset={group.feature.image}
              fill
              alt=""
              sizes="(min-width: 1440px) 420px, 30vw"
              className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover/feature:scale-105"
            />
            <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum/95 via-plum/50 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 p-6">
              <span className="type-display-sm block">{group.feature.title}</span>
              <span className="type-small mt-2 block max-w-[34ch] text-cream/85">{group.feature.text}</span>
              <span className="type-eyebrow mt-4 inline-flex items-center gap-2 text-saffron">
                {group.feature.cta.label}
                <ArrowUpRight aria-hidden className="size-3.5 transition-transform group-hover/feature:translate-x-0.5 group-hover/feature:-translate-y-0.5" />
              </span>
            </span>
          </SmartLink>
        </div>
      </div>
    </div>
  )
}
