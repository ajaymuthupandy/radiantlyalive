import { Flourish } from "@/components/brand/Flourish";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { brandStory } from "@/data/studio";

/**
 * The vision, set like the opening spread of a printed booklet: an arched
 * photograph of practice on the left (the shala's own arch), the statement
 * and a drop-capped paragraph on the right, with a small second photograph
 * tucked under the text.
 */
export function BrandIntro() {
  return (
    <section
      id="vision"
      aria-labelledby="intro-title"
      className="section-y scroll-mt-[var(--header-height)] overflow-hidden"
    >
      <div className="container-x grid items-start gap-y-12 lg:grid-cols-12 lg:gap-x-12">
        <figure className="lg:col-span-5">
          <div
            className="shape-arch relative aspect-[4/5] overflow-hidden bg-sand"
            data-arch
          >
            <Media
              asset="introShalaPractice"
              fill
              sizes="(min-width: 1024px) 38vw, 92vw"
              className="object-cover object-[62%_50%]"
            />
          </div>
          <figcaption className="type-small mt-3 text-ink-soft">
            Practice in one of our five shalas, Ubud.
          </figcaption>
        </figure>

        <div className="lg:col-span-7 lg:pt-10">
          <Flourish className="-ml-1 text-crimson/70" />
          <h2
            id="intro-title"
            className="type-display-lg mt-6 max-w-[16ch] text-balance"
            data-text-reveal
          >
            {brandStory.vision}
          </h2>
          <p className="type-lead mt-7 max-w-[36rem] text-pretty" data-reveal>
            {brandStory.visionDetail}
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_13rem] md:items-start">
            <div>
              <p
                className="type-body max-w-[34rem] text-pretty text-ink-soft first-letter:float-left first-letter:mt-1.5 first-letter:mr-3 first-letter:font-display first-letter:text-[4.25rem] first-letter:leading-[0.78] first-letter:text-ink"
                data-reveal
              >
                {brandStory.rooted}
              </p>
              <div className="mt-7" data-reveal>
                <Button href="/our-teachers" variant="link">
                  Meet the teachers
                </Button>
              </div>
            </div>
            <figure className="hidden md:block" data-slide="right">
              <div className="relative aspect-[4/5] overflow-hidden rounded-frame bg-sand">
                <Media
                  asset="shalaJungle"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
              <figcaption className="type-small mt-2 text-ink-soft">
                The Jungle Shala
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
