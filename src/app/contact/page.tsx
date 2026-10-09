import { Suspense } from 'react'
import { PageHero } from '@/components/hero/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { JsonLd } from '@/components/ui/JsonLd'
import { SocialLinks } from '@/components/ui/SocialIcons'
import { SITE } from '@/lib/constants'
import { breadcrumbJsonLd, buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact Radiantly Alive Yoga Studio, Jl. Jembawan No. 3, Ubud, Bali: info@radiantlyalive.com. Questions about classes, teacher trainings, retreats, healings or shala rental.',
  path: '/contact',
  image: 'ceremonyMandala',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        id="contact-hero"
        eyebrow="Radiantly Alive Yoga Studio · Ubud, Bali"
        title={
          <>
            Let’s <em>Connect</em>
          </>
        }
        lead="info@radiantlyalive.com · Jl. Jembawan No. 3, Ubud, Bali"
        image="ceremonyMandala"
      />

      <section aria-labelledby="contact-form-title" className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 id="contact-form-title" className="type-display-lg" data-text-reveal>
              Write to <em>us.</em>
            </h2>
            <div className="mt-12" data-reveal>
              <Suspense fallback={<div className="h-[32rem]" aria-hidden />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>

          <aside aria-label="Studio details" className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-10 border-t hairline pt-8" data-reveal>
              <div>
                <h3 className="type-eyebrow text-crimson">Email</h3>
                <a href={`mailto:${SITE.email}`} className="type-display-sm mt-3 inline-block transition-colors hover:text-crimson">
                  {SITE.email}
                </a>
              </div>
              <div>
                <h3 className="type-eyebrow text-crimson">Studio</h3>
                <address className="mt-3 not-italic leading-relaxed text-ink-soft">
                  {SITE.legalName}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.locality}, {SITE.address.region}, {SITE.address.countryName}
                </address>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-nav mt-3 inline-flex min-h-11 items-center underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                >
                  Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <div>
                <h3 className="type-eyebrow text-crimson">Visiting</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Book classes at reception or online. Please arrive 15 minutes before class to settle onto your mat.
                </p>
              </div>
              <div>
                <h3 className="type-eyebrow text-crimson">Follow along</h3>
                <SocialLinks tone="light" className="mt-2 -ml-3" />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
    </>
  )
}
