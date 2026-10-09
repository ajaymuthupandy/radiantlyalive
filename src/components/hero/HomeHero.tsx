import { existsSync } from 'node:fs'
import path from 'node:path'
import { Button } from '@/components/ui/Button'
import { hero } from '@/content/home'
import { Media } from '@/components/ui/Media'
import { VideoModal } from '@/components/ui/VideoModal'
import { media } from '@/data/media'
import { HERO_VIDEO, INTEGRATIONS } from '@/data/site'
import { HeroMotion } from './HeroMotion'
import { HeroVideo } from './HeroVideo'

const HERO_ID = 'home-hero'

/** Encoded hero files present in /public, checked when the page is built. */
function localSources(files: readonly string[]) {
  return files
    .filter((src) => existsSync(path.join(process.cwd(), 'public', src)))
    .map((src) => ({ src, type: src.endsWith('.webm') ? 'video/webm' : 'video/mp4' }))
}

/**
 * Homepage hero: Radiantly Alive's film over its poster photograph, the
 * positioning line, one call to action and the film itself. Nothing else.
 */
export function HomeHero() {
  const poster = media[HERO_VIDEO.poster]

  return (
    <section
      id={HERO_ID}
      aria-labelledby="home-hero-title"
      className="relative isolate flex h-svh min-h-[42rem] flex-col overflow-hidden bg-plum text-cream md:min-h-[46rem]"
    >
      <div data-hero-media className="absolute inset-0 -z-10 origin-[50%_40%]">
        <div data-hero-parallax className="absolute inset-x-0 -top-[4%] -bottom-[10%]">
          <Media
            asset={HERO_VIDEO.poster}
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            alt=""
            className="object-cover object-[42%_45%] md:object-[50%_42%]"
          />
          <HeroVideo
            desktop={localSources(HERO_VIDEO.local.desktop)}
            mobile={localSources(HERO_VIDEO.local.mobile)}
            youtubeId={HERO_VIDEO.youtubeId}
            youtubeStart={HERO_VIDEO.youtubeStart}
            title={HERO_VIDEO.title}
            poster={poster.src}
          />
        </div>
      </div>

      {/* Soft cinematic grade: keeps type above 4.5:1 without flattening the footage */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-shade/30" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_60%_at_50%_52%,rgb(28_8_16/0.5),transparent_75%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-shade/80 to-transparent" />

      <div
        data-hero-content
        className="container-x flex w-full flex-1 flex-col items-center justify-center pt-[calc(var(--header-height)+3.5rem)] pb-16 text-center"
      >
        <h1 id="home-hero-title" className="hero-rise type-display-xl max-w-[15ch] text-balance">
          {hero.heading}
        </h1>

        <p className="hero-rise hero-rise-late type-lead mt-6 max-w-[36rem] text-pretty text-cream/90">{hero.lead}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-xs:flex-col" data-hero-item>
          <Button href={hero.cta.href} tone="dark">
            {hero.cta.label}
          </Button>
          <VideoModal videoId={INTEGRATIONS.manifestoVideoId} title={HERO_VIDEO.title} label="Watch our film" />
        </div>
      </div>

      <HeroMotion targetId={HERO_ID} />
    </section>
  )
}
