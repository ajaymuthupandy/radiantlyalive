import { ArrowUpRight } from 'lucide-react'
import { Accordion } from '@/components/ui/Accordion'
import { SmartLink } from '@/components/ui/SmartLink'
import type { FaqBlock, PricingBlock, ScheduleBlock, TableBlock } from '@/content/types'
import { ui, type Lang } from '@/content/ui-strings'
import { cn } from '@/lib/utils'
import { Rich } from './Rich'
import { BlockHead, accentText, isDark, Shell } from './Shell'

type WithKey<T> = T & { blockKey: string; lang?: Lang }

/** Comparison table on desktop; one card per column on small screens. */
export function Table({ blockKey, ...b }: WithKey<TableBlock>) {
  const dark = isDark(b.tone)
  const headingId = `${blockKey}-title`
  const line = dark ? 'border-cream/15' : 'border-ink/12'

  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />

      <div className="mt-10 hidden md:block" data-reveal>
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">{b.heading ? b.heading.replace(/\*/g, '') : 'Comparison'}</caption>
          <thead>
            <tr className={cn('border-b', line)}>
              <td className="w-[18%] py-5" />
              {b.columns.map((col) => (
                <th key={col} scope="col" className="type-h3 px-5 py-5 align-bottom">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.rows.map((row) => (
              <tr key={row.label} className={cn('border-b', line)}>
                <th scope="row" className={cn('type-eyebrow py-5 pr-4 align-top', accentText(b.tone))}>
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={i} className={cn('type-small px-5 py-5 align-top', dark ? 'text-mist' : 'text-ink-soft')}>
                    <Rich text={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-12 space-y-6 md:hidden">
        {b.columns.map((col, c) => (
          <li key={col} className={cn('border p-6', line)} data-reveal>
            <h3 className="type-h3">{col}</h3>
            <dl className="mt-4">
              {b.rows.map((row) => (
                <div key={row.label} className={cn('grid grid-cols-[7.5rem_1fr] gap-3 border-t py-3', line)}>
                  <dt className={cn('type-eyebrow pt-0.5', accentText(b.tone))}>{row.label}</dt>
                  <dd className={cn('type-small', dark ? 'text-mist' : 'text-ink-soft')}>
                    <Rich text={row.values[c] ?? ''} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      {b.note && (
        <p className={cn('type-small mt-8', dark ? 'text-mist' : 'text-ink-soft')}>
          <Rich text={b.note} />
        </p>
      )}
    </Shell>
  )
}

export function Pricing({ blockKey, ...b }: WithKey<PricingBlock>) {
  const dark = isDark(b.tone)
  const headingId = `${blockKey}-title`
  const line = dark ? 'border-cream/15' : 'border-ink/12'

  return (
    <Shell id={b.id} tone={b.tone ?? 'paper'} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <div className={cn('mt-10 border-t', line)} data-stagger>
        {b.priceLabels && (
          <div className={cn('type-eyebrow hidden grid-cols-[1fr_repeat(var(--n),11rem)_10rem] gap-4 border-b py-4 md:grid', line, dark ? 'text-mist' : 'text-ink-soft')} style={{ '--n': b.priceLabels.length } as React.CSSProperties}>
            <span />
            {b.priceLabels.map((label) => (
              <span key={label} className="text-right">
                {label}
              </span>
            ))}
            <span />
          </div>
        )}
        <ul>
          {b.tiers.map((tier) => (
            <li
              key={tier.label}
              className={cn('grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-3 border-b py-6 md:grid-cols-[1fr_repeat(var(--n),11rem)_10rem]', line)}
              style={{ '--n': tier.prices.length } as React.CSSProperties}
              data-stagger-item
            >
              <div className="col-span-2 md:col-span-1">
                <p className="type-h3">
                  {tier.label}
                  {tier.badge && <span className={cn('type-eyebrow ml-3 align-middle', accentText(b.tone))}>{tier.badge}</span>}
                </p>
                {tier.note && (
                  <p className={cn('type-small mt-1', dark ? 'text-mist' : 'text-ink-soft')}>
                    <Rich text={tier.note} />
                  </p>
                )}
              </div>
              {tier.prices.map((price, i) => (
                <p key={i} className="type-display-sm leading-none md:text-right">
                  {b.priceLabels?.[i] && <span className={cn('type-eyebrow mr-2 align-middle whitespace-nowrap md:hidden', dark ? 'text-mist' : 'text-ink-soft')}>{b.priceLabels[i]}</span>}
                  {price}
                </p>
              ))}
              {tier.href && (
                <SmartLink
                  href={tier.href}
                  className={cn(
                    'type-button col-span-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-control px-5 transition-colors md:col-span-1',
                    'bg-saffron text-ink hover:bg-saffron-deep',
                  )}
                >
                  {tier.ctaLabel ?? ui(b.lang).purchase}
                  <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.75} />
                </SmartLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      {b.notes && (
        <div className={cn('type-small measure mt-8 space-y-2', dark ? 'text-mist' : 'text-ink-soft')}>
          {b.notes.map((n, i) => (
            <p key={i}>
              <Rich text={n} />
            </p>
          ))}
        </div>
      )}
    </Shell>
  )
}

export function Schedule({ blockKey, ...b }: WithKey<ScheduleBlock>) {
  const dark = isDark(b.tone)
  const headingId = `${blockKey}-title`
  const line = dark ? 'border-cream/15' : 'border-ink/12'
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:col-span-5 lg:self-start" />
        <ol className={cn('border-t lg:col-span-7', line)} data-stagger>
          {b.items.map((item, i) => (
            <li key={i} className={cn('grid gap-2 border-b py-6 sm:grid-cols-[9rem_1fr] sm:gap-6', line)} data-stagger-item>
              <p className={cn('type-h3', accentText(b.tone))}>{item.time}</p>
              <div>
                <h3 className="type-h3">
                  <Rich text={item.title} />
                </h3>
                {item.text && (
                  <p className={cn('type-small mt-2', dark ? 'text-mist' : 'text-ink-soft')}>
                    <Rich text={item.text} />
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
      {b.note && (
        <p className={cn('type-small mt-8 lg:ml-[calc(5/12*100%)]', dark ? 'text-mist' : 'text-ink-soft')}>
          <Rich text={b.note} />
        </p>
      )}
    </Shell>
  )
}

export function Faq({ blockKey, ...b }: WithKey<FaqBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={headingId}>
      <div className="grid gap-12 lg:grid-cols-12">
        <BlockHead
          id={headingId}
          eyebrow={b.heading ? undefined : (b.eyebrow ?? ui(b.lang).faqEyebrow)}
          heading={b.heading ?? ui(b.lang).faqHeading}
          lead={b.lead}
          tone={b.tone}
          className="lg:col-span-4"
        />
        <div className="lg:col-span-7 lg:col-start-6" data-reveal>
          <Accordion items={b.items} tone={isDark(b.tone) ? 'dark' : 'light'} />
        </div>
      </div>
    </Shell>
  )
}
