import { Media } from '@/components/ui/Media'
import { Button } from '@/components/ui/Button'
import { VideoModal } from '@/components/ui/VideoModal'
import { brandStory } from '@/data/studio'
import { HERO_VIDEO, INTEGRATIONS } from '@/data/site'

/**
 * 01: the vision statement on the left; a full-height practice photograph
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
          <p className="type-eyebrow text-crimson" data-reveal>
            <span>Radiantly Alive · Ubud</span>
          </p>
          <h2 id="intro-title" className="type-display-lg mt-5 max-w-[14ch] text-balance text-ink" data-text-reveal>
            {brandStory.vision}
          </h2>
          <p className="type-lead measure-lead mt-6 max-w-[34rem] text-pretty text-ink-soft" data-reveal>
            {brandStory.visionDetail}
          </p>
          <blockquote className="mt-8 border-l-2 border-crimson/60 pl-5 md:mt-10 md:pl-6" data-reveal>
            <p className="type-display-sm max-w-[28ch] text-balance text-ink">{brandStory.belonging}</p>
          </blockquote>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 md:mt-12" data-reveal>
            <VideoModal
              videoId={INTEGRATIONS.manifestoVideoId}
              title={HERO_VIDEO.title}
              label="Watch our Manifesto Video"
              className="text-ink"
            />
            <span aria-hidden className="hidden h-10 w-px bg-ink/25 md:block" />
            <Button href="/our-teachers" variant="link" className="hidden md:inline-flex">
              Meet the teachers
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile: the photo follows the copy. Desktop: it fills the right half, edge to edge. */}
      <div className="relative ml-[var(--gutter)] aspect-[4/3] [clip-path:ellipse(130%_120%_at_130%_45%)] md:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:ml-0 lg:aspect-auto lg:w-[52%]">
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
