import { shalas } from '@/data/studio'
import type { MediaKey } from '@/data/media'
import type { PageContent } from '../types'

/**
 * Source: https://www.radiantlyalive.com/shala-rental
 * Shala details are verbatim from the source (also in src/data/studio.ts).
 * The source's "Shala Rental Form" is a Squarespace form, so the enquiry CTA
 * opens the contact form with the programme prefilled.
 */
const ENQUIRY = '/contact?topic=other&programme=Shala%20Rental'

const prices: Record<string, [string, string]> = {
  river: ['IDR 7.3 millions/day + tax', 'IDR 1.2 millions/hour + tax'],
  jungle: ['IDR 6.5 millions/day + tax', 'IDR 1.1 million/hour + tax'],
  bamboo: ['IDR 5.7 millions/day + tax', 'IDR 975 thousand/hour + tax'],
  upper: ['IDR 7.3 millions/day + tax', 'IDR 1.2 millions/hour + tax'],
  sky: ['IDR 4.1 millions/day + tax', 'IDR 820 thousand/hour + tax'],
}

const cardImages: Record<string, MediaKey> = {
  river: 'shalaRiver',
  jungle: 'shalaJungle',
  bamboo: 'studioBambooShalaWide',
  upper: 'studioUpperShalaWide',
  sky: 'studioSkyShalaWide',
}

export const page: PageContent = {
  path: '/shala-rental',
  title: 'Shala Rental',
  description:
    'Are you looking for a peaceful, well-equipped space to host your yoga classes, workshops, trainings or retreats? Choose from five unique shalas in the heart of Ubud, available by the hour, day, or week.',
  parent: { label: 'Ubud Studio', href: '/classes' },
  hero: {
    eyebrow: 'Radiantly Alive Ubud',
    title: 'Shala *Rental*',
    lead: 'Are you looking for a peaceful, well-equipped space to host your yoga classes, workshops, trainings or retreats?',
    image: 'studioShalaRentalHero',
  },
  blocks: [
    {
      type: 'split',
      heading: 'Choose from five unique shalas, each offering *its own special charm.*',
      paragraphs: [
        'Look no further! Our beautiful Yoga Shala are available for rent, offering the perfect environment to support and enhance your practice.',
      ],
      image: 'studioShalaRentalIntro',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'features',
      tone: 'paper',
      heading: 'Why You’ll Love Our *Yoga Shalas:*',
      columns: 3,
      items: [
        {
          title: 'Spacious & Tranquil',
          text: 'Our shalas offer a harmonious blend of peace and spaciousness, bathed in natural light and surrounded by calming vibes.',
        },
        {
          title: 'Comfortable Capacity',
          text: 'With 5 different shalas options, you can accommodate a small group to group of 70 pax.',
        },
        {
          title: 'Flexible Rental Options',
          text: 'Rent by the hour, day, or week to fit your unique schedule and needs.',
        },
        {
          title: 'Fully Equipped',
          text: 'Everything you need is at your fingertips! Our shalas are stocked with mats, blocks, straps, bolsters, and blankets to support every pose and meditation.',
        },
        {
          title: 'Prime Locations',
          text: 'Located in the heart of Ubud, with easy access to cultural sites, popular restaurant, and a variety of nearby accommodations, making it convenient for everyone to join.',
        },
        {
          title: 'Enchanting Ambiance',
          text: 'Let the jungle vibes inspire you to connect with nature, with lush plants and trees, soft candlelight, and gentle music, your sessions will be a sensory delight.',
        },
        {
          title: 'Convenient Amenities',
          text: 'Enjoy the use of changing rooms, restrooms, and cozy cafe area offering nourishing healthy meals, tea and coffee facilities for a post-practice refreshment.',
        },
      ],
    },
    {
      type: 'lists',
      heading: 'Perfect *For:*',
      lists: [
        {
          items: [
            'Teacher Trainings',
            'Private Yoga Classes',
            'Workshops',
            'Meditation Sessions',
            'Private Healing Sessions',
            'Rejuvenating Wellness Retreats',
          ],
        },
      ],
    },
    {
      type: 'cards',
      id: 'shalas',
      tone: 'paper',
      heading: 'Our Yoga *Shalas*',
      columns: 3,
      aspect: 'landscape',
      items: shalas.map((s) => ({
        image: cardImages[s.id],
        title: s.name,
        text: `**Ambience:** ${s.ambience}`,
        bullets: [`**Size:** ${s.size}`, `Capacity: ${s.capacity}`, `**Price:** ${prices[s.id][0]}`, prices[s.id][1]],
        note: `**Special Features:** ${s.feature}`,
      })),
    },
    {
      type: 'intro',
      eyebrow: 'Add-ons on request',
      paragraphs: [
        'We would love to provide you with all the necessary tools, decor, and equipment you may need to make your event memorable for attendees. By request, we can organize flower mandalas, a projector and screen, microphones and a sound system, whiteboards, and a skeleton for your anatomy classes.',
      ],
    },
    {
      type: 'gallery',
      tone: 'paper',
      images: [
        'studioUpperShalaWide',
        'studioRiverShalaWide',
        'studioJungleShalaWide',
        'studioRiverShalaDetail',
        'studioBambooShalaWide',
        'studioSkyShalaWide',
      ],
    },
    {
      type: 'cta',
      heading: 'Interested?',
      image: 'studioShalaRentalHero',
      ctas: [{ label: 'Shala Rental Form', href: ENQUIRY }],
    },
  ],
  schema: {
    type: 'service',
    name: 'Shala Rental',
    description:
      'Five yoga shalas for rent in the heart of Ubud, Bali, by the hour, day, or week: River, Jungle, Bamboo, Upper and Sky Shala, for teacher trainings, workshops, private classes, meditation, healing sessions and retreats.',
  },
}
