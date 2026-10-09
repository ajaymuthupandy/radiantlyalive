import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { teacherTrainings as t } from '@/content/home'

/** "900+" → count up to 900 and keep the "+"; "4.9/5" → count to 4.9 and keep "/5". */
function counter(value: string) {
  const m = value.match(/^(\d+(?:\.(\d+))?)(.*)$/)
  if (!m) return {}
  return { 'data-counter': m[1], 'data-counter-decimals': m[2]?.length ?? 0, 'data-counter-suffix': m[3] }
}

/** Teacher trainings: the programmes, the proof behind them and one way in. */
export function TrainingFeature() {
  return (
    <section aria-labelledby="training-title" className="section-y surface-dark overflow-hidden bg-plum text-cream">
      <div className="container-x grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        {/* Image stretches to the copy column's height so the CTA row lands level with the proof stats' baseline. */}
        <div className="relative order-2 flex flex-col gap-y-10 lg:order-1 lg:col-span-5">
          <div className="shape-arch relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:min-h-[30rem] lg:flex-1" data-arch>
            <div data-parallax="0.1" className="absolute inset-x-0 -inset-y-[8%]">
              <Media asset={t.image} fill frame={4 / 5} overscan={1.16} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6" data-reveal>
            <Button href={t.cta.href} tone="dark">
              {t.cta.label}
            </Button>
            <a
              href={t.reviewsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full transition-opacity hover:opacity-90"
              aria-label="Yoga Alliance registered school: RYS 200, RYS 300 and YACEP (opens Yoga Alliance reviews in a new tab)"
            >
              {t.badges.map((badge) => (
                <span key={badge} className="grid size-16 place-items-center rounded-full bg-cream p-1">
                  <Media asset={badge} alt="" sizes="64px" className="size-full object-contain" />
                </span>
              ))}
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <h2 id="training-title" className="type-display-lg text-balance" data-text-reveal>
            {t.heading}
          </h2>
          <div className="type-body measure mt-6 space-y-4 text-pretty text-mist">
            {t.paragraphs.map((p) => (
              <p key={p} data-reveal>
                {p}
              </p>
            ))}
          </div>

          <ul className="mt-10 border-b border-cream/15" data-stagger>
            {t.programs.map((program) => (
              <li key={program.href} className="border-t border-cream/15" data-stagger-item>
                <Link href={program.href} className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                  <span className="type-display-sm underline decoration-transparent underline-offset-[0.2em] transition-colors group-hover:decoration-cream/50">
                    {program.label}
                  </span>
                  <span className="type-small text-mist">{program.meta}</span>
                </Link>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-x-6" data-stagger>
            {t.proof.map((p) => (
              <div key={p.label} className="flex flex-col" data-stagger-item>
                <dt className="type-small order-2 mt-2 text-mist">{p.label}</dt>
                <dd className="type-display-sm order-1 leading-none" {...counter(p.value)}>
                  {p.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
