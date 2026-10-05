import type { PageContent } from '../types'

/**
 * Source: https://www.radiantlyalive.com/bali-healings-online
 * "Make an appointment" opens a Squarespace lightbox form on the source (no URL),
 * so it opens this site's contact form with the healing topic preset.
 */
const APPOINTMENT = '/contact?topic=healing&programme=Online%20Healings'

export const page: PageContent = {
  path: '/bali-healings-online',
  title: 'Online Healings',
  description:
    'Radiantly Alive Online Healings. Physical, emotional and spiritual healing wherever you are, from an incredible team of therapists from various modalities who deliver palpable and powerful results.',
  parent: { label: 'Online Studio', href: '/ra-online-monthly-membership' },
  hero: {
    eyebrow: 'Radiantly Alive',
    title: 'Online *Healings*',
    lead: 'Physical | Emotional | Spiritual',
    body: ['Be Healed Wherever You Are'],
    image: 'stayHealingsHero',
    ctas: [{ label: 'Make an appointment', href: APPOINTMENT }],
  },
  blocks: [
    {
      type: 'intro',
      eyebrow: 'Radiantly Alive Online Healings',
      heading: 'The most powerful and direct way to restore and improve *your Radiance*',
      paragraphs: [
        'At Radiantly Alive we are interested in the most powerful and direct way to restore and improve your Radiance. We’ve brought together an incredible team of therapists from various modalities who deliver palpable and powerful results. From modern to traditional, our guideline is what works.',
        'Please contact us to make an appointment by clicking the button below. Please note that the session will be confirmed once we’ve received the payment.',
      ],
      ctas: [{ label: 'Make an appointment', href: APPOINTMENT }],
    },
    {
      type: 'people',
      tone: 'paper',
      eyebrow: 'Our therapists',
      heading: 'Be Healed *Wherever You Are*',
      columns: 4,
      people: [
        {
          name: 'Amy Thiessen',
          image: 'stayHealerAmy',
          links: [{ label: 'In Resonance Coaching', href: '/in-resonance-coaching-online' }],
        },
        {
          name: 'Devi Ma',
          image: 'stayHealerDeviMa',
          links: [
            { label: 'Akashic Soul Reading', href: '/akashic-soul-readings-online' },
            { label: 'Golden Ray Healing', href: '/online-golden-ray-healing' },
            { label: 'Shamanic Reiki', href: '/shamanic-reiki-online' },
            { label: 'Spiritual Life Coach', href: '/spiritual-life-coach-online' },
            { label: 'Meditation/Breathwork Practices', href: '/meditation/breathwork-practices-online' },
          ],
        },
        {
          name: 'Ketut Yoga',
          image: 'stayHealerKetut',
          links: [{ label: 'Pranic Healing', href: '/online-pranic-healing' }],
        },
        {
          name: 'Nirmoha',
          image: 'teacherNirmoha',
          links: [{ label: 'Somatic Breath Trauma Release', href: '/somatic-breath-trauma-release-online' }],
        },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Physical | Emotional | Spiritual',
      heading: 'Please contact us to *make an appointment*',
      text: 'Please note that the session will be confirmed once we’ve received the payment.',
      image: 'healingEnergy',
      ctas: [{ label: 'Make an appointment', href: APPOINTMENT }],
    },
  ],
  schema: {
    type: 'service',
    name: 'Radiantly Alive Online Healings',
    description:
      'At Radiantly Alive we are interested in the most powerful and direct way to restore and improve your Radiance. From modern to traditional, our guideline is what works.',
  },
}
