import type { Metadata } from 'next'
import Link from 'next/link'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'
import { Rich } from '@/components/blocks/Rich'
import { Ctas } from '@/components/blocks/Shell'
import { HeroMotion } from '@/components/hero/HeroMotion'
import { JsonLd } from '@/components/ui/JsonLd'
import { Media } from '@/components/ui/Media'
import type { PageContent } from '@/content/types'
import { breadcrumbJsonLd, buildMetadata, pageSchemaJsonLd } from '@/lib/seo'
import { ui } from '@/content/ui-strings'
import { cn } from '@/lib/utils'

/** Next.js metadata for a content page. */
export function contentMetadata(page: PageContent): Metadata {
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.hero.image,
    locale: page.lang === 'es' ? 'es_ES' : 'en_US',
  })
}

/**
 * Renders a `PageContent` document: cinematic hero, optional key-facts strip,
 * then every block in order, plus breadcrumb and page schema JSON-LD.
 */
export function ContentPage({ page }: { page: PageContent }) {
  const { hero } = page
  const heroId = 'page-hero'
  const crumbs = [{ name: 'Home', path: '/' }, ...(page.parent ? [{ name: page.parent.label, path: page.parent.href }] : []), { name: page.title, path: page.path }]

  return (
    <div lang={page.lang === 'es' ? 'es' : undefined}>
      <section
        id={heroId}
        aria-labelledby={`${heroId}-title`}
        className="surface-dark relative isolate flex min-h-[32rem] items-end overflow-hidden bg-plum text-cream md:min-h-[36rem] lg:min-h-[min(70svh,46rem)]"
      >
        <div data-hero-media className="absolute inset-0 -z-10">
          <div data-hero-parallax className="absolute inset-x-0 -top-[4%] -bottom-[10%]">
            <Media
              asset={hero.image}
              fill
              preload
              fetchPriority="high"
              sizes="100vw"
              alt=""
              className={cn('object-cover', hero.imagePosition ?? 'object-center')}
            />
          </div>
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-plum via-plum/45 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-shade/45 to-transparent" />

        <div data-hero-content className="container-x w-full pt-[calc(var(--header-height)+3rem)] pb-12 md:pb-16">
          {page.parent && (
            <nav aria-label="Breadcrumb" className="mb-6" data-hero-item>
              <ol className="type-eyebrow flex flex-wrap items-center gap-2 text-mist">
                <li>
                  <Link href="/" className="transition-colors hover:text-cream">
                    {ui(page.lang).home}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={page.parent.href} className="transition-colors hover:text-cream">
                    {page.parent.label}
                  </Link>
                </li>
              </ol>
            </nav>
          )}
          {hero.eyebrow && (
            <p className="type-eyebrow text-saffron" data-hero-item>
              {hero.eyebrow}
            </p>
          )}
          <h1 id={`${heroId}-title`} className="hero-rise type-display-lg mt-5 max-w-[20ch] text-balance">
            <Rich text={hero.title} />
          </h1>
          {hero.lead && (
            <p className="hero-rise hero-rise-late type-lead mt-6 max-w-[40rem] text-pretty text-cream/90">
              <Rich text={hero.lead} />
            </p>
          )}
          {hero.body?.map((p, i) => (
            <p key={i} className="measure mt-4 text-pretty text-cream/85" data-hero-item>
              <Rich text={p} />
            </p>
          ))}
          {hero.ctas && (
            <div className="mt-10" data-hero-item>
              <Ctas ctas={hero.ctas} tone="plum" />
            </div>
          )}
        </div>
        <HeroMotion targetId={heroId} />
      </section>

      {hero.facts && hero.facts.length > 0 && (
        <section aria-label="Key facts" className="border-b hairline bg-paper">
          <dl className={cn('container-x grid grid-cols-2', hero.facts.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3')}>
            {hero.facts.map((f) => (
              <div key={f.label} className="border-b hairline py-7 pr-6 lg:border-b-0">
                <dt className="type-eyebrow text-crimson">{f.label}</dt>
                <dd className="type-display-sm mt-2">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <BlockRenderer blocks={page.blocks} lang={page.lang} />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          ...(page.schema ? [pageSchemaJsonLd(page.schema, page.path, page.lang ?? 'en')] : []),
        ]}
      />
    </div>
  )
}
