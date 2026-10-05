import { Plus } from 'lucide-react'
import { Media } from '@/components/ui/Media'
import type { Teacher } from '@/data/types'

/** Portrait card; the bio expands with native <details>, so it needs no JavaScript. */
export function TeacherCard({ teacher, tone = 'light' }: { teacher: Teacher; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-frame bg-sand">
        <Media
          asset={teacher.image}
          fill
          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, (min-width: 480px) 45vw, 90vw"
          className="object-cover object-[50%_25%] transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.035]"
        />
      </div>
      <h3 className={`type-h3 mt-5 ${dark ? 'text-cream' : 'text-ink'}`}>{teacher.name}</h3>
      <p className={`type-eyebrow mt-2 ${dark ? 'text-saffron' : 'text-crimson'}`}>{teacher.role}</p>
      <details className={`mt-4 border-t pt-3 ${dark ? 'border-cream/15' : 'hairline'}`}>
        <summary
          className={`type-nav flex min-h-11 items-center justify-between gap-3 ${dark ? 'text-cream' : 'text-ink'} [&::-webkit-details-marker]:hidden`}
        >
          <span>About {teacher.name.split(' ')[0]}</span>
          <Plus aria-hidden className="size-4 transition-transform duration-300 group-has-[details[open]]:rotate-45" strokeWidth={1.75} />
        </summary>
        <div className={`type-small space-y-3 pt-2 pb-2 ${dark ? 'text-mist' : 'text-ink-soft'}`}>
          {teacher.bio.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </details>
    </article>
  )
}
