import { Media } from '@/components/ui/Media'
import { Button } from '@/components/ui/Button'
import { brandStory } from '@/data/studio'

/**
 * The vision statement on the left; a full-height practice photograph
 * bleeds off the right edge behind a soft convex curve.
 */
export function BrandIntro() {
  return (
    <section
      id="vision"
      aria-labelledby="intro-title"
      className="relative overflow-hidden scroll-mt-[var(--header-height)] lg:flex lg:min-h-[min(88vh,48rem)] lg:items-center"
    >
      <div className="container-x relative z-10 pt-[var(--section-space)] pb-10 md:pb-14 lg:py-[var(--section-space)]">
        <div className="lg:w-[50%] lg:pr-8">
          <h2 id="intro-title" className="type-display-lg max-w-[14ch] text-balance text-ink" data-text-reveal>
            {brandStory.vision}
          </h2>
          <p className="type-lead mt-6 max-w-[34rem] text-pretty text-ink" data-reveal>
            {brandStory.visionDetail}
          </p>
          <p className="type-body mt-5 max-w-[34rem] text-pretty text-ink-soft" data-reveal>
            {brandStory.rooted}
          </p>
          <div className="mt-8" data-reveal>
            <Button href="/our-teachers" variant="link">
              Meet the teachers
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile: the photo follows the copy, aligned to the gutters. Desktop: it fills the right half, edge to edge, behind a curve. */}
      <div className="relative mx-[var(--gutter)] aspect-[4/3] overflow-hidden rounded-frame md:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:aspect-auto lg:w-[52%] lg:rounded-none lg:[clip-path:ellipse(130%_120%_at_130%_45%)]">
        <div className="absolute inset-0 overflow-hidden bg-sand" data-image-reveal>
          <Media
            asset="introShalaPractice"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-[60%_50%]"
          />
        </div>
      </div>
    </section>
  )
}
