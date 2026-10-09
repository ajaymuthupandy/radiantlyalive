import Link from 'next/link'
import { Media } from '@/components/ui/Media'
import { studioHome } from '@/content/home'

/**
 * The Ubud studio: a heading, one paragraph, a full-bleed photograph and the
 * six offerings as image cards (a swipeable rail on phones, a grid from
 * tablet up). The cards are links; the label says where they go.
 */
export function StudioHome() {
  return (
    <section aria-labelledby="studio-home-title" className="section-y overflow-hidden">
      <div className="container-x">
        <div className="grid gap-y-5 md:grid-cols-2 md:items-end md:gap-x-10 lg:gap-x-16">
          <h2 id="studio-home-title" className="type-display-lg text-balance" data-text-reveal>
            {studioHome.heading}
          </h2>
          <p className="type-lead max-w-[38rem] text-pretty text-ink-soft" data-reveal>
            {studioHome.body}
          </p>
        </div>

        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-frame md:mt-12 md:aspect-[2/1] lg:aspect-[13/5]" data-image-reveal>
          <div data-parallax="0.12" className="absolute inset-x-0 -inset-y-[10%]">
            <Media asset={studioHome.image} fill sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover object-[60%_62%]" />
          </div>
        </div>
      </div>

      {/* Offerings: rail on phones, grid from 768px */}
      <ul
        aria-label="At the studio"
        className="rail mt-4 flex gap-3 overflow-x-auto px-[var(--gutter)] pb-2 md:mx-auto md:mt-6 md:grid md:max-w-[var(--container-max)] md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
        data-stagger
      >
        {studioHome.offerings.map((item) => (
          <li key={item.href} className="w-[78%] shrink-0 xs:w-[62%] md:w-auto" data-stagger-item>
            <Link href={item.href} className="group block">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-frame bg-sand">
                <Media
                  asset={item.image}
                  fill
                  sizes="(min-width: 768px) 32vw, 78vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </span>
              <span className="type-display-sm mt-4 block underline decoration-transparent underline-offset-[0.2em] transition-colors group-hover:decoration-ink/40">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
