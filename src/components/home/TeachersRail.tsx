import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { RailControls } from '@/components/ui/RailControls'
import { teachersSection as s } from '@/content/home'
import { teachers } from '@/data/teachers'

/** "Our Teachers — Get to know us": resident teachers as a portrait rail. */
export function TeachersRail() {
  return (
    <section aria-labelledby="teachers-title" className="section-y overflow-hidden">
      <div className="container-x flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
        <div>
          <p className="type-eyebrow text-crimson" data-reveal>
            {s.eyebrow}
          </p>
          <h2 id="teachers-title" className="type-display-lg mt-5" data-text-reveal>
            {s.heading}
          </h2>
          <p className="type-lead mt-4 text-ink-soft" data-reveal>
            {s.subheading}
          </p>
        </div>
        <div className="flex items-center gap-6" data-reveal>
          <Button href={s.cta.href} variant="link">
            {s.cta.label}
          </Button>
          <div className="hidden md:block">
            <RailControls railId="teachers-rail" label="Scroll teachers" />
          </div>
        </div>
      </div>

      <ul
        id="teachers-rail"
        tabIndex={0}
        aria-label="Resident teachers"
        className="rail mt-12 flex gap-4 overflow-x-auto px-[max(var(--gutter),calc((100%_-_var(--container-max))/2_+_var(--gutter)))] pb-4 focus-visible:outline-offset-[-4px] md:mt-16 md:gap-6"
      >
        {teachers.map((teacher) => (
          <li key={teacher.id} className="w-[68%] shrink-0 xs:w-[46%] md:w-[30%] lg:w-[22%]">
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-frame bg-sand">
                <Media
                  asset={teacher.image}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 60vw"
                  className="object-cover object-[50%_25%] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-4">
                <span className="type-h3 block">{teacher.name}</span>
                <span className="type-eyebrow mt-2 block text-crimson">{teacher.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
