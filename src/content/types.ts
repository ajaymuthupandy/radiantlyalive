/**
 * Page content model. Every inner page is a `PageContent`: a hero plus an
 * ordered list of editorial blocks, authored from the matching
 * radiantlyalive.com page with its copy kept verbatim. Rendered by
 * components/templates/ContentPage.tsx; a CMS can produce the same shapes.
 *
 * Inline text fields (`RichText`) accept a tiny markup:
 *   *italic*   **bold**   [label](href)
 * Links go through resolveHref, so source paths that are not rebuilt here
 * point at radiantlyalive.com automatically.
 */
import type { MediaKey } from '@/data/media'

/** Inline text with optional *italic*, **bold** and [label](href). */
export type RichText = string

export interface Cta {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'link'
}

export type Tone = 'canvas' | 'paper' | 'sand' | 'plum' | 'crimson'

interface BlockBase {
  /** Anchor id; also used by in-page links such as "#pricing". */
  id?: string
  tone?: Tone
}

export interface PageHero {
  eyebrow?: string
  title: RichText
  lead?: RichText
  /** Additional short paragraphs under the lead. */
  body?: RichText[]
  image: MediaKey
  imagePosition?: string
  ctas?: Cta[]
  /** Key facts strip directly under the hero (e.g. Duration, Location). */
  facts?: { label: string; value: string }[]
}

/** Large statement: eyebrow, display heading, paragraphs. */
export interface IntroBlock extends BlockBase {
  type: 'intro'
  eyebrow?: string
  heading?: RichText
  paragraphs?: RichText[]
  /** Small closing line, e.g. "900+ graduates · 80+ countries". */
  note?: RichText
  align?: 'left' | 'center'
  ctas?: Cta[]
}

/** Image beside text. */
export interface SplitBlock extends BlockBase {
  type: 'split'
  eyebrow?: string
  heading: RichText
  paragraphs?: RichText[]
  bullets?: RichText[]
  ctas?: Cta[]
  image: MediaKey
  imageSide?: 'left' | 'right'
  /** 'arch' = rounded top (signature shape), 'rect' = editorial crop, 'natural' = uncropped (mockups, small sources). */
  shape?: 'arch' | 'rect' | 'natural'
  note?: RichText
}

/** Numbered or titled points: "Six reasons", modules, steps, inclusions. */
export interface FeaturesBlock extends BlockBase {
  type: 'features'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  numbered?: boolean
  columns?: 2 | 3 | 4
  items: { label?: string; title: RichText; text?: RichText; bullets?: RichText[] }[]
  ctas?: Cta[]
}

export interface CardItem {
  image?: MediaKey
  badge?: string
  eyebrow?: string
  title: RichText
  text?: RichText
  bullets?: RichText[]
  /** Small closing line, e.g. "Best for: …". */
  note?: RichText
  href?: string
  ctaLabel?: string
  /** Extra links under the card (e.g. a healer's modalities). */
  links?: Cta[]
}

/** Image-led cards: programs, events, offerings, healers. */
export interface CardsBlock extends BlockBase {
  type: 'cards'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  columns?: 2 | 3 | 4
  /** Image crop. Posters with baked-in text should use 'natural'. */
  aspect?: 'portrait' | 'landscape' | 'square' | 'natural'
  items: CardItem[]
  ctas?: Cta[]
}

/** Comparison or detail table; stacks into cards on small screens. */
export interface TableBlock extends BlockBase {
  type: 'table'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  columns: string[]
  rows: { label: string; values: RichText[] }[]
  note?: RichText
}

/** Prices with purchase links. */
export interface PricingBlock extends BlockBase {
  type: 'pricing'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  /** Optional column labels for the price values, e.g. ["Standard", "KTP / KITAS"]. */
  priceLabels?: string[]
  tiers: { label: string; prices: string[]; note?: RichText; badge?: string; href?: string; ctaLabel?: string }[]
  notes?: RichText[]
}

/** Time-based rhythm: a sample day, phases, a timeline. */
export interface ScheduleBlock extends BlockBase {
  type: 'schedule'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  items: { time: string; title: RichText; text?: RichText }[]
  note?: RichText
}

export interface QuoteBlock extends BlockBase {
  type: 'quote'
  quote: RichText
  name: string
  context?: string
  image?: MediaKey
}

export interface TestimonialsBlock extends BlockBase {
  type: 'testimonials'
  eyebrow?: string
  heading?: RichText
  items: { quote: RichText; name: string; context?: string }[]
}

export interface StatsBlock extends BlockBase {
  type: 'stats'
  heading?: RichText
  items: { value: string; label: string }[]
}

export interface FaqBlock extends BlockBase {
  type: 'faq'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  items: { question: string; answer: RichText }[]
}

export interface GalleryBlock extends BlockBase {
  type: 'gallery'
  eyebrow?: string
  heading?: RichText
  images: MediaKey[]
}

/** People with portraits: faculty, healers, directory teachers. */
export interface PeopleBlock extends BlockBase {
  type: 'people'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  /** Pull teachers from src/data/teachers.ts by id… */
  teacherIds?: string[]
  /** …or list people inline. */
  people?: { name: string; role?: string; image?: MediaKey; bio?: RichText[]; links?: Cta[] }[]
  columns?: 3 | 4
}

/** Plain bulleted lists side by side, e.g. "Included" / "Not included". */
export interface ListsBlock extends BlockBase {
  type: 'lists'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  lists: { title?: string; items: RichText[] }[]
}

/** Image-backed closing call to action. */
export interface CtaBlock extends BlockBase {
  type: 'cta'
  eyebrow?: string
  heading: RichText
  text?: RichText
  image: MediaKey
  ctas: Cta[]
}

/** Live third-party widgets from the source site. */
export interface EmbedBlock extends BlockBase {
  type: 'embed'
  widget: 'ribbon-schedule' | 'momence-workshops'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  /** Shown before the widget loads and if it fails. */
  fallback: Cta
}

/** Email capture that posts to a configurable endpoint (see .env.example). */
export interface FormBlock extends BlockBase {
  type: 'form'
  form: 'newsletter' | 'waitlist'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  /** Source page that hosts the original form, used when no endpoint is configured. */
  fallbackHref: string
  submitLabel?: string
  successMessage?: RichText
  privacyNote?: RichText
}

/** Long-form text (policies, terms). */
export interface ProseBlock extends BlockBase {
  type: 'prose'
  eyebrow?: string
  heading?: RichText
  sections: { heading?: string; paragraphs: RichText[]; bullets?: RichText[] }[]
}

/** Radiantly Alive's own YouTube films; the player loads only when played. */
export interface VideoBlock extends BlockBase {
  type: 'video'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
  videos: { youtubeId: string; title: string }[]
}

/** Existing interactive components, by name. */
export interface ComponentBlock extends BlockBase {
  type: 'component'
  name: 'class-filter' | 'teacher-grid'
  eyebrow?: string
  heading?: RichText
  lead?: RichText
}

export type Block =
  | IntroBlock
  | SplitBlock
  | FeaturesBlock
  | CardsBlock
  | TableBlock
  | PricingBlock
  | ScheduleBlock
  | QuoteBlock
  | TestimonialsBlock
  | StatsBlock
  | FaqBlock
  | GalleryBlock
  | PeopleBlock
  | ListsBlock
  | CtaBlock
  | EmbedBlock
  | FormBlock
  | ProseBlock
  | ComponentBlock
  | VideoBlock

export interface PageContent {
  /** Route, identical to the radiantlyalive.com path. */
  path: string
  /** <title> (without the site name suffix). */
  title: string
  /** Meta description, from source copy. */
  description: string
  /** Language of the page content (Spanish pages: 'es'). */
  lang?: 'en' | 'es'
  /** Breadcrumb trail above the hero title (excluding Home and the page itself). */
  parent?: { label: string; href: string }
  hero: PageHero
  blocks: Block[]
  /** Structured data to emit in addition to breadcrumbs. */
  schema?: { type: 'course'; name: string; description: string; provider?: string } | { type: 'service'; name: string; description: string }
}
