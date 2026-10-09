import type { Testimonial } from '@/data/types'
import { cn } from '@/lib/utils'

export function TestimonialCard({
  testimonial,
  tone = 'light',
  className,
}: {
  testimonial: Testimonial
  tone?: 'light' | 'dark'
  className?: string
}) {
  const dark = tone === 'dark'

  return (
    <figure className={cn('flex flex-col', className)}>
      <span aria-hidden className={cn('block font-display text-7xl leading-[0.6]', dark ? 'text-mist' : 'text-crimson')}>
        “
      </span>
      <blockquote className="mt-4">
        <p className={cn('type-lead text-pretty', dark ? 'text-cream' : 'text-ink')}>
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className={cn('mt-8 border-t pt-5', dark ? 'border-cream/15' : 'hairline')}>
        <p className={cn('type-small font-semibold', dark ? 'text-cream' : 'text-ink')}>{testimonial.name}</p>
        <p className={cn('type-small mt-1', dark ? 'text-mist' : 'text-ink-soft')}>{testimonial.context}</p>
      </figcaption>
    </figure>
  )
}
