import Link from 'next/link'
import { Flourish } from '@/components/brand/Flourish'
import { LogoMark } from '@/components/brand/Logo'
import { SmartLink } from '@/components/ui/SmartLink'
import { SocialLinks } from '@/components/ui/SocialIcons'
import { FOOTER_NAV, LEGAL_NAV, MAIN_NAV } from '@/data/navigation'
import { SITE } from '@/data/site'
import { NewsletterForm } from './NewsletterForm'

const COLUMNS = [...FOOTER_NAV, { title: 'RA Movement', links: MAIN_NAV.find((g) => g.id === 'movement')?.links ?? [] }]

/**
 * The footer reads like the close of a letter: a centred invitation to the
 * newsletter, then four equal columns (where to find us and three link
 * lists), then the emblem as a signature above the small print.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="surface-dark bg-plum text-cream">
      <div className="container-x">
        {/* Invitation */}
        <div className="mx-auto max-w-[44rem] py-14 text-center md:py-16">
          <Flourish className="mx-auto text-cream/50" />
          <p className="type-display-lg mt-5">Letters from Ubud</p>
          <p className="type-lead mx-auto mt-4 max-w-[32rem] text-mist">
            Class news, training dates and the occasional story from the studio, once a month.
          </p>
          <div className="mx-auto mt-8 max-w-[30rem] text-left">
            <NewsletterForm />
          </div>
        </div>

        {/* Four equal columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-cream/15 py-12 lg:grid-cols-4 lg:gap-x-12">
          <address className="col-span-2 not-italic lg:col-span-1">
            <p className="type-label text-mist">Find us</p>
            <p className="type-body mt-4 text-cream/90">
              {SITE.legalName}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.locality}, {SITE.address.region}
            </p>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              <a
                href={`mailto:${SITE.email}`}
                className="type-body text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="type-body text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
              >
                Map<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </address>

          {COLUMNS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="type-label text-mist">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <SmartLink
                      href={link.href}
                      className="type-body text-cream/85 underline decoration-transparent underline-offset-4 transition-colors hover:text-cream hover:decoration-cream/60"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Signature + small print */}
        <div className="flex flex-col items-center gap-5 border-t border-cream/15 pt-10 pb-8 text-center">
          <Link href="/" aria-label="Radiantly Alive, home" className="rounded-full text-cream/80 transition-colors hover:text-cream">
            <LogoMark className="size-11" />
          </Link>
          <SocialLinks />
          <div className="type-small flex flex-col items-center gap-2 text-mist md:flex-row md:gap-6">
            <p>
              © {year} {SITE.legalName} · Yoga Alliance RYS-200 &amp; RYS-500
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1">
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
      </div>
    </footer>
  )
}
