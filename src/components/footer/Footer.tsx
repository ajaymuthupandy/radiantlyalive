import Link from 'next/link'
import { Logo } from '@/components/brand/Logo'
import { SmartLink } from '@/components/ui/SmartLink'
import { SocialLinks } from '@/components/ui/SocialIcons'
import { FOOTER_NAV, LEGAL_NAV, MAIN_NAV } from '@/data/navigation'
import { SITE } from '@/data/site'
import { NewsletterForm } from './NewsletterForm'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-dark bg-plum text-cream">
      <div className="container-x pt-[var(--section-space-tight)] pb-10">
        {/* Signature line */}
        <div className="grid gap-12 border-b border-cream/15 pb-14 md:pb-16 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <Link href="/" aria-label="Radiantly Alive, home" className="inline-block rounded-sm text-cream">
              <Logo />
            </Link>
            <p className="type-display-md mt-8 max-w-[18ch] text-balance">
              Come for Yoga <em>Stay for Family</em>
            </p>
          </div>
          <div className="flex items-end lg:col-span-6 lg:col-start-7">
            <NewsletterForm />
          </div>
        </div>

        {/* Navigation + contact */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-14 md:py-16 lg:grid-cols-12 lg:gap-x-10">
          <address className="col-span-2 not-italic lg:col-span-6">
            <p className="type-eyebrow text-saffron">Let’s connect</p>
            <a href={`mailto:${SITE.email}`} className="type-display-sm mt-5 inline-block transition-colors hover:text-saffron">
              {SITE.email}
            </a>
            <p className="type-small mt-4 text-mist">
              {SITE.legalName}
              <br />
              {SITE.address.street}, {SITE.address.locality}, {SITE.address.region}
            </p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-meta mt-3 inline-flex min-h-11 items-center text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-saffron"
            >
              Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <SocialLinks className="mt-4 -ml-3" />
          </address>

          {FOOTER_NAV.map((group) => (
            <nav key={group.title} aria-label={group.title} className="lg:col-span-2 lg:first-of-type:col-start-7">
              <p className="type-eyebrow text-saffron">{group.title}</p>
              <ul className="mt-5 space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <SmartLink href={link.href} className="type-small inline-flex min-h-10 items-center text-cream/85 transition-colors hover:text-saffron">
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <nav aria-label="RA Movement" className="lg:col-span-2">
            <p className="type-eyebrow text-saffron">RA Movement</p>
            <ul className="mt-5 space-y-1">
              {MAIN_NAV.find((g) => g.id === 'movement')!.links.map((link) => (
                <li key={link.href}>
                  <SmartLink href={link.href} className="type-small inline-flex min-h-10 items-center text-cream/85 transition-colors hover:text-saffron">
                    {link.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4 border-t border-cream/15 pt-8 text-mist sm:flex-row sm:items-center sm:justify-between">
          <p className="type-meta">
            © {year} {SITE.legalName}. Yoga Alliance RYS-200 &amp; RYS-500.
          </p>
          <ul className="type-meta flex flex-wrap gap-x-6 gap-y-1">
            {LEGAL_NAV.map((link) => (
              <li key={link.href}>
                <SmartLink href={link.href} className="inline-flex min-h-10 items-center hover:text-cream">
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
