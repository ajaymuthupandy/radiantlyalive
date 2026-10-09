import { ArrowUpRight, Plus } from 'lucide-react'
import { TeacherCard } from '@/components/cards/TeacherCard'
import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { SmartLink } from '@/components/ui/SmartLink'
import type { CardItem, CardsBlock, CtaBlock, GalleryBlock, PeopleBlock } from '@/content/types'
import { media } from '@/data/media'
import { getTeachers } from '@/data/teachers'
import { ui, type Lang } from '@/content/ui-strings'
import { cn } from '@/lib/utils'
import { plain, Rich } from './Rich'
import { accentText, BlockHead, Bullets, Ctas, isDark, Shell } from './Shell'

type WithKey<T> = T & { blockKey: string; lang?: Lang }

const aspectClass = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[3/2]',
  square: 'aspect-square',
} as const

/** Width / height of each crop, so <Media> widens `sizes` for photos wider than the frame. */
const aspectRatio = { portrait: 4 / 5, landscape: 3 / 2, square: 1 } as const

const colsClass = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
} as const

function CardImage({ item, aspect, cols }: { item: CardItem; aspect: CardsBlock['aspect']; cols: 2 | 3 | 4 }) {
  if (!item.image) return null
  const sizes = cols === 2 ? '(min-width: 768px) 46vw, 100vw' : cols === 3 ? '(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 100vw' : '(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw'

  if (aspect === 'natural') {
    const asset = media[item.image]
    return (
      <div className="overflow-hidden rounded-frame bg-sand">
        <Media
          asset={item.image}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
          style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
        />
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden rounded-frame bg-sand', aspectClass[aspect ?? 'portrait'])}>
      <Media
        asset={item.image}
        fill
        frame={aspectRatio[aspect ?? 'portrait']}
        sizes={sizes}
        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
      />
      {item.badge && (
        <span className="type-small absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1 font-semibold text-ink">{item.badge}</span>
      )}
    </div>
  )
}

export function Cards({ blockKey, ...b }: WithKey<CardsBlock>) {
  const dark = isDark(b.tone)
  const cols = b.columns ?? 3
  const headingId = `${blockKey}-title`

  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <ul className={cn('grid gap-x-6 gap-y-12 lg:gap-x-8', colsClass[cols], (b.heading || b.lead || b.eyebrow) && 'mt-8 md:mt-10')} data-stagger>
        {b.items.map((item, i) => {
          const title = (
            <h3 className="type-h3 text-balance">
              <Rich text={item.title} />
            </h3>
          )
          return (
            <li key={i} className="group flex flex-col" data-stagger-item>
              {item.href && item.image ? (
                <SmartLink href={item.href} tabIndex={-1} aria-hidden className="block">
                  <CardImage item={item} aspect={b.aspect} cols={cols} />
                </SmartLink>
              ) : (
                <CardImage item={item} aspect={b.aspect} cols={cols} />
              )}
              <div className={cn('flex flex-1 flex-col', item.image && 'mt-5')}>
                {!item.image && item.badge && <p className={cn('type-eyebrow mb-3', accentText(b.tone))}>{item.badge}</p>}
                {item.eyebrow && <p className={cn('type-eyebrow mb-3', accentText(b.tone))}>{item.eyebrow}</p>}
                {item.href ? (
                  <SmartLink href={item.href} className="rounded-sm decoration-current/30 underline-offset-4 hover:underline">
                    {title}
                  </SmartLink>
                ) : (
                  title
                )}
                {item.text && (
                  <p className={cn('type-small mt-3 text-pretty', dark ? 'text-mist' : 'text-ink-soft')}>
                    <Rich text={item.text} />
                  </p>
                )}
                <Bullets items={item.bullets} tone={b.tone} className="type-small mt-4" />
                {item.note && (
                  <p className={cn('type-small mt-5 border-t pt-4', dark ? 'border-cream/15 text-cream/85' : 'hairline text-ink')}>
                    <Rich text={item.note} />
                  </p>
                )}
                {item.links && item.links.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <li key={link.href + link.label}>
                        <SmartLink
                          href={link.href}
                          className={cn(
                            'type-small inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 font-medium transition-colors',
                            dark ? 'border-cream/25 hover:border-cream hover:bg-cream hover:text-plum' : 'border-ink/15 hover:border-plum hover:bg-plum hover:text-cream',
                          )}
                        >
                          {link.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                )}
                {item.href && item.ctaLabel && (
                  <div className="mt-auto pt-6">
                    <Button href={item.href} variant="link" tone={dark ? 'dark' : 'light'} aria-label={`${item.ctaLabel}: ${plain(item.title)}`}>
                      {item.ctaLabel}
                    </Button>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>
      <Ctas ctas={b.ctas} tone={b.tone} className="mt-12" />
    </Shell>
  )
}

/** Editorial mosaic: a large lead image with smaller companions. */
export function Gallery({ blockKey, ...b }: WithKey<GalleryBlock>) {
  const headingId = `${blockKey}-title`
  // Mosaic per image count on an 8-column grid: always fills its rectangle.
  const LAYOUTS: Record<number, string[]> = {
    1: ['col-span-2 row-span-2 md:col-span-8'],
    2: ['col-span-2 row-span-2 md:col-span-4', 'col-span-2 row-span-2 md:col-span-4'],
    3: ['col-span-2 row-span-2 md:col-span-5', 'col-span-1 md:col-span-3', 'col-span-1 md:col-span-3'],
    4: ['col-span-2 row-span-2 md:col-span-4', 'col-span-2 md:col-span-4', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2'],
    5: ['col-span-2 row-span-2 md:col-span-4', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2'],
    6: ['col-span-2 row-span-2 md:col-span-4', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2', 'col-span-1 md:col-span-2', 'col-span-2 md:col-span-8 md:row-span-1'],
  }
  const images = b.images.slice(0, 6)
  const layouts = LAYOUTS[images.length] ?? LAYOUTS[6]
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} tone={b.tone} />
      <ul className={cn('grid auto-rows-[9rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] md:grid-cols-8 md:auto-rows-[13rem] md:gap-4 lg:auto-rows-[15rem]', (b.heading || b.eyebrow) && 'mt-8 md:mt-10')} data-stagger>
        {images.map((key, i) => (
          <li key={key} className={cn('relative overflow-hidden rounded-frame bg-sand', layouts[i])} data-stagger-item>
            <Media asset={key} fill sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'} className="object-cover" />
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function People({ blockKey, ...b }: WithKey<PeopleBlock>) {
  const dark = isDark(b.tone)
  const headingId = `${blockKey}-title`
  const teachers = b.teacherIds ? getTeachers(b.teacherIds) : []
  const cols = b.columns ?? 4

  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <ul
        className={cn(
          'grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8',
          cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
          (b.heading || b.lead || b.eyebrow) && 'mt-8 md:mt-10',
        )}
        data-stagger
      >
        {teachers.map((t) => (
          <li key={t.id} data-stagger-item>
            <TeacherCard teacher={t} tone={dark ? 'dark' : 'light'} />
          </li>
        ))}
        {b.people?.map((person) => (
          <li key={person.name} className="group" data-stagger-item>
            {person.image && (
              <div className="relative aspect-[4/5] overflow-hidden rounded-frame bg-sand">
                <Media
                  asset={person.image}
                  fill
                  sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover object-[50%_25%] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.035]"
                />
              </div>
            )}
            <h3 className="type-h3 mt-5">{person.name}</h3>
            {person.role && <p className={cn('type-eyebrow mt-2', accentText(b.tone))}>{person.role}</p>}
            {person.bio && person.bio.length > 0 && (
              <details className={cn('mt-4 border-t pt-3', dark ? 'border-cream/15' : 'hairline')}>
                <summary className="type-nav flex min-h-11 items-center justify-between gap-3">
                  {ui(b.lang).about} {person.name.split(' ')[0]}
                  <Plus aria-hidden className="size-4 transition-transform duration-300 group-has-[details[open]]:rotate-45" strokeWidth={1.75} />
                </summary>
                <div className={cn('type-small space-y-3 pt-2 pb-2', dark ? 'text-mist' : 'text-ink-soft')}>
                  {person.bio.map((p, i) => (
                    <p key={i}>
                      <Rich text={p} />
                    </p>
                  ))}
                </div>
              </details>
            )}
            {person.links && person.links.length > 0 && (
              <ul className="mt-4 space-y-1">
                {person.links.map((link) => (
                  <li key={link.href + link.label}>
                    <SmartLink
                      href={link.href}
                      className={cn('group/l type-small inline-flex min-h-9 items-center gap-2 transition-colors', dark ? 'text-cream/85 hover:text-saffron' : 'text-ink hover:text-crimson')}
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden className="size-3.5 opacity-60 transition-transform group-hover/l:translate-x-0.5 group-hover/l:-translate-y-0.5" />
                    </SmartLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function CtaBand({ blockKey, ...b }: WithKey<CtaBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <section id={b.id} aria-labelledby={headingId} className="surface-dark relative isolate scroll-mt-24 overflow-hidden bg-plum text-cream">
      <div className="absolute inset-0 -z-10">
        <div data-parallax="0.14" className="absolute inset-x-0 -inset-y-[12%]">
          <Media asset={b.image} fill sizes="100vw" alt="" className="object-cover" />
        </div>
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-shade/50" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-plum via-plum/30 to-transparent" />
      <div className="container-x section-y flex min-h-[24rem] flex-col items-center justify-center text-center md:min-h-[30rem]">
        {b.eyebrow && (
          <p className="type-eyebrow text-mist" data-reveal>
            {b.eyebrow}
          </p>
        )}
        <h2 id={headingId} className={cn('type-display-lg max-w-[18ch] text-balance', b.eyebrow && 'mt-5')} data-text-reveal>
          <Rich text={b.heading} />
        </h2>
        {b.text && (
          <p className="type-lead measure-lead mt-6 text-pretty text-cream/90" data-reveal>
            <Rich text={b.text} />
          </p>
        )}
        <Ctas ctas={b.ctas} tone="plum" className="mt-10 justify-center" />
      </div>
    </section>
  )
}
