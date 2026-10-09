import { Media } from '@/components/ui/Media'
import { studioHome } from '@/content/home'
import { StudioIndex } from './StudioIndex'

/**
 * The Ubud studio: a wide photograph of a class with the heading set over
 * its lower edge, then the offerings as an index (StudioIndex).
 */
export function StudioHome() {
  return (
    <section aria-labelledby="studio-home-title" className="section-y overflow-hidden">
      <div className="container-x">
        <div className="relative aspect-[4/3] overflow-hidden rounded-frame md:aspect-[16/7]" data-image-reveal>
          <div data-parallax="0.1" className="absolute inset-x-0 -inset-y-[8%]">
            <Media asset={studioHome.image} fill sizes="(min-width: 1440px) 1360px, 100vw" className="object-cover object-[60%_62%]" />
          </div>
        </div>

        {/* The heading card overlaps the photograph's lower edge, like a caption pasted onto a print. */}
        <div className="relative z-10 -mt-14 ml-4 max-w-[38rem] rounded-frame bg-canvas px-6 pt-7 pb-2 md:-mt-24 md:ml-12 md:px-10 md:pt-9">
          <h2 id="studio-home-title" className="type-display-lg text-balance" data-text-reveal>
            {studioHome.heading}
          </h2>
          <p className="type-lead mt-5 text-pretty text-ink-soft" data-reveal>
            {studioHome.body}
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <StudioIndex items={studioHome.offerings} />
        </div>
      </div>
    </section>
  )
}
