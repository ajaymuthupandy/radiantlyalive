import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { SmartLink } from '@/components/ui/SmartLink'
import { SocialLinks } from '@/components/ui/SocialIcons'
import { FOOTER_NAV, LEGAL_NAV, MAIN_NAV } from '@/data/navigation'
import { SITE } from '@/data/site'
import { NewsletterForm } from './NewsletterForm'

const COLUMNS = [...FOOTER_NAV, { title: 'RA Movement', links: MAIN_NAV.find((g) => g.id === 'movement')?.links ?? [] }]

/**
 * Footer on one 12-column grid: every row starts its right-hand content on
 * column 5, so the link columns, the newsletter and the legal links share
 * the same vertical lines.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-dark bg-plum text-cream">
      <div className="container-x">
        {/* Brand + navigation */}
        <div className="grid gap-y-10 py-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Radiantly Alive, home" className="inline-block rounded-sm text-cream">
              <Logo />
            </Link>
            <p className="type-small mt-5 max-w-[30ch] text-mist">
              Daily classes and teacher trainings on {SITE.address.street}, {SITE.address.locality}, since {SITE.foundingYear}.
            </p>
            <SocialLinks className="mt-4 -ml-3" />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:col-span-8 lg:gap-x-10">
            {COLUMNS.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <p className="type-label text-mist">{group.title}</p>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <SmartLink
                        href={link.href}
                        className="type-small text-cream/85 underline decoration-transparent underline-offset-4 transition-colors hover:text-cream hover:decoration-cream/60"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Contact + newsletter */}
        <div className="grid gap-y-10 border-t border-cream/15 py-10 lg:grid-cols-12 lg:gap-x-10">
          <address className="not-italic lg:col-span-4">
            <p className="type-label text-mist">Visit or write</p>
            <a
              href={`mailto:${SITE.email}`}
              className="type-h3 mt-4 block w-fit underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream"
            >
              {SITE.email}
            </a>
            <p className="type-small mt-2 text-mist">
              {SITE.address.street}, {SITE.address.locality}, {SITE.address.region} ·{' '}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
              >
                Map<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </address>
          <div className="lg:col-span-8">
            <NewsletterForm />
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3 border-t border-cream/15 py-6 text-mist sm:flex-row sm:items-center sm:justify-between">
          <p className="type-small">
            © {year} {SITE.legalName} · Yoga Alliance RYS-200 &amp; RYS-500
          </p>
          <ul className="type-small flex flex-wrap gap-x-6 gap-y-1">
            {LEGAL_NAV.map((link) => (
              <li key={link.href}>
                <SmartLink href={link.href} className="hover:text-cream">
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
