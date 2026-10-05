import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/200hour-yoga-teacher-training-spanish */

const WHATSAPP = 'https://wa.link/3sauqu'
const WHATSAPP_ALOJAMIENTO =
  'https://api.whatsapp.com/send?phone=6282145210069&text=%C2%A1Hola!%20Quiero%20informaci%C3%B3n%20sobre%20el%20Profesorado%20RA%20en%20espa%C3%B1ol'
const TERMINOS = '[Términos y condiciones](https://www.radiantlyalive.com/terms-of-service)'
const ARIKS =
  'https://www.booking.com/hotel/id/arik-39-s-homestay.en-gb.html?aid=1655368&sid=1c1fcc88cfb30f761267c9d4613e6721&all_sr_blocks=445895403_247511847_0_42_0;checkin=2024-11-15;checkout=2024-11-16;dest_id=4458954;dest_type=hotel;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=445895403_247511847_0_42_0;hpos=1;matching_block_id=445895403_247511847_0_42_0;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=445895403_247511847_0_42_0__45900000;srepoch=1731138041;srpvid=158535faa85d0d5b;type=total;ucfs=1&#hotelTmpl'
const KRISNA =
  'https://www.booking.com/hotel/id/krisna-house.en-gb.html?aid=1655368&sid=1c1fcc88cfb30f761267c9d4613e6721&age=0;all_sr_blocks=139482702_273449198_0_1_0_481141;checkin=2024-11-15;checkout=2024-11-16;dest_id=-2701757;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=139482702_273449198_0_1_0_481141;hpos=1;matching_block_id=139482702_273449198_0_1_0_481141;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=139482702_273449198_0_1_0_481141_58500000;srepoch=1731137999;srpvid=ccce35e549d60153;type=total;ucfs=1&#hotelTmpl'

export const page: PageContent = {
  path: '/200hour-yoga-teacher-training-spanish',
  title: 'Profesorado de Vinyasa Yoga 200 horas en Español | Formación Híbrida',
  description:
    'Formación Híbrida: Profesorado de Vinyasa Yoga de 200 horas en Español, online + presencial en Ubud - Bali, del 05 de Marzo al 13 de Junio 2027. Vive la magia de Bali y profundiza en tu práctica desde adentro hacia afuera.',
  lang: 'es',
  parent: { label: 'Yoga Teacher Trainings', href: '/yoga-teacher-training-2026-1' },
  hero: {
    eyebrow: 'Formación Híbrida',
    title: 'Profesorado de Vinyasa Yoga',
    lead: 'Vive la magia de Bali y profundiza en tu práctica desde adentro hacia afuera.',
    image: 'espHero',
    ctas: [{ label: 'Descubre todos los detalles aquí', href: '#mi-seccion' }],
    facts: [
      { label: 'Fechas', value: '05 de Marzo – 13 de Junio 2027' },
      { label: 'Formato', value: 'Online + presencial en Ubud - Bali' },
      { label: 'Formación', value: '200 horas en Español' },
      { label: 'Certificación', value: 'Yoga Alliance' },
    ],
  },
  blocks: [
    {
      type: 'features',
      heading: 'Estructura del *Programa*',
      columns: 2,
      tone: 'paper',
      items: [
        {
          label: '100 Horas - A Distancia (Online) | Del 05 de Marzo al 03 de Junio',
          title: 'Lecciones Pregrabadas [50 horas]',
          bullets: [
            'Aprende a tu ritmo, donde y cuando quieras.',
            'Módulos en video guiados por tus formadores, con contenido técnico, filosófico y práctico.',
            'Disponibles desde el 05 de Marzo.',
          ],
        },
        {
          label: '100 Horas - A Distancia (Online) | Del 05 de Marzo al 03 de Junio',
          title: 'Clases Online en Vivo [30 horas]',
          bullets: [
            'Conéctate en tiempo real con tus profesores y tu comunidad para profundizar, practicar y compartir.',
            'Habrán 10 sesiones de 3 horas cada sábado desde el 05 de Marzo hasta el 03 de Junio.',
          ],
        },
        {
          label: '100 Horas - A Distancia (Online) | Del 05 de Marzo al 03 de Junio',
          title: 'Estudio Personal y Tareas [20 horas]',
          bullets: ['Integra el aprendizaje con reflexión, autoestudio y práctica guiada.', 'Prepara cuerpo y mente para tu nueva faceta como maestro de yoga.'],
        },
        {
          label: '100 Horas - Inmersión Presencial en Bali | Del 04 al 13 de Junio',
          title: 'Inmersión Presencial en Bali [100 horas / 10 días]',
          bullets: ['Vive la transformación.', 'Una experiencia intensiva de práctica, mentoría y conexión en el corazón de Ubud.'],
        },
      ],
    },
    {
      type: 'gallery',
      images: ['espHybridAsanaLab', 'espHybridOnline', 'espHybridWaterTemple', 'espHybridOpening', 'espTirtaEmpul', 'espGraduation'],
    },
    {
      type: 'intro',
      eyebrow: 'Tu momento ha llegado…',
      heading: 'Despierta *todo tu potencial*',
      align: 'center',
      ctas: [{ label: 'Descubre más aquí', href: '#mi-seccion' }],
    },
    {
      type: 'split',
      heading: 'Forma tu camino como Maestro de Yoga e impacta *desde la autenticidad*.',
      paragraphs: [
        '**Nuestro Profesorado de Yoga en Español – Formato Híbrido va mucho más allá de aprender a guiar clases dinámicas y desafiantes.**',
        'Este programa combina lo mejor de dos mundos: **la profundidad y flexibilidad del aprendizaje online, junto con la experiencia transformadora e inmersiva presencial en Bali.**',
        'A lo largo del proceso, adquirirás las herramientas, el conocimiento y la confianza para crear clases de yoga auténticas y memorables, mientras recorres un viaje profundo de autoconocimiento y crecimiento personal.',
        'La parte online te permitirá integrar la práctica a tu ritmo, y la experiencia presencial en Bali te invitará a encarnar todo lo aprendido desde el cuerpo, la presencia y la comunidad.',
        'Nuestro profesorado de yoga híbrido no solo te formará como profesor de yoga, sino que te acompañará a convertirte en un yogi consciente y un maestro inspirador, capaz de vivir y compartir una vida más plena, coherente y alineada… dentro y fuera del mat.',
      ],
      note: 'Empieza hoy tu transformación con nuestros recursos exclusivos para yogis y profes de yoga.',
      ctas: [{ label: 'Todo lo que necesitas está aquí', href: '#mi-seccion' }],
      image: 'espOpeningCircle',
      imageSide: 'right',
      shape: 'arch',
      tone: 'paper',
    },
    {
      type: 'features',
      heading: '¿Qué hace de Radiantly Alive una de las escuelas de yoga más reconocidas del mundo?',
      columns: 4,
      items: [
        {
          title: 'RA Vinyasa, estilo exclusivo',
          bullets: [
            'Aprende un estilo de yoga estructurado y fácil de aplicar que te permitirá crear clases coherentes, fluidas y memorables.',
            'Integra una filosofía de enseñanza que fortalece tu autenticidad como profesor y genera una conexión real con tus alumnos.',
            'Obtén una metodología clara —basada en intención, música, tema y secuenciación consciente— para diseñar clases transformadoras, seguras y alineadas con tu propio estilo, sin improvisar ni copiar a otros.',
          ],
        },
        {
          title: 'Formato híbrido: flexibilidad + inmersión real',
          bullets: [
            'Aprende a tu ritmo con contenidos online para integrar la teoría antes del módulo presencial.',
            'Llega a Bali con una base sólida para aprovechar al máximo la experiencia inmersiva y enfocarte en la práctica, el ajuste y la enseñanza real.',
            'Combina flexibilidad y presencia: estudia desde cualquier lugar del mundo y vive una transformación profunda durante la formación presencial.',
          ],
        },
        {
          title: 'Profesores experimentados',
          bullets: [
            'Aprende de profesores internacionales con más de 10 años de experiencia.',
            'Recibe formación actualizada que eleva tu nivel como profesor y te prepara para enseñar en cualquier parte del mundo.',
            'Más que técnicas, aprenderás a vivir y transmitir el yoga de forma auténtica, alineando tu práctica, tu enseñanza y tu estilo de vida.',
          ],
        },
        {
          title: 'Tamaño de la Clase',
          bullets: [
            'Aprende con un equipo de 4 a 6 profesores dedicados, lo que te garantiza acompañamiento cercano y múltiples perspectivas de enseñanza.',
            'Recibe atención personalizada y profundiza realmente en tu proceso de aprendizaje (grupos de máximo 32 estudiantes).',
          ],
        },
        {
          title: 'Red de Graduados',
          bullets: [
            'Forma parte del RA Movement, ganando visibilidad internacional al ingresar en nuestro directorio de profesores Radiantly Alive, presente en más de 80 países.',
            'Únete a nuestra comunidad global con más de 900 profesores graduados que ya enseñan yoga alrededor del mundo.',
          ],
        },
        {
          title: 'Reputación e Historia',
          bullets: [
            'Fórmate en una escuela líder y consolidada, con más de 15 años de experiencia formando profesores de yoga en Bali.',
            'Confía en una trayectoria comprobada con más de 50 formaciones realizadas y cientos de profesores certificados.',
            'Elige una escuela avalada por sus estudiantes, con una calificación de 4.9/5 en Yoga Alliance basada en más de 150 reseñas.',
            'Aprende de una red de maestros de yoga reconocidos internacionalmente, referentes en la enseñanza a nivel global.',
          ],
        },
        {
          title: 'Educación continua',
          bullets: [
            'Accede a un currículo completo y progresivo que te permite seguir creciendo y especializándote como profesor de yoga.',
            'Aprovecha recursos presenciales y online para perfeccionar tus habilidades y mantener tu enseñanza actualizada.',
            'Mantente conectado a una comunidad global a través de encuentros anuales de graduados en Europa, Latinoamérica y Bali.',
          ],
        },
        {
          title: 'Instalaciones y Entorno de Aprendizaje',
          bullets: [
            'Estudia en una escuela de yoga ubicada en el centro de Ubud.',
            'Practica en shalas amplias y serenas, rodeadas de naturaleza.',
            'Disfruta de mats y accesorios incluidos, para que te enfoques solo en tu formación.',
            'Recibe apoyo logístico continuo de un staff cercano y atento, para que puedas dedicarte por completo a vivir la experiencia.',
          ],
        },
      ],
    },
    {
      type: 'intro',
      heading: 'Certifícate como Maestro de RA Vinyasa, nuestro estilo exclusivo, y lleva tu práctica y enseñanza *al siguiente nivel*.',
      paragraphs: [
        'Durante nuestro Profesorado de Yoga en formato híbrido, te especializarás y certificarás como Maestro de RA Vinyasa, nuestro estilo exclusivo.',
        'A través del aprendizaje online y la experiencia presencial en Bali, integrarás la esencia de Radiantly Alive en tu práctica y enseñanza, desarrollando una voz auténtica como profesor.',
      ],
      align: 'center',
      tone: 'crimson',
    },
    {
      type: 'split',
      heading: 'RA Vinyasa, una práctica auténtica que *impulsa tu transformación*.',
      paragraphs: [
        'Radiantly Alive Vinyasa (RA Vinyasa) ofrece un enfoque único y profundamente transformador del yoga. Va más allá de la práctica física, invitando a los estudiantes a reconectar con quienes realmente son.',
        'Más que un estilo de yoga, RA Vinyasa es nuestra filosofía de vida, una forma de enseñar y vivir el yoga que pone en el centro la autenticidad, la conexión y el autodescubrimiento.',
        'La intención, el tema, la música y otros elementos esenciales del RA Vinyasa, cuando se integran con coherencia, convierten cada clase en una experiencia poderosa y significativa, tanto para el alumno como para el profesor.',
        '¿Estás listo para llevar tu práctica y tu enseñanza de yoga a un nuevo nivel en Bali?',
        'Haz clic abajo para descubrir los 6 componentes fundamentales de nuestra filosofía y comenzar a aplicarlos en tus clases, llevando la magia de Radiantly Alive y de Bali a cada espacio que compartas.',
      ],
      ctas: [
        { label: 'Haz clic aquí', href: '#mi-seccion' },
        { label: '¿Qué es RA Vinyasa?', href: 'https://www.youtube.com/watch?v=auImU4eICC4' },
      ],
      image: 'espRaVinyasaSadhana',
      imageSide: 'left',
    },
    {
      type: 'split',
      heading: 'Formación Híbrida: la combinación perfecta de *flexibilidad y experiencia inmersiva*',
      paragraphs: [
        'Aprende a tu ritmo online y profundiza tu práctica y enseñanza presencialmente en la mágica isla de Bali.',
        'Nuestro formato híbrido te permite vivir lo mejor de dos mundos:',
      ],
      bullets: [
        '**Aprendizaje flexible online:** estudia desde cualquier lugar, integrando teoría, filosofía y práctica a tu propio ritmo.',
        '**Inmersión presencial en Bali:** experimenta talleres prácticos, clases guiadas y conexiones profundas con tus compañeros y maestros.',
        '**Especialización como Maestro de RA Vinyasa:** domina nuestro estilo exclusivo, combinando técnica, filosofía y autoconocimiento.',
        '**Transformación personal y profesional:** fortalece tu práctica, descubre tu voz como profesor y lleva tu enseñanza a otro nivel.',
        '**Integración total:** aplica lo aprendido online en la experiencia presencial para una formación coherente, poderosa y transformadora.',
      ],
      ctas: [{ label: 'Conversa con nosotros ahora', href: WHATSAPP }],
      image: 'espHybridFlexible',
      imageSide: 'right',
      tone: 'paper',
    },
    {
      type: 'intro',
      eyebrow: 'Abre tus sentidos a la experiencia Radiantly Alive.',
      heading: 'Sumérgete en la Magia del Yoga en la *Isla de los Dioses*',
      paragraphs: [
        'Así se verá tu vida esos días en Bali.',
        'Prepárate para sentir en [este video](https://www.youtube.com/watch?v=b4r86Ed7_Os) lo que será tu vida con nosotros en esta mágica isla.',
      ],
      align: 'center',
      tone: 'plum',
    },
    {
      type: 'split',
      heading: '¿Por qué elegir un Profesorado de Yoga *en Español* en Bali?',
      paragraphs: [
        'Un Profesorado de Yoga es una experiencia intensa (¡en el mejor sentido!), reveladora a nivel físico y emocional, y llena de aprendizajes y conceptos nuevos.',
        'Si bien vivirás momentos inolvidables y divertidos, el esfuerzo físico y mental es inevitable. Por eso, poder realizar esta formación en tu idioma, español, hace que este viaje sea mucho más ligero: podrás expresarte con total libertad, asimilar toda la información sin barreras y aprovechar al máximo cada enseñanza.',
        'Al realizar nuestro Profesorado de Yoga en Español, disfrutarás de:',
      ],
      bullets: [
        '**Comprensión profunda:** interioriza los conceptos, pautas de enseñanza y la teoría detrás de cada práctica de manera más clara y efectiva.',
        '**Comunicación auténtica:** expresa tus emociones y aborda temas profundos con mayor facilidad, conectando de forma genuina con tus maestros y compañeros.',
        '**Menos desgaste mental:** al no tener que traducir la información, podrás aplicarla y explicarla al instante, aprovechando al máximo cada enseñanza.',
        '**Conexiones enriquecedoras:** comparte esta experiencia con compañeros que hablan tu mismo idioma, pero con historias y experiencias muy diversas que ampliarán tu perspectiva.',
      ],
      image: 'espTeachingPractice',
      imageSide: 'left',
    },
    {
      type: 'features',
      eyebrow: 'El corazón de Radiantly Alive',
      heading: 'Nuestros pilares',
      columns: 3,
      numbered: true,
      tone: 'paper',
      items: [
        {
          label: 'EDUCACIÓN',
          title: 'Metodología comprobada',
          bullets: [
            'A lo largo de los años, hemos desarrollado la manera más poderosa de ayudarte a reconectar con tus habilidades innatas y asimilar las herramientas y conocimientos necesarios para sostener un espacio de yoga verdaderamente transformador.',
            'Sabemos cómo acompañarte para que te conviertas en un profesor de yoga seguro y auténtico, capaz de inspirar y guiar a otros en su propio camino de crecimiento y autodescubrimiento.',
          ],
        },
        {
          label: 'TRANSFORMACIÓN',
          title: 'Viaje inspirador',
          bullets: [
            'Con nuestra Formación de Profesores de Yoga en Español, emprenderás un viaje que transformará tu vida para siempre.',
            'Nuestro programa está diseñado para guiarte hacia una transformación profunda, ayudándote a reconectar con tu verdadero ser.',
            'Paso a paso, comenzarás a experimentar un cambio de perspectiva, un mayor autoconocimiento y un renovado sentido de propósito, energía y vitalidad.',
          ],
        },
        {
          label: 'COMUNIDAD',
          title: 'Ven por yoga, encuentra una familia',
          bullets: [
            'Nuestra formación en español no termina con tu graduación. Ese día marca el inicio de un nuevo capítulo en tu camino yogui.',
            'Con recursos, herramientas y conocimiento actualizado, seguirás evolucionando y creciendo, tanto de manera individual como en comunidad.',
            'Además, serás siempre parte de una comunidad global vibrante, junto a yogis radiantes que comparten tu pasión y compromiso por el yoga.',
          ],
        },
      ],
    },
    {
      type: 'split',
      heading: '¿Para quién es este Profesorado *Híbrido RA Vinyasa*?',
      paragraphs: [
        'Siempre soñaste con venir a Bali, pero la vida y el tiempo nunca lo permitieron.',
        'Con nuestro Profesorado de Yoga Híbrido, ahora puedes vivir la experiencia que siempre imaginaste, combinando aprendizaje online y presencial en Bali.',
      ],
      image: 'espSadhanaPractice',
      imageSide: 'right',
    },
    {
      type: 'features',
      heading: 'Este programa está diseñado para quienes:',
      columns: 4,
      items: [
        { title: 'Buscan flexibilidad', text: 'para estudiar online a su ritmo, combinada con una experiencia presencial transformadora en Bali.' },
        { title: 'Desean especializarse en Vinyasa', text: 'y aprender los beneficios de RA Vinyasa, nuestro estilo exclusivo, integrando técnica, filosofía y autenticidad.' },
        { title: 'Ya son profesores de yoga certificados', text: 'pero quieren expandir sus conocimientos y dominar el RA Vinyasa.' },
        { title: 'Buscan una práctica desafiante y profunda', text: 'que transforme para siempre la manera en que se mueven.' },
        { title: 'Son yogis de todas las edades y practicantes apasionados', text: 'que desean elevar su práctica de yoga asana.' },
        { title: 'Quieren ser parte de una comunidad global de yogis', text: 'apasionados, conectando con compañeros de todo el mundo.' },
        { title: 'Buscan crecimiento personal y profesional', text: 'desarrollando confianza, voz propia y habilidades para inspirar a otros.' },
      ],
    },
    {
      type: 'intro',
      eyebrow: 'Próxima fecha:',
      heading: '5 de Marzo – *13 de Junio 2027*',
      paragraphs: [
        'Del 5 de marzo al 3 de junio de 2027: Online',
        'Del 4 al 13 de junio de 2027: Ubud, Bali',
        '**Profesorado de Yoga en español de 200hrs certificado por Yoga Alliance**',
        'Nuestra formación de Profesores de yoga en español en Bali sucede solo una vez al año y es una de las pocas opciones disponibles para certificarte en español en la isla.',
      ],
      align: 'center',
      tone: 'crimson',
      ctas: [{ label: 'Contáctanos', href: WHATSAPP }],
    },
    {
      type: 'features',
      heading: 'Plan de estudios',
      lead: '6 módulos para profundizar tu práctica de yoga y aprender a compartirlo con el mundo.',
      columns: 2,
      items: [
        {
          label: 'Viaje tu Interior',
          title: 'Crecimiento personal',
          bullets: [
            'Durante este mes recorrerás un camino de crecimiento personal y desarrollo espiritual, para vivir una vida coherente con tus valores.',
            'Ganarás claridad y resiliencia, aprenderás técnicas para encontrar tu voz y reconocer tu propósito.',
            'Fortalecerás la confianza en ti mismo, reconociendo y sacando provecho de tu autenticidad.',
            'Esto te inspirará a vivir una vida más plena lo cual impactará en la forma en que crees tus clases.',
          ],
        },
        {
          label: 'Viaje tu Interior',
          title: 'Líder empoderado',
          bullets: [
            'Perfeccionarás tus habilidades para hablar en público, conectar con tu audiencia y liderar con confianza clases y talleres.',
            'Reconocerás cuál es tu voz en su versión más auténtica para comunicarte claramente y captar la atención de tus estudiantes, haciendo que tus clases generen un gran impacto.',
            'Te formaremos como un guía poderoso tanto dentro como fuera del mat con herramientas y estrategias para inspirar y motivar a tus estudiantes.',
            'Aprenderás las bases para liderar con confianza, compasión e integridad.',
          ],
        },
        {
          label: 'Arte de Enseñar',
          title: 'Secuencias Inteligentes',
          bullets: [
            'Aprenderás el arte de crear secuencias inteligentes, que consiste en diseñar clases de yoga que fluyan de manera continua y segura de una postura a la otra.',
            'Te guiaremos para que busques el equilibrio en lo que ofreces; siendo fiel a tus conocimientos pero adaptándote a las necesidades de tus estudiantes.',
            'Serás capaz de crear clases ordenadas con una lógica que sea fácil de transmitir a tus alumnos.',
          ],
        },
        {
          label: 'Arte de Enseñar',
          title: 'Indicaciones Efectivas',
          bullets: [
            'Aprenderás el arte de dar indicaciones efectivas para guiar a tus estudiantes de manera segura y clara en su práctica.',
            'Te enseñaremos un lenguaje preciso, conciso y efectivo para comunicar alineamiento, respiración y movimiento.',
            'Explorarás diferentes tipos de indicaciones: las físicas y las sutiles, creando capaz de profundidad en la práctica de yoga.',
          ],
        },
        {
          label: 'Arte de Enseñar',
          title: 'Temática Creativa',
          bullets: [
            'Descubrirás cómo integrar temas creativos en tus clases para crear un efecto poderoso y único.',
            'A través de la narrativa, conceptos filosóficos, chakras, invitaciones, citas y otros de nuestros tips, aprenderás a crear experiencias enriquecedoras e inmersivas.',
          ],
        },
        {
          label: 'Arte de Enseñar',
          title: 'Habilidades Avanzadas de Enseñanza',
          bullets: [
            'Conocerás desde el primer momento cómo hablar frente a una audiencia para que tu presencia cree clases de yoga transformadoras.',
            'Aprenderás a crear ambientes inclusivos y a manejar dinámicas grupales, usando técnicas avanzadas para dirigir grupos diversos de manera efectiva creando experiencias que impacten y motiven a tus alumnos.',
            'Entenderás cómo poner en acción tu voz y el lenguaje no verbal para que tus clases creen un efecto potente.',
          ],
        },
        {
          label: 'Exploración de Asana',
          title: 'Entendimiento de las Posturas de Yoga',
          bullets: [
            'Explorarás en profundidad las principales asanas (posturas de yoga) de una práctica de Vinyasa yoga.',
            'Aprenderás sus modificaciones y variaciones para hacerlas más o menos retadoras, así como sus beneficios y contraindicaciones.',
            'No solo enriquecerás tu práctica personal, sino también mejorarás tu capacidad para enseñar con claridad y precisión.',
          ],
        },
        {
          label: 'Exploración de Asana',
          title: 'Alineamiento y Ajustes',
          bullets: [
            'Conocerás cómo explicar las posturas con tanta claridad que tus alumnos no necesiten verte demostrándolas.',
            'Conocerás los pasos para guiar a tus alumnos en la construcción de posturas de forma estable según sus cuerpos.',
            'Cultivarás el arte de realizar ajustes: verbales y físicos, lo cual te posicionará como un maestro cercano y experto frente a tus alumnos.',
          ],
        },
        {
          label: 'Filosofía',
          title: 'Filosofía e Historia del Yoga',
          bullets: [
            'Conocerás los orígenes y la historia del yoga a través de una enseñanza completa sobre su filosofía.',
            'Explorarás la evolución de los textos antiguos y las prácticas de yoga y descubriendo cómo inspirar a tus alumnos en su práctica.',
            'Aprenderás cómo aterrizar los conceptos antiguos del yoga a la vida moderna, transformando tu forma del ver el mundo.',
          ],
        },
        {
          label: 'Filosofía',
          title: 'Yoga Sutras y Mitología',
          bullets: [
            'Profundizarás en la filosofía del yoga a través de los Ocho Pasos del Yoga, la enseñanza central de los Yoga Sutras de Patanjali.',
            'Explorarás las pautas éticas y las prácticas yóguicas que van más allá del mat, así como los objetivos más profundos del yoga.',
            'Conocerás las historias y el simbolismo de las deidades y mitos claves que han influido en el panorama espiritual del yoga.',
            'Enriquecerá tu comprensión integral del yoga impactando en tu manera de enseñar.',
          ],
        },
        {
          label: 'Anatomía',
          title: 'Anatomía Funcional',
          bullets: [
            'Te llevarás un estudio profundo de la anatomía funcional para así comprender cómo se mueve y funciona el cuerpo en las diferentes posturas de yoga y sus variaciones.',
            'Aprenderás a identificar errores comunes de alineamiento y a adaptar las posturas a diversos tipos de cuerpo, mejorando la seguridad y efectividad de tu enseñanza.',
            'Te sentirás confiado guiando tus clases, creando así un espacio seguro para que tus alumnos exploren su propia biomecánica.',
          ],
        },
        {
          label: 'El Yoga como Negocio',
          title: 'Yoga y su Enfoque Profesional',
          bullets: [
            'Exploramos los aspectos fundamentales para hacer del Yoga tu profesión.',
            'Desde cómo promocionar tus clases, construir una marca personal y utilizar las redes sociales de manera efectiva, hasta cómo crear y gestionar un estudio de yoga, ya sea en línea o presencial.',
            'Con consejos prácticos, este módulo está diseñado para ayudar a los futuros profesores de yoga a prosperar tanto en su labor de enseñanza como en el ámbito empresarial.',
          ],
        },
      ],
    },
    {
      type: 'schedule',
      heading: 'Horario de muestra',
      items: [
        { time: '7:00 - 8:30', title: 'Sadhana' },
        { time: '8:30 - 9:00', title: 'Análisis de la clase' },
        { time: '9:00 - 9:45', title: 'Desayuno' },
        { time: '9:45 - 11:15', title: 'Filosofía del Yoga / Anatomía' },
        { time: '11:15 - 11:30', title: 'Break' },
        { time: '11:30 - 13:15', title: 'Exploración de Asana' },
        { time: '13:15 - 14:15', title: 'Almuerzo' },
        { time: '14:15 - 15:45', title: 'Ajustes' },
        { time: '15:45 - 16:00', title: 'Break' },
        { time: '16:00 - 17:45', title: 'Arte de Enseñar' },
        { time: '17:45 - 19:00', title: 'Viaje al Interior' },
      ],
      note: 'Nota: El horario de muestra es orientativo y puede estar sujeto a cambios. Todos los detalles finales se confirmarán antes del inicio de la formación.',
    },
    {
      type: 'people',
      eyebrow: 'El equipo:',
      heading: 'En Radiantly Alive, nuestros profesores combinan *pasión y experiencia* para guiarte en tu camino yogui.',
      lead: 'Conocerás a un equipo de profesores apasionados y con amplia experiencia en la enseñanza y emprendimiento dentro del mundo del yoga. No solo te guiarán en lo esencial para convertirte en un maestro excepcional, sino que también compartirán contigo sus secretos y consejos para que puedas crecer, conectar profundamente con tus alumnos y transformar tu vida.',
      columns: 3,
      people: [
        {
          name: 'Denise De la Torre Ugarte',
          role: 'Facilitadora líder: RA Vinyasa, Arte de enseñar, Viaje al Interior',
          image: 'espDenise',
          bio: [
            'Nuestra profesora líder es el corazón de esta experiencia transformadora. Su trayectoria, que abarca desde la meditación Vipassana hasta el estudio del Budismo y Inside Flow Yoga, le ha permitido integrar sabiduría ancestral con un enfoque moderno. Denise sabe cómo inspirarte, desafiarte y acompañarte en tu crecimiento personal y profesional, convirtiendo esta formación en una experiencia única e inolvidable.',
            'Después de años de buscar el sentido de la vida, Denise encontró en el yoga un camino hacia el autodescubrimiento.',
            'Se enamoró de su filosofía y de sus movimientos fluidos. Estudió Vinyasa Krama, FluidUs e Inside Flow durante más de 1000 horas y está certificada por Yoga Alliance como profesora RYT 500. Dirige formaciones de profesores de yoga, retiros y clases de yoga tanto en Perú como en Bali.',
            'En sus clases, utiliza indicaciones claras e invitaciones sutiles que guían a sus estudiantes a lo largo de un viaje lento y poderoso.',
            'Sus clases son conocidas por ser poderosas y mágicas al mismo tiempo.',
          ],
        },
      ],
    },
    {
      type: 'testimonials',
      heading: 'Lo que dicen *nuestros alumnos*',
      tone: 'paper',
      items: [
        {
          quote:
            'Me ha gustado la manera de formarnos, dándonos seguridad en todo momento. Eso ha hecho que me haya retado yo misma y que me haya dado cuenta de que puedo hacer lo que me propongo. Nos han dado apoyo en todo momento y me han ayudado a tener más confianza en mi misma.',
          name: 'Rebecca Vizcaino',
          context: 'Octubre 2025',
        },
        {
          quote:
            'Gracias a este profesorado, desde el amor, el aprendizaje, el compartir, pude viajar hacia el interior de mi ser y reencontrarme con mi intención. Agradezco cada paso que dimos juntos, convirtiéndose en la familia que elegimos.',
          name: 'Sol Jesús',
          context: 'Octubre 2025',
        },
        {
          quote: 'Me encantó la experiencia. El espacio y organización permite conectar tanto con los profes como con las otras chicas del programa El estudio es lindo.',
          name: 'María Claudia Rossi',
          context: 'Octubre 2025',
        },
        {
          quote: 'Una experiencia muy clara. Los profesores, Denise, Niko, Leon, muy buenos. Denotan la experiencia y conocimiento en el tema. Valoro el orden y la disciplina del curso.',
          name: 'Tatiana Gómez',
          context: 'Octubre 2025',
        },
        {
          quote:
            'Deni y Niko, ambos con los que compartimos más tiempo, realmente demostraron su talento y pasión por enseñar. Los alumnos percibimos toda la sabiduría transmitida y nos inspiraron y apoyaron en cada paso. Fue un viaje hermoso.',
          name: 'Elena Fajardo',
          context: 'Octubre 2025',
        },
        {
          quote:
            'El profesorado en Radiantly Alive ha sido para mi una experiencia única, un viaje y una transformación. El estudio es un lugar maravilloso con una energía que te conecta no solo con el hecho de estar en Bali, sino también con la naturaleza y con la posibilidad de ir hacia dentro de uno mismo. Este profesorado superó mis expectativas.',
          name: 'Coni',
          context: 'Abril 2023',
        },
        { quote: 'La sensación de unidad y de sentirte en familia.', name: 'Maria Jesus', context: 'Julio 2024' },
        {
          quote:
            'Desde que pisé el estudio me atendieron super bien. Todos bien sonrientes, brindándome confianza y seguridad. Los profesores, cada uno en su tema de especialidad, los presentaron de una manera auténtica y dinámica para que el aprendizaje fuera digerible. Los espacios de introspección fueron súper clave para crear una conexión no solo con nosotros mismos sino también a nivel grupal. Una experiencia increíble y única.',
          name: 'Patricia Salas',
          context: 'Octubre 2025',
        },
        {
          quote:
            'Esta experiencia ha sido un despertar profundo en todos los niveles de mi ser, cultivando una paz interior más profunda, una conexión más clara con mi propósito que ha transformado mi manera de percibir y enfrentar cada momento conectada. El yoga no solo ha fortalecido mi cuerpo físico, sino también ha nutrido mi mente y espíritu, permitiéndome abrazar con gratitud cada momento presente. Gracias por abrir y compartir esta posibilidad',
          name: 'Alba Rivas',
          context: 'Julio 2024',
        },
        {
          quote:
            'Me va a tomar un poco de tiempo interiorizar todo lo que he vivido en este profesorado pues ha sido tanto que no siento que pueda caber en palabras. He conectado a un nivel muy profundo con otras personas que hoy son como mi familia, he podido crecer, transformarme y aprender, tanto del yoga como de anatomía, filosofía, de mi misma y muchas cosas más.',
          name: 'Vannia',
          context: 'Abril 2023',
        },
        {
          quote: 'Me impactó el poder dictar una clase completa prácticamente fuera del mat. La fuerza y confianza que nace en uno mismo para verse liderando una práctica.',
          name: 'Anonimo',
          context: 'Julio 2024',
        },
        {
          quote: 'Me gusta cómo nos empoderaron impulsando nuestra creatividad y autenticidad. Además, nos dieron muchas herramientas para ser profesores',
          name: 'Anónimo',
          context: 'Julio 2024',
        },
        { quote: 'Una experiencia indescriptible en la transformación de mi vida. Gracias por tanto conocimiento.', name: 'Anónimo', context: 'Julio 2024' },
      ],
    },
    {
      type: 'intro',
      heading: 'Conoce más de lo que dicen nuestros alumnos aquí',
      paragraphs: ['Testimonios de nuestros graduados de los profesorados de yoga en español en Radiantly Alive, en Bali'],
      align: 'center',
      tone: 'paper',
      ctas: [{ label: 'Yoga Alliance', href: 'https://r.yogaalliance.org/SchoolProfileReviews?sid=9419', variant: 'secondary' }],
    },
    {
      type: 'split',
      heading: 'Nuestro *estudio*',
      paragraphs: [
        'Radiantly Alive, un estudio de yoga reconocido en Ubud, Bali, es el lugar ideal para tu crecimiento personal y la conexión con una comunidad global.',
        'Con más de 14 años de experiencia, nuestro estudio cuenta con 5 hermosas y tranquilas shalas con vistas a la selva donde confluyen yogis de todo el mundo.',
        'Aquí encontrarás mucho más que un estudio: entrarás a un hogar y un espacio para que descubras quien realmente eres.',
        'Durante tu formación como Profesor de Yoga en Bali, aprenderás de maestros residentes de clase mundial y de renombrados profesores de yoga invitados; todo en un ambiente lleno de apoyo e inspiración.',
        'Únete a nosotros para practicar, conectar y crecer junto a yoguis que buscan lo mismo que tú.',
        'Echa un vistazo a nuestro estudio en [este video](https://www.youtube.com/watch?v=zinBPgR3vmk).',
      ],
      note: 'La certificación en Español se vive en Ubud, Bali, un paraíso espiritual donde la serenidad y la energía del lugar inspiran tu transformación.',
      image: 'espJungleShala',
      imageSide: 'left',
      shape: 'arch',
    },
    {
      type: 'pricing',
      id: 'pricing',
      heading: '¡Reserva tu plaza *ahora*!',
      lead: 'Planes de pago disponibles.',
      tone: 'paper',
      tiers: [
        {
          label: 'Ofertas',
          badge: 'PRECIO DE INSCRIPCIÓN ANTICIPADA',
          prices: ['IDR 27 millones'],
          note: 'Profesorado 2027. Disponible solo para los primeros 5 inscritos en cualquier capacitación híbrida. +3% de tarifa por procesamiento de pagos en línea.',
          href: '/tt-classes-retreats/p/profesorado-de-yoga-200hrs-hybrid-early-bird',
          ctaLabel: 'Comprar',
        },
        {
          label: 'Precio Regular',
          badge: '¡BALI AQUÍ VOY!',
          prices: ['IDR 31.5 millones'],
          note: 'Profesorado 2027. Separa tu plaza con IDR 10 millones. Planes de pago disponibles. Paga el total 30 días antes del comienzo del curso. +3% extra por procesamiento de pagos con tarjeta.',
          href: '/tt-classes-retreats/p/profesorado-de-yoga-200hrs-hybrid-regular-price',
          ctaLabel: 'Comprar',
        },
      ],
      notes: [
        '2027 | Online ─ March 5 - June 3 | In-person ─ June 4 - 13',
        'Profesorado 2027 de Yoga 200HRs - Hybrid | Early Bird: $1,500.00 · Profesorado de Yoga 200HRs - Hybrid | Regular Price: $1,750.00',
        `Contáctanos por WhatsApp [aquí](${WHATSAPP}) o envíanos un correo a [ra.ytt@radiantlyalive.com](mailto:ra.ytt@radiantlyalive.com) para obtener más información.`,
        TERMINOS,
      ],
    },
    {
      type: 'intro',
      heading: 'Haz realidad tu sueño de enseñar yoga: *aplica a nuestra beca*.',
      paragraphs: [
        'Ofrecemos becas completas para yoguis apasionados que enfrentan dificultades económicas. Perfecto para quienes desean profundizar su práctica y retribuir a la comunidad a través de la enseñanza.',
        'Las solicitudes para 2027 se abren en junio: Solicita tu plaza a continuación..',
      ],
      align: 'center',
      tone: 'plum',
      ctas: [{ label: 'SOLICITAR BECA', href: '/ytt-scholarship' }],
    },
    {
      type: 'intro',
      heading: 'Opciones de Alojamiento para tu Profesorado en Bali',
      paragraphs: [
        'Aunque el alojamiento en Ubud, Bali no está incluido en la formación, ofrecemos paquetes cómodos y flexibles de alojamiento para que tu experiencia sea tranquila y libre de preocupaciones.',
        'Cada estudiante tiene preferencias y necesidades diferentes, y contar con tu propio espacio te permitirá recargar energías y aprovechar al máximo las intensas sesiones de 7:00 AM a 7:00 PM.',
        'Al mismo tiempo, tendrás muchas oportunidades para conectar y crear lazos significativos con tus compañeros, compartiendo momentos inolvidables dentro y fuera del mat.',
        '**Nuestros paquetes de alojamiento comienzan en $164 para todo el período de formación, con una habitación privada convenientemente ubicada junto al estudio.**',
        `Escríbenos por WhatsApp [aquí](${WHATSAPP_ALOJAMIENTO}) o envíanos un correo a [ra.ytt@radiantlyalive.com](mailto:ra.ytt@radiantlyalive.com) y te asesoraremos para que tu estadía en Bali sea lo más cómoda y fluida posible.`,
        'Sin embargo, si prefieres empezar a buscar algo por tu cuenta te hemos preparado una lista de hospedajes con nuestras recomendaciones, separándolos en categorías por precios, para elijas la mejor opción para ti.',
        'Encuéntrala haciendo clic [aquí](/accommodation).',
      ],
    },
    {
      type: 'cards',
      columns: 2,
      aspect: 'landscape',
      items: [
        {
          image: 'espAriksHomestay',
          eyebrow: 'from $164',
          title: 'Ariks Homestay',
          href: ARIKS,
          text: 'Nuestros paquetes de alojamiento comienzan desde $164 por una habitación privada de bajo presupuesto con baño privado y aire acondicionado para todo el período de formación. Ariks Homestay está convenientemente ubicado junto al estudio. Los huéspedes valoran la amabilidad del personal y lo consideran una opción de buena relación calidad-precio.',
          note: '11 noches, solo alojamiento',
        },
        {
          image: 'espKrisnaHouse',
          eyebrow: 'from $328',
          title: 'Krishna Guesthouse',
          href: KRISNA,
          text: 'Con una piscina al aire libre y un hermoso y sencillo jardín tropical, Krisna House está situado a 30 metros del estudio. Las habitaciones con aire acondicionado de Krisna House cuentan con una terraza o balcón con muebles de exterior y baño privado. A los viajeros solitarios les gusta especialmente la ubicación, calificándola con un 9.5 para estancias de una persona en Booking.com.',
          note: '11 noches, desayuno incluido',
        },
      ],
    },
    {
      type: 'split',
      heading: 'Paquete de comidas *nutritivas*',
      paragraphs: [
        '**¡Aprovecha el precio especial solo para ti en nuestro Café ubicado dentro del estudio!**',
        'Disfruta de deliciosas comidas nutritivas al estilo casero, en su mayoría veganas y vegetarianas, con algunas opciones de pescado y pollo.',
        'Con las comidas listas justo a tiempo para los tiempos de descanso, podrás relajarte, recuperar energías y regresar a la formación sintiéndote renovado.',
        '¡Olvídate de cocinar o buscar fuera y recárgate con comida deliciosa, saludable y con los mejores ingredientes, lista a tiempo para ti!',
      ],
      note: '¿Interesado en agregar un paquete de comidas? ¡Solo háznoslo saber y te compartiremos todos los detalles!',
      ctas: [{ label: 'Contáctanos', href: WHATSAPP }],
      image: 'espChandraCafe',
      imageSide: 'right',
      tone: 'paper',
    },
    {
      type: 'features',
      heading: 'Beneficios adicionales de nuestro Profesorado',
      columns: 3,
      items: [
        {
          title: 'Clases Ilimitadas',
          text: 'Clases ilimitadas en el estudio de Ubud desde una semana antes hasta una semana después del entrenamiento.',
        },
        {
          title: '10% de descuento de por vida',
          text: 'Descuento especial para graduados en todas las clases, talleres y terapias en Radiantly Alive.',
        },
        {
          title: 'Acceso al contenido online del profesorado por 1 año',
          text: 'Un año de acceso al contenido online profesorado a partir de la fecha de inicio.',
        },
      ],
    },
    {
      type: 'form',
      id: 'mi-seccion',
      form: 'newsletter',
      tone: 'plum',
      heading: '¡Comienza tu viaje *ahora*!',
      lead: 'Todo lo que necesitas saber está aquí. Recibirás: Una Muestra del Manual del Curso · Una clase de RA Vinyasa gratis con Denise · Nuestra super Guía de Bali con todos nuestros tips · Qué se necesita para ser un yogui avanzado · Cómo tener clases llenas de alumnos · y más!',
      fallbackHref: 'https://www.radiantlyalive.com/200hour-yoga-teacher-training-spanish#mi-seccion',
      submitLabel: 'Enviar',
      successMessage:
        '**¡Felicitaciones! Estás un paso más cerca de cumplir tus sueños.** Pronto nos comunicaremos contigo. Si tienes preguntas puedes escribirnos al [Whataspp](https://wa.link/kxqilu). Estaremos felices de conversar contigo. ¡Un abrazo desde Bali!',
    },
    {
      type: 'faq',
      eyebrow: 'Profesorado de Yoga en español',
      heading: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Qué significa que este profesorado sea “híbrido”?',
          answer:
            'Esta formación combina aprendizaje online con un módulo presencial inmersivo en Bali.\n\nLa parte online incluye 30 horas de sesiones en vivo, 50 horas de contenido grabado y 20 horas de tareas y estudio personal.\n\nLa formación presencial en Bali consta de 100 horas para que logres una integración y encarnación más profundas de lo aprendido.',
        },
        {
          question: '¿Qué esperar de la formación?',
          answer:
            'Este profesorado ofrece una experiencia híbrida que combina formación online e inmersión presencial en Bali.\n\nLa parte online te permite integrar los contenidos a tu propio ritmo, mientras que el módulo presencial en Bali ofrece prácticas diarias, aprendizajes con profesores expertos y espacios de conexión, integración y disfrute.\n\nA través de āsana, prānāyāma, meditación y filosofía, profundizarás tu práctica, expandirás tu comprensión del yoga y crearás vínculos significativos con una comunidad afín.',
        },
        {
          question: '¿Dónde se realiza la formación?',
          answer:
            'La formación se realiza en formato híbrido.\n\nLa parte online se desarrolla a través de nuestra plataforma digital, y el módulo presencial tiene lugar en el estudio Radiantly Alive Yoga, en Ubud, Bali.\n\nEl estudio está ubicado en el centro de la ciudad, cerca de restaurantes, tiendas y todo lo que un yogui pueda necesitar durante la inmersión.',
        },
        {
          question: '¿Qué tipo de certificación recibiré?',
          answer:
            'Recibirás un Certificado de Formación de 200 Horas de Radiantly Alive.\n\nRadiantly Alive es una escuela de yoga totalmente avalada por Yoga Alliance.\n\nPuedes usar este certificado para solicitar la certificación como profesor en Yoga Alliance después del curso.',
        },
        {
          question: '¿Qué tan bueno en yoga debo ser para asistir?',
          answer:
            'Recomendamos que tengas al menos 6 meses de experiencia practicando yoga, sin embargo, no hay requisitos específicos de asanas o condición física.\n\nLo más importante son tus ganas de seguir aprendiendo y mejorando.',
        },
        {
          question: 'Al final del curso ¿habrá que rendir algún examen?',
          answer:
            'Si, tendrás un examen teórico y uno práctico al final del curso.\n\nY sí, es posible que tengas que dar este examen más de una vez hasta que lo cumplas al 100%. Tenemos estándares muy altos para nuestros alumnos!\n\nEl examen teórico tiene una para escribir y desarrollar tu respuesta y otra para marcar con opciones múltiples.\n\nEl examen práctico consiste en dictar una clase corta al grupo. En caso tengas que volver a dar este examen nos podrás enviar un video de ti dictando.',
        },
        {
          question: '¿Qué significa que el profesorado esta avalado por Yoga Alliance?',
          answer:
            'Que un profesorado de yoga esté avalado por Yoga Alliance significa que cumple con los estándares de calidad de esta organización y que habilita para dar clases de yoga en cualquier lugar del mundo\n\nAunque no es obligatorio estar registrado en Yoga Alliance para ser profesor de yoga, es la organización más estructurada y reconocida a nivel mundial.\n\nEn muchos países no se puede dar clase de yoga si no se está registrado en Yoga Alliance',
        },
        {
          question: '¿Qué estilo de yoga aprenderé en la formación?',
          answer:
            'Aprenderás Vinyasa yoga bajo las pautas de nuestro estilo exclusivo, RA Vinyasa, un estilo que se adapta a la vida moderna.\n\nRA Vinyasa se distingue por tener 6 componentes clave: Intención · Tema · Vinyasa pura · Música · Autenticidad · Conexión\n\nAl comprender estos 6 componentes podrás no solo dictar clases de yoga sino también “sostener espacio de transformación” para todos los niveles de alumnos.\n\nPodrás crear clases inclusivas y retadoras pero sobre todo que inviten a tus alumnos a tener un viaje de introspección que los empodere.',
        },
        {
          question: '¿Puedo completar los módulos online a mi propio ritmo?',
          answer: 'Sí. El contenido pre-grabado es flexible y está diseñado para adaptarse a distintos horarios y zonas horarias.',
        },
        {
          question: '¿Qué pasa si no puedo asistir a una sesión online en vivo?',
          answer:
            'Todas las sesiones en vivo quedarán grabadas y disponibles para su reproducción.\n\nSin embargo, recomendamos encarecidamente asistir a las sesiones en vivo, ya que ofrecen la oportunidad de hacer preguntas, interactuar con los profesores y conectar con el grupo en tiempo real.',
        },
        {
          question: '¿Tendré acceso al contenido una vez finalizada la formación?',
          answer: 'Sí, conservarás acceso al contenido online durante 1 año desde la fecha de inicio del profesorado.',
        },
        {
          question: '¿Cuánto dura la parte online y el módulo presencial?',
          answer:
            'La parte online tiene una duración aproximada de 12 semanas, e incluye clases grabadas y 10 sesiones en vivo.\n\nEl módulo presencial consiste en 10 días de formación intensiva, con práctica diaria, talleres y tiempo de integración.\n\nTendrás tiempo libre entre la parte online y presencial para prepararte y viajar a Bali.',
        },
        {
          question: '¿Con un profesorado de 200hrs puedo empezar a dictar clases?',
          answer:
            'Nuestra formación de 200 hrs está diseñada para aquellos que:\n\n• Quieren aprender a enseñar yoga\n\n• Son profesores yoga pero buscan nuevas herramientas y conocimientos\n\n• Son estudiantes que quieren profundizar en su práctica personal.\n\nEste programa cubre los elementos esenciales del yoga, incluidas las asanas fundamentales (posturas), pranayama (técnicas de respiración), meditación, anatomía, fisiología y los conceptos básicos de la filosofía del yoga.\n\nNos enfocaremos en que mejores tu práctica de Yoga Asana y alineamiento de posturas.\n\nAdemás, nuestro sello diferenciador es que para nosotros cada clase de yoga es un viaje al interior y una experiencia que empieza en lo físico y puede llegar a capas muy profundas y te enseñaremos las bases para empezar a crear ese poderoso efecto en tus alumnos.\n\nAl finalizar, tendrás las habilidades y los conocimientos básicos para guiar clases de yoga con confianza y comenzar tu viaje como maestro de yoga certificado.',
        },
        {
          question: '¿Qué está incluido en el costo?',
          answer:
            'El costo incluye:\n\n• Matrícula al curso\n\n• Manual y material complementario\n\n• Acceso completo a todas las experiencias culturales dentro de la formación\n\n• Acceso ilimitado a todas las clases de yoga de Radiantly Alive una semana antes, durante y después de la formación.\n\n• Acceso a la Red de Graduados de RA\n\n• Soporte continuo después de la formación\n\n• Descuento vitalicio del 10% para graduados en clases de yoga, talleres y terapias en Radiantly Alive',
        },
        {
          question: '¿Qué debo llevar?',
          answer:
            'Sugerimos que empaques lo siguiente:\n\n• Tu esterilla de yoga favorita. Si prefieres no viajar con tu esterilla, también tenemos algunas en el estudio.\n\n• Ropa cómoda para yoga.\n\n• Traje de baño y protector solar.\n\n• Calzado cómodo (por ejemplo, sandalias o zapatos abiertos).\n\n• Artículos de tocador, incluyendo repelente de mosquitos. También proporcionamos repelente natural en las salas de yoga, pero es mejor si tienes el tuyo propio para los tiempos de comida y la noche.\n\n• Medicamentos o tratamientos especiales que puedas necesitar.\n\n• Cuaderno, diario personal y bolígrafo.\n\n• Adaptador eléctrico (dos clavijas redondas, 220 voltios).\n\n• Botella de agua reutilizable.\n\nPor favor, empaca un atuendo blanco, algo que sea por debajo de la rodilla para las mujeres y que cubra los hombros (tanto para hombres como para mujeres).\n\nNo te preocupes, si olvidas algo, podrás encontrarlo aquí en Ubud.',
        },
        {
          question: '¿El profesorado incluye alojamiento?',
          answer:
            'Aunque el profesorado no incluye el alojamiento, tenemos paquetes de estadía.\n\nEscríbenos para darte la mejor opción.\n\nSi prefieres buscar otras opciones hemos preparado una lista de hospedajes con nuestras recomendaciones, separándolos en categorías por precios, para elijas la mejor para ti.\n\nEncuéntrala haciendo clic [aquí](/accommodation).',
        },
        {
          question: '¿Tendré tiempo libre?',
          answer:
            'La respuesta corta es sí.\n\nSin embargo, al tratarse de una formación de 200 horas, los 10 días en Bali serán intensos y con un programa estructurado para cubrir todos los contenidos.\n\nHabrá tiempo libre durante el desayuno y el almuerzo, para descansar, integrar y disfrutar del entorno.',
        },
        {
          question: '¿Puedo participar incluso si ya he realizado un YTT de 200 horas?',
          answer:
            '¡Por supuesto! En esta formación de profesores con nuestra filosofía RA Vinyasa podrás refinar o mejorar tu técnica para “sostener el espacio” y no solo “dictar clases de yoga”.\n\nAdemás mejorarás tu forma de alinear a tus alumnos y aprenderás a crear secuencias inteligentes, creativas y retadoras.\n\nEn los módulos “Viaje al Interior” y “Filosofía” vivirás experiencias introspectivas que transformarán tu perspectiva de la vida.',
        },
        {
          question: '¿Con cuánta antelación debo llegar a la formación?',
          answer:
            'Recomendamos llegar a Bali 2 o 3 días antes del inicio del módulo presencial, especialmente si viajas desde lugares lejanos. Esto te permitirá acomodarte con calma y darle a tu cuerpo el tiempo necesario para recuperarse del desfase horario.\n\nPor favor, no olvides tener en cuenta las condiciones y restricciones de tu visa (consulta la sección de Visa más abajo).',
        },
        {
          question: '¿Necesito visa para Bali?',
          answer:
            'Te recomendamos averiguar los requisitos de visa específicos para tu país de origen antes de tu viaje, y confirmar los detalles más cerca de la fecha de tu salida, ya que los requisitos de inmigración en Indonesia pueden cambiar repentinamente.\n\nLos requisitos a continuación aplican a todos los visitantes internacionales:\n\n• Solicitar una Visa on arrival (VOA) online o al llegar al aeropuerto en Indonesia.\n\n• Contar con pasaporte válido por un mínimo de seis (6) meses a partir de la fecha de llegada.\n\n• Tener prueba de un vuelo de regreso o un billete de continuación fuera de Indonesia.',
        },
        {
          question: '¿Necesito un seguro de viaje?',
          answer:
            'Puede ser conveniente contar con un seguro de viaje integral que cubra todos los costos y consecuencias de tratamientos médicos, repatriación, daños/robo/pérdida de pertenencias personales, y la recuperación de los costos del curso y vuelos reservados en caso de cancelación o salida anticipada.',
        },
        {
          question: '¿Cómo es la atención médica?',
          answer:
            'En caso de enfermedades o lesiones leves, hay centro médicos en la zona local de Ubud y varios hospitales internacionales más cerca del aeropuerto.\n\nEstos centros y hospitales es posible que te reembolsen lo gastado a través de tu proveedor de seguros.\n\nSi requieres atención médica de emergencia extrema, los pacientes son evacuados a Singapur. Debido al alto costo, es recomendable verificar que esta cobertura esté incluida en tu plan médico.',
        },
        {
          question: '¿Qué tipo de comida está disponible?',
          answer:
            'La comida en Ubud es absolutamente increíble.\n\nYa seas omnívoro, vegetariano, vegano o completamente crudivegano, este pueblo tiene opciones para todos los gustos.\n\n[Llena el formulario con tus datos.](#mi-seccion) y recibirás nuestra Guía de Bali donde verás una muestra de lo que Ubud tiene para ofrecer.',
        },
        {
          question: '¿Cómo es el clima en Bali?',
          answer:
            'Bali está ubicada aproximadamente a 8 grados al sur del ecuador.\n\nPor lo tanto, puedes esperar un clima tropical y húmedo durante todo el año, con dos estaciones principales bien definidas: la temporada seca (de abril a octubre) y la temporada de lluvias (de noviembre a marzo).\n\nLa temperatura es cálida y generalmente oscila entre los 27 y 31 grados Celsius (77-88°F).',
        },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Profesorado de Yoga en español de 200hrs certificado por Yoga Alliance',
      heading: 'Vive la magia de Bali y profundiza en tu práctica *desde adentro hacia afuera*.',
      text: '05 de Marzo – 13 de Junio 2027 · Online + presencial en Ubud - Bali',
      image: 'espHybridWaterTemple',
      ctas: [
        { label: 'Conversa con nosotros ahora', href: WHATSAPP },
        { label: 'Comprar', href: '#pricing', variant: 'secondary' },
      ],
    },
  ],
  schema: {
    type: 'course',
    name: 'Profesorado de Vinyasa Yoga 200 horas en Español – Formación Híbrida',
    description:
      'Formación Híbrida de 200 horas en Español certificada por Yoga Alliance: 100 horas a distancia (online) del 05 de Marzo al 03 de Junio y 100 horas de inmersión presencial en Ubud, Bali, del 04 al 13 de Junio 2027.',
  },
}
