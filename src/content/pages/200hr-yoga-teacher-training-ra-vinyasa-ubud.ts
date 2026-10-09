import type { PageContent } from '../types'
import { yearsRunning } from '@/data/site'

const SOURCE = 'https://www.radiantlyalive.com/200hr-yoga-teacher-training-ra-vinyasa-ubud'

/** Source: https://www.radiantlyalive.com/200hr-yoga-teacher-training-ra-vinyasa-ubud */
export const page: PageContent = {
  path: '/200hr-yoga-teacher-training-ra-vinyasa-ubud',
  title: '200-Hour Yoga Teacher Training in Ubud, Bali',
  description:
    'Most teacher trainings prepare you to pass a test. This one prepares you to stand in front of a room. For 24 days, you train inside Radiantly Alive’s working shala in the heart of Ubud. Yoga Alliance RYS-200.',
  parent: { label: 'Yoga Teacher Trainings', href: '/yoga-teacher-training-2026-1' },
  hero: {
    eyebrow: 'Yoga Teacher Training · Ubud, Bali · 200-Hour · Yoga Alliance',
    title: '24 Days in Bali. Train in a Real Studio. *Leave Ready to Teach.*',
    lead: 'Most teacher trainings prepare you to pass a test. This one prepares you to stand in front of a room. For 24 days, you train inside Radiantly Alive’s working shala in the heart of Ubud. A studio rooted here since 2010, not hired for the occasion.',
    body: ['Whether you’re coming to teach, or simply to change.'],
    image: 'ytt200Hero',
    imagePosition: '60% 40%',
    ctas: [{ label: 'GET IN TOUCH', href: '#contact' }],
    facts: [
      { label: 'Duration', value: '24 days' },
      { label: 'Location', value: 'Ubud, Bali' },
      { label: 'Certification', value: 'Yoga Alliance RYS-200' },
      { label: 'Cohort', value: 'Up to 32 students' },
    ],
  },
  blocks: [
    {
      type: 'video',
      eyebrow: 'INSIDE THE TRAINING',
      heading: '24 days in Ubud. *What it actually feels like.*',
      videos: [{ youtubeId: '5UXuue16ynU', title: '24 days in Ubud' }],
    },
    {
      type: 'stats',
      tone: 'plum',
      items: [
        { value: '1,000+', label: 'graduates' },
        { value: '50+', label: 'trainings delivered' },
        { value: '4.9/5', label: 'Yoga Alliance rating' },
        { value: '90+', label: 'countries represented' },
        { value: 'Since 2010', label: 'rooted in Ubud' },
      ],
    },
    {
      type: 'intro',
      eyebrow: 'WHAT GRADUATES CARRY WITH THEM',
      heading: 'Words from people *who were here*',
      paragraphs: [`From 1,000+ graduates across 80 countries. Collected over ${yearsRunning()} years of immersions in Ubud.`],
      note: '◆ Yoga Alliance RYS-200 ◆ E-RYT 500 Faculty ◆ 1,000+ Alumni Network ◆ 150+ Yoga Alliance Reviews',
    },
    {
      type: 'testimonials',
      items: [
        {
          quote:
            'The YTT is expansive, heart-opening, and such a journey for me. It’s like I’ve been waiting my whole life for this moment. I truly believe I’ve discovered the beginning of a sense of purpose, and I know I’ll be supported throughout this next chapter of my life. I feel an overwhelming amount of gratitude because there’s so much I’ve learned here, and there’s so much I’ve learned about myself that I want to share with the world.',
          name: 'Kelly Ford',
          context: 'USA – Nov 2025',
        },
        {
          quote:
            'I chose Radiantly Alive because of its focus on community and being grounded. You can really feel how authentic the teachers and the studio are. I felt safe here from the beginning.',
          name: 'Zeedan',
          context: 'Sudan/Croatia – Jan 2026',
        },
        {
          quote:
            'To be honest, I wasn’t sure about becoming a teacher before the training, but after the training, I feel ready and excited to become one. I think the journey helps me release what need to be released, building my confidence, and guide me to see yoga as a holistic way of living – not only asanas.',
          name: 'Sandra',
          context: 'Indonesia – May 2026',
        },
      ],
    },
    {
      type: 'features',
      eyebrow: 'WHO IS THIS FOR',
      heading: 'This training is *for you if…*',
      lead: 'This is not a retreat. Not a fast-track certificate. It’s a rigorous, heart-opening immersion, built to challenge you, support you, and change you.',
      columns: 3,
      tone: 'paper',
      items: [
        {
          title: 'You want to teach',
          text: 'You’re ready to step onto the teaching path technically grounded, emotionally equipped, confident in your own voice. Not performing a sequence. Actually leading a room.',
        },
        {
          title: 'You want to go deeper',
          text: 'You’ve been practising for years and something in you is asking for more. More understanding. More stillness. More honesty. This is the container that makes space for that.',
        },
        {
          title: 'You’re ready for a change',
          text: 'You’re at a turning point and you know it. Twenty-four days in Bali, inside a real studio community, to go inside yourself with structure and support around you.',
        },
      ],
    },
    {
      type: 'form',
      form: 'newsletter',
      eyebrow: 'Before you decide',
      heading: 'Most people misunderstand what a YTT *actually demands.*',
      lead: 'Before you apply, read the guide we share with every serious candidate. What this training is, what it isn’t, and the questions worth sitting with first.',
      fallbackHref: SOURCE,
      submitLabel: 'READ THE GUIDE',
      privacyNote: 'Honest. No agenda. Takes five minutes.',
      tone: 'paper',
    },
    {
      type: 'features',
      eyebrow: 'WHY RADIANTLY ALIVE',
      heading: 'Four things that *set this apart*',
      columns: 2,
      items: [
        {
          label: '01 – Faculty',
          title: 'Faculty who live what they teach',
          text: 'Our lead instructors have been practising and teaching for 10+ years. They’re not brought in for the training month then gone. They’re here year-round, in the shala, in the community, in the work.',
        },
        {
          label: '02 – Cohort',
          title: 'Small cohorts. Real relationships.',
          text: 'Maximum 32 students, in average 24 per cohort. A faculty team of 5–7. You will be known here, not managed, not processed. The people you train alongside will likely be people you carry with you long after Bali.',
        },
        {
          label: '03 – Studio',
          title: 'A real studio. Not a temporary one.',
          text: 'Radiantly Alive has been rooted in Ubud since 2010. You’re not training in a venue hired for a month. You’re immersed in an active studio – with the depth and accumulated quiet that only comes with time.',
        },
        {
          label: '04 – Community',
          title: 'The community doesn’t close at graduation.',
          text: '900+ alumni across 80+ countries. Regular RA gatherings in Berlin, Barcelona, Paris, Amsterdam, and beyond. You leave with a network that’s still in motion, not a certificate you file away.',
        },
      ],
      ctas: [{ label: 'ASK US ANYTHING', href: '#contact' }],
    },
    {
      type: 'features',
      eyebrow: 'THE TRAINING · Curriculum',
      heading: '6 modules. *One complete foundation.*',
      lead: 'This immersion doesn’t just teach you what to say in a class. It changes how you hold yourself, how you see a room, and how you navigate the work of actually being with people.',
      columns: 3,
      tone: 'paper',
      items: [
        {
          label: '01 – Module',
          title: 'The Inner Journey',
          text: 'Self-inquiry, authentic expression, personal development. Build self-confidence, clarity, and a mindset that thrives on transformation.',
        },
        {
          label: '02 – Module',
          title: 'Teaching lab: voice, sequencing & presence',
          text: 'Find your teaching voice. Intelligent sequencing, effective cueing, creative theming. Learn to hold a room with clarity, compassion, and the kind of presence people feel.',
        },
        {
          label: '03 – Module',
          title: 'Asana & alignment',
          text: 'Deep exploration of foundational and advanced postures. Safe alignment principles, hands-on assists, and how to adapt intelligently for every body in the room.',
        },
        {
          label: '04 – Module',
          title: 'Anatomy & biomechanics',
          text: 'Functional anatomy grounded in how real bodies actually move. Identify misalignments, modify with confidence, and teach from genuine understanding, not memorised rules.',
        },
        {
          label: '05 – Module',
          title: 'Yoga philosophy & history',
          text: 'The Eight Limbs, Patanjali’s Yoga Sutras, the Bhagavad Gita, and Balinese mythology. Living philosophy you’ll carry into every class long after the training ends.',
        },
        {
          label: '06 – Module',
          title: 'Pranayama, meditation & yoga business',
          text: 'Daily breath and meditation practice. Plus practical guidance on building a teaching career: personal brand, studio setup, social presence, long-term sustainability.',
        },
      ],
    },
    {
      type: 'schedule',
      eyebrow: 'Sample Daily Schedule',
      items: [
        { time: '07:30', title: 'Sadhana' },
        { time: '09:30', title: 'Breakfast' },
        { time: '10:30', title: 'Teaching' },
        { time: '12:00', title: 'Anatomy' },
        { time: '13:00', title: 'Lunch' },
        { time: '14:30', title: 'Asana Lab' },
        { time: '16:00', title: 'Philosophy' },
      ],
      note: 'MOST Evenings are yours for integration, rest, and exploring Ubud.',
    },
    {
      type: 'quote',
      tone: 'crimson',
      quote: 'From day one, we were teaching. That’s what made it real.',
      name: 'Nancy Nguyen · May 2024',
      context: 'Teaching Lab · 200HR Immersion',
      image: 'ytt200TeachingLab',
    },
    {
      type: 'split',
      eyebrow: 'LOCATION',
      heading: 'The Bali *Immersion*',
      paragraphs: [
        'Ubud is not just where we train. It’s where we are rooted.',
        'Radiantly Alive has been part of Ubud’s landscape for over a decade not as a hired venue, but as a practising community with permanent shalas, daily classes, and deep local roots.',
        'For 24 days, you live inside the rhythm of yoga. The intensity is balanced with support. The structure allows freedom to integrate.',
      ],
      bullets: [
        'Train in our original Ubud shala, serene, nature-surrounded, purpose-built for deep practice',
        'Walk to restaurants, markets, rice fields, and temples in minutes',
        'Connect with a year-round studio community that continues long after your 24 days end',
      ],
      note: '**Accommodation:** Not included. Curated guesthouse list provided on request. We recommend arriving 2–3 days early. **Certification:** 200hr Certificate from Radiantly Alive (Yoga Alliance RYS-200). Register as RYT-200 with Yoga Alliance after graduation.',
      image: 'ytt200Location',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'intro',
      eyebrow: 'STAYING IN UBUD',
      heading: 'Accommodation isn’t included. *That’s intentional.*',
      paragraphs: [
        'Students arrive with different needs for privacy, quiet, budget, and how they want to rest between sessions. Staying independently gives you that freedom, and supports real integration at the end of each day.',
        'The studio is in the heart of Ubud. Most students find accommodation within easy walking distance guesthouses, small hotels, and family-run stays are minutes from the shala. Cafés, markets, and everything you need for daily life are close by.',
        'We provide a curated list of trusted options before your arrival, organised by style and budget. If you have questions about where to stay, we’re available to help.',
      ],
      tone: 'paper',
    },
    {
      type: 'features',
      columns: 3,
      tone: 'paper',
      items: [
        { title: 'Location', text: 'The shala is in central Ubud. Restaurants, rice fields, and temples are a short walk in every direction.' },
        { title: 'Distance', text: 'Most students stay within 5–15 minutes on foot. A scooter or ojek makes anywhere in Ubud easy to reach.' },
        { title: 'Arrival', text: 'We recommend arriving 2–3 days early to settle in, adjust to the rhythm, and start the training rested.' },
        {
          label: 'Popular choice',
          title: 'Family-run guesthouses',
          text: 'Small, quiet, and close to the studio. Usually include breakfast and a garden or rice field view. Typically IDR 250,000–500,000 per night. The most common choice among our students.',
        },
        {
          label: 'For more comfort',
          title: 'Small boutique hotels',
          text: 'Private pool, daily cleaning, and a bit more space to decompress after long training days. A good option if you need your environment to feel restful and well-resourced.',
        },
        {
          title: 'Food & daily rhythm',
          text: 'Ubud has an abundance of cafés and warung serving nourishing food at every price point. Training days include a lunch break, most students eat nearby and return to the shala. Evenings are yours to explore. You won’t need to think hard about food here.',
        },
      ],
    },
    {
      type: 'people',
      eyebrow: 'FACULTY',
      heading: 'The people *you’ll train with*',
      lead: 'These are not guest teachers brought in for a month, they are the studio. They practise here, they teach here, and they’ll be with you every day. Each immersion is led by a senior RA teacher, supported by specialists in anatomy, philosophy, and asana. Each faculty member has been with Radiantly Alive for more than five years. They teach year-round in Ubud not just during immersions.',
      columns: 3,
      people: [
        {
          name: 'Denise de la Torre Ugarte',
          role: 'Lead Teacher – November Cohort',
          image: 'espDenise',
          bio: [
            'Denise is a Vinyasa Yoga and Inside Flow teacher, certified Health Coach, educator, and teacher trainer specializing in creative sequencing, intelligent transitions, alignment, and the art of teaching. Since 2017, she has been guiding students through dynamic and transformative practices that integrate movement, music, and mindful awareness.',
          ],
        },
        {
          name: 'Niko Kisic',
          role: 'Lead Teacher – January Cohort',
          image: 'teacherNiko',
          bio: [
            'From Peru, 1,000+ hours of training. Came to yoga after a decade of competitive rowing, brings rigour, depth, and lived experience.',
            'His classes are playful and challenging; this is how he helps his students connect to their inner strength and wisdom. His classes, both asana practices and theory sessions, are a reflection of how his own path has been: done with discipline, which is inspired by his purpose.',
          ],
        },
        {
          name: 'Zara Miranda',
          role: 'Lead Teacher – March Cohort',
          image: 'teacherZara',
          bio: [
            'Zara trained originally in Ashtanga and Vinyasa Flow in India, later continuing her studies with globally recognised teacher Eoin Finn. Her teaching integrates discipline, awareness, and stillness.',
            'She creates spaces where students feel supported to honour their bodies, energy, and individual experience; bringing warmth, humour, and thoughtful reflection into every class.',
          ],
        },
      ],
    },
    {
      type: 'video',
      eyebrow: '24 days together',
      heading: 'Seen from *the inside*',
      lead: 'A closer look at the rhythm, relationships, and quiet moments that shape the training',
      videos: [{ youtubeId: 'CqU0SkbXPbg', title: 'Seen from the inside' }],
    },
    {
      type: 'gallery',
      images: ['ytt200FacultyCeremony', 'yttStartSadhana', 'yttStartAsanaLabEspanol', 'yttStartMoreThanCertification', 'yttStartGraduateClosing'],
    },
    {
      type: 'intro',
      eyebrow: 'IN THEIR WORDS',
      heading: 'What people *carry with them*',
      ctas: [
        {
          label: 'Read all 150+ reviews on YOGA ALLIANCE',
          href: 'https://app.yogaalliance.org/schoolprofilereviews?id=0013g000002pixxAAA&sid=0013g000002noUuAAI',
          variant: 'link',
        },
      ],
      tone: 'paper',
    },
    {
      type: 'testimonials',
      tone: 'paper',
      items: [
        {
          quote:
            'One of the best experiences of my life. I connected with myself and different souls on a level I could never explain to anyone who was not there to experience the same.',
          name: 'Kristina Meyers',
          context: 'February 2019',
        },
        {
          quote:
            'The school prepared me to not only teach the asanas properly, but also to teach with a focus on the inner journey. The training was experiential and mind-blowing.',
          name: 'Margie Chu',
          context: 'October 2019',
        },
        {
          quote:
            'The teachers are inspiring and truly embody yoga. I could not have asked for a better experience to immerse myself into the world of yoga.',
          name: 'Kola Anderson',
          context: 'January 2023',
        },
      ],
    },
    {
      type: 'features',
      eyebrow: 'The Path Forward · Beyond the 200hr',
      heading: 'The 200hr is where *the path begins.*',
      lead: 'Radiantly Alive is a living ecosystem, built for teachers who want to keep growing, keep contributing, and keep being challenged. What started in our Bali studio is evolving into a global movement.',
      columns: 3,
      items: [
        {
          title: 'Deepen – Advanced training & mentorship',
          text: 'Continue your education through specialist programmes and one-on-one mentorship from senior RA faculty; anatomy, philosophy, sequencing, and beyond.',
        },
        {
          title: 'Connect – A global network of teachers',
          text: 'Join 500+ RA teachers across 80+ countries. Assist trainings in Bali, co-facilitate global events, grow alongside people who share your values and your practice.',
        },
        {
          title: 'Lead – lead, teach & carry the work forward',
          text: 'The most dedicated graduates are invited to teach, assist, and eventually lead RA trainings, becoming the next generation of Radiantly Alive faculty, worldwide.',
        },
      ],
      ctas: [{ label: 'Explore the Leadership Path', href: '/ra-movement-academy' }],
    },
    {
      type: 'quote',
      tone: 'crimson',
      quote: 'The doors just keep opening. I did my 300hr in 2020, and Radiantly Alive has shown me how I want to proceed as a teacher and as a human being.',
      name: 'Liz',
      context: 'Leadership Path Blossom · Germany',
    },
    {
      type: 'stats',
      tone: 'paper',
      items: [
        { value: '500+', label: 'teachers on the path' },
        { value: '80+', label: 'countries' },
        { value: '4', label: 'stages: Seed · Bud · Blossom · Pod' },
      ],
    },
    {
      type: 'form',
      form: 'newsletter',
      eyebrow: 'THE PATH THAT OPENS',
      heading: 'Some graduates teach. Others lead. *A few help carry the work forward.*',
      lead: 'The 200hr doesn’t close when you leave Bali. See how our graduates continue deepening, teaching globally, and stepping into the next stage of the RA path.',
      fallbackHref: SOURCE,
      submitLabel: 'SEE WHERE IT LEADS',
      privacyNote: 'For those already thinking beyond the training itself.',
    },
    {
      type: 'cta',
      heading: 'If something here *is speaking to you*',
      text: 'Take your time. When you’re ready, the next step is simple, send us a message. We’ll take it from there.',
      image: 'ytt200FacultyCeremony',
      ctas: [{ label: 'TALK TO US BEFORE YOU DECIDE', href: '#contact' }],
    },
    {
      type: 'table',
      id: 'cohort',
      eyebrow: 'UPCOMING COHORTS',
      heading: 'Training *Dates*',
      lead: 'Two cohorts open for 2026. Places are limited to 32 per immersion, usual average 24.',
      columns: ['November 2026', 'Jan/Feb 2027', 'March 2027', 'May 2027'],
      rows: [
        { label: 'Status', values: ['Open', 'Open', 'Open', 'Open'] },
        { label: 'Dates', values: ['2 – 25 November · 24 days', '11 Jan – 3 Feb · 24 days', '1 – 24 March · 24 days', '3 – 26 May · 24 days'] },
        {
          label: 'Lead teacher',
          values: ['Led by Denise de la Torre Ugarte', 'Led by Niko Kisic', 'Led by Zara Miranda', 'Led by Laila El Idrissi'],
        },
      ],
      note: 'Looking further ahead? Additional 2027 cohorts are already open. August 2 – 25 | Led by Joëlle Sleebos · November 1 – 24 | Led by Lucinda Muldoon [message us for the full training calendar](#contact).',
    },
    {
      type: 'pricing',
      id: 'investment',
      eyebrow: 'INVESTMENT',
      heading: 'Your *Investment*',
      lead: 'A 24-day immersion with world-class faculty in a real, working studio. The pricing reflects that.',
      tiers: [
        {
          label: 'Early Commitment Price',
          prices: ['IDR 40.3 millions'],
          note: 'Full payment required. Available for the first 10 applicants per cohort.',
          href: '/tt-classes-retreats/p/200-hr-ytt-full-immersion-eb',
          ctaLabel: 'Purchase',
        },
        {
          label: 'Regular Price',
          prices: ['IDR 49.2 millions'],
          note: 'Secure your spot with a IDR 10 millions deposit. Balance due 60 days before start date',
          href: '/tt-classes-retreats/p/200-hr-ytt-full-immersion-regular',
          ctaLabel: 'Purchase',
        },
      ],
      notes: [
        '**[200H RA Vinyasa YTT | Ubud – Early Bird Price](/tt-classes-retreats/p/200-hr-ytt-full-immersion-eb)** · $2,250.00',
        '**[200H RA Vinyasa YTT | Ubud – Regular Price](/tt-classes-retreats/p/200-hr-ytt-full-immersion-regular)** · from $500.00',
        'Dates: 2026 | November 2 – 25 · 2027 | January 11 – February 03 · 2027 | March 01 – 24 · 2027 | May 03 – 26 · 2027 | August 02 – 25 · 2027 | November 01 – 24',
        'All prices are in Indonesian Rupiah. The deposit is non-refundable but transferable to another cohort with 60 days notice.',
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Radiantly Alive · Ubud, Bali',
      heading: 'Some decisions are obvious *in hindsight.*',
      text: 'Apply now or ask us a question, we’ll help you figure out if this training is right for you.',
      image: 'ytt200Hero',
      ctas: [{ label: 'GET IN TOUCH', href: '#contact' }],
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'What can I expect?',
          answer:
            'For one month, you will completely absorb yourself in the ancient arts of āsana, meditation, and philosophy. You will open your heart, deepen your practice, and form bonds that will last a lifetime. We will begin each day with a 1 hour prānāyāama and meditation practice, followed by, 2 hour sadhana including āsana practice. The rest of the day will be spent learning from teachers who are masters in their fields on a variety of subjects–from āsana, to philosophy, to public speaking, to creating the life you want for yourself. There will be plenty of time for some fun too. Our evening sessions and group activities will have you smiling and feeling the love in ways you never thought possible',
        },
        {
          question: 'Where is the training held? Will I have free time?',
          answer:
            'The training is held at Radiantly Alive Yoga Studio, in Ubud, Bali. The studio is located in the center of town, close to restaurants, shops, and all a yogi can wish for.\n\nThe short answer is, yes. However, because this is a 200-hour training course and we have much to cover, there won’t be much of it. There will be time off each week and meal times and breaks are yours',
        },
        {
          question: 'What kind of certification will I receive?',
          answer:
            'You will receive a 200 Hour Certificate of Completion from Radiantly Alive. Radiantly Alive is a fully accredited Yoga Alliance Yoga School. You may use this certificate to apply for certification with Yoga Alliance after the training.',
        },
        {
          question: 'How early should I arrive prior to the training?',
          answer:
            'This is entirely up to you. If you are travelling long distances, you may want to allow some extra time to get settled in and give your body the space to overcome jetlag. Please don’t forget to consider your Visa restrictions (see Visa section below)',
        },
        {
          question: 'What’s the weather like in Bali?',
          answer:
            'Bali is around 8 degrees south of the equator. So you can expect a tropical, warm and humid climate all year around with two main distinctive seasons: Dry Season (April-October) and Rainy Season (November-March). The temperature is humid and generally 27-31 (77-88 F).',
        },
        {
          question: 'What kind of food is available?',
          answer:
            'The food in Ubud is absolutely amazing. Whether omnivore, vegetarian, vegan, or completely raw, this town caters to all tastes. Check out our Bali Guide for just a small sampling of what Ubud has to offer.',
        },
        {
          question: 'What should I bring?',
          answer: [
            'While there will be plenty of time for rest and integration, the training can be a very consuming experience. For that reason, we recommend that you bring what you need with you. Don’t worry though, if you forget anything, you can find it here in Ubud.',
            'One note: We have a number of special evenings and events planned while you’re with us. One of these nights requires a certain type of dress – please pack a ‘white’ outfit, something that is below knee length for women, and covers the shoulders (men and women).',
            'We suggest packing:',
            '• Your favorite yoga mat. If you prefer not to travel with your mat, we also have mats at the studio',
            '• Comfortable yoga clothes',
            '• Swimsuit and sunscreen',
            '• Comfortable footwear (e.g., flip-flops or open air shoes)',
            '• Toiletries, including mosquito repellent. We also provide natural mosquito repellent in the yoga shalas, but better if you have your own for meals time and nigh',
            '• Any special medications/treatments you may need',
            '• Notebook, personal journal, pen',
            '• Electric adapter (two round pins, 220 volt)',
            '• Refillable water bottle',
          ].join('\n\n'),
        },
        {
          question: 'What is included in the cost?',
          answer:
            'Costs include: Tuition & manual; Full access to all cultural experiences within the training; Access to the RA Alumni Network; Ongoing post-training support; A life-long 10% Alumni Discount on yoga classes, workshops & therapies at Radiantly Alive; Unlimited access to all Radiantly Alive yoga classes 1 week prior, during and after training.',
        },
        {
          question: 'Do I need a visa for Bali?',
          answer: [
            '**TRAVELING SAFE & VISA REQUIREMENTS**',
            'To enter Indonesia, your passport must have a minimum of 18 months remaining validity from the date of your prospective DEPARTURE FROM Bali. Please be proactive and learn about Visa requirements particular to your own home country in advance of actual travel and ask for confirmation when closer to your departure date since immigration requirements in Indonesia are subject to sudden changes.',
            'The requirements below apply to all international visitors:',
            '• You must have a valid visa or get a Visa on Arrival (VOA).',
            '• Your passport must be valid for a minimum of six (6) months from the date of arrival.',
            '• You must have proof of a return flight or an onward ticket out of Indonesia.',
          ].join('\n\n'),
        },
        {
          question: 'Do I need travel insurance?',
          answer:
            'It may be worth being comprehensively insured to cover all costs and consequences of medical treatment, repatriation, damage/theft/loss of personal belongings, recovery of course fees and flights booked in the event of cancellation or early departure.',
        },
        {
          question: 'What about medical care?',
          answer:
            'In the case of minor illnesses or injuries, there are a few medical clinics in the local Ubud area and several international clinics closer to the airport. These clinics typically do not accept insurance (though you may be reimbursed through your insurance provider) and are relatively inexpensive. If situations require extreme medical emergency care, patients are evacuated to Singapore. Due to significant cost it is advisable to check this coverage is included on your medical plan.',
        },
        {
          question: 'How good at Yoga do I have to be to attend?',
          answer: 'We recommend you have at least 1 year experience practicing yoga, however there are no specific asana or fitness requirements.',
        },
      ],
    },
    {
      type: 'split',
      id: 'contact',
      eyebrow: 'Get in touch',
      heading: 'A question before you decide is *always welcome.*',
      paragraphs: [
        'Whether you have a specific question or simply want to know more about the training, fill in your details and we’ll be in touch. We respond personally, usually within 24 hours.',
      ],
      bullets: [
        'Questions about the training, curriculum, or faculty',
        'Which cohort is right for your schedule',
        'Information about the full 2027 calendar',
        'Anything else on your mind',
      ],
      ctas: [
        { label: 'Get in touch', href: '/contact' },
        { label: 'info@radiantlyalive.com', href: 'mailto:info@radiantlyalive.com', variant: 'secondary' },
      ],
      image: 'yttStartSadhana',
      imageSide: 'left',
      tone: 'plum',
    },
  ],
  schema: {
    type: 'course',
    name: '200-Hour RA Vinyasa Yoga Teacher Training, Ubud, Bali',
    description:
      'A 24-day, Yoga Alliance RYS-200 immersion inside Radiantly Alive’s working shala in the heart of Ubud: six modules covering the inner journey, teaching lab, asana and alignment, anatomy, philosophy, pranayama, meditation and yoga business.',
  },
}
