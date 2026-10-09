import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Media } from '@/components/ui/Media'
import { studioHome } from '@/content/home'
import { pad } from '@/lib/utils'

/**
 * "Our Bali Studio — Your Yoga Home": a statement, a full-bleed photograph
 * and the six offerings from the source homepage as large image cards
 * (a swipeable rail on phones, an editorial grid from tablet up).
 */
export function StudioHome() {
  return (
    <section aria-labelledby="studio-home-title" className="section-y overflow-hidden">
      <div className="container-x">
        {/* Heading row: title left, supporting copy right behind a thin crimson rule */}
        <div className="grid gap-y-6 md:grid-cols-2 md:items-center md:gap-x-10 lg:gap-x-16">
          <div>
            <p className="type-eyebrow text-crimson" data-reveal>
              {studioHome.eyebrow}
            </p>
            <h2 id="studio-home-title" className="type-display-lg mt-4 text-balance md:mt-5" data-text-reveal>
              {studioHome.heading}
            </h2>
          </div>
          <div className="md:border-l md:border-crimson md:pl-8 lg:pl-12">
            <span aria-hidden className="mb-5 block h-px w-12 bg-crimson md:hidden" />
            <p className="type-display-sm max-w-[26ch] text-balance" data-reveal>
              {studioHome.subheading}
            </p>
            <p className="type-body mt-4 max-w-[60ch] text-pretty text-ink-soft" data-reveal data-reveal-delay="0.1">
              {studioHome.body}
            </p>
          </div>
        </div>

        <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-frame md:mt-10 md:aspect-[2/1] lg:aspect-[13/5]" data-image-reveal>
          <div data-parallax="0.12" className="absolute inset-x-0 -inset-y-[10%]">
            <Media asset={studioHome.image} fill sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover object-[60%_62%]" />
          </div>
        </div>
      </div>

      {/* Offerings: rail on phones, grid from 768px */}
      <ul
        aria-label="Explore our offerings"
        className="rail mt-4 flex gap-3 overflow-x-auto px-[var(--gutter)] pb-2 md:mx-auto md:mt-6 md:grid md:max-w-[var(--container-max)] md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0"
        data-stagger
      >
        {studioHome.offerings.map((item, i) => (
          <li key={item.href} className="w-[78%] shrink-0 xs:w-[62%] md:w-auto" data-stagger-item>
            <Link href={item.href} className="group relative block overflow-hidden rounded-frame bg-plum text-cream">
              <div className="relative aspect-[4/5]">
                <Media
                  asset={item.image}
                  fill
                  sizes="(min-width: 768px) 32vw, 78vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 lg:p-8">
                <span>
                  <span className="type-eyebrow block text-saffron">{pad(i + 1)}</span>
                  <span className="type-display-sm mt-2 block">{item.label}</span>
                </span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-cream/40 transition-colors duration-500 group-hover:border-cream group-hover:bg-cream group-hover:text-plum">
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.75} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
