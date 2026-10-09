import { Media } from '@/components/ui/Media'
import { Button } from '@/components/ui/Button'
import { brandStory } from '@/data/studio'

/**
 * The vision statement beside a two-photograph composition: a class in the
 * shala, overlapped by a smaller frame of the Jungle Shala, as a printed
 * spread would set them. Each photograph enters from its own side.
 */
export function BrandIntro() {
  return (
    <section id="vision" aria-labelledby="intro-title" className="section-y scroll-mt-[var(--header-height)] overflow-hidden">
      <div className="container-x grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-5">
          <h2 id="intro-title" className="type-display-lg max-w-[14ch] text-balance" data-text-reveal>
            {brandStory.vision}
          </h2>
          <p className="type-lead mt-6 max-w-[34rem] text-pretty" data-reveal>
            {brandStory.visionDetail}
          </p>
          <p className="type-body mt-4 max-w-[34rem] text-pretty text-ink-soft" data-reveal data-reveal-delay="0.1">
            {brandStory.rooted}
          </p>
          <div className="mt-7" data-reveal data-reveal-delay="0.2">
            <Button href="/our-teachers" variant="link">
              Meet the teachers
            </Button>
          </div>
        </div>

        <div className="relative pb-14 lg:col-span-7 lg:pl-8">
          <div className="relative ml-auto aspect-[5/4] w-[88%] overflow-hidden rounded-frame bg-sand" data-image-reveal>
            <div data-parallax="0.08" className="absolute inset-x-0 -inset-y-[6%]">
              <Media asset="introShalaPractice" fill sizes="(min-width: 1024px) 50vw, 90vw" className="object-cover object-[60%_50%]" />
            </div>
          </div>
          <figure className="absolute bottom-0 left-0 w-[42%] lg:left-8" data-slide="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-frame border-[6px] border-canvas bg-sand">
              <Media asset="shalaJungle" fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
            </div>
            <figcaption className="type-small mt-2 text-ink-soft">The Jungle Shala</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
