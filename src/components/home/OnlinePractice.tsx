import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { online } from '@/content/home'

/** The online studio, on the site's one dark surface. */
export function OnlinePractice() {
  const [tall, top, bottom] = online.images

  return (
    <section aria-labelledby="online-title" className="section-y surface-dark overflow-hidden bg-plum text-cream">
      <div className="container-x grid gap-y-10 lg:grid-cols-12 lg:items-center lg:gap-x-10">
        <div className="lg:col-span-5">
          <h2 id="online-title" className="type-display-lg text-balance" data-text-reveal>
            {online.heading}
          </h2>
          <p className="type-lead mt-6 max-w-[34rem] text-pretty text-mist" data-reveal>
            {online.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" data-reveal>
            <Button href={online.cta.href} tone="dark">
              {online.cta.label}
            </Button>
            <Button href={online.secondary.href} variant="link" tone="dark">
              {online.secondary.label}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 md:gap-4 lg:col-span-7 lg:col-start-6" data-slide="right">
          <div className="shape-arch relative col-span-3 row-span-2 aspect-[3/4] overflow-hidden" data-arch>
            <Media asset={tall} fill frame={3 / 4} sizes="(min-width: 1024px) 34vw, 60vw" className="object-cover" />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-frame" data-reveal>
            <Media asset={top} fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-frame" data-reveal data-reveal-delay="0.15">
            <Media asset={bottom} fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
