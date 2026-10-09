import type { ClassPass, ClassStyle } from './types'

/**
 * Ubud studio class catalogue, from radiantlyalive.com/classes. `title` and
 * `description` are the source's class descriptions verbatim (in the source's
 * order); `summary` is each description's opening sentence. `intensity`
 * (1 gentle – 3 strong), `family` and `levels` are editorial filters for the
 * class finder. The weekly timetable itself is published by the studio's
 * booking system (Momence) and embedded rather than duplicated.
 */
export const classStyles: ClassStyle[] = [
  {
    id: 'chakra-sound-journey',
    title: 'A Chakra Sound Journey: From Root to Crown',
    summary: 'Join Ji Nya for a transformative sound journey, guiding the body, breath, and spirit through the seven chakras.',
    description:
      'Join Ji Nya for a transformative sound journey, guiding the body, breath, and spirit through the seven chakras. The experience begins with grounding movement and rhythmic breath, led by the pulse of the djembe to cultivate presence and embodiment. A guided meditation then opens the inner pathways, preparing the body and nervous system for deep listening. Each chakra is expressed through a unique soundscape inspired by the elements, from the earthy root to the expansive crown. Live instruments, vocals, and intuitive musical flow create a deeply immersive space for relaxation, release, and reconnection. This is not a performance, but an invitation to explore, feel, and return to your inner rhythm.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
  },
  {
    id: 'afro-beats-slow-flow',
    title: 'Afro Beats Slow Flow',
    summary: 'Afro Beats Slow Flow is a soulful movement journey where breath, rhythm, and intention meet.',
    description:
      'Afro Beats Slow Flow is a soulful movement journey where breath, rhythm, and intention meet. Set to the warm, melodic pulse of Afro beats, this slow flow invites you to move with presence and ease. Gentle, mindful sequencing creates smooth transitions that balance strength and softness. The practice opens the hips, spine, and heart while cultivating steady focus and embodied awareness. Music carries the experience—grounding yet uplifting, energizing without urgency and fluid without force. You’ll leave feeling centered, alive, and quietly empowered, moving with grace, groove, and grounded calm.',
    intensity: 2,
    family: 'flow',
    levels: 'All levels',
  },
  {
    id: 'ashtanga-inspired',
    title: 'Ashtanga Inspired',
    summary: 'This 90-minute class is designed for students with a solid foundation in yoga, blending the dynamic Ashtanga method with Vinyasa flow.',
    description:
      'This 90-minute class is designed for students with a solid foundation in yoga, blending the dynamic Ashtanga method with Vinyasa flow. You will explore postures from the Primary and Second Series, offering both structure and creative variation. The practice challenges strength, flexibility, and stamina through intricate sequencing and deeper stretches. Familiar shapes are woven with new transitions to support refinement and exploration. This class is ideal for practitioners comfortable with intermediate to advanced flows who enjoy focused, sustained effort. Come ready to move with dedication and leave feeling strong, accomplished, and deeply connected to your practice.',
    intensity: 3,
    family: 'strength',
    levels: 'Intermediate – advanced',
    duration: '90 min',
    featured: true,
  },
  {
    id: 'beginner-yoga',
    title: 'Beginner Yoga',
    summary: 'This class focuses on safely practicing yoga asanas by building a strong foundation in breath and mindful movement.',
    description:
      'This class focuses on safely practicing yoga asanas by building a strong foundation in breath and mindful movement. Students will learn essential breathing techniques and explore variations of Surya Namaskara, the heart of Vinyasa practice. Breath and movement are seamlessly synchronized to create strength, stability, and flow. The sequence introduces key postures, including standing poses, balances, seated twists, backbends, and hip openers. Emphasis is placed on alignment, awareness, and sustainable progression. This class is ideal for students seeking to build confidence, strength, and flexibility in a supportive, flow-based practice.',
    intensity: 1,
    family: 'flow',
    levels: 'Beginners',
    featured: true,
  },
  {
    id: 'biomagnetism-sound',
    title: 'Biomagnetism & Sound Healing',
    summary: 'This session offers a deeply relaxing experience using magnets placed on the body to support energetic balance and release.',
    description:
      'This session offers a deeply relaxing experience using magnets placed on the body to support energetic balance and release. The magnets are used to help ease stagnation and encourage the body’s natural flow and regulation. Gentle vibrations and sound are layered throughout the practice to guide the nervous system into rest. Together, magnet therapy and sound create a soothing environment for relaxation and renewal. The experience supports a sense of harmony between mind, body, and energy. You’ll leave feeling calmer, clearer, and deeply grounded in your body.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
  },
  {
    id: 'breathwork-sound',
    title: 'Breathwork & Sound Healing Journey',
    summary: 'This session invites you to come home to yourself through the combined power of breath and sound.',
    description:
      'This session invites you to come home to yourself through the combined power of breath and sound. Conscious, connected breathwork is paired with ethereal, indigenous, and heart-led music, alongside 432Hz sound healing. Crystal bowls, harmonium, handpan, shamanic drum, intuitive live singing, and natural soundscapes guide deep inner connection. Gentle, rhythmic breathing supports the release of tension, stored emotions, and limiting patterns in a soft, somatic way. The sound frequencies help calm the nervous system, open the heart, and restore balance, clarity, and intuition. Open to all levels, this class offers a safe, supportive space to soften into presence, empowerment, and peace.',
    intensity: 2,
    family: 'sound',
    levels: 'All levels',
  },
  {
    id: 'candlelit-yin',
    title: 'Candlelit Yin',
    summary: 'Slow down and soften into stillness in this deeply nourishing Candlelit Yin practice.',
    description:
      'Slow down and soften into stillness in this deeply nourishing Candlelit Yin practice. Gentle postures are held for longer periods to release tension from the deeper layers of the body. The practice supports nervous system regulation while inviting rest and spaciousness. Practiced by the warm glow of candlelight, the atmosphere encourages grounding, reflection, and inner listening. With minimal effort and plenty of support, you are guided to meet yourself with patience and compassion. Suitable for all levels, this class helps you leave feeling calmer, softer, and more at home in your body.',
    intensity: 1,
    family: 'restore',
    levels: 'All levels',
  },
  {
    id: 'flow-meditation',
    title: 'Flow & Meditation',
    summary: 'This nourishing flow gently releases tension from the physical body, creating space, ease, and quiet openness.',
    description:
      'This nourishing flow gently releases tension from the physical body, creating space, ease, and quiet openness. Guided by traditional āsana, somatic movement, and intuitive exploration, the practice supports softening and unwinding. The pacing invites the nervous system to settle while preparing the body for rest in stillness. As the body relaxes, awareness deepens, and the breath becomes naturally spacious. The class concludes with a guided inner journey through calming natural landscapes or sacred inner spaces. You’ll leave feeling restored, reset, and gently reconnected to your calm, steady inner presence.',
    intensity: 1,
    family: 'meditation',
    levels: 'All levels',
  },
  {
    id: 'fly-high',
    title: 'Fly High Yoga',
    summary: 'Discover a unique style of aerial yoga where tradition and innovation meet.',
    description:
      'Discover a unique style of aerial yoga where tradition and innovation meet. Inspired by the Iyengar practice of Yoga Kurunta, Fly High Yoga offers an alignment-focused approach off the ground. Using the Fly High Yoga belt, you’ll explore postures with greater freedom, support, and precision. The practice builds strength, increases mobility, and challenges balance and stability. Suspension allows for deeper exploration while supporting safe spinal decompression. Expect a playful yet purposeful class that feels both empowering and fun.',
    intensity: 2,
    family: 'strength',
    levels: 'All levels',
  },
  {
    id: 'gentle-flow',
    title: 'Gentle Flow',
    summary: 'Wake up with the sun, roosters, and all the local sounds, and step straight from bed onto your mat.',
    description:
      'Wake up with the sun, roosters, and all the local sounds, and step straight from bed onto your mat. This gentle morning class begins with sun salutations to greet the day and awaken the body. The practice explores basic yoga postures with an emphasis on breath, alignment, and mindfulness. Movement is slow and soothing, supporting ease, circulation, and gentle strength. Basic pranayama techniques and simple chanting are woven in to center the mind. You’ll leave feeling refreshed, grounded, and ready to meet the day with clarity and calm.',
    intensity: 1,
    family: 'flow',
    levels: 'All levels',
  },
  {
    id: 'guided-meditation-sound',
    title: 'Guided Meditation & Sound Healing',
    summary: 'Step into a pause that feels like coming home.',
    description:
      'Step into a pause that feels like coming home. Guided Meditation & Sound Healing weaves breath, intention, and vibration to quiet the mind and soften the body. You’ll be gently guided into stillness before being immersed in the ancestral rhythms of African drums and Indigenous instruments. Earthy tones travel through the body to release stored stress, regulate the nervous system, and cultivate grounding. This experience is not about doing, but about remembering and reconnecting. You’ll leave feeling centered, clear, and gently held by rhythm and resonance.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
  },
  {
    id: 'hatha-adjustments',
    title: 'Hatha with Hands-On Adjustments',
    summary: 'This Hatha Yoga class offers a steady, mindful practice with a strong emphasis on alignment, breath, and embodied awareness.',
    description:
      'This Hatha Yoga class offers a steady, mindful practice with a strong emphasis on alignment, breath, and embodied awareness. Postures are approached with care and precision, allowing time to explore each shape and build strength, stability, and balance. With clear consent and mindful intention, the teacher may offer optional hands-on adjustments to support safe alignment and deeper awareness. Adjustments are always given with respect for individual needs and boundaries. This class is suitable for all levels, from beginners building a solid foundation to experienced practitioners refining their practice. Expect a calm, focused atmosphere that supports physical clarity, mental steadiness, and present-moment awareness.',
    intensity: 2,
    family: 'flow',
    levels: 'All levels',
  },
  {
    id: 'hatha',
    title: 'Hatha Yoga',
    summary: 'Most yoga classes are a form of Hatha Yoga, and this class is a homage to its ancient lineages originating in India.',
    description:
      'Most yoga classes are a form of Hatha Yoga, and this class is a homage to its ancient lineages originating in India. Hatha translates to Ha (sun) and Tha (moon), symbolizing the union of polar energies within the body. Through this union, the practice supports the awakening and flow of primary energy along the central channel. Classes often blend fluid vinyasa with held postures arranged in an intelligent, purposeful sequence. Each session reflects the personal practice and wisdom of the teacher guiding the class. Expect a balanced experience that weaves strength, stillness, breath, and awareness into one cohesive flow.',
    intensity: 2,
    family: 'flow',
    levels: 'All levels',
    featured: true,
  },
  {
    id: 'himalayan-kriya',
    title: 'Himalayan Kriya Yoga',
    summary: 'Himalayan Kriya Yoga is an energy-based practice designed to support the clearing of energetic blockages.',
    description:
      'Himalayan Kriya Yoga is an energy-based practice designed to support the clearing of energetic blockages. The class weaves dynamic movement, breathwork, mudras, and chanting into a focused, intentional sequence. This sacred system emphasizes alignment and purification on physical, mental, emotional, and subtle levels. Practices are structured to cultivate balance, awareness, and inner coherence. The experience invites deep connection with the body’s energetic pathways and inner vitality. You’ll leave feeling aligned, clear, and more connected to a sense of inner harmony.',
    intensity: 2,
    family: 'energy',
    levels: 'All levels',
  },
  {
    id: 'inside-flow',
    title: 'Inside Flow',
    summary: 'Inside Flow is a vinyasa-based practice that fuses movement, breath, music, and dance into one continuous experience.',
    description:
      'Inside Flow is a vinyasa-based practice that fuses movement, breath, music, and dance into one continuous experience. In this class, breath and movement flow as one, guiding you through transitions with fluidity and grace. You’ll learn a yoga-based choreography set to modern, eclectic music, gradually building the sequence. The practice peaks when the full flow is performed to a main song, synchronized with its rhythm, lyrics, and duration. This immersive moment often feels trance-like and deeply meditative, as if singing the song with your body. Recommended for practitioners with a foundation in yoga or movement, expect plenty of sweat, joy, and fun.',
    intensity: 3,
    family: 'flow',
    levels: 'Some experience',
  },
  {
    id: 'kundalini',
    title: 'Kundalini',
    summary: 'Kundalini Yoga is a dynamic, holistic practice integrating physical postures, breathwork, meditation, and chanting.',
    description:
      'Kundalini Yoga is a dynamic, holistic practice integrating physical postures, breathwork, meditation, and chanting. The practice is designed to awaken and channel the body’s energy while building strength and stamina. Regular practice supports mental clarity, emotional resilience, and a deeper sense of inner connection. Experiences are often described as energizing, expansive, and profoundly transformative. This approach addresses body, mind, and spirit, supporting balance and overall well-being. Whether seeking vitality, inner peace, or spiritual growth, this class offers a powerful pathway for self-discovery.',
    intensity: 2,
    family: 'energy',
    levels: 'All levels',
  },
  {
    id: 'meditation-foundations',
    title: 'Meditation Foundations',
    summary: 'This meditation class is open to all levels, welcoming beginners and experienced practitioners alike.',
    description:
      'This meditation class is open to all levels, welcoming beginners and experienced practitioners alike. You’ll explore insights drawn from Indian, Buddhist, and modern teachings in a supportive group setting. Both seated and walking meditation are practiced to cultivate presence and embodied awareness. The practice focuses on body, breath, and emotions to help quiet distraction and reveal inner wisdom. Simple yet profound techniques support stress reduction, mindfulness, and emotional clarity. In just one hour, you’ll leave with practical tools to bring greater ease, joy, and peace into daily life.',
    intensity: 1,
    family: 'meditation',
    levels: 'All levels',
  },
  {
    id: 'mindfulness-meditation',
    title: 'Mindfulness & Meditation',
    summary: 'Open to all levels, beginners and experienced meditators alike, this class is the perfect opportunity to connect with new spiritual friends, gain valuable insights (\'dharma\') from Indian, Buddhist, and modern teachings, and experience the calming power of both seated and walking meditation.',
    description:
      'Open to all levels, beginners and experienced meditators alike, this class is the perfect opportunity to connect with new spiritual friends, gain valuable insights (\'dharma\') from Indian, Buddhist, and modern teachings, and experience the calming power of both seated and walking meditation. The \'simple but not easy\' secret to meditation is unlocking your inner wisdom by focusing on your body, breath, and emotions, helping you break free from the constant distractions of the modern world. In one hour, you’ll gain powerful tools to reduce stress, cultivate mindfulness, and open your heart to greater joy and peace. This class is designed to be enjoyable and accessible, giving you the skills to transform your daily life.',
    intensity: 1,
    family: 'meditation',
    levels: 'All levels',
  },
  {
    id: 'myofascial-release',
    title: 'Myofascial Release',
    summary: 'Myofascial Release Yoga combines gentle pressure, conscious breath, and inward-focused awareness to free the fascia—the connective tissue that weaves through your entire body.',
    description:
      'Myofascial Release Yoga combines gentle pressure, conscious breath, and inward-focused awareness to free the fascia—the connective tissue that weaves through your entire body. Using simple props, we soften tension where it hides, creating space for relaxation, balance, and the free flow of energy. As the fascia releases, emotions and long-held energies may also rise, offering profound self-discovery and restoration on every level—body, mind, and soul. Whether you are seeking relief from physical pain, mental confusion and stress, or simply a deeper connection with yourself, this sanctuary of holistic transformation promises release and renewal at every level.',
    intensity: 1,
    family: 'restore',
    levels: 'All levels',
  },
  {
    id: 'myoyin',
    title: 'MyoYin',
    summary: 'MyoYin, created by Jo Phee, fuses Myofascial Release Yoga with the gentle, prolonged holds of Yin Yoga for deeper healing.',
    description:
      'MyoYin, created by Jo Phee, fuses Myofascial Release Yoga with the gentle, prolonged holds of Yin Yoga for deeper healing. Myofascial Release and Yin Yoga are powerful techniques when used individually and are even more powerful when used together. Both target muscles and fascia to ease tension, release knots, and support overall body balance. Practitioners begin by using release techniques with balls to address tight spots, then transition into meditative Yin poses that enhance flexibility and calm. Together, they boost circulation, foster relaxation, and build a stronger, more resilient physique.',
    intensity: 1,
    family: 'restore',
    levels: 'All levels',
  },
  {
    id: 'mastering-nervous-system',
    title: 'Mastering Your Nervous System',
    summary: 'This class is for you if you feel anxious, disconnected from your body, or struggle with health issues, and want to work with your nervous system to change that.',
    description:
      'This class is for you if you feel anxious, disconnected from your body, or struggle with health issues, and want to work with your nervous system to change that. Your nervous system has its own intelligence. It\'s animal biology. When you\'re stressed, your nervous system goes into survival mode—fight, flight, or freeze—just as animals in the wild do. And your nervous system doesn\'t differentiate between the stress of having a deadline at work and the stress of being chased by a tiger. Stress is stress. But you\'re not just a wild animal. You also have a highly intelligent part of the brain with the capacity to override your natural way of completing survival responses. That, combined with traumatic experiences and living in modern society, can create chronic stress. This can lead to anxiety, shame, helplessness, depression, hypervigilance, burnout, and chronic pain. The exciting part is that when you work with core human struggles through the lens of the body—your animal biology—you reconnect with your nervous system\'s natural ability to release stuck survival responses. When you learn to regulate your nervous system, anything becomes possible, because even when life gets difficult, you know you can handle it. In these classes, you\'ll explore what happens in your nervous system, somatically, when you\'re triggered. That means noticing sensations and emotions in your body. You\'ll learn to build the capacity to stay present in your body without reacting, and you\'ll gain practical somatic tools to help your system settle and regulate. Each class explores a different core human struggle. It\'s trauma-informed, and the practices are gentle. You\'re not doing catharsis, emotional release, or trauma healing here. Drop-ins are welcome. No prior experience is needed, and no special clothing is required.',
    intensity: 1,
    family: 'meditation',
    levels: 'All levels',
  },
  {
    id: 'power-vinyasa',
    title: 'Power Vinyasa',
    summary: 'Power Vinyasa is a strong, dynamic flow that links breath with continuous movement.',
    description:
      'Power Vinyasa is a strong, dynamic flow that links breath with continuous movement. The practice builds heat, strength, and flexibility through challenging, intelligently sequenced postures. Transitions are fluid and purposeful, cultivating focus and embodied presence. Students are encouraged to explore their personal edge with awareness and choice. The class is energizing and athletic, offering options to scale intensity. You’ll leave feeling powerful, grounded, and connected to your breath and body.',
    intensity: 3,
    family: 'strength',
    levels: 'Some experience',
  },
  {
    id: 'power-yoga',
    title: 'Power Yoga',
    summary: 'Power Yoga is a dynamic, energizing practice designed to build strength, endurance, and flexibility.',
    description:
      'Power Yoga is a dynamic, energizing practice designed to build strength, endurance, and flexibility. The class links breath with continuous movement through challenging, full-body sequences. Expect to sweat, engage your core, and cultivate focus and resilience. The pace is strong and motivating, supporting both physical and mental stamina. Modifications are offered to make the practice accessible for different bodies and experience levels. You’ll leave feeling empowered, energized, and grounded in your strength.',
    intensity: 3,
    family: 'strength',
    levels: 'All levels, with options',
  },
  {
    id: 'ra-vinyasa',
    title: 'RA Vinyasa',
    summary: 'This signature offering is a dynamic vinyasa flow that links breath and movement to build heat, strength, and flexibility.',
    description:
      'This signature offering is a dynamic vinyasa flow that links breath and movement to build heat, strength, and flexibility. Intelligent sequencing weaves challenging asana into a continuous, purposeful flow. The practice cultivates focus, presence, and embodied awareness, both on and off the mat. Students are encouraged to explore their personal edge with curiosity rather than force. Strong guidance and collective energy create a supportive and motivating environment. You’ll leave feeling empowered, balanced, and deeply connected to your body and breath.',
    intensity: 3,
    family: 'flow',
    levels: 'Some experience',
    featured: true,
  },
  {
    id: 'restorative-yin-sound',
    title: 'Restorative Yin & Sound Healing',
    summary: 'Restorative Yin & Sound Healing is a slow, nourishing practice of deep release and stillness.',
    description:
      'Restorative Yin & Sound Healing is a slow, nourishing practice of deep release and stillness. Long-held yin postures allow the body to soften without force, supporting the joints, fascia, and nervous system. Time slows as the breath becomes a gentle anchor for rest and awareness. Grounding rhythms of African drums and Indigenous instruments create a steady, calming soundscape. The combination of stillness and sound supports surrender, balance, and cellular-level relaxation. You’ll leave feeling spacious, rooted, and deeply restored, carrying calm beyond the mat.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
  },
  {
    id: 'slow-flow',
    title: 'Slow Flow',
    summary: 'Slow Flow Yoga is a gentle, mindful practice designed to calm the mind and release tension.',
    description:
      'Slow Flow Yoga is a gentle, mindful practice designed to calm the mind and release tension. The slower pace allows time to fully connect movement with breath. Deep stretches support flexibility, circulation, and ease in the body. The practice encourages relaxation and nervous system settling. Suitable for all levels, it offers a supportive space to unwind without pressure. You’ll leave feeling refreshed, grounded, and ready for a restful night’s sleep.',
    intensity: 1,
    family: 'flow',
    levels: 'All levels',
  },
  {
    id: 'somatic-breath',
    title: 'Somatic Breath',
    summary: 'Breathwork is a guided practice using conscious, connected breathing to expand awareness and support emotional release.',
    description:
      'Breathwork is a guided practice using conscious, connected breathing to expand awareness and support emotional release. Through carefully paced breaths, energy that feels stuck can begin to move and soften. The practice gently activates and settles stress responses, supporting regulation and balance in the body. Sessions can feel soft and spacious while also offering moments of intensity and dynamic release. You are invited to actively participate and listen to your own inner experience throughout the journey. Open to all levels, including beginners, this practice offers a safe, self-led path to deeper connection and clarity.',
    intensity: 2,
    family: 'energy',
    levels: 'All levels',
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing',
    summary: 'Sound Healing is a deeply calming practice that supports nervous system regulation and relaxation.',
    description:
      'Sound Healing is a deeply calming practice that supports nervous system regulation and relaxation. Through continuous sound, the body is invited into slower brainwave states associated with rest, balance, and ease. Sound journeys create an immersive, harmonic environment that encourages letting go of physical tension. Unstructured sound gently bypasses analytical thinking, allowing intuitive and creative awareness to emerge. Each person’s experience is unique, and sensations or responses may vary from moment to moment. This practice offers a spacious container for relaxation, reflection, and inner exploration.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
    featured: true,
  },
  {
    id: 'vinyasa-krama',
    title: 'Vinyasa Krama',
    summary: 'Vinyasa Krama is an ancient, lineage-based practice developed by T.',
    description:
      'Vinyasa Krama is an ancient, lineage-based practice developed by T. Krishnamacharya. This method bridges Hatha Yoga and Vinyasa through precise, intentional sequencing. Postures are approached step by step, with each movement purposefully flowing into the next. The practice cultivates strength, stability, and mindfulness through breath-led progression. Dynamic movement is balanced with moments of pause and meditative awareness. This class invites you to slow down, refine your practice, and reconnect with the traditional depth of yoga.',
    intensity: 2,
    family: 'flow',
    levels: 'All levels',
  },
  {
    id: 'yin',
    title: 'Yin Yoga',
    summary: 'Yin Yoga is a gentle, deeply restorative practice that balances more active, heat-building styles of yoga.',
    description:
      'Yin Yoga is a gentle, deeply restorative practice that balances more active, heat-building styles of yoga. Postures are held for longer periods to gently stretch the deeper connective tissues. This slow approach supports gradual release, improved flexibility, and deep relaxation. The practice invites stillness, mindful breathing, and nervous system regulation. Suitable for all levels, Yin Yoga offers a calm and accessible meditative experience. You’ll leave feeling refreshed, recharged, and restored in both body and mind.',
    intensity: 1,
    family: 'restore',
    levels: 'All levels',
    featured: true,
  },
  {
    id: 'yin-sound',
    title: 'Yin & Sound Healing',
    summary: 'Immerse yourself in a gentle Yin Yoga and Sound Healing experience designed to support deep rest and release.',
    description:
      'Immerse yourself in a gentle Yin Yoga and Sound Healing experience designed to support deep rest and release. Long-held yin postures invite the body to soften while creating space in the joints, fascia, and nervous system. As you rest, the teacher offers intuitive vocal tones and light singing to support inner listening and emotional awareness. Soothing sounds from crystal bowls, handpan, chacapa, nature seeds, birdsong, and shamanic drum create an immersive soundscape. The elements of water, fire, wood, and air inspire a sense of connection, balance, and grounded presence. You’ll leave feeling deeply relaxed, restored, and softly reconnected to your inner wisdom.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
  },
  {
    id: 'yin-sound-biomagnetism',
    title: 'Yin, Sound Healing & Biomagnetism',
    summary: 'This 90-minute experience begins with 60 minutes of Yin Yoga, a deeply restorative practice using long-held, supported postures.',
    description:
      'This 90-minute experience begins with 60 minutes of Yin Yoga, a deeply restorative practice using long-held, supported postures. Yin Yoga gently targets the fascia, encouraging gradual release, mindfulness, and nervous system settling. As the body softens into stillness, awareness deepens, and tension naturally unwinds. The final 30 minutes combine sound healing with biomagnetism, with magnets placed on the body to support energetic balance and relaxation. Soothing vibrations and sound guide you into a deeply restful, integrative state. Together, these practices leave you feeling refreshed, restored, and gently aligned in body, mind, and energy.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
    duration: '90 min',
  },
  {
    id: 'yin-tcm',
    title: 'Yin & TCM',
    summary: 'This class blends the therapeutic benefits of Yin Yoga with the wisdom of Traditional Chinese Medicine.',
    description:
      'This class blends the therapeutic benefits of Yin Yoga with the wisdom of Traditional Chinese Medicine. Long-held, floor-based postures gently stimulate the fascia, joints, and deep connective tissues. The practice supports mobility, circulation, and hydration while encouraging deep release. Guided by TCM principles, specific meridians are stimulated to support the flow of vital energy. Mindful breathing and stillness help regulate the nervous system and cultivate mental clarity. Suitable for all levels, this class offers a space to reset, release, and restore balance.',
    intensity: 1,
    family: 'restore',
    levels: 'All levels',
  },
  {
    id: 'yoga-nidra',
    title: 'Yoga Nidra',
    summary: 'Experience deep relaxation and inner restoration through the practice of Yoga Nidra.',
    description:
      'Experience deep relaxation and inner restoration through the practice of Yoga Nidra. Yoga Nidra, often called “yogic sleep,” is a guided meditation that brings the body into profound rest. While the body relaxes deeply, the mind remains gently aware and receptive. Through clear verbal guidance, physical tension is released, and mental activity softens. The practice supports nervous system regulation, healing, and renewal. You’ll leave feeling rested, refreshed, and quietly restored from within.',
    intensity: 1,
    family: 'meditation',
    levels: 'All levels',
  },
  {
    id: 'yoga-nidra-sound',
    title: 'Yoga Nidra & Sound Healing',
    summary: 'Yoga Nidra & Sound Healing is an invitation into profound rest and deep restoration.',
    description:
      'Yoga Nidra & Sound Healing is an invitation into profound rest and deep restoration. You’ll be guided through Yoga Nidra, a state of conscious rest in which the body relaxes and the nervous system softens. As stillness deepens, the mind quiets, and healing processes are gently supported. Steady rhythms of African drums and Indigenous instruments create a grounding, reassuring soundscape. Vibrations move through the body to ease fatigue and restore a sense of inner connection. You’ll leave feeling renewed, rooted, and quietly reawakened to yourself.',
    intensity: 1,
    family: 'sound',
    levels: 'All levels',
  },
]

export const classFamilies: { id: ClassStyle['family'] | 'all'; label: string }[] = [
  { id: 'all', label: 'All classes' },
  { id: 'flow', label: 'Flow' },
  { id: 'strength', label: 'Strength' },
  { id: 'restore', label: 'Restore' },
  { id: 'sound', label: 'Sound' },
  { id: 'meditation', label: 'Meditation' },
  { id: 'energy', label: 'Breath & energy' },
]

/** Class Passes, verbatim from the source pricing table (prices in IDR). */
export const classPasses: (ClassPass & { href: string })[] = [
  { label: '1 Class', standard: '180K', local: '120K', href: 'https://momence.com/Radiantly-Alive/membership/1-Class-%7C-Ubud-/916169' },
  { label: '3 Classes', standard: '495K', local: '360K', href: 'https://momence.com/Radiantly-Alive/membership/3-Classes-%7C-Ubud/916170' },
  { label: '5 Classes', standard: '780K', local: '585K', href: 'https://momence.com/Radiantly-Alive/membership/5-Classes-%7C-Ubud/916171' },
  { label: '10 Classes', standard: '1.500K', local: '1.200K', href: 'https://momence.com/Radiantly-Alive/membership/10-Classes-%7C-Ubud/916172' },
  { label: '20 Classes', standard: '2.400K', local: '2.000K', href: 'https://momence.com/Radiantly-Alive/membership/20-Classes-%7C-Ubud/916173' },
]

/** Unlimited Pass packages, verbatim from the source (prices in IDR). */
export const unlimitedPasses: (ClassPass & { href: string })[] = [
  { label: '1 Week Unlimited', standard: '1.320K', href: 'https://momence.com/Radiantly-Alive/membership/1-Week-Unlimited-%7C-Ubud-/913835' },
  { label: '1 Month Unlimited', standard: '3.000K', href: 'https://momence.com/Radiantly-Alive/membership/1-Month-Unlimited-%7C-Ubud/913829' },
]

export const passNotes = [
  'All prices in IDR. Class passes are valid for 60 days. KTP / KITAS rates are applied at reception on presentation of your document.',
  'All prices in IDR. Unlimited access to the Ubud studio\'s class schedule for the duration of the pass.',
  'Balinese at reception – Donation',
  'Notes: All class and workshop payments are non-refundable. Credits are valid only within the stated time period and cannot be exchanged for cash.',
]

/** "Before You Come", verbatim from the source. */
export const studioPolicies = [
  {
    title: 'Suggested Arrival Timing',
    body: 'Please arrive 15 minutes before class starts so you can confirm your booking with our reception staff and settle into your mat.',
  },
  {
    title: 'Late Arrival Policy',
    body: 'To respect the teacher and other students, you will not be permitted late entry past 10 minutes after the class has started.',
  },
  {
    title: 'Credit Deduction',
    body: 'If you arrive more than 10 minutes late, your class credit will be deducted from your Class Card. However, you may attend another class within the next 2 days with the deducted credit.',
  },
]

/** Private class offer, verbatim from the source. */
export const privateClass = {
  title: 'One teacher. Your practice.',
  body: 'Privates for yoga classes Ubud can be arranged for one-on-one, couples or small groups. Whether you’re brand new to yoga and needing some individualized direction, an advanced practitioner looking to enhance your practice or a small group wanting a fun personalized experience.',
  benefits: [
    'Individual guidance',
    'Customized learning for individual and specific yoga needs',
    'Tailored modifications for injuries and challenges',
    'Rapid growth',
    'Clearing of energy and emotional blockages',
    'Direct feedback and hands on assistance',
    'Pre and post natal guidance',
    'Quicker learning and development than group classes',
    'Stress relief',
    'Flexible timing for your schedule',
  ],
  prices: [
    '1.300.000 IDR for the first student',
    '+ 400.000 IDR for each additional student, up to a total of 5 students.',
    '+ 200.000 IDR for each additional student, from the 6th student onwards.',
  ],
  price: '1.300.000 IDR for the first student · + 400.000 IDR for each additional student, up to a total of 5 students. · + 200.000 IDR for each additional student, from the 6th student onwards.',
  duration: '60 minutes',
  note: '*Make sure to book your private 48 hours in advance in order to confirm teachers availability.',
}
