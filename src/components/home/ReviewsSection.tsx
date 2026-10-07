import { TestimonialCard } from '@/components/cards/TestimonialCard'
import { Media } from '@/components/ui/Media'
import { reviews } from '@/content/home'
import { testimonials } from '@/data/testimonials'

/**
 * Graduate words (verbatim from the training pages) on a pinned horizontal
 * track (src/animations/horizontalScroll.ts). On desktop the whole section
 * pins; below it the header scrolls normally and only the card
 * rail pins and slides. With reduced motion it is a plain list. Closes with
 * the review platforms linked from the source homepage.
 */
export function ReviewsSection() {
  const items = testimonials.slice(0, 6)

  return (
    <section
      aria-labelledby="reviews-title"
      className="overflow-hidden bg-canvas motion-safe:lg:flex motion-safe:lg:h-svh motion-safe:lg:items-center"
      data-horizontal
    >
      <div
        className="container-x section-y flex flex-col gap-12 motion-safe:max-lg:gap-0 motion-safe:max-lg:pb-0 motion-safe:lg:w-max motion-safe:lg:max-w-none motion-safe:lg:flex-row motion-safe:lg:items-center motion-safe:lg:gap-20 motion-safe:lg:py-0"
        data-horizontal-track
      >
        <header className="shrink-0 motion-safe:lg:w-[28rem]">
          <p className="type-eyebrow text-crimson">{reviews.eyebrow}</p>
          <h2 id="reviews-title" className="type-display-md mt-5 text-balance">
            “I came to Bali wanting to teach. <em>I left understanding myself.”</em>
          </h2>
          <p className="type-meta mt-6 text-ink-soft">— Julia Rossina · 200H Bali Immersion, August 2023 · Now teaching in Rome</p>
          <p className="type-eyebrow mt-10 text-crimson">900+ graduates · 80+ countries · 4.9/5 Yoga Alliance</p>
          <ul className="mt-6 flex items-center gap-3">
            {reviews.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid size-16 place-items-center overflow-hidden rounded-full border border-ink/10 bg-paper p-1.5 transition-transform hover:-translate-y-0.5"
                >
                  <Media asset={link.image} alt="" sizes="64px" className="size-full rounded-full object-contain" />
                  <span className="sr-only">{link.label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </header>

        <div
          className="lg:contents motion-safe:max-lg:flex motion-safe:max-lg:h-svh motion-safe:max-lg:items-center"
          data-horizontal-mobile
        >
          <ul
            className="grid gap-10 md:grid-cols-2 md:gap-x-12 motion-safe:max-lg:flex motion-safe:max-lg:w-max motion-safe:max-lg:items-start motion-safe:max-lg:gap-x-6! motion-safe:lg:flex motion-safe:lg:gap-16"
            data-horizontal-mobile-track
          >
            {items
              .filter((t) => t.id !== 'julia-rossina')
              .map((t) => (
                <li
                  key={t.id}
                  className="motion-safe:max-lg:w-[min(78vw,26rem)] motion-safe:max-lg:shrink-0 motion-safe:lg:w-[min(32rem,36vw)] motion-safe:lg:shrink-0 motion-safe:lg:odd:-translate-y-10 motion-safe:lg:even:translate-y-10"
                >
                  <TestimonialCard testimonial={t} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
