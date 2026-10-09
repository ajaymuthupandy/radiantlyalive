import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { RailControls } from '@/components/ui/RailControls'
import { teachersSection as s } from '@/content/home'
import { teachers } from '@/data/teachers'

/** Resident teachers as a portrait rail. */
export function TeachersRail() {
  return (
    <section aria-labelledby="teachers-title" className="overflow-hidden pt-[var(--section-space)] pb-[var(--section-space-tight)]">
      <div className="container-x flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
        <h2 id="teachers-title" className="type-display-lg" data-text-reveal>
          {s.heading}
        </h2>
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
        className="rail mt-8 flex gap-4 overflow-x-auto px-[max(var(--gutter),calc((100%_-_var(--container-max))/2_+_var(--gutter)))] pb-2 focus-visible:outline-offset-[-4px] md:mt-10 md:gap-6"
        data-stagger
      >
        {teachers.map((teacher) => (
          <li key={teacher.id} className="w-[68%] shrink-0 xs:w-[46%] md:w-[30%] lg:w-[22%]" data-stagger-item>
            <figure className="group">
              <div className="shape-arch relative aspect-[3/4] overflow-hidden bg-sand">
                <Media
                  asset={teacher.image}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 60vw"
                  className="object-cover object-[50%_25%] transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-4">
                <span className="type-display-sm block">{teacher.name}</span>
                <span className="type-small mt-1 block text-ink-soft">{teacher.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
