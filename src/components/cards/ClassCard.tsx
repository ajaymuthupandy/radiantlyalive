import type { ClassStyle, Intensity } from '@/data/types'
import { cn } from '@/lib/utils'

const intensityLabel: Record<Intensity, string> = { 1: 'Gentle', 2: 'Moderate', 3: 'Strong' }

export function IntensityMeter({ value, tone = 'light' }: { value: Intensity; tone?: 'light' | 'dark' }) {
  return (
    <span className="inline-flex items-center gap-2" title={`Intensity: ${intensityLabel[value]}`}>
      <span aria-hidden className="flex gap-1">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={cn(
              'size-1.5 rounded-full',
              n <= value ? (tone === 'dark' ? 'bg-cream' : 'bg-ink') : tone === 'dark' ? 'bg-cream/25' : 'bg-ink/15',
            )}
          />
        ))}
      </span>
      <span className="type-small">{intensityLabel[value]}</span>
    </span>
  )
}

interface ClassCardProps {
  item: ClassStyle
  index: number
  /** Show the long description (classes page) instead of the one-line summary. */
  detailed?: boolean
}

/** Menu-style row: number, display title, meta, copy. No image, by design. */
export function ClassCard({ item, index, detailed }: ClassCardProps) {
  return (
    <article className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t hairline py-7 md:grid-cols-[3.5rem_1fr] md:py-8">
      <span className="type-small pt-2 text-crimson" aria-hidden>
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h3 className="type-display-sm">{item.title}</h3>
          <div className="flex items-center gap-4 text-ink-soft">
            <IntensityMeter value={item.intensity} />
          </div>
        </div>
        <p className="type-small mt-2 text-ink-soft">
          {item.levels}
          {item.duration && <> · {item.duration}</>}
        </p>
        <p className="type-body measure mt-3 text-ink-soft">{detailed ? item.description : item.summary}</p>
      </div>
    </article>
  )
}
