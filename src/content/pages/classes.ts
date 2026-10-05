import { classPasses, passNotes, privateClass, studioPolicies, unlimitedPasses } from '@/data/classes'
import type { PageContent } from '../types'

/**
 * Source: https://www.radiantlyalive.com/classes
 * Pass prices, policies, private-class copy and class descriptions live in
 * src/data/classes.ts (verbatim from the source) and are shared with the
 * homepage. "Book private class" opens a Squarespace lightbox form on the
 * source (no URL), so it points at the contact form with the topic preselected.
 */
export const page: PageContent = {
  path: '/classes',
  title: 'Class Schedule',
  description:
    'Experience a yoga studio with a foundation built in tradition and authenticity in Ubud, Bali. Book your class, see class passes and rates, and read every class description.',
  hero: {
    eyebrow: 'Radiantly Alive Ubud',
    title: 'Class *Schedule*',
    lead: 'Schedules are published the week before. Or come to the studio and book directly with our reception staff.',
    image: 'studioClassScheduleHero',
    ctas: [
      { label: 'Passes & rates', href: '#pass' },
      { label: 'Class descriptions', href: '#desc', variant: 'secondary' },
    ],
  },
  blocks: [
    {
      type: 'split',
      heading: 'Experience a yoga studio with a foundation built in *tradition and authenticity.*',
      paragraphs: [
        'Feel pampered by a staff team that is 100% dedicated to uplifting all who wish to live a fuller, happier, healthier life. Welcome to our radiant community!',
      ],
      image: 'studioCommunityClass',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'embed',
      id: 'schedule',
      widget: 'ribbon-schedule',
      tone: 'paper',
      heading: 'Book Your Class *Below*',
      lead: 'or come to our studio to book directly with our reception staff. Our class schedules are published the week before. To see upcoming classes, check this page at a later date for further updates.',
      fallback: { label: 'Book on Momence', href: 'https://momence.com/Radiantly-Alive' },
    },
    {
      type: 'features',
      heading: 'Before You *Come*',
      numbered: true,
      columns: 3,
      items: studioPolicies.map((p) => ({ title: p.title, text: p.body })),
    },
    {
      type: 'pricing',
      id: 'pass',
      tone: 'paper',
      eyebrow: 'Passes & rates',
      heading: 'Class *Passes*',
      lead: passNotes[0],
      priceLabels: ['Standard', 'KTP / KITAS'],
      tiers: classPasses.map((p) => ({
        label: p.label,
        prices: [p.standard, p.local ?? ''],
        href: p.href,
        ctaLabel: 'Purchase',
      })),
    },
    {
      type: 'pricing',
      tone: 'paper',
      eyebrow: 'Class Packages',
      heading: 'Unlimited *Pass*',
      lead: passNotes[1],
      priceLabels: ['Price'],
      tiers: unlimitedPasses.map((p) => ({
        label: p.label,
        prices: [p.standard],
        href: p.href,
        ctaLabel: 'Purchase',
      })),
      notes: [passNotes[2], passNotes[3]],
    },
    {
      type: 'component',
      id: 'desc',
      name: 'class-filter',
      eyebrow: 'Find your practice',
      heading: 'Class *Descriptions*',
    },
    {
      type: 'split',
      tone: 'plum',
      eyebrow: 'Private Class',
      heading: 'One teacher. *Your practice.*',
      paragraphs: [privateClass.body, '**Experience**'],
      bullets: privateClass.benefits,
      note: `**Price:** ${privateClass.prices.join(' ')} · **Duration:** ${privateClass.duration} · ${privateClass.note.replace(/^\*/, '\\*')}`,
      ctas: [{ label: 'Book private class', href: '/contact?topic=private' }],
      image: 'studioPrivateClass',
      imageSide: 'left',
      shape: 'rect',
    },
  ],
}
