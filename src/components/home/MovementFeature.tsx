import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { movement as m } from '@/content/home'
import { pad } from '@/lib/utils'

/** RA Movement: the Leadership Path (Seed → Bud → Blossom → Pod) and the teacher directory. */
export function MovementFeature() {
  return (
    <section aria-labelledby="movement-title" className="section-y overflow-hidden bg-paper">
      <div className="container-x">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-12">
          <div className="lg:col-span-6 lg:py-4">
            <p className="type-eyebrow text-crimson" data-reveal>
              {m.eyebrow}
            </p>
            <h2 id="movement-title" className="type-display-lg mt-5 text-balance" data-text-reveal>
              Radiantly Alive Movement <em>&amp; Leadership Path</em>
            </h2>
            <div className="type-body measure mt-6 space-y-4 text-pretty">
              {m.paragraphs.map((p, i) => (
                <p key={p} className={i === m.paragraphs.length - 1 ? 'text-ink' : 'text-ink-soft'} data-reveal>
                  {p}
                </p>
              ))}
            </div>
            <blockquote className="mt-8 rounded-frame bg-plum px-7 py-7 text-cream md:mt-10 md:px-10 md:py-9" data-reveal>
              <p className="border-l-2 border-saffron/80 pl-6 font-display text-xl leading-relaxed text-pretty md:text-[1.375rem]">{m.quote}</p>
            </blockquote>
          </div>

          <figure className="relative aspect-[4/3] overflow-hidden rounded-frame lg:col-span-6 lg:aspect-auto" data-image-reveal>
            <div data-parallax="0.06" className="absolute inset-x-0 -inset-y-[5%]">
              <Media asset={m.image} fill frame={1} overscan={1.1} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </figure>
        </div>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-frame border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4 md:mt-12" data-stagger>
          {m.stages.map((stage, i) => (
            <li key={stage.name} className="bg-paper p-6 md:p-8" data-stagger-item>
              <p className="type-eyebrow text-crimson">
                {pad(i + 1)} · {stage.theme}
              </p>
              <h3 className="type-display-sm mt-4 leading-none tracking-[0.06em] uppercase">{stage.name}</h3>
              <p className="type-small mt-3 text-ink-soft">{stage.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-y-8 border-t hairline pt-10 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-7">
            <h3 className="type-display-sm" data-reveal>
              {m.directory.heading}
            </h3>
            <p className="type-body measure mt-4 text-pretty text-ink-soft" data-reveal>
              {m.directory.text}
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end" data-reveal>
            {m.ctas.map((cta, i) => (
              <Button key={cta.href} href={cta.href} variant={i === 0 ? 'primary' : 'secondary'}>
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
