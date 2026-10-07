import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { teacherTrainings as t } from '@/content/home'
import { pad } from '@/lib/utils'

/** "Yoga Teacher Trainings — An Experience of a Lifetime": the strongest conversion moment. */
export function TrainingFeature() {
  return (
    <section aria-labelledby="training-title" className="section-y surface-dark overflow-hidden bg-plum text-cream">
      <div className="container-x grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
        <div className="relative order-2 lg:order-1 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-frame lg:sticky lg:top-[calc(var(--header-height)+2rem)]" data-image-reveal>
            <div data-parallax="0.1" className="absolute inset-x-0 -inset-y-[8%]">
              <Media asset={t.image} fill frame={4 / 5} overscan={1.16} sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <p className="type-eyebrow text-saffron" data-reveal>
            {t.eyebrow}
          </p>
          <h2 id="training-title" className="type-display-lg mt-5 text-balance" data-text-reveal>
            An Experience of <em>a Lifetime</em>
          </h2>
          <div className="type-body measure mt-6 space-y-4 text-pretty text-mist">
            {t.paragraphs.map((p) => (
              <p key={p} data-reveal>
                {p}
              </p>
            ))}
          </div>

          <ol className="mt-10 border-b border-cream/15" data-stagger>
            {t.programs.map((program, i) => (
              <li key={program.href} className="border-t border-cream/15" data-stagger-item>
                <Link href={program.href} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-5">
                  <span className="type-meta text-saffron" aria-hidden>
                    {pad(i + 1)}
                  </span>
                  <span>
                    <span className="type-eyebrow block text-balance text-mist">{program.meta}</span>
                    <span className="type-display-sm mt-1.5 block transition-colors group-hover:text-saffron">
                      {program.label}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    strokeWidth={1.5}
                    className="size-5 text-cream/60 transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 group-hover:text-saffron"
                  />
                </Link>
              </li>
            ))}
          </ol>

          <dl className="mt-10 grid grid-cols-3 gap-x-6" data-stagger>
            {t.proof.map((p) => (
              <div key={p.label} className="flex flex-col" data-stagger-item>
                <dt className="type-meta order-2 mt-2 text-mist">{p.label}</dt>
                <dd className="type-display-md order-1 leading-none text-saffron">{p.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6" data-reveal>
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
      </div>
    </section>
  )
}
