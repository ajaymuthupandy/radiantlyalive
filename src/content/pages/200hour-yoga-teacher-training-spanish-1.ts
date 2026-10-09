import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/200hour-yoga-teacher-training-spanish-1 */

const WHATSAPP = 'https://wa.link/3sauqu'
const WHATSAPP_ALOJAMIENTO =
  'https://api.whatsapp.com/send?phone=6282145210069&text=%C2%A1Hola!%20Quiero%20informaci%C3%B3n%20sobre%20el%20Profesorado%20RA%20en%20espa%C3%B1ol'
const TERMINOS = '[Términos y condiciones](https://www.radiantlyalive.com/terms-of-service)'
const ARIKS =
  'https://www.booking.com/hotel/id/arik-39-s-homestay.en-gb.html?aid=1655368&sid=1c1fcc88cfb30f761267c9d4613e6721&all_sr_blocks=445895403_247511847_0_42_0;checkin=2024-11-15;checkout=2024-11-16;dest_id=4458954;dest_type=hotel;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=445895403_247511847_0_42_0;hpos=1;matching_block_id=445895403_247511847_0_42_0;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=445895403_247511847_0_42_0__45900000;srepoch=1731138041;srpvid=158535faa85d0d5b;type=total;ucfs=1&#hotelTmpl'
const KRISNA =
  'https://www.booking.com/hotel/id/krisna-house.en-gb.html?aid=1655368&sid=1c1fcc88cfb30f761267c9d4613e6721&age=0;all_sr_blocks=139482702_273449198_0_1_0_481141;checkin=2024-11-15;checkout=2024-11-16;dest_id=-2701757;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;highlighted_blocks=139482702_273449198_0_1_0_481141;hpos=1;matching_block_id=139482702_273449198_0_1_0_481141;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;sr_pri_blocks=139482702_273449198_0_1_0_481141_58500000;srepoch=1731137999;srpvid=ccce35e549d60153;type=total;ucfs=1&#hotelTmpl'

export const page: PageContent = {
  path: '/200hour-yoga-teacher-training-spanish-1',
  title: 'Profesorado de Vinyasa Yoga 200 horas en español | Ubud, Bali',
  description:
    'Profesorado de Vinyasa Yoga de 200 horas en español, del 05 al 28 de Abril de 2027 en Ubud, Bali. Certificado por Yoga Alliance: un viaje de crecimiento personal y autodescubrimiento en la mágica isla de Bali.',
  lang: 'es',
  parent: { label: 'Yoga Teacher Trainings', href: '/yoga-teacher-training-2026-1' },
  hero: {
    eyebrow: '200 horas – en español',
    title: 'Profesorado de Vinyasa Yoga',
    lead: 'Una experiencia que transformará tu vida',
    image: 'espHero',
    ctas: [{ label: 'Contáctanos', href: '#mi-seccion' }],
    facts: [
      { label: 'Fechas', value: 'Del 05 al 28 de Abril de 2027' },
      { label: 'Lugar', value: 'Ubud – Bali' },
      { label: 'Formación', value: '200 horas – en español' },
      { label: 'Certificación', value: 'Yoga Alliance' },
    ],
  },
  blocks: [
    {
      type: 'intro',
      eyebrow: 'Tu momento ha llegado…',
      heading: 'Despierta *todo tu potencial*',
      align: 'center',
      ctas: [{ label: 'Descubre más aquí', href: '#mi-seccion' }],
    },
    {
      type: 'split',
      heading: 'Conviértete en un Maestro de Yoga inspirador y crea un *impacto positivo* en tu entorno',
      paragraphs: [
        '**Nuestro Profesorado de Yoga en español va más allá de solo aprender a dictar clases divertidas y retadoras.**',
        'Sí, te aseguramos que te llevarás los conocimientos y las herramientas necesarias para compartir clases de yoga únicas. Sin embargo, esta formación es, en esencia, un viaje hacia hacia tu interior donde radica todo tu potencial para impactar en tu entorno.',
        '**Emprenderás un viaje de crecimiento personal y de autodescubrimiento en la mágica isla de Bali.**',
        'Con nuestra formación de profesores de yoga en español te convertirás en un gran yogi y maestro de yoga inspirador, capaz de vivir una vida más plena y coherente, dentro y fuera del mat.',
      ],
      note: 'Conoce todos los detalles de esta experiencia en Ubud, Bali, y empieza hoy mismo tu transformación.',
      ctas: [{ label: 'Contáctanos', href: '#mi-seccion' }],
      image: 'espOpeningCircle',
      imageSide: 'right',
      shape: 'arch',
      tone: 'paper',
    },
    {
      type: 'features',
      heading: '¿Por qué Radiantly Alive es una de las mejores formaciones de profesores de yoga en el mundo?',
      columns: 3,
      items: [
        {
          title: 'RA Vinyasa, estilo exclusivo',
          bullets: [
            'Nuestro estilo de yoga exclusivo integra componentes que crean una experiencia profunda tanto para los alumnos como para los profesores.',
            'RA Vinyasa más que un estilo es una filosofía que enfatiza la autenticidad, la conexión y la intención.',
            'Con elementos como la intención, la música, el tema de la clase y otros más, tendrás la “receta” ideal para crear clases de yoga transformadoras pero fieles a tu estilo.',
          ],
        },
        {
          title: 'Profesores experimentados',
          bullets: [
            'Nuestros profesores en Bali cuentan con más de 10 años de experiencia enseñando yoga en varias partes del mundo.',
            'Cada uno se ha especializado en un área y se actualiza constantemente.',
            'Ellos viven el yoga en todos los aspectos de su vida y te enseñarán como ser un yogi auténtico.',
          ],
        },
        {
          title: 'Tamaño de la Clase',
          bullets: [
            'Cada grupo está a cargo de un equipo compuesto de 4 a 6 profesores.',
            'Los grupos son de hasta 26 estudiantes lo que fortalece la relación Maestro-Estudiante.',
          ],
        },
        {
          title: 'Red de Graduados',
          bullets: [
            'Tenemos más de 900 graduados de nuestros profesorados de yoga en todo el mundo.',
            'Serás parte del “RA Movement” y entrarás a nuestro directorio de profesores de yoga de Radiantly Alive que están en más de 80 países. [Conoce más aquí](https://www.radiantlyalive.com/radiantly-alive-teachers)',
          ],
        },
        {
          title: 'Reputación e Historia',
          bullets: [
            'Radiantly Alive nació en Bali en el 2010 y es la escuela de yoga con más antigüedad en la isla.',
            'Hemos realizado más de 50 formaciones de profesores de yoga.',
            'Tenemos la mejor calificación en Yoga Alliance 4.9/5 basada en 150 reseñas.',
            'Somos representantes de los maestros de yoga más destacados a nivel internacional.',
          ],
        },
        {
          title: 'Educación continua',
          bullets: [
            'Te ofrecemos un currículo completo para seguir creciendo como maestro de yoga.',
            'Tendrás disponibles recursos presenciales y en línea para mejorar tus habilidades.',
            'Cada año realizamos reuniones de graduados de nuestros profesorados de yoga en Europa, América Latina y Bali.',
          ],
        },
        {
          title: 'Instalaciones y Entorno de Aprendizaje',
          bullets: [
            'Estudiarás en una escuela de yoga imponente y auténtica.',
            'Encontrarás un ambiente sereno, con 5 shalas rodeadas de naturaleza.',
            'Dispondrás de mats y accesorios de yoga.',
            'Contarás con el apoyo logístico de un cálido staff para que te enfoques en estudiar y aprovechar tu experiencia al máximo.',
          ],
        },
      ],
    },
    {
      type: 'split',
      eyebrow: 'Donde la autenticidad se encuentra con la transformación',
      heading: 'RA *Vinyasa*',
      paragraphs: [
        'Radiantly Alive Vinyasa, nuestro estilo exclusivo, le da a nuestras clases un enfoque único y transformador del yoga que va más allá de la práctica física, invitando a los alumnos a reconectar con quién realmente son.',
        'Más que un estilo de yoga; Ra Vinyasa es nuestra FILOSOFÍA de vivir el yoga enfatizando la autenticidad, la conexión y el autodescubrimiento.',
        'La intención, el tema, la música y otros componentes más del RA Vinyasa, juntos y aplicados con coherencia, hacen que cada clase de yoga sea poderosa y muy especial, tanto para los alumnos como para el profesor:',
        '¿Estás listo para llevar tu práctica y enseñanza de yoga a un nuevo nivel en Bali?',
        'Conocerás cuáles son estos 6 componentes de nuestra filosofía y podrás ponerlos en práctica llevando la magia de Radiantly Alive y Bali a tus clases.',
      ],
      ctas: [
        { label: 'Haz clic aquí', href: '#mi-seccion' },
        { label: '¿Qué es RA Vinyasa?', href: 'https://www.youtube.com/watch?v=auImU4eICC4' },
      ],
      image: 'espRaVinyasaSadhana',
      imageSide: 'left',
      tone: 'paper',
    },
    {
      type: 'intro',
      eyebrow: 'Abre tus sentidos a la experiencia Radiantly Alive.',
      heading: 'Sumérgete en la Magia del Yoga en la *Isla de los Dioses*',
      paragraphs: [
        'Así será un mes de tu vida en Bali.',
        'Prepárate para sentir en [este video](https://www.youtube.com/watch?v=b4r86Ed7_Os) lo que será un mes con nosotros en esta mágica isla.',
      ],
      align: 'center',
      tone: 'plum',
    },
    {
      type: 'split',
      heading: '¿Por qué estudiar un Profesorado de Yoga *en Español* en Bali?',
      paragraphs: [
        'Un Profesorado de Yoga es una experiencia intensa (en un buen sentido), reveladora (a nivel físico y emocional) y llena de información y conceptos nuevos.',
        'Si bien vivirás momentos inolvidables y divertidos, el desgaste físico y mental es inevitable. El poder llevar esta formación de yoga en tu idioma, español, hará que esta viaje sea mucho más ligero, que te puedas expresar sin limitaciones y que le saques provecho al máximo a toda la información recibida.',
        'Al llevar nuestro Profesorado de yoga en español tendrás:',
      ],
      bullets: [
        'Mejor compresión de los conceptos, pautas de enseñanza y de la teoría detrás de la práctica.',
        'Mejor comunicación de tus emociones y temas profundos, empatizando mucho más con tus maestros y compañeros.',
        'Menos desgaste mental al no tener que traducir la información recibida, pudiendo aplicarla y explicarla en el momento en que la recibes.',
        'Amigos de tu misma lengua pero que traigan historias y backgrounds muy diferentes que nutrirán tu perspectiva.',
      ],
      image: 'espTeachingPractice',
      imageSide: 'right',
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
            'Con lo años hemos desarrollado la forma más poderosa para que reconectes con tu habilidades innatas y interiorices las herramientas y conocimiento para sostener un espacio de yoga transformador.',
            'Sabemos cómo acompañarte para que te conviertas en un profesor de yoga seguro y auténtico, capaz de inspirar y guiar a otros en su propio camino de yoga.',
          ],
        },
        {
          label: 'TRANSFORMACIÓN',
          title: 'Viaje inspirador',
          bullets: [
            'Con nuestra formación de profesores de yoga en español emprenderás un viaje que cambiará tu vida para siempre. Hemos diseñado nuestro programa para que vivas una transformación profunda, acompañándote a conectar con tu verdadero ser.',
            'Poco a poco irás sintiendo un cambio de perspectiva, un mayor autoconocimiento y un sentido de propósito y vitalidad.',
          ],
        },
        {
          label: 'COMUNIDAD',
          title: 'Ven por yoga, encuentra una familia',
          bullets: [
            'Nuestra formación en español no se termina en tu graduación. Ese día empezarás un nuevo capítulo en tu camino yogui.',
            'Con recursos, herramientas y nuevo conocimiento, podrás seguir evolucionando y creciendo tanto de manera individual como colectiva.',
            'Serás para siempre parte de una comunidad global vibrante junto a yogis radiantes que comparten tu pasión por el yoga.',
          ],
        },
      ],
    },
    {
      type: 'split',
      heading: '¿Es esta formación de profesores de yoga *la ideal para ti*?',
      paragraphs: [
        'Hemos estado en tu lugar.',
        'Sabemos que todo empieza como un sueño, que se transforma luego en una idea y se materializa en un plan.',
        'Y justo en el momento en que vas a dar el salto, viene la pregunta: ¿Será este profesorado de yoga el correcto para mí?',
        'A continuación respondemos esta duda de forma honesta y directa.',
      ],
      image: 'espSadhanaPractice',
      imageSide: 'left',
    },
    {
      type: 'features',
      columns: 3,
      items: [
        {
          title: 'Practicantes de yoga apasionados',
          text: 'que quieren mejorar su comprensión de esta disciplina, llevando su práctica de asana al siguiente nivel y aplicando la filosofía del yoga en los diferentes ámbitos de su vida.',
        },
        {
          title: 'Yogis empoderados',
          text: 'que quieren avanzar un escalón en su práctica y compartirla con otras personas de forma profesional generando un ingreso económico.',
        },
        {
          title: 'Maestros de de yoga certificados',
          text: 'pero que no se sienten preparados para pararse frente para pararse frente a un salón y crear clases transformadoras con técnicas claras para “sostener un espacio” y no solo dictar buenas clases de yoga.',
        },
        {
          title: 'Profesores de yoga',
          text: 'en búsqueda de nuevas habilidades y técnicas de enseñanza para liderar con confianza grupos variados y crear momentos mágicos en sus clases.',
        },
        {
          title: 'Yogis de todas las edades',
          text: 'listos para experimentar un cambio en su cuerpo y mente: sentirse más flexibles y fuertes, y a la vez conectados con un propósito claro en su práctica de yoga.',
        },
        {
          title: 'Personas inspiradoras',
          text: 'listas para profundizar nuestra filosofía y estilo único, RA Vinyasa, descubriendo quien realmente son y siendo parte de un movimiento global que está transformando la manera de vivir el yoga.',
        },
      ],
    },
    {
      type: 'intro',
      eyebrow: 'Próxima fecha:',
      heading: 'del 05 al 28 de Abril del 2027 · *Ubud, Bali*',
      paragraphs: [
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
      lead: '6 Módulos para explorar tu interior, conectar profundamente con el yoga y descubrir el arte de compartirlo con los demás.',
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
        { time: '7:30 – 9:00', title: 'Sadhana' },
        { time: '9:30 – 10:00', title: 'Desayuno' },
        { time: '10:00 – 10:30', title: 'Análisis de la clase' },
        { time: '10:30 – 12:30', title: 'Arte de Enseñar' },
        { time: '12:30 – 14:00', title: 'Almuerzo' },
        { time: '14:00 – 16:00', title: 'Exploración de Asana' },
        { time: '16:00 – 18:00', title: 'Filosofía/Anatomía/Negocios de Yoga' },
        { time: '18:00 – 19:30', title: 'Actividades especiales (algunos días)' },
      ],
    },
    {
      type: 'gallery',
      images: ['espArtOfTeaching', 'espTirtaEmpul', 'espClosingCeremony', 'espOpeningGroup', 'espBaliLandscape', 'espGraduation'],
    },
    {
      type: 'people',
      eyebrow: 'El equipo:',
      heading: 'En Radiantly Alive, tenemos a los profesores más *apasionados y experimentados*.',
      lead: 'Conocerás a un equipo de profesores apasionados y con mucha experiencia dictando y emprendiendo en el muno del yoga que no solo te enseñará lo más importante para que te conviertas en un gran maestro, sino también compartirán contigo sus secretos y consejos para que puedas crecer, conectar con tus alumnos y transformar tu vida.',
      columns: 3,
      tone: 'paper',
      people: [
        {
          name: 'Denise De la Torre Ugarte',
          role: 'Facilitadora líder: RA Vinyasa, Arte de enseñar, Viaje al Interior',
          image: 'espDenise',
          bio: [
            'Nuestra profesora líder, Denise, es el alma de esta experiencia transformadora. Su búsqueda interior, que abarca desde la meditación Vipassana hasta el estudio del Budismo e Inside Flow Yoga, le ha permitido integrar sabiduría ancestral con un enfoque moderno. Denise sabe cómo inspirarte, desafiarte y acompañarte en tu crecimiento personal y profesional.',
            'Después de años de buscar el sentido de la vida, Denise encontró en el yoga un camino hacia el autodescubrimiento.',
            'Se enamoró de su filosofía y de sus movimientos fluidos. Estudió Vinyasa Krama, FluidUs e Inside Flow durante más de 1000 horas y está certificada por Yoga Alliance como profesora RYT 500. Dirige formaciones de profesores de yoga, retiros y clases de yoga tanto en Perú como en Bali.',
            'En sus clases, utiliza indicaciones claras e invitaciones sutiles que guían a sus estudiantes a lo largo de un viaje lento y poderoso.',
            'Puedes practicar con ella RA Vinyasa e Inside Flow, ambas experiencias introspectivas con una secuencia creativa y una lista de reproducción cuidadosamente seleccionada.',
            'Sus clases son conocidas por ser poderosas y mágicas al mismo tiempo.',
          ],
        },
        {
          name: 'Lucinda Muldoon',
          role: 'Profesora de Anatomía',
          image: 'teacherLucinda',
          bio: [
            'Lucinda descubrió el yoga en 2015 como un refugio para hacer frente al agotamiento y los desafíos de salud mental, y descubrió mucho más a través de los aprendizajes filosóficos de sus maestros.',
            'Después de completar su formación de 200 horas en Australia en 2017, Lucinda continuó sus estudios en Yoga para Niños, Pre/Postnatal y Terapias Faciales Corporales, lo que expandió su pasión y curiosidad por cómo podemos mejorar nuestra relación con el cuerpo.',
            'Lucinda ha facilitado formaciones para maestros, retiros e inmersiones, creando un espacio para que los estudiantes adopten un enfoque de ‘suavidad pero fuerza’ en su práctica y en la vida diaria.',
            '(El profesor de anatomía puede variar según disponibilidad)',
          ],
        },
      ],
    },
    {
      type: 'testimonials',
      heading: 'Lo que dicen *nuestros alumnos*',
      items: [
        {
          quote:
            'El profesorado en Radiantly Alive ha sido para mi una experiencia única, un viaje y una transformación. El estudio es un lugar maravilloso con una energía que te conecta no solo con el hecho de estar en Bali, sino también con la naturaleza y con la posibilidad de ir hacia dentro de uno mismo. Este profesorado superó mis expectativas.',
          name: 'Coni',
          context: 'Abril 2023',
        },
        {
          quote: 'Me impactó el poder dictar una clase completa prácticamente fuera del mat. La fuerza y confianza que nace en uno mismo para verse liderando una práctica.',
          name: 'Anonimo',
          context: 'Julio 2024',
        },
        { quote: 'La sensación de unidad y de sentirte en familia.', name: 'Maria Jesus', context: 'Julio 2024' },
        {
          quote:
            'Esta experiencia ha sido un despertar profundo en todos los niveles de mi ser, cultivando una paz interior más profunda, una conexión más clara con mi propósito que ha transformado mi manera de percibir y enfrentar cada momento conectada. El yoga no solo ha fortalecido mi cuerpo físico, sino también ha nutrido mi mente y espíritu, permitiéndome abrazar con gratitud cada momento presente. Gracias por abrir y compartir esta posibilidad',
          name: 'Alba Rivas',
          context: 'Julio 2024',
        },
        {
          quote: 'Me gusta cómo nos empoderaron impulsando nuestra creatividad y autenticidad. Además, nos dieron muchas herramientas para ser profesores',
          name: 'Anónimo',
          context: 'Julio 2024',
        },
        {
          quote:
            'Me va a tomar un poco de tiempo interiorizar todo lo que he vivido en este profesorado pues ha sido tanto que no siento que pueda caber en palabras. He conectado a un nivel muy profundo con otras personas que hoy son como mi familia, he podido crecer, transformarme y aprender, tanto del yoga como de anatomía, filosofía, de mi misma y muchas cosas más.',
          name: 'Vannia',
          context: 'Abril 2023',
        },
        { quote: 'Una experiencia indescriptible en la transformación de mi vida. Gracias por tanto conocimiento.', name: 'Anónimo', context: 'Julio 2024' },
      ],
    },
    {
      type: 'intro',
      heading: 'Conoce más de lo que dicen nuestros alumnos aquí',
      paragraphs: ['Testimonios de nuestros graduados de los profesorados de yoga en español en Radiantly Alive, en Bali'],
      align: 'center',
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
      note: 'La certificación de Profesores de yoga en español tendrá lugar en Ubud, paraíso espiritual de Bali, entorno perfecto donde la energía y serenidad del lugar se combinan con el proceso de aprendizaje y transformación.',
      image: 'espJungleShala',
      imageSide: 'right',
      shape: 'arch',
      tone: 'paper',
    },
    {
      type: 'pricing',
      id: 'pricing',
      heading: '¡Reserva tu plaza *ahora*!',
      lead: 'Planes de pago disponibles.',
      tiers: [
        {
          label: 'Early Bird',
          badge: 'PRECIO CON DESCUENTO',
          prices: ['IDR 40.3 millones'],
          note: 'Asegura tu plaza con precio especial. Disponible solamente para los primeros 10 inscritos o hasta el 5 de Febrero del 2027. +3% de tarifa por procesamiento de pagos en línea.',
          href: '/tt-classes-retreats/p/profesorado-de-yoga-200hrs-early-bird',
          ctaLabel: 'Comprar',
        },
        {
          label: 'Precio Regular',
          badge: '¡BALI AQUÍ VOY!',
          prices: ['IDR 49.2 millones'],
          note: 'Separa tu plaza con IDR 10 millones. Planes de pago disponibles. Paga el total 30 días antes del comienzo del curso. +3% extra por procesamiento de pagos con tarjeta.',
          href: '/tt-classes-retreats/p/profesorado-de-yoga-200hrs-regular-price',
          ctaLabel: 'Comprar',
        },
      ],
      notes: [
        'del 05 al 28 de Abril del 2027',
        'Profesorado de Yoga 200Horas en Bali 2027 | Early Bird: $2,250.00 · Profesorado de Yoga 200Horas en Bali 2027 | Regular Price: from $500.00 (Fianza de 500)',
        'Contáctanos por WhatsApp [aquí](https://wa.link/3sauqu) o envíanos un correo a [ra.ytt@radiantlyalive.com](mailto:ra.ytt@radiantlyalive.com) para obtener más información.',
        TERMINOS,
      ],
    },
    {
      type: 'intro',
      heading: 'Opciones de Alojamiento para tu Profesorado en Bali',
      paragraphs: [
        'Aunque el alojamiento en Ubud, Bali no está incluido en el precio de la formación, ofrecemos paquetes convenientes para que tu viaje sea lo más libre de estrés y preocupaciones posible.',
        'Sabemos que cada estudiante tiene diferentes preferencias, presupuestos y necesidades de alojamiento, especialmente cuando se trata de privacidad y espacio personal.',
        'Dado que la formación es intensiva, con sesiones diarias de 7:30 AM a 5:30 PM, tener tu propio espacio para recargar energías de manera independiente puede ser fundamental. Sin embargo, esto no impedirá que crees lazos profundos con tus compañeros de curso.',
        '**Nuestros paquetes de alojamiento comienzan en $350 para todo el período de formación, con una habitación privada convenientemente ubicada junto al estudio.**',
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
          eyebrow: 'from $350',
          title: 'Ariks Homestay',
          href: ARIKS,
          text: 'Nuestros paquetes de alojamiento comienzan desde $350 por una habitación privada de bajo presupuesto con baño privado y aire acondicionado para todo el período de formación. Ariks Homestay está convenientemente ubicado junto al estudio. Los huéspedes valoran la amabilidad del personal y lo consideran una opción de buena relación calidad-precio.',
        },
        {
          image: 'espKrisnaHouse',
          eyebrow: 'from $770',
          title: 'Krishna Guesthouse',
          href: KRISNA,
          text: 'Con una piscina al aire libre y un hermoso y sencillo jardín tropical, Krisna House está situado a 30 metros del estudio. Las habitaciones con aire acondicionado de Krisna House cuentan con una terraza o balcón con muebles de exterior y baño privado.',
          note: 'A los viajeros solitarios les gusta especialmente la ubicación, calificándola con un 9.5 para estancias de una persona en Booking.com.',
        },
      ],
    },
    {
      type: 'split',
      heading: 'Paquete de comidas nutritivas en *Chandra Cafe*',
      paragraphs: [
        '**¡Aprovecha el precio especial solo para ti en nuestro Café ubicado dentro del estudio!**',
        'Disfruta de deliciosas comidas nutritivas al estilo casero, en su mayoría veganas y vegetarianas, con algunas opciones de pescado y pollo.',
        'Con las comidas listas justo a tiempo para los tiempos de descanso, podrás relajarte, recuperar energías y regresar a la formación sintiéndote renovado.',
        '¡Olvídate de cocinar o buscar fuera y recárgate con comida deliciosa, saludable y con los mejores ingredientes, lista a tiempo para ti!',
      ],
      note: '¿Interesado en agregar un paquete de comidas? ¡Solo háznoslo saber y te compartiremos todos los detalles!',
      ctas: [{ label: 'Contáctanos', href: WHATSAPP }],
      image: 'espChandraCafe',
      imageSide: 'left',
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
          title: 'Acceso Gratuito a nuestro estudio Online',
          text: 'Un año de acceso gratuito a nuestro estudio Online a partir de la reserva del curso.',
        },
      ],
    },
    {
      type: 'form',
      id: 'mi-seccion',
      form: 'newsletter',
      tone: 'plum',
      heading: '¡Comienza tu viaje *ahora*!',
      lead: 'Deja tus datos y recibirás GRATIS: Una Muestra del Manual del Curso · Una clase de RA Vinyasa gratis con Denise · Nuestra super Guía de Bali con todos nuestros tips · Qué se necesita para ser un yogui avanzado · Cómo tener clases llenas de alumnos · y más!',
      fallbackHref: 'https://www.radiantlyalive.com/200hour-yoga-teacher-training-spanish-1#mi-seccion',
      submitLabel: 'Enviar',
      successMessage:
        '¡Felicitaciones! Estás un paso más cerca de cumplir tus sueños. Pronto nos comunicaremos contigo. Si tienes preguntas puedes escribirnos al [Whataspp](https://wa.link/kxqilu). Estaremos felices de conversar contigo. ¡Un abrazo desde Bali!',
    },
    {
      type: 'faq',
      eyebrow: 'Profesorado de Yoga en español',
      heading: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Qué esperar de la formación?',
          answer:
            'Durante 24 días, te sumergirás completamente en las artes del yoga: āsana, meditación y filosofía.\n\nAbrirás tu corazón, profundizarás tu práctica y formarás vínculos con otros/as participantes que durarán toda la vida.\n\nCada día comenzaremos con una práctica de 1 hora y media de posturas de yoga acompañadas de prānāyāma y meditación.\n\nEl resto del día se dedicará a aprender de profesores expertos en sus campos en una variedad de temas: desde āsana, filosofía, hasta oratoria y crecimiento personal.\n\nTambién habrá tiempo para divertirse.\n\nNuestras sesiones nocturnas y actividades grupales te harán sonreír y abrir tu corazón.',
        },
        {
          question: '¿Dónde se realiza la formación?',
          answer:
            'La formación se lleva a cabo en el estudio de Radiantly Alive Yoga, en Ubud, Bali.\n\nEstá ubicado en el centro de la ciudad, cerca de restaurantes, tiendas y todo lo que un yogui pueda desear.',
        },
        {
          question: '¿Qué tipo de certificación recibiré?',
          answer:
            'Recibirás un Certificado de Formación de 200 Horas de Radiantly Alive.\n\nRadiantly Alive es una escuela de yoga totalmente avalada por Yoga Alliance.\n\nPuedes usar este certificado para solicitar la certificación como profesor en Yoga Alliance después del curso.',
        },
        {
          question: '¿Con cuánta antelación debo llegar a la formación?',
          answer:
            'Si viajas desde lugares lejanos, puede que quieras darte algo de tiempo adicional para acomodarte y permitir que tu cuerpo se recupere del desfase horario.\n\nPor favor, no olvides tener en cuenta las restricciones de tu visa (consulta la sección de Visa más abajo).',
        },
        {
          question: '¿Puedo participar incluso si ya he realizado un YTT de 200 horas?',
          answer:
            '¡Por supuesto! En esta formación de profesores con nuestra filosofía RA Vinyasa podrás refinar o mejorar tu técnica para “sostener el espacio” y no solo “dictar clases de yoga”.\n\nAdemás mejorarás tu forma de alinear a tus alumnos y aprenderás a crear secuencias inteligentes, creativas y retadoras.\n\nEn los módulos “Viaje al Interior” y “Filosofía” vivirás experiencias introspectivas que transformarán tu perspectiva de la vida.',
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
          question: '¿Cómo es el clima en Bali?',
          answer:
            'Bali está ubicada aproximadamente a 8 grados al sur del ecuador.\n\nPor lo tanto, puedes esperar un clima tropical y húmedo durante todo el año, con dos estaciones principales bien definidas: la temporada seca (de abril a octubre) y la temporada de lluvias (de noviembre a marzo).\n\nLa temperatura es cálida y generalmente oscila entre los 27 y 31 grados Celsius (77-88°F).',
        },
        {
          question: '¿Qué tipo de comida está disponible?',
          answer:
            'La comida en Ubud es absolutamente increíble.\n\nYa seas omnívoro, vegetariano, vegano o completamente crudivegano, este pueblo tiene opciones para todos los gustos.\n\n[Llena el formulario con tus datos.](#mi-seccion) y recibirás nuestra Guía de Bali donde verás una muestra de lo que Ubud tiene para ofrecer.',
        },
        {
          question: '¿Tendré tiempo libre?',
          answer:
            'La respuesta corta es sí.\n\nSin embargo, dado que se trata de un curso de formación de 200 horas y tenemos muchos temas que cubrir, no habrá demasiado tiempo libre.\n\nHabrá tiempo libre cada tarde y durante el desayuno y almuerzo.',
        },
        {
          question: '¿El profesorado incluye alojamiento?',
          answer:
            'Aunque el profesorado no incluye el alojamiento, tenemos paquetes de estadía que comienzan en $350 para todo el período de formación, con una habitación privada convenientemente ubicada junto al estudio.\n\nEscríbenos para darte la mejor opción.\n\nSi prefieres buscar otras opciones hemos preparado una lista de hospedajes con nuestras recomendaciones, separándolos en categorías por precios, para elijas la mejor para ti.\n\nEncuéntrala haciendo clic [aquí](/accommodation).',
        },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Profesorado de Yoga en español de 200hrs certificado por Yoga Alliance',
      heading: 'Una experiencia que *transformará tu vida*',
      text: 'del 05 al 28 de Abril del 2027 · Ubud, Bali',
      image: 'espBookNow',
      ctas: [
        { label: 'Contáctanos', href: WHATSAPP },
        { label: 'Comprar', href: '#pricing', variant: 'secondary' },
      ],
    },
  ],
  schema: {
    type: 'course',
    name: 'Profesorado de Vinyasa Yoga 200 horas en español',
    description:
      'Profesorado de Yoga en español de 200hrs certificado por Yoga Alliance, del 05 al 28 de Abril de 2027 en Ubud, Bali: RA Vinyasa, arte de enseñar, exploración de asana, filosofía, anatomía y el yoga como negocio.',
  },
}
