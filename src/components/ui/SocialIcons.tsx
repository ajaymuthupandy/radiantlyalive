import { SOCIAL, type SocialIcon } from '@/lib/constants'
import { cn } from '@/lib/utils'

/** Minimal brand glyphs (Lucide no longer ships brand icons). */
const paths: Record<SocialIcon, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" />
    </>
  ),
  facebook: <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />,
  youtube: (
    <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  ),
  tiktok: (
    <path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v2.6c-1.4.1-2.7-.3-3.9-1.1v5.6c0 3.4-2.4 5.9-5.6 5.9A5.6 5.6 0 0 1 5.4 14.3c0-3.4 2.9-5.8 6.3-5.3v2.8c-1.6-.4-3.4.6-3.4 2.4 0 1.5 1.2 2.6 2.7 2.6 1.6 0 2.6-1.1 2.6-2.9V3h3Z" />
  ),
}

/** A single brand glyph, sized by the caller. */
export function SocialGlyph({ icon, className }: { icon: SocialIcon; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      {paths[icon]}
    </svg>
  )
}

export function SocialLinks({ className, tone = 'dark' }: { className?: string; tone?: 'light' | 'dark' }) {
  return (
    <ul className={cn('flex items-center gap-1', className)}>
      {SOCIAL.map((s) => (
        <li key={s.icon}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} (opens in a new tab)`}
            className={cn(
              'grid size-11 place-items-center rounded-full transition-colors duration-300',
              tone === 'dark' ? 'text-cream/80 hover:bg-cream/10 hover:text-cream' : 'text-ink/70 hover:bg-ink/5 hover:text-ink',
            )}
          >
            <svg viewBox="0 0 24 24" className="size-[1.15rem]" fill="currentColor" aria-hidden>
              {paths[s.icon]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
