import { Button } from '@/components/ui/Button'
import type { Cta, RichText, Tone } from '@/content/types'
import { cn } from '@/lib/utils'
import { Rich } from './Rich'

const toneClass: Record<Tone, string> = {
  canvas: 'bg-canvas text-ink',
  paper: 'bg-paper text-ink',
  sand: 'bg-sand/60 text-ink',
  plum: 'surface-dark bg-plum text-cream',
  crimson: 'surface-dark bg-crimson text-cream',
}

export const isDark = (tone?: Tone) => tone === 'plum' || tone === 'crimson'

/** Accent for eyebrows, numerals and rules: crimson on light, saffron on plum, cream on crimson (saffron fails contrast there). */
export const accentText = (tone?: Tone) => (tone === 'crimson' ? 'text-cream' : tone === 'plum' ? 'text-saffron' : 'text-crimson')
export const accentBg = (tone?: Tone) => (tone === 'crimson' ? 'bg-cream' : tone === 'plum' ? 'bg-saffron' : 'bg-crimson')

interface ShellProps {
  id?: string
  tone?: Tone
  labelledBy?: string
  className?: string
  tight?: boolean
  children: React.ReactNode
}

/** Section wrapper: tone, vertical rhythm and anchor offset under the fixed header. */
export function Shell({ id, tone = 'canvas', labelledBy, className, tight, children }: ShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      data-tone={tone}
      className={cn(tight ? 'section-y-tight' : 'section-y', 'block-shell scroll-mt-24 overflow-hidden', toneClass[tone], className)}
    >
      <div className="container-x">{children}</div>
    </section>
  )
}

interface HeadProps {
  id: string
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  tone?: Tone
  align?: 'left' | 'center'
  className?: string
}

/** Block opener: eyebrow, display heading, lead. Renders nothing when empty. */
export function BlockHead({ id, eyebrow, heading, lead, tone, align = 'left', className }: HeadProps) {
  if (!eyebrow && !heading && !lead) return null
  const dark = isDark(tone)

  // Full-width left-aligned opener: heading and lead side by side so the row fills the container.
  if (!className && align === 'left' && heading && lead) {
    return (
      <header className="grid gap-y-6 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <div className="lg:col-span-7">
          {eyebrow && (
            <p className={cn('type-eyebrow', accentText(tone))} data-reveal>
              {eyebrow}
            </p>
          )}
          <h2 id={id} className={cn('type-display-md text-balance', eyebrow && 'mt-5')} data-text-reveal>
            <Rich text={heading} />
          </h2>
        </div>
        <p className={cn('type-lead text-pretty lg:col-span-5 lg:col-start-8', dark ? 'text-mist' : 'text-ink-soft')} data-reveal data-reveal-delay="0.12">
          <Rich text={lead} />
        </p>
      </header>
    )
  }

  return (
    <header className={cn('max-w-[50rem]', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className={cn('type-eyebrow', accentText(tone))} data-reveal>
          {eyebrow}
        </p>
      )}
      {heading && (
        <h2 id={id} className={cn('type-display-md text-balance', eyebrow && 'mt-5')} data-text-reveal>
          <Rich text={heading} />
        </h2>
      )}
      {lead && (
        <p
          className={cn('type-lead measure-lead mt-6 text-pretty', align === 'center' && 'mx-auto', dark ? 'text-mist' : 'text-ink-soft')}
          data-reveal
          data-reveal-delay="0.12"
        >
          <Rich text={lead} />
        </p>
      )}
    </header>
  )
}

export function Ctas({ ctas, tone, className }: { ctas?: Cta[]; tone?: Tone; className?: string }) {
  if (!ctas?.length) return null
  return (
    <div className={cn('flex flex-wrap items-center gap-3 max-xs:flex-col max-xs:items-stretch', className)} data-reveal>
      {ctas.map((cta, i) => (
        <Button
          key={cta.href + cta.label}
          href={cta.href}
          variant={cta.variant ?? (i === 0 ? 'primary' : 'secondary')}
          tone={isDark(tone) ? 'dark' : 'light'}
        >
          {cta.label}
        </Button>
      ))}
    </div>
  )
}

export function Paragraphs({ items, tone, lead, className }: { items?: RichText[]; tone?: Tone; lead?: boolean; className?: string }) {
  if (!items?.length) return null
  return (
    <div className={cn(lead ? 'type-lead measure-lead' : 'type-body measure', 'space-y-5 text-pretty', isDark(tone) ? 'text-mist' : 'text-ink-soft', className)}>
      {items.map((p, i) => (
        <p key={i} data-reveal>
          <Rich text={p} />
        </p>
      ))}
    </div>
  )
}

export function Bullets({ items, tone, className }: { items?: RichText[]; tone?: Tone; className?: string }) {
  if (!items?.length) return null
  return (
    <ul className={cn('type-body measure space-y-2.5', isDark(tone) ? 'text-mist' : 'text-ink-soft', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className={cn('mt-[0.7em] size-1.5 shrink-0 rounded-full', accentBg(tone))} />
          <span>
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}
