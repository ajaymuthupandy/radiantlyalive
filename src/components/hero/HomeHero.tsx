import { existsSync } from 'node:fs'
import path from 'node:path'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
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
 * Cinematic homepage hero: Radiantly Alive's film over its poster
 * photograph, with the source homepage's own headline and positioning line.
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
        className="container-x flex w-full flex-1 flex-col items-center justify-center pt-[calc(var(--header-height)+3.5rem)] pb-8 text-center"
      >
        <h1 id="home-hero-title" className="hero-rise type-display-xl max-w-[15ch] text-balance">
          A global yoga community <em className="text-saffron">born in Bali.</em>
        </h1>

        <p className="hero-rise hero-rise-late type-lead mt-6 max-w-[38rem] text-pretty text-cream/90">
          Deepen your practice with world-class teachers, transformative trainings and meaningful connections - in Bali, across Europe, or
          online.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3 max-xs:w-full max-xs:flex-col" data-hero-item>
          <Button href="/yoga-teacher-training-2026-1" tone="dark">
            Find your path
          </Button>
          <Button href="/classes" variant="secondary" tone="dark">
            Class Schedule
          </Button>
        </div>
      </div>

      <div className="container-x w-full pb-6 md:pb-8" data-hero-item>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-cream/15 pt-5">
          <VideoModal videoId={INTEGRATIONS.manifestoVideoId} title={HERO_VIDEO.title} label="Watch our Manifesto Video" />
          <p className="type-meta hidden text-mist md:block">
            900+ graduates <span aria-hidden>·</span> 80+ countries <span aria-hidden>·</span> 4.9/5 Yoga Alliance
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#vision"
              className="type-eyebrow hidden items-center gap-2 text-cream/80 transition-colors hover:text-cream lg:inline-flex"
            >
              Scroll <ArrowDown aria-hidden className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <HeroMotion targetId={HERO_ID} />
    </section>
  )
}
