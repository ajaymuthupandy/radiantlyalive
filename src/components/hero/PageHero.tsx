import Link from 'next/link'
import { Media } from '@/components/ui/Media'
import type { MediaKey } from '@/data/media'
import { cn } from '@/lib/utils'
import { HeroMotion } from './HeroMotion'

interface PageHeroProps {
  id: string
  eyebrow: string
  title: React.ReactNode
  lead?: React.ReactNode
  image: MediaKey
  imagePosition?: string
  breadcrumb?: { label: string; href: string }
  children?: React.ReactNode
  tone?: 'plum' | 'crimson'
}

/** Inner-page hero: shorter than the homepage, same cinematic language. */
export function PageHero({ id, eyebrow, title, lead, image, imagePosition = 'object-center', breadcrumb, children, tone = 'plum' }: PageHeroProps) {
  const from = tone === 'crimson' ? 'from-crimson via-crimson/50' : 'from-plum via-plum/50'

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        'surface-dark relative isolate flex min-h-[32rem] items-end overflow-hidden text-cream md:min-h-[36rem] lg:min-h-[min(70svh,46rem)]',
        tone === 'crimson' ? 'bg-crimson' : 'bg-plum',
      )}
    >
      <div data-hero-media className="absolute inset-0 -z-10">
        <div data-hero-parallax className="absolute inset-x-0 -top-[4%] -bottom-[10%]">
          <Media asset={image} fill preload fetchPriority="high" sizes="100vw" alt="" className={cn('object-cover', imagePosition)} />
        </div>
      </div>
      <div aria-hidden className={cn('absolute inset-0 -z-10 bg-gradient-to-t to-transparent', from)} />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-shade/45 to-transparent" />

      <div data-hero-content className="container-x w-full pt-[calc(var(--header-height)+3rem)] pb-12 md:pb-16">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6" data-hero-item>
            <Link href={breadcrumb.href} className="type-eyebrow text-mist transition-colors hover:text-cream">
              ← {breadcrumb.label}
            </Link>
          </nav>
        )}
        <p className={cn('type-eyebrow', tone === 'crimson' ? 'text-cream' : 'text-saffron')} data-hero-item>
          {eyebrow}
        </p>
        <h1 id={`${id}-title`} className="hero-rise type-display-lg mt-5 max-w-[18ch] text-balance">
          {title}
        </h1>
        {lead && (
          <p className="hero-rise hero-rise-late type-lead mt-6 max-w-[38rem] text-pretty text-cream/90">
            {lead}
          </p>
        )}
        {children && (
          <div className="mt-10" data-hero-item>
            {children}
          </div>
        )}
      </div>

      <HeroMotion targetId={id} />
    </section>
  )
}
