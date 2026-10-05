import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { movement as m } from '@/content/home'
import { pad } from '@/lib/utils'

/** RA Movement: the Leadership Path (Seed → Bud → Blossom → Pod) and the teacher directory. */
export function MovementFeature() {
  return (
    <section aria-labelledby="movement-title" className="section-y overflow-hidden bg-paper">
      <div className="container-x">
        <div className="grid gap-y-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6">
            <p className="type-eyebrow text-crimson" data-reveal>
              {m.eyebrow}
            </p>
            <h2 id="movement-title" className="type-display-lg mt-5 text-balance" data-text-reveal>
              Radiantly Alive Movement <em>&amp; Leadership Path</em>
            </h2>
            <div className="type-body measure mt-6 space-y-4 text-pretty text-ink-soft">
              {m.paragraphs.map((p) => (
                <p key={p} data-reveal>
                  {p}
                </p>
              ))}
            </div>
          </div>

          <figure className="relative lg:col-span-5 lg:col-start-8">
            <div className="shape-arch relative aspect-[4/5] overflow-hidden" data-image-reveal>
              <div data-parallax="0.08" className="absolute inset-x-0 -inset-y-[6%]">
                <Media asset={m.image} fill frame={4 / 5} overscan={1.12} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
            <blockquote className="relative -mt-20 ml-6 max-w-[24rem] rounded-frame bg-plum p-7 text-cream md:-ml-10" data-reveal>
              <p className="type-lead">{m.quote}</p>
            </blockquote>
          </figure>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-frame border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4 md:mt-20" data-stagger>
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

        <div className="mt-16 grid gap-y-8 border-t hairline pt-10 md:grid-cols-12 md:gap-x-10">
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
