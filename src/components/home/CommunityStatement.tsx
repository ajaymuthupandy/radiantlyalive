import { ArrowUpRight } from 'lucide-react'
import { Media } from '@/components/ui/Media'
import { SocialGlyph } from '@/components/ui/SocialIcons'
import { community } from '@/content/home'
import { SOCIAL } from '@/data/site'
import { pad } from '@/lib/utils'

/**
 * "Come for Yoga - Feel Radiantly Alive" as a cinematic full-bleed statement,
 * followed by the source's "Stay Connected" invitation to the socials.
 */
export function CommunityStatement() {
  const [lead, turn] = community.statement.split(' - ')
  const stay = community.stayConnected
  const [stayLead, ...stayRest] = stay.heading.split(' ')
  const stayTurn = stayRest.join(' ')

  return (
    <>
      <section aria-labelledby="community-title" className="surface-dark relative isolate overflow-hidden bg-plum text-cream">
        <div className="absolute inset-0 -z-10">
          <div data-parallax="0.16" className="absolute inset-x-0 -inset-y-[12%]">
            <Media asset={community.image} fill sizes="100vw" alt="" className="object-cover object-[50%_45%]" />
          </div>
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-shade/40" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgb(28_8_16/0.5),transparent_80%)]" />
        <div className="container-x section-y flex min-h-[30rem] items-center justify-center text-center md:min-h-[38rem]">
          <h2 id="community-title" className="type-display-xl max-w-[15ch] text-balance" data-text-reveal>
            {lead} <em>{turn}</em>
          </h2>
        </div>
      </section>

      <section aria-labelledby="stay-connected-title" className="section-y bg-paper">
        <div className="container-x grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-frame sm:aspect-[4/3] lg:col-span-5 lg:aspect-[4/5]" data-image-reveal>
            <Media asset={stay.image} fill frame={4 / 5} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[50%_35%]" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="type-eyebrow text-crimson" data-reveal>
              {stay.eyebrow}
            </p>
            <h2 id="stay-connected-title" className="type-display-lg mt-5 text-balance" data-text-reveal>
              {stayLead} <em>{stayTurn}</em>
            </h2>
            <p className="type-lead measure-lead mt-6 text-pretty text-ink-soft" data-reveal data-reveal-delay="0.1">
              {stay.body}
            </p>
            <ul className="mt-10 border-b hairline md:mt-12" data-stagger>
              {SOCIAL.map((s, i) => (
                <li key={s.href} className="border-t hairline" data-stagger-item>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-5 py-5 transition-colors duration-300 hover:text-crimson"
                  >
                    <span className="type-eyebrow w-6 shrink-0 text-crimson">{pad(i + 1)}</span>
                    <SocialGlyph icon={s.icon} className="size-5 shrink-0" />
                    <span className="type-h3 flex-1">{s.label}</span>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/20 transition-colors duration-500 group-hover:border-plum group-hover:bg-plum group-hover:text-cream">
                      <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.75} />
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
