import type { PageContent } from '../types'

/**
 * Source: https://www.radiantlyalive.com/healing-studio
 * "Make an appointment" opens a Squarespace lightbox form on the source (no
 * URL), so it points at the contact form with the Healings topic preselected.
 * Modality pages are not rebuilt here, so their links resolve to the source.
 */
const APPOINTMENT = '/contact?topic=healing'

export const page: PageContent = {
  path: '/healing-studio',
  title: 'Studio Healings',
  description:
    'Studio Healings at Radiantly Alive Ubud. Physical | Emotional | Spiritual: Reiki, Balinese healing, healing massage, craniosacral therapy, Chi Nei Tsang, Ayurvedic consultations and more.',
  parent: { label: 'Ubud Studio', href: '/classes' },
  hero: {
    eyebrow: 'Radiantly Alive Ubud',
    title: 'Studio *Healings*',
    lead: 'Physical | Emotional | Spiritual',
    image: 'studioHealingsHero',
    ctas: [{ label: 'Make an appointment', href: APPOINTMENT }],
  },
  blocks: [
    {
      type: 'intro',
      eyebrow: 'Overview',
      heading: 'Overview Studio *Healings*',
      paragraphs: ['Please contact us by clicking the "Make an Appointment" button below.'],
      ctas: [{ label: 'Make an appointment', href: APPOINTMENT }],
    },
    {
      type: 'cards',
      tone: 'paper',
      columns: 4,
      aspect: 'portrait',
      items: [
        {
          image: 'stayHealerDeviMa',
          title: 'Devi Ma',
          links: [
            { label: 'Golden Ray Healing', href: '/bali-healing/golden-ray-healing' },
            { label: 'Reiki', href: '/bali-healing/reiki-ubud' },
            { label: 'Shamanic Sound Healing', href: '/bali-healing/sound-healing-ubud' },
            { label: 'Akashic Soul Reading', href: '/akashic-soul-reading' },
            { label: 'Womb Healing', href: '/womb-healing' },
          ],
        },
        {
          image: 'stayHealerKetut',
          title: 'Ketut Yoga',
          links: [
            { label: 'Balinese Healing Package', href: '/bali-healing/balinese-healing-package' },
            { label: 'Pranic Acupuncture', href: '/bali-healing/acupuncture-ubud' },
          ],
        },
        {
          image: 'studioHealerMadeNawa',
          title: 'Made Nawa',
          links: [{ label: 'Healing Massage Therapy', href: '/bali-healing/healing-massage-ubud' }],
        },
        {
          image: 'teacherNirmoha',
          title: 'Nirmoha',
          links: [
            { label: 'Somatic Breath Trauma Release', href: '/bali-healing/somatic-breath-trauma-release' },
            { label: 'Biodynamic Craniosacral Therapy', href: '/biodynamic-craniosacral-therapy' },
            { label: 'Gemstone Energy Medicine', href: '/bali-healing/gemstone-energy-medicine' },
            { label: 'Somatic Experiencing (SE)', href: '/bali-healing/somatic-experiencing' },
            { label: 'Improving Eye Health', href: '/bali-healing/improving-eye-health' },
            { label: 'Inner Child Healing', href: '/bali-healing/inner-child-healing' },
            { label: 'Psoas Release', href: '/bali-healing/psoas-release' },
          ],
        },
        {
          image: 'studioHealerNyomanSudiasa',
          title: 'Nyoman Sudiasa',
          links: [{ label: 'Chi Nei Tsang | Abdominal Healing Massage', href: 'https://www.radiantlyalive.com/bali-healing/chi-nei-tsang' }],
        },
        {
          image: 'studioHealerMichaelGreen',
          title: 'Michael Green',
          links: [{ label: 'Ayurvedic Dietary Consultations', href: '/ayurvedic-dietary-consultations' }],
        },
        {
          image: 'studioHealerDewaOka',
          title: 'Dewa Oka',
          links: [{ label: 'Colonic Hydrotherapy', href: '/bali-healing/ubud-colonic' }],
        },
        {
          image: 'studioHealerZara',
          title: 'Zara',
          links: [{ label: 'Integrated Intuitive Healing', href: '/integrated-intuitive-healing' }],
        },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Radiantly Alive Ubud',
      heading: 'Physical | Emotional | *Spiritual*',
      text: 'Please contact us by clicking the "Make an Appointment" button below.',
      image: 'healingEnergy',
      ctas: [{ label: 'Make an appointment', href: APPOINTMENT }],
    },
  ],
  schema: {
    type: 'service',
    name: 'Studio Healings',
    description:
      'Physical, emotional and spiritual healing sessions at Radiantly Alive Ubud: Golden Ray Healing, Reiki, Shamanic Sound Healing, Balinese Healing, Pranic Acupuncture, Healing Massage Therapy, Biodynamic Craniosacral Therapy, Chi Nei Tsang, Ayurvedic Dietary Consultations, Colonic Hydrotherapy and more.',
  },
}
