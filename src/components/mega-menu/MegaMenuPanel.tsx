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
 * One header group as a short panel: its destinations (with a one-line
 * description each) and, where useful, one featured item. Nothing else.
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
      <div
        className="mega-panel-inner max-h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain border-t border-cream/10 bg-plum shadow-[0_24px_40px_-28px_rgb(28_8_16/0.55)]"
        data-lenis-prevent
      >
        <div className="container-x grid grid-cols-12 gap-x-10 py-10">
          <ul className={cn('mega-stagger col-span-8 self-start', twoColumns && 'grid grid-cols-2 gap-x-10')}>
            {group.links.map((link) => {
              const active = isActivePath(pathname, link.href)
              return (
                <li key={link.label} lang={link.lang} className="border-b border-cream/10 py-4">
                  <SmartLink
                    href={link.href}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className="group/link block rounded-sm"
                  >
                    <span className="type-h3 block underline decoration-transparent underline-offset-4 transition-colors group-hover/link:decoration-cream/60 group-aria-[current=page]/link:decoration-saffron">
                      {link.label}
                    </span>
                    {link.description && <span className="type-small mt-1 block text-mist">{link.description}</span>}
                  </SmartLink>
                  {link.children && (
                    <ul className="type-small mt-2 flex flex-wrap gap-x-5" aria-label={`${link.label} options`}>
                      {link.children.map((child) => (
                        <li key={child.href} lang={child.lang}>
                          <SmartLink
                            href={child.href}
                            onClick={onNavigate}
                            aria-current={isActivePath(pathname, child.href) ? 'page' : undefined}
                            className="inline-flex min-h-9 items-center text-mist underline decoration-mist/30 underline-offset-4 hover:text-cream hover:decoration-cream"
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

          {group.feature && (
            <SmartLink
              href={group.feature.cta.href}
              onClick={onNavigate}
              className="mega-stagger group/feature col-span-4 col-start-9 block self-start"
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-frame bg-shade">
                <Media asset={group.feature.image} fill alt="" sizes="(min-width: 1440px) 420px, 30vw" className="object-cover" />
              </span>
              <span className="type-display-sm mt-4 block text-balance">{group.feature.title}</span>
              <span className="type-small mt-2 inline-block text-mist underline decoration-mist/40 underline-offset-4 group-hover/feature:text-cream group-hover/feature:decoration-cream">
                {group.feature.cta.label}
              </span>
            </SmartLink>
          )}
        </div>
      </div>
    </div>
  )
}
