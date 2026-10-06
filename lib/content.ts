/*
 * All copy and facts live here. Edit this file to change the page.
 * Facts marked VERIFY come from public Astros pages (checked Sept–Oct 2026)
 * and should be confirmed with the Astros group sales team before launch.
 */

export type Lang = 'en' | 'es';
export type SegmentKey = 'school' | 'faith' | 'nonprofit' | 'union' | 'community' | 'other';

export const OFFICIAL = {
  // Official Astros channels. Every call to action points here.
  requestUrl: 'https://www.mlb.com/astros/forms/group-tickets-request',
  groupPage: 'https://www.mlb.com/astros/tickets/group-tickets/buy',
  promotionsUrl: 'https://www.mlb.com/astros/tickets/promotions/2026',
  phone: '(713) 259-8030', // VERIFY: Astros group sales line listed on mlb.com
  phoneHref: 'tel:+17132598030',
  email: 'groupsales@astros.com', // VERIFY
  groupMinimum: 20, // VERIFY: online group booking starts at 20 tickets (2025 storefront)
};

type SegmentCopy = { label: string; people: string; icon: string; ideas: string[]; line: string };

export const SEGMENTS: Record<Lang, Record<SegmentKey, SegmentCopy>> = {
  en: {
    school: {
      label: 'Schools', icon: '🎒', people: 'students, teachers and families',
      line: 'A field trip they will talk about long after the last out.',
      ideas: ['Pair a weekday game with a ballpark tour', 'Reward a class, a grade or a whole campus', 'Bring teachers and staff for an appreciation outing'],
    },
    faith: {
      label: 'Faith communities', icon: '🕊️', people: 'congregation',
      line: 'Fellowship, family and nine innings together.',
      ideas: ['Plan a youth group or family ministry outing', 'Gather the whole congregation on a theme night', 'Celebrate a milestone, a mission or a season of service'],
    },
    nonprofit: {
      label: 'Nonprofits', icon: '🤝', people: 'volunteers, members and the people you serve',
      line: 'Say thank you, build your community, and share your mission.',
      ideas: ['Thank volunteers and donors with a night out', 'Bring the families and young people you serve', 'Ask about sharing your mission at a concourse table'],
    },
    union: {
      label: 'Unions & workplaces', icon: '🛠️', people: 'members and their families',
      line: 'The people who build Houston deserve a night at the ballpark.',
      ideas: ['Host a member appreciation night', 'Bring families together outside the job site', 'Welcome new members or celebrate a contract milestone'],
    },
    community: {
      label: 'Neighborhoods & clubs', icon: '🏘️', people: 'neighbors and members',
      line: 'Your neighborhood, your club, your crew—all in one section.',
      ideas: ['Civic clubs, cultural associations and alumni groups', 'Senior centers, recreation centers and service clubs', 'Youth programs, scout troops and mentoring groups'],
    },
    other: {
      label: 'Any group', icon: '⭐', people: 'people',
      line: 'If you can gather twenty people, there is a place for you here.',
      ideas: ['Families, friend groups and reunions', 'Teams, leagues and hobby clubs', 'Anyone who has never been to a game together'],
    },
  },
  es: {
    school: {
      label: 'Escuelas', icon: '🎒', people: 'sus estudiantes, maestros y familias',
      line: 'Una excursión de la que hablarán mucho después del último out.',
      ideas: ['Combine un juego entre semana con un recorrido por el estadio', 'Premie a un salón, un grado o toda la escuela', 'Invite a maestros y personal a una salida de agradecimiento'],
    },
    faith: {
      label: 'Comunidades de fe', icon: '🕊️', people: 'su congregación',
      line: 'Comunión, familia y nueve entradas juntos.',
      ideas: ['Organice una salida del grupo de jóvenes o del ministerio familiar', 'Reúna a toda la congregación en una noche temática', 'Celebre un logro, una misión o una temporada de servicio'],
    },
    nonprofit: {
      label: 'Organizaciones sin fines de lucro', icon: '🤝', people: 'sus voluntarios, miembros y las personas a quienes sirven',
      line: 'Dé las gracias, fortalezca su comunidad y comparta su misión.',
      ideas: ['Agradezca a voluntarios y donantes con una noche especial', 'Traiga a las familias y jóvenes a quienes sirve', 'Pregunte por una mesa en el pasillo para compartir su misión'],
    },
    union: {
      label: 'Sindicatos y lugares de trabajo', icon: '🛠️', people: 'sus miembros y sus familias',
      line: 'Quienes construyen Houston merecen una noche en el estadio.',
      ideas: ['Organice una noche de agradecimiento para los miembros', 'Reúna a las familias fuera del lugar de trabajo', 'Dé la bienvenida a nuevos miembros o celebre un logro'],
    },
    community: {
      label: 'Vecindarios y clubes', icon: '🏘️', people: 'sus vecinos y miembros',
      line: 'Su vecindario, su club, su gente: todos en la misma sección.',
      ideas: ['Clubes cívicos, asociaciones culturales y grupos de exalumnos', 'Centros para adultos mayores, centros recreativos y clubes de servicio', 'Programas juveniles, tropas scout y grupos de mentoría'],
    },
    other: {
      label: 'Cualquier grupo', icon: '⭐', people: 'su gente',
      line: 'Si puede reunir a veinte personas, aquí hay un lugar para ustedes.',
      ideas: ['Familias, amigos y reuniones', 'Equipos, ligas y clubes de pasatiempos', 'Cualquiera que nunca haya ido junto a un juego'],
    },
  },
};

export const SEGMENT_ORDER: SegmentKey[] = ['school', 'faith', 'nonprofit', 'union', 'community', 'other'];

export const T = {
  en: {
    banner: 'Concept prototype by the Gonzaga Sport Consulting Group for the Houston Astros. Not an official Astros page. Offers shown are examples to confirm with the Astros group sales team.',
    nav: { why: 'Why come', groups: 'Your group', day: 'Your day', plan: 'Plan it', faq: 'Questions' },
    langLabel: 'Español',
    heroKicker: 'An invitation to Daikin Park',
    heroTitleOrg: (org: string) => `A day at the ballpark, built around ${org}.`,
    heroTitle: 'A day at the ballpark, built around your group.',
    heroSub: (people: string) => `Bring your ${people} to an Astros game in downtown Houston. We help with the planning, you bring the people, and everyone leaves with a shared memory.`,
    heroCta: 'Start planning',
    heroSecondary: 'See what a day looks like',
    heroNote: (min: number) => `Groups start at ${min} people. No experience planning outings needed.`,
    whyKicker: 'Why groups come',
    whyTitle: 'More than a ticket. A reason to be together.',
    why: [
      { t: 'A shared day out', d: 'Everyone sits together, cheers together and goes home with the same story to tell.' },
      { t: 'A group rate, no fees', d: 'Group pricing with no added service fees, so the number you plan with is the number you pay.' },
      { t: 'One person to call', d: 'A dedicated Astros group representative helps you pick a date, seats and extras.' },
      { t: 'Recognition for your group', d: 'Ask about seeing your group’s name on the ballpark’s ribbon boards or taking part in pregame moments.' },
    ],
    groupsKicker: 'Who this is for',
    groupsTitle: 'Every community has a place in the stands.',
    groupsSub: 'Pick the one that fits you best—or none of them. These are starting points, not requirements.',
    belongTitle: 'Don’t see your group here?',
    belongText: 'You belong here too. If people gather around something you share—a cause, a craft, a culture, a neighborhood—we would love to host you.',
    dayKicker: 'How you will be treated',
    dayTitle: 'What your day looks like',
    day: [
      { when: 'Weeks before', t: 'Plan with a real person', d: 'Your group representative helps you choose a game, seating area and any extras, and answers every question along the way.' },
      { when: 'Days before', t: 'Share tickets easily', d: 'Tickets are digital, so you can send them to your group without printing or handing anything out.' },
      { when: 'Game day', t: 'Arrive and settle in', d: 'Your group sits together. Ask ahead about accessible seating, family needs or anything that helps your people feel comfortable.' },
      { when: 'After the game', t: 'Make it a tradition', d: 'Tell us how it went. Returning groups get first access to plan next season’s outing.' },
    ],
    extrasKicker: 'Make it yours',
    extrasTitle: 'Add a moment your group will remember',
    extrasNote: 'Availability varies by game. Your representative will confirm what is possible.',
    extras: [
      { t: 'Sing the National Anthem', d: 'A choir, band or class performs before first pitch.' },
      { t: 'Present the colors', d: 'Your color guard takes the field for the pregame ceremony.' },
      { t: 'Perform at the ballpark', d: 'Showcase a performance group in the ballpark before the game.' },
      { t: 'Share your mission', d: 'Nonprofits can ask about a concourse table to meet fans.' },
      { t: 'See your name in lights', d: 'Welcome your group with a message on the ballpark ribbon boards.' },
      { t: 'Go behind the scenes', d: 'Weekday ballpark tours and educational field trips are available for schools.' },
    ],
    planKicker: 'Plan it in a minute',
    planTitle: 'Sketch your outing',
    planSub: 'Try a few options. Nothing is booked and nothing is saved—this just helps you start the conversation.',
    planSize: 'How many people?',
    planWhen: 'When works best?',
    when: ['Weekday evening', 'Weekend', 'Weekday day game', 'Flexible'],
    planWant: 'What matters most?',
    wants: ['Everyone sits together', 'Affordable', 'A special moment', 'Family friendly', 'Accessible seating'],
    planResultTitle: 'Your outing sketch',
    planResult: (org: string, n: number, when: string, wants: string[]) =>
      `${org} would like to bring about ${n} people to an Astros game${when ? `, ideally on a ${when.toLowerCase()}` : ''}.${wants.length ? ` What matters most: ${wants.join(', ').toLowerCase()}.` : ''}`,
    planBelow: (min: number) => `Groups start at ${min}. Smaller than that? Ask anyway—your representative can suggest options.`,
    planSend: 'Send this to the Astros',
    planCopy: 'Copy',
    planCopied: 'Copied',
    faqKicker: 'Good questions',
    faqTitle: 'Before you raise your hand',
    faq: [
      { q: 'Who can bring a group?', a: 'Anyone. Schools, congregations, nonprofits, unions, workplaces, neighborhood and cultural groups, clubs, families. If you can gather the group, you are welcome.' },
      { q: 'How big does our group need to be?', a: 'Group tickets start at 20 people. Very large groups are welcome too—your representative will plan seating with you.' },
      { q: 'We have never planned anything like this. Is that okay?', a: 'Yes. Most group leaders are doing it for the first time. Your representative walks you through each step.' },
      { q: 'Can you accommodate accessibility or family needs?', a: 'Tell your representative what your group needs when you start planning, so seating and arrival can be arranged ahead of time.' },
      { q: 'What does it cost?', a: 'Pricing depends on the game and seating area. Groups receive a group rate with no added service fees. Your representative will share options for your budget.' },
      { q: 'Is there any obligation if we reach out?', a: 'None. Raising your hand just starts a conversation.' },
    ],
    ctaKicker: 'Ready when you are',
    ctaTitle: 'Raise your hand. We will take it from there.',
    ctaSub: 'Tell the Astros group sales team a little about your group, and a representative will reach out to help you plan.',
    ctaBtn: 'Request group information',
    ctaOr: 'Or call',
    footer: 'This page is a concept prototype created by student consultants of the Gonzaga Sport Consulting Group (GSCG) for the Houston Astros. It is not affiliated with, endorsed by, or published by the Houston Astros or Major League Baseball. Requests go to the Astros’ official group ticket page.',
    builder: 'Personalize links',
  },
  es: {
    banner: 'Prototipo conceptual del Gonzaga Sport Consulting Group para los Houston Astros. No es una página oficial de los Astros. Las ofertas son ejemplos por confirmar con el equipo de ventas grupales de los Astros.',
    nav: { why: 'Por qué venir', groups: 'Su grupo', day: 'Su día', plan: 'Planéelo', faq: 'Preguntas' },
    langLabel: 'English',
    heroKicker: 'Una invitación a Daikin Park',
    heroTitleOrg: (org: string) => `Un día en el estadio, pensado para ${org}.`,
    heroTitle: 'Un día en el estadio, pensado para su grupo.',
    heroSub: (people: string) => `Traiga a ${people} a un juego de los Astros en el centro de Houston. Le ayudamos a planearlo, usted trae a su gente y todos se van con un recuerdo compartido.`,
    heroCta: 'Comience a planear',
    heroSecondary: 'Vea cómo es el día',
    heroNote: (min: number) => `Los grupos comienzan con ${min} personas. No necesita experiencia organizando salidas.`,
    whyKicker: 'Por qué vienen los grupos',
    whyTitle: 'Más que un boleto. Una razón para estar juntos.',
    why: [
      { t: 'Un día compartido', d: 'Todos se sientan juntos, celebran juntos y se van con la misma historia que contar.' },
      { t: 'Tarifa grupal, sin cargos', d: 'Precios para grupos sin cargos de servicio adicionales: el número con el que planea es el que paga.' },
      { t: 'Una persona de contacto', d: 'Un representante de grupos de los Astros le ayuda a elegir la fecha, los asientos y los extras.' },
      { t: 'Reconocimiento para su grupo', d: 'Pregunte por ver el nombre de su grupo en las pantallas del estadio o participar en momentos antes del juego.' },
    ],
    groupsKicker: 'Para quién es',
    groupsTitle: 'Cada comunidad tiene un lugar en las gradas.',
    groupsSub: 'Elija la opción que mejor le quede, o ninguna. Son ideas para empezar, no requisitos.',
    belongTitle: '¿No ve su grupo aquí?',
    belongText: 'Usted también pertenece aquí. Si su gente se reúne alrededor de algo en común —una causa, un oficio, una cultura, un vecindario— nos encantaría recibirlos.',
    dayKicker: 'Cómo le atenderemos',
    dayTitle: 'Cómo será su día',
    day: [
      { when: 'Semanas antes', t: 'Planee con una persona real', d: 'Su representante le ayuda a elegir el juego, la zona de asientos y los extras, y responde cada pregunta.' },
      { when: 'Días antes', t: 'Comparta los boletos fácilmente', d: 'Los boletos son digitales: puede enviarlos a su grupo sin imprimir ni repartir nada.' },
      { when: 'El día del juego', t: 'Llegue y acomódese', d: 'Su grupo se sienta junto. Pregunte con anticipación por asientos accesibles, necesidades familiares o cualquier cosa que ayude a su gente a sentirse cómoda.' },
      { when: 'Después del juego', t: 'Hágalo una tradición', d: 'Cuéntenos cómo le fue. Los grupos que regresan tienen prioridad para planear la próxima temporada.' },
    ],
    extrasKicker: 'Hágalo suyo',
    extrasTitle: 'Agregue un momento que su grupo recordará',
    extrasNote: 'La disponibilidad varía según el juego. Su representante confirmará lo que es posible.',
    extras: [
      { t: 'Cante el Himno Nacional', d: 'Un coro, banda o grupo escolar canta antes del primer lanzamiento.' },
      { t: 'Presente los colores', d: 'Su escolta de bandera participa en la ceremonia previa al juego.' },
      { t: 'Presentación en el estadio', d: 'Muestre el talento de su grupo en el estadio antes del juego.' },
      { t: 'Comparta su misión', d: 'Las organizaciones sin fines de lucro pueden pedir una mesa en el pasillo.' },
      { t: 'Su nombre en las pantallas', d: 'Dé la bienvenida a su grupo con un mensaje en las pantallas del estadio.' },
      { t: 'Detrás de escena', d: 'Hay recorridos entre semana y excursiones educativas para escuelas.' },
    ],
    planKicker: 'Planéelo en un minuto',
    planTitle: 'Bosqueje su salida',
    planSub: 'Pruebe algunas opciones. Nada se reserva ni se guarda: solo le ayuda a iniciar la conversación.',
    planSize: '¿Cuántas personas?',
    planWhen: '¿Cuándo le conviene más?',
    when: ['Noche entre semana', 'Fin de semana', 'Juego de día entre semana', 'Flexible'],
    planWant: '¿Qué es lo más importante?',
    wants: ['Sentarse todos juntos', 'Precio accesible', 'Un momento especial', 'Ambiente familiar', 'Asientos accesibles'],
    planResultTitle: 'El bosquejo de su salida',
    planResult: (org: string, n: number, when: string, wants: string[]) =>
      `${org} quisiera traer a unas ${n} personas a un juego de los Astros${when ? `, de preferencia en: ${when.toLowerCase()}` : ''}.${wants.length ? ` Lo más importante: ${wants.join(', ').toLowerCase()}.` : ''}`,
    planBelow: (min: number) => `Los grupos comienzan con ${min}. ¿Son menos? Pregunte de todos modos: su representante puede sugerir opciones.`,
    planSend: 'Enviar a los Astros',
    planCopy: 'Copiar',
    planCopied: 'Copiado',
    faqKicker: 'Buenas preguntas',
    faqTitle: 'Antes de levantar la mano',
    faq: [
      { q: '¿Quién puede traer un grupo?', a: 'Cualquiera. Escuelas, congregaciones, organizaciones sin fines de lucro, sindicatos, lugares de trabajo, grupos vecinales y culturales, clubes y familias. Si puede reunir al grupo, es bienvenido.' },
      { q: '¿De qué tamaño debe ser el grupo?', a: 'Los boletos grupales comienzan con 20 personas. Los grupos muy grandes también son bienvenidos: su representante planeará los asientos con usted.' },
      { q: 'Nunca hemos organizado algo así. ¿Está bien?', a: 'Sí. La mayoría de los líderes de grupo lo hacen por primera vez. Su representante le guía en cada paso.' },
      { q: '¿Pueden atender necesidades de accesibilidad o familiares?', a: 'Dígale a su representante lo que su grupo necesita al empezar a planear, para organizar los asientos y la llegada con anticipación.' },
      { q: '¿Cuánto cuesta?', a: 'El precio depende del juego y la zona de asientos. Los grupos reciben una tarifa grupal sin cargos de servicio adicionales. Su representante le dará opciones según su presupuesto.' },
      { q: '¿Hay algún compromiso si nos comunicamos?', a: 'Ninguno. Levantar la mano solo inicia una conversación.' },
    ],
    ctaKicker: 'Listos cuando usted lo esté',
    ctaTitle: 'Levante la mano. Nosotros nos encargamos del resto.',
    ctaSub: 'Cuéntele al equipo de ventas grupales de los Astros un poco sobre su grupo y un representante se comunicará para ayudarle a planear.',
    ctaBtn: 'Solicitar información para grupos',
    ctaOr: 'O llame al',
    footer: 'Esta página es un prototipo conceptual creado por estudiantes consultores del Gonzaga Sport Consulting Group (GSCG) para los Houston Astros. No está afiliada, respaldada ni publicada por los Houston Astros ni por Major League Baseball. Las solicitudes van a la página oficial de boletos grupales de los Astros.',
    builder: 'Personalizar enlaces',
  },
};
