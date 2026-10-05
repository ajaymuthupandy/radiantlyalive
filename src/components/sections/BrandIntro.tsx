import { Media } from '@/components/ui/Media'
import { Button } from '@/components/ui/Button'
import { VideoModal } from '@/components/ui/VideoModal'
import { brandStory } from '@/data/studio'
import { HERO_VIDEO, INTEGRATIONS } from '@/data/site'

/** 01: the vision statement, then the "more than a studio" story beside an arch image. */
export function BrandIntro() {
  return (
    <section id="vision" aria-labelledby="intro-title" className="section-y scroll-mt-[var(--header-height)] overflow-hidden">
      <div className="container-x">
        <p className="type-eyebrow text-crimson" data-reveal>
          <span>Radiantly Alive · Ubud</span>
        </p>
        <h2 id="intro-title" className="type-display-lg mt-5 max-w-[22ch] text-balance" data-text-reveal>
          Our Vision is to empower people through yoga
        </h2>
        <p className="type-lead measure-lead mt-6 text-pretty text-ink-soft" data-reveal>
          Building <em className="font-medium text-ink not-italic">confidence, strength, and clarity</em> - and to grow a global
          community of committed, inspired individuals.
        </p>

        <div className="mt-16 grid gap-y-12 md:mt-20 md:grid-cols-12 md:gap-x-10 lg:gap-x-16">
          <div className="relative md:col-span-6 lg:col-span-5">
            <div className="shape-arch relative aspect-[4/5] overflow-hidden bg-sand" data-image-reveal>
              <Media
                asset="introShalaPractice"
                fill
                sizes="(min-width: 1024px) 38vw, (min-width: 768px) 48vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
            <p className="type-meta mt-4 text-ink-soft" data-reveal>
              The Jungle Shala, morning practice.
            </p>
          </div>

          <div className="flex flex-col justify-end md:col-span-6 lg:col-span-6 lg:col-start-7">
            <h3 className="type-display-sm text-ink" data-reveal>
              We are more than a Studio.
            </h3>
            <p className="type-lead measure-lead mt-6 text-pretty text-ink-soft" data-reveal>
              {brandStory.moreThanStudio}
            </p>
            <blockquote className="mt-10 border-l-2 border-crimson/50 pl-6" data-reveal>
              <p className="type-display-sm max-w-[26ch] text-balance text-ink">
                {brandStory.belonging}
              </p>
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2" data-reveal>
              <VideoModal videoId={INTEGRATIONS.manifestoVideoId} title={HERO_VIDEO.title} label="Watch our Manifesto Video" />
              <Button href="/our-teachers" variant="link">
                Meet the teachers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
