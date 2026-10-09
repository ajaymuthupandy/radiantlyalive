import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { Media } from '@/components/ui/Media'
import { reviews } from '@/content/home'
import { testimonials } from '@/data/testimonials'

/**
 * Graduate words, verbatim from the training pages: one featured quote set
 * large, two more beside it, then the review platforms linked from the source
 * homepage. A static layout; the page scrolls the way the visitor expects.
 */
export function ReviewsSection() {
  const featured = testimonials.find((t) => t.id === 'julia-rossina') ?? testimonials[0]
  const others = testimonials.filter((t) => t.id !== featured.id).slice(0, 2)

  return (
    <section aria-labelledby="reviews-title" className="pb-[var(--section-space)]">
      <div className="container-x border-t hairline pt-[var(--section-space-tight)]">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
          <h2 id="reviews-title" className="type-display-lg text-balance" data-text-reveal>
            {reviews.heading}
          </h2>
          <ul className="flex items-center gap-3" data-reveal>
            {reviews.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-14 place-items-center overflow-hidden rounded-full border border-ink/10 bg-cream p-1.5 transition-opacity hover:opacity-80"
                >
                  <Media asset={link.image} alt="" sizes="56px" className="size-full rounded-full object-contain" />
                  <span className="sr-only">{link.label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-12">
          <figure className="lg:col-span-5" data-slide="left">
            <span aria-hidden className="block font-display text-7xl leading-[0.6] text-crimson">
              “
            </span>
            <blockquote className="mt-4">
              <p className="type-display-sm text-balance">{featured.quote}</p>
            </blockquote>
            <figcaption className="mt-8 border-t hairline pt-5">
              <p className="type-small font-semibold text-ink">{featured.name}</p>
              <p className="type-small mt-1 text-ink-soft">{featured.context}</p>
            </figcaption>
          </figure>

          <ul className="grid gap-12 md:grid-cols-2 md:gap-x-10 lg:col-span-7" data-stagger>
            {others.map((t) => (
              <li key={t.id} data-stagger-item>
                <TestimonialCard testimonial={t} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
