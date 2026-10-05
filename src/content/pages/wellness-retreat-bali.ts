import type { PageContent } from '../types'

const APPLY = 'mailto:alfarojohanne@gmail.com?'
const HOTELS =
  '[Adiwana Hotels & Resorts](https://adiwanahotels.com/jembawan-resort-ubud-bali/) or [The Udaya Resorts & Spa](https://theudayaresort.com/) or [Calma Ubud](https://calmaubud.com/)'

/** Source: https://www.radiantlyalive.com/wellness-retreat-bali */
export const page: PageContent = {
  path: '/wellness-retreat-bali',
  title: 'Wellness Retreat Me-Time. My Way.',
  description:
    'Take time for yourself on the beautiful island of Bali. Our exclusive wellness retreat offers flexible options of either 4 or 8 days, with unlimited yoga at Radiantly Alive, lunch at Chandra Cafe and four star hotels.',
  parent: { label: 'Bali Retreats', href: '/retreats' },
  hero: {
    eyebrow: 'Wellness Retreat',
    title: 'Me-Time. *My Way.*',
    lead: 'Take time for yourself on the beautiful island of Bali',
    image: 'stayRetreatHero',
    imagePosition: 'object-[50%_55%]',
    ctas: [{ label: 'Apply', href: '#apply' }],
    facts: [
      { label: 'Recharge Me', value: '4 Days & 3 Nights' },
      { label: 'Renew Me', value: '8 Days & 7 Nights' },
      { label: 'From', value: 'IDR 17.5m' },
      { label: 'Start', value: 'At your convenience, subject to availability' },
    ],
  },
  blocks: [
    {
      type: 'split',
      heading: 'Discover a transformative experience tailored to your *personal needs.*',
      paragraphs: [
        'At our retreat, we create a nurturing environment where you can find inner stillness. Immerse yourself in self-care and develop valuable tools to enhance your well-being, such as a morning meditation routine, diverse yoga styles, or simply tuning in to your body and heart.',
        "Our yoga and spiritual practices foster self-awareness, grounding you in your body and breath. By cultivating these powerful habits, you'll learn to navigate life's challenges with calmness and clarity.",
        'Join us and embark on your journey of self-discovery and renewal.',
      ],
      image: 'stayRetreatStillness',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'intro',
      tone: 'paper',
      eyebrow: '4 or 8 days',
      heading: "Choose what's *right for you*",
      paragraphs: [
        'Our exclusive wellness retreat offers flexible options of either 4 or 8 days, allowing you to select the experience that best suits your needs. Your program can commence at your convenience, subject to availability.',
        'Ready to begin your transformative journey? Reach out to Johanne at [alfarojohanne@gmail.com](mailto:alfarojohanne@gmail.com?) for more details. Our retreats are thoughtfully designed to align with your unique goals, creating a customized experience that goes beyond a one-size-fits-all approach. Join us and discover a retreat experience that truly resonates with your vision for growth and renewal.',
      ],
    },
    {
      type: 'pricing',
      id: 'apply',
      eyebrow: 'Apply',
      heading: 'Apply for your exclusive wellness retreat experience with us in *Bali*',
      lead: "Embark on a journey of transformation and rejuvenation with us in Bali. Submit your application today to secure your place in our serene wellness retreat, where personalized experiences await you amidst the island's breathtaking beauty.",
      tiers: [
        {
          label: 'Option 1: Recharge Me |4 Days & 3 Nights',
          prices: ['From IDR 17.5m'],
          note: 'Take a few days off from your routine and focus on yourself. Allow us to take care of the rest...',
          href: APPLY,
          ctaLabel: 'Apply',
        },
        {
          label: 'Option 2: Renew Me | 8 Days & 7 Nights',
          prices: ['From IDR 35m'],
          note: 'Fully disconnect from your everyday life and duties. We are here to support you…',
          href: APPLY,
          ctaLabel: 'Apply',
        },
      ],
      notes: ['+3% online payment processing fee', '[Terms and Conditions](/wellnes-tc)'],
    },
    {
      type: 'lists',
      tone: 'paper',
      heading: "What's *included?*",
      lists: [
        {
          title: 'Option 1: Recharge Me |4 Days & 3 Nights',
          items: [
            '3-days unlimited [yoga class](https://www.radiantlyalive.com/classes) pass at Radiantly Alive',
            '3 days of lunch at Chandra Cafe (selected menu)',
            'Daily fresh coconut water (1 bottle per day)',
            '10% discount on our in-house workshops',
            `4 days & 3 nights in a four star hotel. ${HOTELS}`,
            'Pick-up and drop-off from Denpasar, Bali airport',
            'Additionally choose up to two possible add-on packages',
            'Free shuttle service from your hotel',
            '+3% online payment processing fee',
          ],
        },
        {
          title: 'Option 2: Renew Me | 8 Days & 7 Nights',
          items: [
            '7-day unlimited [yoga class](https://www.radiantlyalive.com/classes) pass at Radiantly Alive',
            '7 days of lunch at Chandra Cafe (selected menu)',
            'Daily fresh coconut water (1 bottle per day)',
            '10% discount in our in-house workshops',
            `8 days & 7 nights in a four star hotel. ${HOTELS}`,
            'Pick-up and drop-off from Denpasar, Bali airport',
            '1 hour balinese massage',
            'Additionally choose up to two possible add-on packages',
            'Free shuttle service from your hotel',
            '+3% online payment processing fee',
          ],
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'IDR 5 millions',
      heading: 'Add-on 1: Experience *Bali*',
      lead: 'Each tour includes a private driver for your convenience and comfort. Customize your experience by selecting two activities from the following enriching options.',
      columns: 3,
      aspect: 'landscape',
      items: [
        {
          image: 'stayAddonTemples',
          eyebrow: 'Rituals & Nature',
          title: 'Purification in Temples',
          text: "Upon arrival in Bali, immerse yourself in a traditional purification ritual at Pura Tirta Empul, where sacred spring waters are believed to cleanse both body and spirit. Next, visit the serene Pura Mengening, an architectural gem rich in cultural and spiritual significance. Finally, journey to Pura Gunung Kawi Tampaksiring, one of Bali's oldest temples, where ancient shrines carved into cliff walls transport you to another era.",
        },
        {
          image: 'stayAddonWaterfall',
          eyebrow: 'Rituals & Nature',
          title: 'Nature at Banyumala Waterfall, Ulun Danu Temple & Jatiluwih',
          text: 'We’ll start the day with a visit to the breathtaking Banyumala Twin Waterfall. Rising 35 meters in the mountainous region of northern Bali, this stunning double cascade flows over rocks and lush vegetation into a natural pool, perfect for a refreshing dip. Next, we’ll explore Ulun Danu Bratan Temple, dedicated to Dewi Danu, the goddess of water. Founded in 1633 at 1,239 meters above sea level within the crater of Mount Catur, this sacred temple on a volcanic lake is one of Bali’s most iconic sights, framed by tranquil waters and majestic mountains. Finally, we’ll enjoy a scenic walk through the Jatiluwih Rice Terraces, an ideal spot for photos and to appreciate Bali’s serene, terraced landscapes.',
        },
        {
          image: 'stayAddonJeep',
          eyebrow: 'Adventure',
          title: 'Ultimate Adventure in Jeeps – Sunrise at Mount Batur',
          text: 'Prepare for an unforgettable early morning as we set out before dawn to witness the sunrise above the clouds from the peak of the famous Mount Batur. You’ll feel as if you’ve landed on another planet, surrounded by the striking contrasts of volcanic sands and lava fields. This thrilling adventure includes an off-road jeep tour across black lava terrain, where we’ll observe the impressive marks left by Batur’s past eruptions. From a scenic viewpoint, take in unmatched panoramic views of Bali, the lake, and the surrounding landscapes. A delicious breakfast is included in the tour.',
        },
        {
          image: 'stayAddonCycling',
          eyebrow: 'Adventure',
          title: 'Bicycle Ride through Kintamani',
          text: 'Start your day with an exhilarating bike ride through the picturesque rice fields of northern Bali. Our mostly flat or downhill route leads through charming traditional villages, where we’ll encounter Hindu temples, lush rice terraces, and beautiful natural scenery. We’ll pause to savor a local coconut-based dessert before heading to Greenkubu for a relaxing buffet lunch in the countryside, surrounded by rice fields.',
        },
        {
          image: 'stayAddonTaro',
          eyebrow: 'Art & Culture',
          title: 'Traditional Taro Village – Coconut Oil Classes & Balinese Offerings (Canang)',
          text: 'Experience the authentic local lifestyle in Taro Village, located 18 kilometers north of Ubud. You’ll be welcomed into the home of Kadek and Ayu, who will share their knowledge of traditional coconut oil production—and you’ll even take home your own bottle of high-quality, homemade organic oil! Next, learn to create canang, the Balinese offerings used in daily rituals. Afterward, explore this charming village of only 60 families, a hidden gem untouched by tourism. We’ll conclude our visit with a purification ritual at the village river, guided by this warm and welcoming family.',
        },
        {
          image: 'stayAddonBatik',
          eyebrow: 'Art & Culture',
          title: 'Batik Painting Classes – Create and Take Home Your Own Artwork',
          text: 'Delve into the artistic world of batik in this creative workshop. Led by Wydia, a master batik artist with over 30 years of experience, you’ll learn this enchanting technique native to Java. Choose from a variety of designs, transfer them onto fabric, apply wax, and paint with vibrant colors. After approximately three hours, you’ll take home your stunning, one-of-a-kind artwork.',
        },
      ],
    },
    {
      type: 'cards',
      tone: 'paper',
      eyebrow: 'IDR 5.5millions',
      heading: 'Add-on 2: Energy *Healing*',
      lead: 'Customize your experience by selecting two sessions from the following enriching options.',
      columns: 3,
      aspect: 'landscape',
      items: [
        {
          image: 'stayHealReiki',
          title: 'Reiki with Devi Ma (60 minutes)',
          text: "Reiki is a powerful healing modality that promotes balance across your physical, emotional, mental, and spiritual bodies. It supports healing for physical illness, mental stress, anxiety, depression, addictions, and inner child traumas. Each session, guided by angels, ascended masters, and sacred mantras from Dr. Mikao Usui, balances your chakras and raises your frequency, aligning you with the Universe's Love and Light.",
        },
        {
          image: 'stayHealBalinese',
          title: 'Balinese Healing Package with Ketut Yoga (90 minutes)',
          text: 'This unique therapeutic experience combines subtle energy work and physical healing. Ketut begins with pranic healing to rebalance the aura and harmonize chi, followed by acupuncture to release energy blocks in the body’s meridians. He concludes with his signature healing massage, easing muscular tension and promoting circulation. You’ll leave feeling deeply balanced and harmonious.',
        },
        {
          image: 'stayHealMassage',
          title: 'Healing Massage Therapy with Made Nawa (60 minutes)',
          text: 'Experience the power of tradition combined with modern techniques in a healing massage therapy session that soothes tension and releases chronic pain. Made’s unique approach blends Ayurvedic, Deep Tissue, Traditional Balinese, Thai massage, Chinese Reflexology, and Pranic energy healing. Leave feeling lighter, with a fully circulated system and lasting calm energy.',
        },
        {
          image: 'stayHealCraniosacral',
          title: 'Biodynamic Craniosacral Therapy with Nirmoha (60 minutes)',
          text: 'Biodynamic craniosacral therapy is a gentle, hands-on approach that supports the body’s natural self-healing. Guided by the body’s inner wisdom, Nirmoha uses resonance to encourage alignment and release psychological patterns and trauma. Clients often experience reduced stress, deep relaxation, resilience, and mental clarity. This therapy is commonly sought for trauma release, chronic pain, digestive issues, and stress management.',
        },
        {
          image: 'stayHealChiNeiTsang',
          title: 'Chi Nei Tsang Abdominal Healing Massage with Nyoman (75 minutes)',
          text: 'Chi Nei Tsang (a.k.a. abdominal healing massage) is a Tao healing art focused on the massage of points around this vital area of the body to increase the flow of energy to specific Organs. It harnesses the principles of Chinese medicine, using primal sounds and a gentle, yet deep technique to release emotions that may be creating unnecessary tension, stress and stagnation in your organs, allowing for proper functioning again!',
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Unlimited Yoga',
      heading: 'As much as *you want!*',
      paragraphs: [
        'Imagine waking up to a daily morning yoga practice of your choice, surrounded by the lush green jungle of Bali and birds singing, the morning sun touching you gently…',
        'From pranayama (Breathwork) and soothing Meditation, to a Gentle Flow, a Foundation class or a stronger Vinyasa Flow, choose what serves you, from dawn to dusk.',
        'Enjoy unlimited access to over 80 classes per week for the duration of your stay.',
      ],
      image: 'trainingJungleShala',
      imageSide: 'left',
      shape: 'rect',
    },
    {
      type: 'split',
      tone: 'paper',
      eyebrow: 'Nourish your body',
      heading: 'Vegan & vegetarian cuisine in our *Chandra Café*',
      paragraphs: [
        'Feel healthy, eat healthy. We’ve created a gorgeous space, connected to our studio, that offers plant-based food, throughout the day.',
        'Chandra Café (named after the ‘moon goddess’) is a wonderfully homey place to chill before your classes and therapies. Refuel post-class or simply come and hang out, whenever you please. As part of the package, you’ll receive some of your meals from the café.',
      ],
      image: 'stayChandraCafeTwo',
      imageSide: 'right',
      shape: 'natural',
    },
    {
      type: 'cards',
      tone: 'plum',
      heading: 'Your *accommodation*',
      columns: 3,
      aspect: 'portrait',
      items: [
        {
          image: 'stayHotelAdiwana',
          title: 'Adiwana Hotels & Resorts',
          text: 'Adiwana Resort Jembawan is a boutique wellness retreat in the heart of Ubud that focuses on body, mind and spirit of rejuvenation. With its team of onsite experts, including an Ayurvedic practitioner and yoga instructor, the resort offers lifestyle programs that are tailored to address any specific health concerns you may have. Designed by Ground Kent Architect, based in Perth, the spacious rooms and suites are built with contemporary Bali in mind.',
          href: 'https://adiwanahotels.com/jembawan-resort-ubud-bali/',
        },
        {
          image: 'stayHotelUdaya',
          title: 'The Udaya Resorts & Spa',
          text: 'The Udaya Resorts & Spa is a space of zen and tranquility designed into a luxurious Bali traditional architecture. The award-winning resort allows you to breathe a life of tropical forest in a luxurious way surrounded by lush greenery and clear skies, all to your best satisfaction.',
          href: 'https://theudayaresort.com/',
        },
        {
          image: 'stayHotelCalma',
          title: 'Calma Ubud',
          text: 'Calma Ubud is consciously designed to blend seamlessly with Bali’s natural surroundings, reminding us of that beauty lies in simplicity. With a warm and welcoming atmosphere, this piece of paradise is a sublime retreat to unwind, reconnect with yourself and be one with nature in perfect calmness.',
          href: 'https://calmaubud.com/',
        },
      ],
    },
    {
      type: 'gallery',
      images: [
        'stayHotelAdiwanaRoom',
        'stayHotelUdayaTwo',
        'stayHotelCalmaTwo',
        'stayYogaClassTwo',
        'stayChandraCafe',
        'stayRetreatSelfCare',
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Me-Time. My Way.',
      heading: 'Ready to begin your *transformative journey?*',
      text: 'Reach out to Johanne at alfarojohanne@gmail.com for more details.',
      image: 'stayRetreatRenewal',
      ctas: [
        { label: 'Apply', href: APPLY },
        { label: 'Terms and Conditions', href: '/wellnes-tc', variant: 'secondary' },
      ],
    },
  ],
  schema: {
    type: 'service',
    name: 'Wellness Retreat Me-Time. My Way.',
    description:
      'Our exclusive wellness retreat offers flexible options of either 4 or 8 days, allowing you to select the experience that best suits your needs.',
  },
}
