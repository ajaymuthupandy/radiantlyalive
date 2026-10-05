import type { PageContent } from '../types'

const SIGN_UP = 'https://radiantly-alive-online-community.mn.co/sign_up'

/** Source: https://www.radiantlyalive.com/ra-online-monthly-membership (also served at /online-studio). */
export const page: PageContent = {
  path: '/ra-online-monthly-membership',
  title: 'Radiantly Alive Online Studio & Community',
  description:
    'Find holistic practices to support you in your journey of personal growth exploration and transformation in our online community. Over 425 classes in 16 Styles. 14 day FREE Trial.',
  hero: {
    eyebrow: 'Online Studio & Community',
    title: 'radiantly alive *online*',
    lead: 'stay connected stay radiantly alive',
    image: 'onlineHomeMeditation',
    ctas: [{ label: '14-day FREE Trial now', href: SIGN_UP }],
  },
  blocks: [
    {
      type: 'cards',
      eyebrow: 'Asana · Meditation · Mobility · Sadhana',
      heading: 'Find holistic practices to support you in your journey of personal growth exploration and transformation in our *online community.*',
      columns: 4,
      aspect: 'landscape',
      items: [
        {
          image: 'onlineAsana',
          title: 'Asana',
          text: 'Radiantly Alive Vinyasa, Hatha, Yin, Embodied Flow & everything in between. Enjoy the physical practice of yoga as part of your daily ritual and routine',
        },
        {
          image: 'onlineMeditation',
          title: 'Meditation',
          text: 'Use holistic practices of breathwork, meditation, yoga nidra & qigong to support balance in your energy, mindset and emotions',
        },
        {
          image: 'onlineMobility',
          title: 'Mobility',
          text: 'Take care of your joints and build strength to advance in your practice and move towards asanas in a structured and progressive way',
        },
        {
          image: 'onlineSadhana',
          title: 'Sadhana',
          text: 'You can experience the magic of the Sadhanas from our teacher trainings including the class breakdown and understanding sequencing',
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      heading: 'We bring the magic of Bali to *wherever you are* in the world',
      paragraphs: [
        'Radiantly Alive Online is a community of like-minded people that are passionate about Yoga, holistic living and personal growth.',
        'We envision this as a safe space for deep connections and support, way beyond the “press play” type of platform. While we practice, learn and grow through our own individual processes, we will also be holding, supporting and inspiring each other along the way. The collective support from around the globe will be felt.',
        'We will gather live online for broadcasted yoga classes, talks & satsangs, and go through all sorts of challenges together. We will realise that we are not alone on this life journey and are part of something bigger.',
        'We want to offer you a space that brings together an uplifting community, amazing tools to deepen your practice and stay in touch with the magical Bali vibes.',
      ],
      ctas: [{ label: '14 day FREE Trial', href: SIGN_UP }],
      note: '— Come practice with us and join our Online Studio —',
      image: 'stayOnlineMagicBali',
      imageSide: 'right',
      shape: 'rect',
    },
    {
      type: 'cards',
      heading: "What's in it *for you?*",
      columns: 3,
      aspect: 'square',
      items: [
        {
          image: 'stayOnlineDevelop',
          title: 'Develop Your Practice',
          text: 'Over 425 classes in 16 Styles to continue developing your practice and up to 4 new classes released every week',
        },
        {
          image: 'stayOnlineGrowing',
          title: 'Keep Growing',
          text: 'Weekly content to keep you motivated and inquisitive into developing yourself. Dive into different Challenges & Programs created specifically for you!',
        },
        {
          image: 'stayOnlineCommunity',
          title: 'Be Part Of The Community',
          text: 'Join like minded people, feel inspired and supported on your journey',
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      heading: 'Connect with us from *anywhere at anytime*, just download the mighty network app.',
      ctas: [{ label: '14 day FREE Trial', href: SIGN_UP }],
      image: 'stayOnlineDevices',
      imageSide: 'left',
      shape: 'natural',
    },
    {
      type: 'cta',
      heading: 'Come practice with us and join our *Online Studio*',
      image: 'onlineHomePractice',
      ctas: [{ label: '14-day FREE Trial now', href: SIGN_UP }],
    },
  ],
}
