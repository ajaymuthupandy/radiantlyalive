import type { PageContent } from '../types'

const SOURCE = 'https://www.radiantlyalive.com/300hr-yoga-teacher-training-ra-vinyasa-ubud'

/** Source: https://www.radiantlyalive.com/300hr-yoga-teacher-training-ra-vinyasa-ubud */
export const page: PageContent = {
  path: '/300hr-yoga-teacher-training-ra-vinyasa-ubud',
  title: '300-Hour Advanced Yoga Teacher Training in Ubud, Bali',
  description:
    'The training you take after you already know how to teach. 26 days inside a working yoga school in Ubud. For certified teachers ready to go further. Yoga Alliance RYS-500, E-RYT 500.',
  parent: { label: 'Yoga Teacher Trainings', href: '/yoga-teacher-training-2026-1' },
  hero: {
    eyebrow: '300-Hour Advanced · Yoga Alliance E-RYT 500 · Ubud, Bali',
    title: 'The training you take after you already know *how to teach.*',
    lead: '26 days inside a working yoga school in Ubud. For certified teachers ready to go further. Into craft. Into philosophy. Into the parts of teaching that take real time to develop.',
    image: 'ytt300Hero',
    imagePosition: '45% 40%',
    ctas: [{ label: 'SEE 2026 / 2027 DATES', href: '#dates' }],
    facts: [
      { label: 'Duration', value: '26 days' },
      { label: 'Location', value: 'Ubud, Bali' },
      { label: 'Certification', value: 'Yoga Alliance E-RYT 500' },
      { label: 'Cohort', value: 'Limited to 20' },
    ],
  },
  blocks: [
    {
      type: 'stats',
      tone: 'plum',
      items: [
        { value: '900+', label: 'Alumni worldwide' },
        { value: '80+', label: 'Countries represented' },
        { value: '150+', label: 'Yoga Alliance reviews' },
        { value: '25+', label: 'Resident teachers' },
        { value: 'RYS-500', label: 'Yoga Alliance school' },
      ],
    },
    {
      type: 'form',
      form: 'newsletter',
      eyebrow: 'NOT SURE YET?',
      heading: 'Is the 300HR right *next step for you?*',
      lead: 'Not every experienced teacher is ready for a 300-hour training, and not everyone needs one right now. If you’re wondering whether this is the right time, whether your experience is enough, or what to look for when comparing advanced trainings, we’ve put together a short guide to help you make a confident decision. Whether you choose Radiantly Alive or another school, you’ll have a clearer understanding of what makes a 300-hour training worth the investment.',
      fallbackHref: SOURCE,
      submitLabel: 'Download the decision guide',
      privacyNote: 'No spam. Unsubscribe any time. Honest. No agenda. Five minutes.',
    },
    {
      type: 'split',
      eyebrow: 'WHAT THE 300HR IS',
      heading: 'Not more of what you already did. *The next thing.*',
      paragraphs: [
        'The 200hr builds a foundation. You learn to teach; safely, clearly, with confidence. That work is complete in itself.',
        'The 300hr is for the teacher who has been doing it for a year or more, has stood in front of real students, and feels something deeper still asking. Not more techniques. A different quality of engagement with the practice, with the people in the room, with yourself as a teacher.',
        '26 days in Ubud. In a school that has been here since 2010, with the same teachers, the same shalas, the same students coming back year after year.',
      ],
      image: 'yttStartDailyRhythm',
      imageSide: 'left',
      shape: 'arch',
    },
    {
      type: 'features',
      numbered: true,
      columns: 4,
      items: [
        {
          title: 'Advanced teaching methodology',
          text: 'Not just more techniques. A deeper look at how you actually lead. Your cues, your presence, your ability to read and respond to a room in real time.',
        },
        {
          title: 'Philosophy as living practice',
          text: 'The Yoga Sutras, the Bhagavad Gita, Vedanta. Studied not as history but as a framework you actually use. At this level, philosophy isn’t separate from practice.',
        },
        {
          title: 'Deeper personal practice',
          text: 'Advanced asana, functional anatomy, breathwork. For a teacher who already has a practice. Building depth, not just range.',
        },
        {
          title: 'Leadership and the long game',
          text: 'What it means to teach with real authority over time. How to sustain it. Where to go next. This is taught explicitly here, and it’s rare.',
        },
      ],
    },
    {
      type: 'features',
      eyebrow: 'WHO IS THIS FOR',
      heading: 'This training is *for you if…*',
      lead: '**Prerequisites:** A valid 200hr RYT certification and at least one year of regular teaching. This is a continuing education programme for working teachers, not an entry point into teaching. If you’re earlier in your path but feel strongly called to this level of work, reach out to us directly before enrolling, we’ll be honest with you.',
      columns: 3,
      tone: 'paper',
      items: [
        {
          title: 'You’re teaching and want to teach better',
          text: 'You’ve led classes. Something is working. And something is still asking to go deeper. Deeper into your cues, your presence, your understanding of what’s actually happening in the room when you teach.',
        },
        {
          title: 'You want your practice to mean more',
          text: 'The physical practice is familiar now. You want to work with what it opens: the philosophy, the breath, the inner dimension. You want a space that takes yoga seriously at that level.',
        },
        {
          title: 'You’re ready for the E-RYT 500',
          text: 'The Yoga Alliance 500-hour credential is the marker of a senior teacher and trainer. This training qualifies you to register, but more importantly, it gives you the actual depth the credential represents.',
        },
      ],
    },
    {
      type: 'intro',
      eyebrow: 'IN THEIR WORDS',
      heading: 'What 300hr *graduates say.*',
      paragraphs: ['People who came, did the work, and went back to their teaching lives. Unedited.'],
      note: '◆ Yoga Alliance RYS-500 ◆ E-RYT 500 Faculty ◆ 900+ Alumni Network ◆ 150+ Yoga Alliance Reviews',
    },
    {
      type: 'testimonials',
      items: [
        {
          quote: 'The faculty don’t let you perform. They want the real thing, and they know how to help you find it. That’s not common.',
          name: 'Marta Svensson',
          context: 'Sweden · 2023',
        },
        {
          quote:
            'I came in thinking I needed more techniques. What I actually needed was depth of presence. The philosophy work alone changed how I teach.',
          name: 'James Okafor',
          context: 'UK · 2024',
        },
        {
          quote:
            'The supervised teaching, real feedback, no softening, that’s what made it serious. It’s not comfortable. It’s exactly what advanced training should be.',
          name: 'Anna Lindqvist',
          context: 'Sweden · 2022',
        },
        {
          quote:
            'Two years later I’m co-facilitating RA retreats in Europe. I wouldn’t have thought that was possible when I left Bali. The path just kept opening.',
          name: 'Liz',
          context: 'Germany · 300hr 2021 · RA Faculty Path',
        },
      ],
    },
    {
      type: 'features',
      eyebrow: 'WHAT YOU’LL WORK ON',
      heading: 'The *Curriculum*',
      lead: 'Six core areas across 26 days. Not taught as subjects, taught as practices. Each one is something you’ll carry back into your teaching, not something you’ll file away.',
      columns: 2,
      tone: 'paper',
      items: [
        {
          label: '01 – Pillar',
          title: 'Advanced Teaching Methodology',
          text: 'The deepest work of the training. How you cue, sequence, and adapt; studied at a level that goes past technique. Supervised practice teaching with direct feedback from faculty who have been training teachers for over a decade. You’ll be challenged on your habits and asked to teach with more precision, more responsiveness, more presence.',
        },
        {
          label: '02 – Pillar',
          title: 'Advanced Asana Exploration',
          text: 'RA Vinyasa at an advanced level, for a teacher who already has a practice. Arm balances, backbends, inversions and their architecture. How to teach complex postures to students with different bodies and different histories. The asana curriculum is about refinement and intelligent risk, not adding more shapes.',
        },
        {
          label: '03 – Pillar',
          title: 'Applied Anatomy & Biomechanics',
          text: 'Functional anatomy for the advanced practitioner. Joint mechanics, fascia, the nervous system. How to read a body, spot compensation patterns, and modify with real understanding rather than borrowed rules. Guest specialist teaching is integrated into this module. Graduates consistently say this is among the most practically useful work of the entire training.',
        },
        {
          label: '04 – Pillar',
          title: 'Yoga Philosophy & Living Inquiry',
          text: 'Patanjali’s Yoga Sutras, the Bhagavad Gita, Vedanta. Studied seriously, not as a history lesson. Philosophy at this level is a framework for examining how you practice, how you teach, and how you move through your life. Daily meditation and pranayama build the experiential ground the study needs.',
        },
        {
          label: '05 – Pillar',
          title: 'Pranayama, Restorative & Yin',
          text: 'The energetic side of practice, taught rigorously. Classical pranayama, its physiological basis, and how to introduce it safely in class. Restorative and Yin studied as distinct disciplines, not as recovery. A teacher at the 500-hour level should be able to hold every end of the practice spectrum. This module builds that range.',
        },
        {
          label: '06 – Pillar',
          title: 'Leadership, Voice & the Path That Comes Next',
          text: 'What it means to teach at this level and to keep teaching well over time. Your voice as a teacher: how it’s distinct, how to refine it, how not to lose it. How to build a sustainable career. How to lead without performing. This module also looks honestly at what comes after the 300hr: ongoing mentorship, the possibility of contributing to RA trainings and events, the alumni network you’re stepping into, and what the longer teacher path can look like when it’s pursued with intention.',
        },
      ],
    },
    {
      type: 'features',
      heading: 'This is what shifts after *26 days of this work.*',
      lead: 'Not a different style. A different foundation. Most teachers leave with the same technique they arrived with and a fundamentally different understanding of what they’re doing with it. These are not outcomes we promise. They are patterns we have observed across a decade of 300hr cohorts.',
      numbered: true,
      columns: 4,
      tone: 'plum',
      items: [
        { title: 'You build classes around principles.', text: 'Many teachers build classes around poses.' },
        { title: 'You understand how to build them from scratch.', text: 'Many teachers rely on sequences that worked before.' },
        { title: 'You teach what serves the room.', text: 'Many teachers teach what worked for them.' },
        { title: 'You facilitate what the practice opens.', text: 'Many teachers guide people through movement.' },
      ],
      ctas: [
        {
          label: 'Ready to take the next step? View upcoming training dates',
          href: '#dates',
        },
      ],
    },
    {
      type: 'people',
      eyebrow: 'The Faculty',
      heading: 'People who are still *genuinely in it.*',
      lead: 'Every 300-hour is guided by one lead teacher who accompanies the group from beginning to end, supported by specialist faculty who step in for their areas of expertise. **Your Lead Teacher Depends on Your Cohort.** This is not a co-led training. One senior teacher leads each cohort, start to finish.',
      columns: 3,
      people: [
        {
          name: 'Joëlle Sleebos',
          role: 'November 2026 & 2027 Lead Teacher · E-RYT 500',
          image: 'teacherJoelle',
          bio: [
            'Joëlle brings clarity, structure, and depth to her trainings. A rare combination shaped by a background in economics and project management alongside years of teaching Vinyasa, Yin, and yogic philosophy.',
            'Rooted in emotional safety and quiet strength, she guides students toward authentic expression rather than performance, helping them trust their own voice long before the training ends.',
            'Leads the November 2026 & 2027 cohort',
          ],
        },
        {
          name: 'Zara Miranda',
          role: 'May 2027 Lead Teacher · E-RYT 500',
          image: 'teacherZara',
          bio: [
            'Zara trained originally in Ashtanga and Vinyasa Flow in India, later continuing her studies with globally recognised teacher Eoin Finn. Her teaching integrates discipline, awareness, and stillness.',
            'She creates spaces where students feel supported to honour their bodies, energy, and individual experience; bringing warmth, humour, and thoughtful reflection into every class.',
            'Leads the May 2027 cohort',
          ],
        },
      ],
    },
    {
      type: 'people',
      eyebrow: 'Specialist Faculty',
      lead: 'Each module is taught by someone who lives their subject – not a guest lecturer reading slides. Different disciplines. Different perspectives. One shared commitment to developing thoughtful teachers.',
      columns: 4,
      people: [
        {
          name: 'Ade Adinata',
          role: 'Ashtanga & Lineage',
          image: 'teacherAde',
          bio: ['Authorized Level 2 by Sharath Jois. Seven years dedicated to sharing the Ashtanga method with precision and simplicity.'],
        },
        {
          name: 'Dr. Ravinjay Kuckreja',
          role: 'Yoga Philosophy',
          image: 'ytt300FacultyRavinjay',
          bio: ['A Bali resident of over a decade with a doctorate in ancient scriptures. Reads directly from Sanskrit, precise about application.'],
        },
        {
          name: 'Chris Fox',
          role: 'Movement Science',
          image: 'ytt300FacultyChrisFox',
          bio: ['Movement Educator and FRC Mobility Specialist. Brings physical therapy and resistance training into the training room.'],
        },
        {
          name: 'Lucinda Muldoon',
          role: 'Embodiment Specialist',
          image: 'teacherLucinda',
          bio: ['Ten years as an Exercise Physiologist. Integrates fascial bodywork and a “soft but strong” approach to practice.'],
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'WHAT YOU’LL TRAIN',
      heading: 'A real school. *Not a rented venue.*',
      paragraphs: [
        'Most teacher trainings in Bali rent a shala, a villa or retreat centre for the month. Radiantly Alive has been in Ubud since 2010 with a permanent studio, resident teachers, a daily class schedule, a café, and students who come every week not because there’s a training, but because this is where they practice.',
        'When you train here, you step into something with its own rhythm and culture. That’s different from training in a space that was set up for you and disappears when you leave.',
        'You have unlimited access to the full class schedule before, during, and after the training. Morning classes, yin, restorative, meditation, breathwork. You’re not just attending a training. You’re inside an active practice community for a month.',
      ],
      note: '25+ Teachers on Staff · 5 Practice Shalas · 15+ Years in Ubud',
      image: 'ytt300OpeningCeremony',
      imageSide: 'right',
      tone: 'paper',
    },
    {
      type: 'features',
      columns: 3,
      tone: 'paper',
      items: [
        {
          title: 'Daily access to studio classes',
          text: 'Full class schedule access from one week before the training to one week after. You’re not just training, you’re living inside an active yoga school for a month.',
        },
        {
          title: 'RA Studio Café on site',
          text: 'Plant-based food available at training rates, on site. The café is where the cohort tends to gather between sessions, that informality matters for what happens in the room.',
        },
        {
          title: 'Ubud – the right environment for this work',
          text: 'Not tourism copy. Ubud is genuinely slower, more inward. The pace supports intensive study in a way most cities don’t. The cultural relationship to practice here is real. You feel it within a few days.',
        },
        {
          title: 'Cultural excursions and ceremonies',
          text: 'Integrated into the programme schedule where relevant – approached with genuine respect and context, not as tourism add-ons.',
        },
        {
          title: 'Accommodation guide provided',
          text: 'Curated options across all budgets, within walking or short ride distance from the studio. Included in the programme pack.',
        },
      ],
    },
    {
      type: 'schedule',
      eyebrow: 'WHAT YOU’LL TRAIN',
      heading: 'Sample daily *schedule*',
      lead: 'Structured days. Intensive mornings. Evenings mostly yours. The rhythm is designed to allow depth without burning people out in week one.',
      items: [
        { time: '6:30 – 7:10', title: 'Meditation & Pranayama' },
        { time: '7:30 – 9:30', title: 'Sadhana – Advanced Asana Practice' },
        { time: '9:30 – 10:30', title: 'Breakfast' },
        { time: '10:30 – 13:00', title: 'Advanced Teaching Lab' },
        { time: '13:00 – 14:30', title: 'Lunch' },
        { time: '14:30 – 16:00', title: 'Advanced Asana Exploration' },
        { time: '16:15 – 18:00', title: 'Anatomy / Philosophy' },
        { time: 'Selected evenings', title: 'Restorative / Yin / Cultural visits' },
      ],
      note: 'Exact schedule varies across the 26 days. Full program provided in preparatory materials.',
    },
    {
      type: 'prose',
      sections: [
        {
          heading: 'Why the structure is built this way',
          paragraphs: [
            'The morning sadhana is personal practice, separate from your teaching practice. By week three, that distinction tends to be one of the more significant things that shifts. You start to understand what you actually need from the mat, versus what you perform on it.',
            'The teaching lab sessions are where most of the real work happens. Small groups. Supervised peer teaching. Specific feedback, direct, not cushioned. Not comfortable. Necessary.',
            'The anatomy and philosophy sessions in the afternoon are designed to be integrated with, not isolated from, the morning practice. What you study shapes how you move the next day.',
            'Evenings are mostly unstructured. That’s deliberate. The depth that becomes available in 26 days depends on people actually resting.',
          ],
        },
      ],
    },
    {
      type: 'intro',
      eyebrow: 'AFTER THE TRAINING',
      heading: 'The 300hr is a door, *not a destination.*',
      note: 'Most schools issue a certificate. Very few continue supporting graduates years after they leave.',
      tone: 'paper',
    },
    {
      type: 'stats',
      tone: 'paper',
      items: [
        { value: '900+', label: 'Graduates Worldwide' },
        { value: '80+', label: 'Countries Represented' },
        { value: '15+', label: 'Years of Training in Ubud' },
        { value: 'Global', label: 'Events, Collaborations, Ongoing Community' },
      ],
    },
    {
      type: 'features',
      lead: 'Most teachers leave Bali and return to their lives changed. Some continue developing through further trainings, mentorship, collaborations, and teaching opportunities within the wider RA community. There is no formal programme and nothing is guaranteed. But over fifteen years, we’ve watched many graduates stay connected to the school and to one another in ways that continue long after the training ends.',
      columns: 3,
      items: [
        {
          label: 'Community',
          title: 'An active network of working teachers',
          text: '900+ graduates across 80 countries. Not a mailing list – teachers who trained together, stay in contact, and continue developing alongside one another.',
        },
        {
          label: 'Continuity',
          title: 'Ongoing development beyond the certificate',
          text: 'Some graduates return to assist future cohorts. Others co-facilitate RA events in Europe and elsewhere. The relationship with the school doesn’t end at graduation.',
        },
        {
          label: 'Ecosystem',
          title: 'Part of something with a longer arc',
          text: 'Radiantly Alive is not running isolated trainings. It is building a community of teachers with shared values, shared standards, and a shared understanding of practice.',
        },
      ],
    },
    {
      type: 'quote',
      tone: 'crimson',
      quote:
        'The doors just keep opening. I did my 300hr and Radiantly Alive has shown me what it actually looks like to walk this path long-term, as a teacher and as a person.',
      name: 'Liz',
      context: 'Germany · 300hr Graduate · RA Faculty Path',
      image: 'yttStartGraduateClosing',
    },
    {
      type: 'form',
      form: 'newsletter',
      eyebrow: 'BEFORE YOU ENROLL',
      heading: 'Curious what happens *after graduation?*',
      lead: 'We’ve created a short guide exploring: What the first year after graduation often looks like · How graduates stay connected to the community · The different ways teachers continue developing within the wider Radiantly Alive ecosystem',
      fallbackHref: SOURCE,
      submitLabel: 'SEND ME THE GUIDE',
      privacyNote: 'Honest. No agenda. Five minutes. No pressure. Unsubscribe any time.',
    },
    {
      type: 'cta',
      heading: 'Still wondering if this training is *the right next step?*',
      text: 'Every teacher arrives with a different background and level of experience. If you’d like to talk through whether this training is the right fit for where you are, we’d love to hear from you.',
      image: 'ytt300ClosingCeremony',
      ctas: [{ label: 'SPEAK WITH US FIRST', href: '#contact' }],
    },
    {
      type: 'table',
      id: 'dates',
      eyebrow: 'UPCOMING COHORTS',
      heading: 'Training *Dates*',
      lead: 'One cohort open for 2026, two for 2027. Places are limited to 20 per immersion.',
      columns: ['November 2026', 'May 2027', 'November 2027'],
      rows: [
        { label: 'Status', values: ['Open', 'Open', 'Open'] },
        { label: 'Dates', values: ['2 – 27 November · 26 days', '3 – 28 May · 26 days', '1 – 26 November · 26 days'] },
        { label: 'Lead teacher', values: ['Led by Joëlle Sleebos', 'Led by Zara Miranda', 'Led by Joëlle Sleebos'] },
      ],
    },
    {
      type: 'pricing',
      id: 'investment',
      eyebrow: 'INVESTMENT',
      heading: 'Your *Investment*',
      lead: 'Choose the option that works best for you. Whether you pay in full or reserve your place with a deposit, we’ll personally guide you through the next steps.',
      tiers: [
        {
          label: 'Early Commitment Price',
          prices: ['IDR 51.6 millions'],
          note: 'Pay in full today to receive our Early Commitment price. Available until the first 8 places in each cohort are filled.',
          href: '/tt-classes-retreats/p/300h-ra-vinyasa-ytt-ubud-early-bird-price',
          ctaLabel: 'Reserve Your Place',
        },
        {
          label: 'Regular Price',
          prices: ['IDR 62.3 millions'],
          note: 'Reserve your place today with a IDR 20 millions deposit. The remaining balance is due 30 days before the training begins.',
          href: '/tt-classes-retreats/p/300h-ra-vinyasa-ytt-ubud-regular-price',
          ctaLabel: 'Reserve Your Place',
        },
      ],
      notes: [
        '**[300H RA Vinyasa YTT | Ubud – Early Bird Price](/tt-classes-retreats/p/300h-ra-vinyasa-ytt-ubud-early-bird-price)** · $2,900.00',
        '**[300H RA Vinyasa YTT | Ubud – Regular Price](/tt-classes-retreats/p/300h-ra-vinyasa-ytt-ubud-regular-price)** · from $1,000.00',
        'Dates: 2026 | November 2 – 27 · 2027 | May 3 – 28 · 2027 | November 1 – 26',
        'All prices are in Indonesian Rupiah. The deposit is non-refundable but transferable to another cohort with 60 days notice.',
      ],
    },
    {
      type: 'lists',
      lists: [
        {
          title: 'What tuition includes',
          items: [
            'Full 300hr curriculum and manual',
            'All cultural experiences within the programme',
            'RA Alumni Network access (lifetime)',
            'Post-graduation support and resources',
            'Unlimited studio classes – 1 week before and after',
            'Lifelong 10% alumni discount at Radiantly Alive',
            'Yoga Alliance E-RYT 500 registration support',
            'Preparatory materials sent 4–6 weeks before start',
            'Certificate of completion',
          ],
        },
        {
          title: 'Not included',
          items: [
            'Accommodation, food, and flights are not included. Accommodation guide with curated options is provided in your programme pack.',
          ],
        },
      ],
    },
    {
      type: 'faq',
      eyebrow: 'QUESTIONS',
      heading: 'Frequently asked.',
      lead: 'The ones that come up most. If yours isn’t here, [ask us directly](#contact).',
      tone: 'paper',
      items: [
        {
          question: 'What’s actually different between the 200hr and the 300hr?',
          answer:
            'The 200hr trains you to teach safely and competently. It’s complete in itself. The 300hr is for teachers who’ve been doing it for a year or more and want to develop craft, depth, and professional maturity. The content and expectations are different in kind – not just volume. The 300hr assumes you already know how to teach.',
        },
        {
          question: 'Do I have to have done my 200hr with Radiantly Alive?',
          answer:
            'No. We welcome certified teachers from all schools and traditions. The prerequisite is a valid Yoga Alliance RYT-200 (or equivalent) and at least one year of active teaching. We ask about your background in the application – not to gatekeep, but to make sure this training is genuinely the right next step for where you are.',
        },
        {
          question: 'I haven’t been teaching consistently. Can I still apply?',
          answer:
            'Reach out to us before applying. We take the teaching requirement seriously – the 300hr content assumes a particular lived experience that consistent teaching produces. In some cases we can support applicants with a strong personal practice and a clear trajectory. A conversation is the best way to find out.',
        },
        {
          question: 'How does the E-RYT 500 registration work?',
          answer:
            'On completing the 300hr, you receive a certificate of completion. To register as an E-RYT 500 with Yoga Alliance, you combine this with your 200hr certificate and document your teaching hours (minimum 1,000 hours for E-RYT 500). We provide full guidance and support your registration. Radiantly Alive is a registered RYS-500.',
        },
        {
          question: 'What happens to most graduates after the training?',
          answer:
            'Most return to their teaching lives with noticeably more confidence and depth – that’s the ordinary outcome. Some go on to deepen through RA’s continuing education offerings, mentorship, or specialist training. A smaller number have become involved in co-facilitating RA retreats and events in Europe and elsewhere.',
        },
      ],
    },
    {
      type: 'split',
      id: 'contact',
      eyebrow: 'HAVE A QUESTION BEFORE ENROLLING?',
      heading: 'Let’s talk about *where you are.*',
      paragraphs: [
        'About prerequisites, the curriculum, which cohort makes most sense for where you are – ask us. We respond within one working day. The team is based in Ubud.',
      ],
      ctas: [
        { label: 'SPEAK WITH US FIRST', href: '/contact' },
        { label: 'info@radiantlyalive.com', href: 'mailto:info@radiantlyalive.com', variant: 'secondary' },
      ],
      image: 'yttStartMoreThanCertification',
      imageSide: 'left',
      tone: 'crimson',
    },
    {
      type: 'features',
      eyebrow: 'PRACTICAL INFORMATION',
      heading: 'Before *you come*',
      lead: 'Practical details to help you plan. If anything is unclear, [send us a message.](#contact)',
      columns: 2,
      items: [
        {
          label: 'Visa & Entry',
          title: 'Getting into Indonesia',
          text: 'Your passport needs a minimum of 18 months’ validity at entry. Most nationalities get a 30-day visa on arrival at Bali’s Ngurah Rai Airport, extendable to 60 days. Check the current requirements with your local Indonesian consulate.',
        },
        {
          label: 'Accommodation',
          title: 'Where to stay',
          text: 'Ubud has options across all budgets – simple guesthouses from ~$30/night, boutique villas at $80–200/night. Most participants stay within 10–20 minutes of the studio. We send a curated guide with your pack.',
        },
        {
          label: 'Getting Around',
          title: 'Transport in Ubud',
          text: 'Ubud is walkable from most nearby accommodation. Grab and Gojek (ride-share) are inexpensive for longer distances. Many participants rent a scooter. The studio is central and well-known to local drivers.',
        },
        {
          title: 'What to bring',
          bullets: [
            'Your yoga mat (studio mats available)',
            'Comfortable yoga clothing',
            'Swimwear and sunscreen',
            'Light footwear – flip-flops or open shoes',
            'Insect repellent',
            'Notebook and personal journal',
            'Refillable water bottle',
            'Universal power adapter (Indonesia: 2 pins)',
            'Specialist medications you need',
            'Loose clothing for evenings and cultural visits',
          ],
        },
      ],
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
      type: 'cta',
      heading: 'The training you take after you already know *how to teach.*',
      text: '26 days inside a working yoga school in Ubud. For certified teachers ready to go further.',
      image: 'ytt300Hero',
      ctas: [
        { label: 'SEE 2026 / 2027 DATES', href: '#dates' },
        { label: 'SPEAK WITH US FIRST', href: '#contact', variant: 'secondary' },
      ],
    },
  ],
  schema: {
    type: 'course',
    name: '300-Hour Advanced RA Vinyasa Yoga Teacher Training, Ubud, Bali',
    description:
      'A 26-day advanced immersion in Ubud for certified teachers with a valid RYT-200 and at least one year of teaching, leading to Yoga Alliance E-RYT 500 registration. Radiantly Alive is a registered RYS-500.',
  },
}
