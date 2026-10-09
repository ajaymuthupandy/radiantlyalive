import type { PageContent } from '../types'
import { yearsRunning } from '@/data/site'

const SOURCE_URL = 'https://www.radiantlyalive.com/200h-ytt-ra-vinyasa-hybrid-bali-eng'

/** Source: https://www.radiantlyalive.com/200h-ytt-ra-vinyasa-hybrid-bali-eng */
export const page: PageContent = {
  path: '/200h-ytt-ra-vinyasa-hybrid-bali-eng',
  title: '200-Hour Hybrid Yoga Teacher Training in Bali',
  description:
    'Study from home. Complete it in Bali. 100 hours online, on your schedule. 100 hours in Ubud inside a real working studio. The same RYT-200 certification.',
  parent: { label: 'Yoga Teacher Trainings', href: '/yoga-teacher-training-2026-1' },
  hero: {
    eyebrow: '200-Hour Hybrid Yoga Teacher Training · Bali · English',
    title: 'Study from home. *Complete it in Bali.*',
    lead: '100 hours online, on your schedule. 100 hours in Ubud inside a real working studio. The same RYT-200 certification. Built for people who cannot leave life behind for a full month',
    body: ['Scroll to understand the program – or [jump to dates and investment](#dates) if you’re ready.'],
    image: 'hybridBaliHero',
    imagePosition: '50% 30%',
    facts: [
      { label: 'Yoga Alliance Registered', value: 'RYS-200' },
      { label: '100 Online · 100 in Bali', value: '200 hrs' },
      { label: 'In-person in Ubud', value: '10 days' },
      { label: 'Language of Instruction', value: 'English' },
    ],
  },
  blocks: [
    {
      type: 'stats',
      tone: 'paper',
      items: [
        { value: '15 yrs', label: 'In Ubud, Bali' },
        { value: '900+', label: 'Graduates Worldwide' },
        { value: '25+', label: 'Resident Teachers' },
        { value: 'RYT-200', label: 'Yoga Alliance Certified' },
      ],
    },
    {
      type: 'features',
      eyebrow: 'The Hybrid model',
      heading: 'Two phases. *One complete training.*',
      lead: 'The Hybrid path delivers the full Radiantly Alive 200-hour curriculum across two phases. You build the foundation from home, then bring it all into the room in Bali.',
      numbered: true,
      columns: 2,
      items: [
        {
          label: 'Phase One · Approx. 3 Months',
          title: 'Online study from home',
          text: 'Work through the curriculum at your own pace, supported by recorded sessions, 10 live Saturday classes, and structured homework. Your daily life continues, while your practice deepens.',
          bullets: ['**50** Recorded Hours', '**30** Live Saturday Sessions', '**20** Homework & Practice'],
        },
        {
          label: 'Phase Two · 10 Days in Ubud',
          title: 'In-person immersion in Bali',
          text: 'You arrive in Ubud having already done the work. The immersion is where it becomes embodied; in the shala, with faculty, with your cohort. Teaching labs, hands-on practice, integration.',
          bullets: ['**100** In-person Hours', '**Ubud** Radiantly Alive Studio'],
        },
      ],
    },
    {
      type: 'intro',
      tone: 'paper',
      align: 'center',
      paragraphs: [
        'The outcome is the same as the full 24-day Bali Immersion. Yoga Alliance RYT-200 certification, the complete curriculum, the same faculty. The path to get there is different.',
      ],
      note: 'Certification · RYT-200',
    },
    {
      type: 'features',
      eyebrow: 'Is this for you?',
      heading: 'This path is built *for you if…*',
      lead: 'The Hybrid is not a shortcut. It is a different shape of the same depth, designed for people whose lives don’t allow a full month away, but whose commitment is complete.',
      numbered: true,
      columns: 3,
      items: [
        {
          title: 'You have work or family commitments',
          text: 'A full month away is not possible right now, but this training is. The online phase works around your schedule. The 10-day Bali immersion is manageable for most professional lives.',
        },
        {
          title: 'You learn well independently',
          text: 'You’re self-directed, you show up for your practice, and you understand that the Saturday live sessions are not optional. The online phase rewards people who bring their own discipline to it.',
        },
        {
          title: 'You want Bali – and the full depth',
          text: 'You’re not looking for a lighter version. You want to arrive in Ubud, be inside a working studio, train with senior faculty in person, and leave having genuinely done the work.',
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      eyebrow: 'The same training. A different shape.',
      heading: 'Not a lesser version. *A different structure.*',
      paragraphs: [
        'The 200-hour Hybrid leads to the same Yoga Alliance RYT-200 certification as the full Bali Immersion. Same curriculum. Same faculty. Same standard.',
        'What differs is the structure. The Hybrid is built for people whose lives don’t allow 24 consecutive days away – not for people who want something easier. There isn’t an easier version. There is only this one, offered in two shapes.',
        'If full immersion resonates more and you can step away for four weeks, the full Bali Immersion may be the better fit.',
      ],
      ctas: [
        { label: 'Interested in the full Bali Immersion instead? →', href: 'https://www.radiantlyalive.com/200hr-yoga-teacher-training-ra-vinyasa-ubud', variant: 'link' },
      ],
      image: 'hybridMoroccoClasses',
      imageSide: 'left',
    },
    {
      type: 'form',
      form: 'waitlist',
      tone: 'canvas',
      eyebrow: 'Before you decide',
      heading: 'Not sure if this training is *right for you?*',
      lead: 'We’ve written a short guide for people weighing up the Hybrid. What it actually demands, what the online phase feels like in practice, and the questions worth sitting with before committing.',
      fallbackHref: SOURCE_URL,
      submitLabel: 'SEND ME THE GUIDE',
      successMessage: 'Thank you!',
      privacyNote: 'No pitch. No pressure. Takes five minutes to read',
    },
    {
      type: 'features',
      tone: 'paper',
      heading: 'Six modules. *One complete foundation.*',
      lead: 'The full 200-hour curriculum delivered across both phases. Theory, philosophy, anatomy, and self-inquiry form the core of the online phase. Teaching labs, adjustments, and integration are the focus of the Bali immersion.',
      numbered: true,
      columns: 3,
      items: [
        {
          label: 'Module',
          title: 'The Inner Journey',
          text: 'Self-inquiry, authentic expression, personal development. Build the self-knowledge that everything in your teaching will eventually grow from.',
        },
        {
          label: 'Module',
          title: 'Teaching Lab: Voice, Sequencing & Presence',
          text: 'Find your teaching voice. Intelligent sequencing, effective cueing, creative theming. Learn to hold a room with clarity and the kind of presence people feel.',
        },
        {
          label: 'Module',
          title: 'Asana & Alignment',
          text: 'Deep exploration of foundational and advanced postures. Safe alignment principles, hands-on assists, and how to adapt intelligently for every body.',
        },
        {
          label: 'Module',
          title: 'Anatomy & Biomechanics',
          text: 'Functional anatomy grounded in how real bodies actually move – applied directly to the postures and situations you will encounter as a teacher.',
        },
        {
          label: 'Module',
          title: 'Philosophy & Living Yoga',
          text: 'The Yoga Sutras, the Bhagavad Gita, and the philosophical frameworks that underpin everything we practise. Practical and alive, not merely academic.',
        },
        {
          label: 'Module',
          title: 'Pranayama & Meditation',
          text: 'Breath as a direct tool. A comprehensive study of pranayama techniques, their effects, and how to integrate them into teaching and daily practice.',
        },
      ],
    },
    {
      type: 'lists',
      tone: 'paper',
      lists: [
        { title: 'Online phase covers', items: ['philosophy', 'anatomy', 'self-inquiry', 'foundational practice'] },
        {
          title: 'Bali immersion focuses on',
          items: ['teaching labs', 'peer feedback', 'hands-on adjustments', 'full embodiment in a live studio environment'],
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Phase One · Online',
      heading: 'The online phase. *What it actually looks like.*',
      paragraphs: [
        'Your in-person immersion is not an introduction to the school. By the time you arrive, you have completed the online foundation. The ten days are where theory becomes embodied practice, where you teach, receive feedback, and integrate everything you have prepared.',
        'You practice inside the shalas alongside daily class students. You are taught by faculty who live and work here. You experience the rhythm of a school that has been running for fifteen years.',
      ],
      image: 'hybridBaliOnline',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'stats',
      tone: 'plum',
      items: [
        { value: '50', label: 'Recorded Hours' },
        { value: '30', label: 'Live Saturday Sessions' },
        { value: '20', label: 'Homework & Practice' },
      ],
    },
    {
      type: 'features',
      columns: 2,
      items: [
        {
          title: 'Weekly recorded modules',
          text: 'Structured video content released week by week. Lectures, guided practices, faculty teaching. Work through them in your own time within the weekly window.',
        },
        {
          title: 'Saturday live sessions – required',
          text: 'Live sessions with faculty, held fortnightly or weekly depending on cohort pace. The backbone of the online phase – not optional, not available as recordings. Where your cohort forms before Bali.',
        },
        {
          title: 'Homework & personal practice',
          text: 'Written reflections, teaching practice with a partner, and a structured personal practice requirement. The work here directly affects the quality of your Bali immersion.',
        },
        {
          title: 'Cohort community',
          text: 'You are not studying alone. Your cohort is in it with you – shared platform, private group, Saturday sessions to keep the connection alive across time zones.',
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      eyebrow: 'Platform & Access',
      heading: 'On The Saturday Sessions',
      paragraphs: [
        'The Saturdays are the one non-negotiable of the online phase. Live, shared, and where your relationship with your cohort and faculty actually forms. If you cannot consistently commit to the Saturdays, the full Bali Immersion is likely the better fit.',
        'Sessions take place from 8pm to 11pm Bali time.',
        '**Platform & Access.** All recorded content is delivered via Our Online Studio. Access is provided after registration and remains available for one year after the program ends.',
        'Question about the online phase – time zones, schedule, platform? [Ask us ↓](#contact)',
      ],
      image: 'hybridMoroccoOnlineStudio',
      imageSide: 'left',
    },
    {
      type: 'split',
      eyebrow: 'Phase Two · Bali',
      heading: 'The Bali immersion. *Where it becomes real.*',
      paragraphs: [
        'You don’t arrive in Bali to start learning. You arrive having completed 100 hours of preparation – and the 10-day immersion is where you embody it. In the shala, with your cohort, with faculty who have been present since your first Saturday session.',
      ],
      note: `“Radiantly Alive is not a venue. It is a living school: daily classes, resident teachers, a community that has been here for ${yearsRunning()} years.” UBUD, Bali · Founded 2010`,
      image: 'hybridBaliJungleShala',
      imageSide: 'right',
    },
    {
      type: 'features',
      tone: 'paper',
      columns: 4,
      numbered: true,
      items: [
        {
          label: 'The Studio',
          title: 'A real working school',
          text: `Radiantly Alive runs daily classes in Ubud year-round. Not a rented retreat venue – a studio with ${yearsRunning()} years of roots, 25+ resident teachers, and a live daily programme running morning to evening.`,
        },
        {
          label: 'Teaching',
          title: 'Teaching labs from day one',
          text: 'Because you arrive prepared, the immersion moves quickly into hands-on teaching practice. Teaching labs, peer feedback, faculty adjustments – the focus of the 10 days, not content delivery.',
        },
        {
          label: 'Faculty',
          title: 'The same teachers, in person',
          text: 'The teachers who led your online Saturday sessions are here in Ubud with you. The relationship is already built. The immersion deepens it rather than beginning from scratch on arrival.',
        },
        {
          label: 'Community',
          title: 'Your cohort, already formed',
          text: 'You have been studying alongside these people for three months. By the time you arrive in Bali, the group is already a group. The immersion builds on that foundation.',
        },
      ],
    },
    {
      type: 'quote',
      tone: 'crimson',
      quote:
        'What changes with the Hybrid is what happens before anyone lands in Bali. The cohort arrives already connected; three months of shared study, the same Saturday sessions, the same faculty. The first day of the immersion is not an introduction. It is a continuation. That changes the quality of every conversation, every practice, and every teaching lab.',
      name: 'A note from the faculty',
    },
    {
      type: 'intro',
      align: 'center',
      heading: 'You do not arrive in Bali to start learning. *You arrive ready to embody what you already know.*',
    },
    {
      type: 'features',
      tone: 'paper',
      eyebrow: 'Why Radiantly Alive',
      heading: 'Why this Hybrid works *here and not everywhere.*',
      lead: 'Most Hybrid trainings are online programmes with a retreat add-on. This one is different because of what already exists in Ubud before you arrive.',
      numbered: true,
      columns: 4,
      items: [
        {
          label: 'The School',
          title: 'A live school, not a rented space',
          text: `Radiantly Alive has been operating daily in Ubud since 2010. 25+ resident teachers, morning-to-evening classes, an active community year-round. When you arrive for the immersion, you are stepping into something with ${yearsRunning()} years of roots.`,
        },
        {
          label: 'Continuity',
          title: 'Same faculty online and in Bali',
          text: 'The teachers who lead your Saturday sessions are the same teachers in the room in Ubud. No handoff, no disconnect. The relationship begins in Phase One and deepens in Bali – not reset from scratch on arrival.',
        },
        {
          label: 'Depth',
          title: 'You arrive prepared, not passive',
          text: 'Because you have completed 100 hours before the Bali immersion, the 10 days are advanced rather than introductory. Teaching labs move quickly. The time in Ubud is used for what can only happen in person.',
        },
        {
          label: 'After',
          title: 'You enter an ecosystem',
          text: 'RA graduates become part of a global community of 900+ teachers across 80+ countries. Opportunities to assist trainings, teach community classes in Ubud, and join the 300-hour advanced programme over time.',
        },
      ],
    },
    {
      type: 'people',
      eyebrow: 'Lead teachers',
      heading: 'The people *you will train with.*',
      lead: 'Lead teachers are confirmed per cohort. The teacher for your specific cohort is listed on the date card below.',
      columns: 3,
      people: [
        {
          name: 'Niko Kisic',
          role: 'E-RYT 500 · Senior Faculty · 2026 Cohort · 2027 Cohort Lead Teacher',
          image: 'hybridNiko',
          bio: [
            'Niko Kisic is a Peruvian yoga teacher with over 10 years of experience, specializing in Vinyasa and Inside Flow. His training includes 200 hours in Power Yoga, 200 hours in Krama Vinyasa, 200 hours in Hatha Yoga, 100 hours in Universal Yoga, 200 hours in Inside Flow, plus roughly 200 additional hours across complementary courses. His classes are playful and challenging, this is how he helps his students connect to their inner strength and wisdom.',
          ],
        },
        {
          name: 'Lucinda Muldoon',
          role: 'E-RYT 500 · Senior Faculty · 2027 Cohort Lead Teacher',
          image: 'hybridLucinda',
          bio: [
            "Lucinda discovered yoga in 2015 to help cope with burnout and mental health challenges. She connected to the philosophical learnings and embodied way of living, studying under her teacher Janet Stone. With over 9 years yoga teaching experience and 10 years as an Exercise Physiologist, Lucinda furthered her studies in Pre/Postnatal Yoga, Kids Yoga, and Fascial Bodywork while facilitating teacher trainings, retreats and immersions. Lucinda loves creating space for students to embrace a 'soft but strong' approach to their practice and daily life, encouraging the way we move on and off our mat to come from an intentional place.",
          ],
        },
      ],
    },
    {
      type: 'people',
      eyebrow: 'Specialist Faculty',
      lead: 'Specialist faculty are confirmed per cohort and may vary between programmes.',
      columns: 3,
      people: [
        {
          name: 'Laila El Idrissi',
          role: 'Asana',
          image: 'hybridLaila',
          bio: [
            'Yoga teacher and hypnotherapist with over a decade of personal practice and six years of teaching experience. Teaching Vinyasa Krama, Laila combines intelligent sequencing, alignment, breath, and subtle energetics, inviting students into focused attention and embodied awareness.',
          ],
        },
        {
          name: 'Marlen Apolonia Beckmann',
          role: 'Anatomy',
          image: 'hybridMarlen',
          bio: [
            'E-RYT yoga teacher, anatomy educator, movement specialist and personal trainer with nearly a decade of experience. Marlen integrates functional anatomy, biomechanics, fascia research, nervous system regulation, and breathwork, bridging scientific understanding with embodied practice.',
          ],
        },
        {
          name: 'Samten Kriya',
          role: 'Philosophy',
          image: 'hybridSamten',
          bio: [
            'YA E-RYT 500 and Continuing Education Provider, practicing yoga for over 20 years and training teachers since 2009. Named lineage holder for Himalayan Kriya Yoga by her Guru, Samten channels Kundalini Shakti through touch and voice, sharing this sacred science worldwide through retreats, workshops, and teacher trainings.',
          ],
        },
      ],
    },
    {
      type: 'quote',
      tone: 'plum',
      quote:
        'Radiantly Alive was unlike anything I’d experienced before. It really fulfilled me. I feel more energized and ready for what’s next. What stood out the most was the people and the sense of spirituality throughout the training. There’s something very real about it. Now I feel genuinely motivated to teach. Teaching my first class here was surprisingly fun and exciting, I didn’t expect to enjoy it that much. We really became like a family. Everyone is so lovely.',
      name: 'Nadine, Switzerland',
      context: '200-Hour Immersion graduate – Hybrid launches its first cohort in November 2026',
    },
    {
      type: 'split',
      heading: 'Beyond the *certification.*',
      paragraphs: [
        'Most graduates take the 200-hour training and return to their lives with more confidence, a clearer sense of their practice, and sometimes a new direction. That is enough. That is often exactly what this training is for.',
        `Others stay connected. Through alumni events, continuing education, mentorship, assisting future trainings, and the wider RA community that has been building in Ubud and across the world for ${yearsRunning()} years.`,
        'The Leadership Path is one way that relationship can unfold over time, a framework for continued growth, connection, and contribution after graduation. It is not a guarantee of opportunity, and it is not a fixed progression. It is simply a way of describing what becomes possible when the relationship continues.',
      ],
      ctas: [{ label: 'Explore the Leadership Path →', href: 'https://www.radiantlyalive.com/ra-movement-academy', variant: 'secondary' }],
      image: 'hybridMoroccoConnect',
      imageSide: 'left',
      shape: 'arch',
    },
    {
      type: 'table',
      id: 'dates',
      tone: 'paper',
      eyebrow: 'Upcoming cohorts',
      heading: 'Training Dates',
      lead: 'Two cohorts open for 2027. Places are limited to 32 per immersion.',
      columns: ['Cohort', 'Online', 'In-person', 'Lead Teacher', 'Status'],
      rows: [
        { label: 'August – Nov 2026', values: ['Aug 4 – Oct 22', 'Oct 23 – Nov 1', 'Led by Niko Kisic', 'Ongoing'] },
        { label: 'April – July 2027', values: ['Apr 9 – Jul 15', 'Jul 16 – 25', 'Lucinda Muldoon', 'Open'] },
        { label: 'June – October 2027', values: ['Jun 18 – Sep 23', 'Sep 24 – Oct 3', 'Niko Kisic', '—'] },
      ],
    },
    {
      type: 'pricing',
      id: 'pricing',
      tone: 'paper',
      eyebrow: 'Investment',
      tiers: [
        {
          label: 'Early Commitment',
          prices: ['IDR 26.7 millions'],
          note: 'Available for the first 10 enrolments per cohort. Full payment at the time of reservation. Cohorts: 200H Hybrid EB | Apr 9 – July 25, 2027 · 200H Hybrid EB | Jun 18 – Oct 3, 2027',
          href: '/tt-classes-retreats/p/200hr-hybrid-yoga-teacher-training-bali-eb',
          ctaLabel: 'Purchase',
        },
        {
          label: 'Regular Price',
          prices: ['IDR 31.2 millions'],
          note: 'Secure your spot with a IDR 10 millions deposit. Balance due 60 days before start date',
          href: '/tt-classes-retreats/p/200hr-hybrid-yoga-teacher-training-bali-regular',
          ctaLabel: 'Purchase',
        },
      ],
      notes: [
        '2026 | Online ─ August 4 – October 22 | In-person ─ Oct 23 – Nov 1',
        '2027 | Online ─ April 9 – July 15 | In-person ─ July 16 – 25',
        '2027 | Online ─ June 18 – Sept 23 | In-person ─ Sept 24 – Oct 3',
        'All prices are in Indonesian Rupiah. The deposit is non-refundable but transferable to another cohort with 60 days notice.',
      ],
    },
    {
      type: 'lists',
      heading: 'What is included',
      lists: [
        {
          items: [
            'Full online phase – all recorded content and materials',
            '10-day Bali immersion – all sessions',
            'Course manual and digital resources',
            'Live Saturday sessions (Phase One)',
            'Yoga Alliance RYT-200 registration support',
            'Access to RA alumni community',
          ],
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      eyebrow: 'Also available',
      heading: 'The Hybrid also runs with an in-person immersion *in Morocco.*',
      paragraphs: ['Same online phase, same curriculum, same certification, different location and faculty.'],
      ctas: [{ label: 'View the Morocco Hybrid →', href: '/200h-ytt-ra-vinyasa-hybrid-morocco-eng', variant: 'secondary' }],
      image: 'hybridMoroccoPalais4',
      imageSide: 'right',
    },
    {
      type: 'faq',
      eyebrow: 'Common questions',
      heading: 'Frequently Asked.',
      items: [
        {
          question: 'Is the Hybrid certification the same as the 200H Bali Immersion?',
          answer: 'Yes. The Hybrid leads to the same Yoga Alliance RYT-200 certification as the Bali Immersion. The curriculum covers the same material. The certification outcome is identical.',
        },
        {
          question: 'Is the in-person portion enough time to complete the training properly?',
          answer: 'The in-person immersion is sufficient because of what precedes it. Students arrive with a solid theoretical foundation – which means the in-person week can focus entirely on practice, teaching, and embodiment. It is not a sampler. It is a focused completion of what the online phase began.',
        },
        {
          question: 'What is the difference between the Bali English and Bali Spanish tracks?',
          answer: 'Both take place in Ubud at the same school. The Spanish track is a dedicated Spanish-speaking cohort – the online phase, teaching labs, faculty communication, and feedback all happen in Spanish. The English track is identical in structure but delivered in English.',
        },
        {
          question: 'What happens after the training?',
          answer: 'Graduates enter the Radiantly Alive ecosystem – with access to the Seed → Bud → Blossom → Pod leadership path, opportunities to return as assistant teachers, and a continued relationship with the school and its community.',
        },
        {
          question: 'What level of yoga experience do I need?',
          answer: 'There is no formal prerequisite, but a consistent personal practice is important. You do not need to be an advanced practitioner – you need to be someone who has been practising and is ready to study seriously.',
        },
        {
          question: 'How much of the training is online?',
          answer: 'The Hybrid is divided into 100 hours online and 100 hours in person. The 100 online hours include 50 hours of recorded video modules, 30 hours of live online learning across 10 Saturday sessions, and 20 hours of homework, assignments, and integration work. The in-person phase completes the remaining 100 hours in Bali or Morocco.',
        },
        {
          question: 'What is the difference between Bali and Morocco?',
          answer: 'Bali places you inside Radiantly Alive – a living school with daily classes, 25+ resident teachers, and a real student ecosystem. Morocco is a destination-based in-person immersion with a more contained group structure. Same curriculum. Different experience of the in-person environment.',
        },
        {
          question: "Can I join even if I don't intend to teach?",
          answer: 'Yes. Many students complete the training to deepen their personal practice rather than to teach professionally. The certification is available to all graduates, but teaching is not a requirement.',
        },
        {
          question: 'Can I speak to someone before applying?',
          answer: 'Yes – and we encourage it. A discovery call helps you decide whether the Hybrid is right for you and which track fits your life. Book one from the contact page, or send a message to the team.',
        },
      ],
    },
    {
      type: 'intro',
      id: 'contact',
      tone: 'crimson',
      eyebrow: 'Still have questions?',
      heading: 'Ask us *directly.*',
      paragraphs: [
        'We answer every enquiry personally. If you are unsure about the online phase, the Bali immersion, your schedule, your experience level, or whether this training is the right fit – send us your question. Most responses arrive within one working day. This is a conversation, not a funnel.',
        'Or email us at [info@radiantlyalive.com](mailto:info@radiantlyalive.com)',
      ],
      ctas: [{ label: 'Send your question', href: 'mailto:info@radiantlyalive.com' }],
    },
    {
      type: 'intro',
      align: 'center',
      heading: 'When you are ready, *a place is waiting for you in Bali.*',
    },
    {
      type: 'cta',
      eyebrow: 'Ready to begin',
      heading: 'Reserve your place in the Bali Hybrid.',
      text: 'A deposit secures your cohort. We will be in touch to confirm everything and answer any remaining questions.',
      image: 'hybridBaliSadhana',
      ctas: [
        { label: 'RESERVE YOUR PLACE', href: '#contact' },
        { label: 'Questions first?', href: '#contact', variant: 'secondary' },
      ],
    },
  ],
  schema: {
    type: 'course',
    name: '200-Hour Hybrid Yoga Teacher Training · Bali · English',
    description:
      '100 hours online, on your schedule, and 100 hours in Ubud inside a real working studio, leading to Yoga Alliance RYT-200 certification.',
  },
}
