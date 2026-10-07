import { Media } from '@/components/ui/Media'
import { media } from '@/data/media'
import type {
  FeaturesBlock,
  IntroBlock,
  ListsBlock,
  ProseBlock,
  QuoteBlock,
  SplitBlock,
  StatsBlock,
  TestimonialsBlock,
} from '@/content/types'
import { cn, pad } from '@/lib/utils'
import { Rich } from './Rich'
import { accentText, BlockHead, Bullets, Ctas, isDark, Paragraphs, Shell } from './Shell'

type WithKey<T> = T & { blockKey: string }

export function Intro({ blockKey, ...b }: WithKey<IntroBlock>) {
  const center = b.align === 'center'
  const dark = isDark(b.tone)
  const headingId = `${blockKey}-title`

  // Left-aligned intro with a heading: heading on the left, copy on the right, filling the row.
  if (!center && b.heading && b.paragraphs?.length) {
    return (
      <Shell id={b.id} tone={b.tone} labelledBy={headingId}>
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            {b.eyebrow && (
              <p className={cn('type-eyebrow', accentText(b.tone))} data-reveal>
                {b.eyebrow}
              </p>
            )}
            <h2 id={headingId} className={cn('type-display-lg text-balance', b.eyebrow && 'mt-5')} data-text-reveal>
              <Rich text={b.heading} />
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-2">
            <Paragraphs items={b.paragraphs} tone={b.tone} lead />
            {b.note && (
              <p className={cn('type-eyebrow mt-8', dark ? 'text-mist' : 'text-crimson')} data-reveal>
                <Rich text={b.note} />
              </p>
            )}
            <Ctas ctas={b.ctas} tone={b.tone} className="mt-8" />
          </div>
        </div>
      </Shell>
    )
  }

  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <div className={cn('max-w-[60rem]', center && 'mx-auto text-center')}>
        {b.eyebrow && (
          <p className={cn('type-eyebrow', accentText(b.tone))} data-reveal>
            {b.eyebrow}
          </p>
        )}
        {b.heading && (
          <h2 id={headingId} className={cn('type-display-lg text-balance', b.eyebrow && 'mt-5')} data-text-reveal>
            <Rich text={b.heading} />
          </h2>
        )}
        <Paragraphs
          items={b.paragraphs}
          tone={b.tone}
          lead
          className={cn('mt-8', center && 'mx-auto')}
        />
        {b.note && (
          <p className={cn('type-eyebrow mt-10', dark ? 'text-mist' : 'text-crimson')} data-reveal>
            <Rich text={b.note} />
          </p>
        )}
        <Ctas ctas={b.ctas} tone={b.tone} className={cn('mt-10', center && 'justify-center')} />
      </div>
    </Shell>
  )
}

export function Split({ blockKey, ...b }: WithKey<SplitBlock>) {
  const imageLeft = b.imageSide === 'left'
  const arch = b.shape === 'arch'
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={headingId}>
      <div className="grid items-center gap-y-10 md:grid-cols-12 md:gap-x-10 lg:gap-x-14">
        <div className={cn('relative md:col-span-6 lg:col-span-5', imageLeft ? 'md:order-1' : 'md:order-2 lg:col-start-8')}>
          {b.shape === 'natural' ? (
            <div className="overflow-hidden rounded-frame bg-sand" data-image-reveal>
              <Media
                asset={b.image}
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
                style={{ aspectRatio: `${media[b.image].width} / ${media[b.image].height}` }}
              />
            </div>
          ) : (
            <div
              className={cn('relative overflow-hidden bg-sand', arch ? 'shape-arch aspect-[4/5]' : 'aspect-[4/5] rounded-frame')}
              data-image-reveal
            >
              <div data-parallax="0.08" className="absolute inset-x-0 -inset-y-[6%]">
                <Media
                  asset={b.image}
                  fill
                  frame={4 / 5}
                  overscan={1.12}
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
        <div className={cn('md:col-span-6', imageLeft ? 'md:order-2 lg:col-start-7' : 'md:order-1')}>
          {b.eyebrow && (
            <p className={cn('type-eyebrow', accentText(b.tone))} data-reveal>
              {b.eyebrow}
            </p>
          )}
          <h2 id={headingId} className={cn('type-display-md text-balance', b.eyebrow && 'mt-5')} data-text-reveal>
            <Rich text={b.heading} />
          </h2>
          <Paragraphs items={b.paragraphs} tone={b.tone} className="mt-6" />
          <Bullets items={b.bullets} tone={b.tone} className="mt-6" />
          {b.note && (
            <p className={cn('type-meta mt-7 font-semibold', accentText(b.tone))} data-reveal>
              <Rich text={b.note} />
            </p>
          )}
          <Ctas ctas={b.ctas} tone={b.tone} className="mt-10" />
        </div>
      </div>
    </Shell>
  )
}

export function Features({ blockKey, ...b }: WithKey<FeaturesBlock>) {
  const dark = isDark(b.tone)
  const cols = b.columns ?? 3
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <ol
        className={cn(
          'grid gap-px overflow-hidden border',
          (b.eyebrow || b.heading || b.lead) && 'mt-8 md:mt-10',
          dark ? 'border-cream/15 bg-cream/15' : 'border-ink/10 bg-ink/10',
          cols === 2 && 'md:grid-cols-2',
          cols === 3 && 'md:grid-cols-2 lg:grid-cols-3',
          cols === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
        )}
        data-stagger
      >
        {b.items.map((item, i) => (
          <li key={i} className={cn('flex flex-col p-6 md:p-8', dark ? (b.tone === 'crimson' ? 'bg-crimson' : 'bg-plum') : b.tone === 'paper' ? 'bg-paper' : 'bg-canvas')} data-stagger-item>
            {(b.numbered || item.label) && (
              <p className={cn('type-eyebrow', accentText(b.tone))}>{item.label ?? pad(i + 1)}</p>
            )}
            <h3 className={cn('type-h3 text-balance', (b.numbered || item.label) && 'mt-4')}>
              <Rich text={item.title} />
            </h3>
            {item.text && (
              <p className={cn('type-small mt-3 text-pretty', dark ? 'text-mist' : 'text-ink-soft')}>
                <Rich text={item.text} />
              </p>
            )}
            <Bullets items={item.bullets} tone={b.tone} className="mt-4" />
          </li>
        ))}
      </ol>
      <Ctas ctas={b.ctas} tone={b.tone} className="mt-10" />
    </Shell>
  )
}

export function Lists({ blockKey, ...b }: WithKey<ListsBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <div className={cn('grid gap-12 md:gap-16', b.lists.length > 1 && 'md:grid-cols-2', b.lists.length > 2 && 'lg:grid-cols-3', (b.heading || b.lead) && 'mt-8 md:mt-10')}>
        {b.lists.map((list, i) => (
          <div key={i} data-reveal>
            {list.title && <h3 className={cn('type-eyebrow mb-6', accentText(b.tone))}>{list.title}</h3>}
            <Bullets items={list.items} tone={b.tone} />
          </div>
        ))}
      </div>
    </Shell>
  )
}

export function Prose({ blockKey, ...b }: WithKey<ProseBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <div className="mx-auto max-w-[46rem]">
        <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} tone={b.tone} />
        <div className={cn('space-y-10', b.heading && 'mt-8 md:mt-10')}>
          {b.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h3 className="type-h3">{section.heading}</h3>}
              <Paragraphs items={section.paragraphs} tone={b.tone} className={cn(section.heading && 'mt-4')} />
              <Bullets items={section.bullets} tone={b.tone} className="mt-5" />
            </div>
          ))}
        </div>
      </div>
    </Shell>
  )
}

export function Quote({ blockKey, ...b }: WithKey<QuoteBlock>) {
  const tone = b.tone ?? 'crimson'
  const dark = isDark(tone)
  return (
    <Shell id={b.id} tone={tone} labelledBy={`${blockKey}-quote`}>
      <figure className={cn('grid items-center gap-12', b.image && 'md:grid-cols-12 md:gap-10')}>
        {b.image && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-frame md:col-span-5" data-image-reveal>
            <Media asset={b.image} fill frame={4 / 5} sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
        )}
        <div className={cn(b.image ? 'md:col-span-6 md:col-start-7' : 'mx-auto max-w-[56rem] text-center')}>
          <span aria-hidden className={cn('block font-display text-8xl leading-[0.5]', accentText(tone))}>
            “
          </span>
          <blockquote id={`${blockKey}-quote`} className="mt-6">
            <p className="type-display-md text-balance" data-text-reveal>
              <Rich text={b.quote} />
            </p>
          </blockquote>
          <figcaption className={cn('mt-10', dark ? 'text-mist' : 'text-ink-soft')} data-reveal>
            <span className={cn('type-small block font-semibold', dark ? 'text-cream' : 'text-ink')}>{b.name}</span>
            {b.context && <span className="type-meta mt-1 block">{b.context}</span>}
          </figcaption>
        </div>
      </figure>
    </Shell>
  )
}

export function Testimonials({ blockKey, ...b }: WithKey<TestimonialsBlock>) {
  const dark = isDark(b.tone)
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} tone={b.tone} />
      <ul className={cn('grid gap-x-10 gap-y-10 md:grid-cols-2', b.items.length > 2 && 'lg:grid-cols-3', (b.heading || b.eyebrow) && 'mt-8 md:mt-10')} data-stagger>
        {b.items.map((t, i) => (
          <li key={i} data-stagger-item>
            <figure className="flex h-full flex-col">
              <span aria-hidden className={cn('block font-display text-7xl leading-[0.6]', accentText(b.tone))}>
                “
              </span>
              <blockquote className="mt-4 flex-1">
                <p className="type-lead text-pretty">
                  <Rich text={t.quote} />
                </p>
              </blockquote>
              <figcaption className={cn('mt-8 border-t pt-5', dark ? 'border-cream/15' : 'hairline')}>
                <p className="type-small font-semibold">{t.name}</p>
                {t.context && <p className={cn('type-meta mt-1', dark ? 'text-mist' : 'text-ink-soft')}>{t.context}</p>}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Shell>
  )
}

export function StatsRow({ blockKey, ...b }: WithKey<StatsBlock>) {
  const tone = b.tone ?? 'plum'
  const dark = isDark(tone)
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={tone} tight labelledBy={b.heading ? headingId : undefined}>
      {b.heading && (
        <h2 id={headingId} className="type-display-sm mb-12 max-w-[30ch] text-balance" data-reveal>
          <Rich text={b.heading} />
        </h2>
      )}
      <dl className={cn('grid grid-cols-2 gap-y-10', b.items.length >= 5 ? 'md:grid-cols-3 lg:grid-cols-5' : b.items.length === 4 ? 'lg:grid-cols-4' : 'md:grid-cols-3')} data-stagger>
        {b.items.map((s) => (
          <div key={s.label} className={cn('flex flex-col border-l pl-5 md:pl-7', dark ? 'border-cream/20' : 'border-ink/15')} data-stagger-item>
            <dt className={cn('type-meta order-2 mt-2 max-w-[18ch]', dark ? 'text-mist' : 'text-ink-soft')}>{s.label}</dt>
            <dd className={cn('type-display-md order-1 leading-none', dark ? 'text-cream' : 'text-ink')}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </Shell>
  )
}
