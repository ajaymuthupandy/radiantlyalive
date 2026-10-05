import type { PageContent } from '../types'

/**
 * Source: https://www.radiantlyalive.com/short-trainings-overview
 * Training detail pages are not rebuilt here, so their links resolve to the
 * source site. Posters carry baked-in titles, so cards use `aspect: 'natural'`.
 */
export const page: PageContent = {
  path: '/short-trainings-overview',
  title: 'Short Trainings & Immersions',
  description:
    'Deepen one practice, over a few focused days. Short trainings and immersions in Ubud, Bali, each held once, each led by a teacher who has practised this specific thing for years.',
  parent: { label: 'Ubud Studio', href: '/classes' },
  hero: {
    eyebrow: 'Short Trainings & Immersions · Ubud, Bali',
    title: 'Deepen one practice, *over a few focused days.*',
    lead: 'Five trainings between now and next spring, each held once, each led by a teacher who has practised this specific thing for years. Not a certification pathway, just a few days that go deep on one thing.',
    image: 'studioClassScheduleHero',
  },
  blocks: [
    {
      type: 'cards',
      eyebrow: '2027 Training',
      columns: 2,
      aspect: 'natural',
      items: [
        {
          image: 'eventMysoreSeason',
          eyebrow: '2027 | March 16 - April 4',
          title: 'Bali Mysore Season & Three Week Immersion',
          text: "Three weeks of Mysore-method Ashtanga with two of the tradition's most recognised teachers. Deposits are already open.",
          note: '**Faculties:** Kino MacGregor and Tim Feldmann',
          href: '/bali-mysore-season-three-week-immersion-kino-tim-2027',
          ctaLabel: 'RESERVE NOW',
        },
      ],
    },
    {
      type: 'cards',
      tone: 'paper',
      eyebrow: 'Between now and December',
      heading: 'Five more, *one at a time.*',
      columns: 3,
      aspect: 'natural',
      items: [
        {
          image: 'eventDhrupad',
          eyebrow: '2026 | October 6 - 8',
          title: '3 Day Immersive: The Mystical Voice of Dhrupad',
          note: '**Faculty:** Dhani Gundecha',
          href: '/3day-immersive-mystical-voice-dhrupad-dhani',
          ctaLabel: 'RESERVE NOW',
        },
        {
          image: 'eventEnergyMedicine',
          eyebrow: '2026 | October 19 - 20',
          title: 'Shamanic Reiki Energy Medicine Lv. 1',
          note: '**Faculty:** Devi Ma',
          href: '/energy-medicine-reiki-with-devi-ma',
          ctaLabel: 'RESERVE NOW',
        },
        {
          image: 'eventHimalayanKriya',
          eyebrow: '2026 | October 20 - 27',
          title: 'Himalayan Kriya Yoga Lv. 1',
          note: '**Faculties:** Samten & Nora',
          href: '/himalayan-kriya-yoga-level-1-teacher-training-samten-nora',
          ctaLabel: 'RESERVE NOW',
        },
        {
          image: 'eventAshtangaIntensive',
          eyebrow: '2026 | November 23 - 29',
          title: 'Ashtanga Intensive',
          note: '**Faculties:** David Robson & Jelena Vasic',
          href: '/ashtanga-intensive-david-jelena',
          ctaLabel: 'RESERVE NOW',
        },
        {
          image: 'eventIntegratedBody',
          eyebrow: '2026 | December 2 - 7',
          title: 'The Integrated Body: Architecture of Ease & The Art of Self-Healing',
          note: '**Faculty:** Brett Wearne',
          href: '/integrated-body-architecture-ease-art-self-healing-brett',
          ctaLabel: 'RESERVE NOW',
        },
      ],
      ctas: [{ label: 'Terms of service', href: '/terms-of-service-studio', variant: 'link' }],
    },
    {
      type: 'cards',
      eyebrow: 'Looking for something else',
      heading: 'A short training is not *the only way in.*',
      columns: 3,
      items: [
        {
          eyebrow: 'Daily Classes',
          title: 'The regular schedule, every day of the week.',
          href: '/classes',
          ctaLabel: 'Go There',
        },
        {
          eyebrow: 'Workshop & Events',
          title: 'One afternoon or evening, no multi-day commitment.',
          href: '/studio-workshops-events-ubud',
          ctaLabel: 'Go There',
        },
        {
          eyebrow: 'Teacher Training',
          title: 'The 200hr and 300hr certification pathway.',
          href: '/yoga-teacher-training-2026-1',
          ctaLabel: 'Go There',
        },
      ],
    },
  ],
}
