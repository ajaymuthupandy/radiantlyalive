import { Flourish } from '@/components/brand/Flourish'
import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { Media } from '@/components/ui/Media'
import { reviews } from '@/content/home'
import { testimonials } from '@/data/testimonials'

/**
 * Graduate words, verbatim from the training pages. One line set large and
 * centred, as a letter would be quoted, then two longer ones side by side and
 * the review platforms linked from the source homepage.
 */
export function ReviewsSection() {
  const featured = testimonials.find((t) => t.id === 'julia-rossina') ?? testimonials[0]
  const others = testimonials.filter((t) => t.id !== featured.id).slice(0, 2)

  return (
    <section aria-labelledby="reviews-title" className="section-y bg-sand/50">
      <div className="container-x">
        <figure className="mx-auto max-w-[52rem] text-center">
          <Flourish className="mx-auto text-crimson/70" />
          <h2 id="reviews-title" className="type-small mt-5 font-semibold text-ink-soft" data-reveal>
            {reviews.heading}
          </h2>
          <blockquote className="mt-5">
            <p className="type-display-lg text-balance" data-text-reveal>
              “{featured.quote}”
            </p>
          </blockquote>
          <figcaption className="type-small mt-6 text-ink-soft" data-reveal>
            <span className="font-semibold text-ink">{featured.name}</span> · {featured.context}
          </figcaption>
        </figure>

        <ul className="mx-auto mt-14 grid max-w-[64rem] gap-12 md:grid-cols-2 md:gap-x-16" data-stagger>
          {others.map((t) => (
            <li key={t.id} data-stagger-item>
              <TestimonialCard testimonial={t} />
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex items-center justify-center gap-4" data-reveal>
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
    </section>
  )
}
