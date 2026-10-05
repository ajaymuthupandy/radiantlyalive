import { TeacherCard } from '@/components/cards/TeacherCard'
import { ClassFilter } from '@/components/sections/ClassFilter'
import { Button } from '@/components/ui/Button'
import type { Block, ComponentBlock, EmbedBlock, FormBlock, VideoBlock } from '@/content/types'
import { teachers } from '@/data/teachers'
import { ui, type Lang } from '@/content/ui-strings'
import { cn } from '@/lib/utils'
import { Faq, Pricing, Schedule, Table } from './DataBlocks'
import { EmailForm } from './EmailForm'
import { LiteYouTube } from './LiteYouTube'
import { LiveWidget } from './LiveWidget'
import { Cards, CtaBand, Gallery, People } from './MediaBlocks'
import { Rich } from './Rich'
import { BlockHead, isDark, Shell } from './Shell'
import { Features, Intro, Lists, Prose, Quote, Split, StatsRow, Testimonials } from './TextBlocks'

type WithKey<T> = T & { blockKey: string; lang?: Lang }

function Embed({ blockKey, ...b }: WithKey<EmbedBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id ?? 'schedule'} tone={b.tone ?? 'paper'} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <div className={cn((b.heading || b.lead) && 'mt-12 md:mt-16')}>
        <LiveWidget
          widget={b.widget}
          strings={ui(b.lang)}
          fallback={
            <Button href={b.fallback.href} variant="secondary">
              {b.fallback.label}
            </Button>
          }
        />
      </div>
    </Shell>
  )
}

function Form({ blockKey, ...b }: WithKey<FormBlock>) {
  const headingId = `${blockKey}-title`
  const tone = b.tone ?? 'paper'
  return (
    <Shell id={b.id} tone={tone} labelledBy={b.heading ? headingId : undefined}>
      <div className="grid gap-12 lg:grid-cols-12">
        <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={tone} className="lg:col-span-5" />
        <div className="lg:col-span-6 lg:col-start-7" data-reveal>
          <EmailForm
            form={b.form}
            fallbackHref={b.fallbackHref}
            submitLabel={b.submitLabel ?? ui(b.lang).formSubmit}
            successMessage={b.successMessage ? <Rich text={b.successMessage} /> : ui(b.lang).formSuccess}
            dark={isDark(tone)}
            strings={ui(b.lang)}
          />
          {b.privacyNote && (
            <p className={cn('type-meta mt-6 max-w-xl', isDark(tone) ? 'text-mist' : 'text-ink-soft')}>
              <Rich text={b.privacyNote} />
            </p>
          )}
        </div>
      </div>
    </Shell>
  )
}

function Video({ blockKey, ...b }: WithKey<VideoBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <ul className={cn('grid gap-6 lg:gap-8', b.videos.length > 1 && 'md:grid-cols-2', b.videos.length > 2 && 'lg:grid-cols-3', (b.heading || b.lead) && 'mt-12 md:mt-16')} data-stagger>
        {b.videos.map((v) => (
          <li key={v.youtubeId} className={cn(b.videos.length === 1 && 'w-full lg:w-10/12')} data-stagger-item>
            <LiteYouTube youtubeId={v.youtubeId} title={v.title} playLabel={ui(b.lang).play} />
          </li>
        ))}
      </ul>
    </Shell>
  )
}

function Component({ blockKey, ...b }: WithKey<ComponentBlock>) {
  const headingId = `${blockKey}-title`
  return (
    <Shell id={b.id} tone={b.tone} labelledBy={b.heading ? headingId : undefined}>
      <BlockHead id={headingId} eyebrow={b.eyebrow} heading={b.heading} lead={b.lead} tone={b.tone} />
      <div className={cn((b.heading || b.lead) && 'mt-12 md:mt-16')}>
        {b.name === 'class-filter' && <ClassFilter />}
        {b.name === 'teacher-grid' && (
          <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
            {teachers.map((t) => (
              <li key={t.id} data-stagger-item>
                <TeacherCard teacher={t} tone={isDark(b.tone) ? 'dark' : 'light'} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Shell>
  )
}

/** Renders a page's blocks in order. */
export function BlockRenderer({ blocks, lang = 'en' }: { blocks: Block[]; lang?: Lang }) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = block.id ?? `b${i}`
        const props = { ...block, blockKey: key, lang }
        switch (block.type) {
          case 'intro':
            return <Intro key={key} {...(props as WithKey<typeof block>)} />
          case 'split':
            return <Split key={key} {...(props as WithKey<typeof block>)} />
          case 'features':
            return <Features key={key} {...(props as WithKey<typeof block>)} />
          case 'cards':
            return <Cards key={key} {...(props as WithKey<typeof block>)} />
          case 'table':
            return <Table key={key} {...(props as WithKey<typeof block>)} />
          case 'pricing':
            return <Pricing key={key} {...(props as WithKey<typeof block>)} />
          case 'schedule':
            return <Schedule key={key} {...(props as WithKey<typeof block>)} />
          case 'quote':
            return <Quote key={key} {...(props as WithKey<typeof block>)} />
          case 'testimonials':
            return <Testimonials key={key} {...(props as WithKey<typeof block>)} />
          case 'stats':
            return <StatsRow key={key} {...(props as WithKey<typeof block>)} />
          case 'faq':
            return <Faq key={key} {...(props as WithKey<typeof block>)} />
          case 'gallery':
            return <Gallery key={key} {...(props as WithKey<typeof block>)} />
          case 'people':
            return <People key={key} {...(props as WithKey<typeof block>)} />
          case 'lists':
            return <Lists key={key} {...(props as WithKey<typeof block>)} />
          case 'cta':
            return <CtaBand key={key} {...(props as WithKey<typeof block>)} />
          case 'embed':
            return <Embed key={key} {...(props as WithKey<typeof block>)} />
          case 'form':
            return <Form key={key} {...(props as WithKey<typeof block>)} />
          case 'prose':
            return <Prose key={key} {...(props as WithKey<typeof block>)} />
          case 'video':
            return <Video key={key} {...(props as WithKey<typeof block>)} />
          case 'component':
            return <Component key={key} {...(props as WithKey<typeof block>)} />
        }
      })}
    </>
  )
}
