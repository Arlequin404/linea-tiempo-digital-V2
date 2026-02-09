export type TimelineItem = {
  year: string
  country: 'ec' | 'dk'
  title: string
  description: string
  focus: ('legal' | 'tech' | 'inst')[]
}

export const timelineData: TimelineItem[] = [
  {
    year: '2002',
    country: 'ec',
    title: 'Ley de Comercio Electrónico',
    description: 'Otorga validez jurídica a documentos, mensajes de datos y firma electrónica, permitiendo la contratación en línea y sentando las bases legales del comercio electrónico y los trámites digitales.',
    focus: ['legal'],
  },
  {
    year: '2004',
    country: 'ec',
    title: 'LOTAIP',
    description: 'Garantiza el acceso a la información pública y obliga a las instituciones a publicar datos en medios digitales, impulsando transparencia y portales institucionales.',
    focus: ['legal', 'inst'],
  },
  {
    year: '2008',
    country: 'ec',
    title: 'Constitución del Ecuador',
    description: 'Reconoce derechos de acceso a información y comunicación, estableciendo el marco constitucional que habilita políticas de conectividad, inclusión digital y modernización del Estado.',
    focus: ['legal', 'inst'],
  },
  {
    year: '2012',
    country: 'dk',
    title: 'Digital Post Act',
    description: 'Regula el correo digital oficial como canal único de comunicación entre el Estado, ciudadanos y empresas, con validez jurídica y trazabilidad.',
    focus: ['legal', 'inst'],
  },
  {
    year: '2013–2014',
    country: 'dk',
    title: 'Digital Post obligatorio',
    description: 'Introduce el enfoque digital-by-default, haciendo obligatoria la comunicación digital con el Estado para empresas y ciudadanos.',
    focus: ['inst'],
  },
  {
    year: '2014',
    country: 'dk',
    title: 'eIDAS (Unión Europea)',
    description: 'Establece un marco común para identificación electrónica y firmas digitales con reconocimiento transfronterizo, clave para comercio digital europeo.',
    focus: ['legal'],
  },
  {
    year: '2015',
    country: 'ec',
    title: 'Ley Orgánica de Telecomunicaciones',
    description: 'Regula servicios de telecomunicaciones e Internet, fortaleciendo la infraestructura y la calidad del servicio como condición para la digitalización de trámites y comercio electrónico.',
    focus: ['legal', 'tech'],
  },
  {
    year: '2017',
    country: 'ec',
    title: 'Código Orgánico Administrativo (COA)',
    description: 'Autoriza el uso de medios electrónicos en los procedimientos administrativos, habilitando expedientes digitales, notificaciones electrónicas y reducción de trámites presenciales.',
    focus: ['legal', 'inst'],
  },
  {
    year: '2018',
    country: 'ec',
    title: 'Ley de Optimización y Eficiencia de Trámites',
    description: 'Promueve la simplificación de procesos y la reducción de requisitos, incentivando la digitalización como mecanismo para mejorar eficiencia y atención a ciudadanos y empresas.',
    focus: ['inst'],
  },
  {
    year: '2018',
    country: 'dk',
    title: 'GDPR + Danish Data Protection Act',
    description: 'Define reglas estrictas para protección de datos personales, habilitando el intercambio seguro de información y aumentando la confianza ciudadana en servicios digitales.',
    focus: ['legal'],
  },
  {
    year: '2019–Actualidad',
    country: 'ec',
    title: 'Facturación electrónica (SRI) y VUE / ECUAPASS (SENAE)',
    description: 'Digitaliza procesos tributarios y aduaneros, mejorando trazabilidad, control, formalización y reducción de tiempos en comercio interior y exterior.',
    focus: ['tech', 'inst'],
  },
  {
    year: '2020–Actualidad',
    country: 'dk',
    title: 'Payments Act (PSD2)',
    description: 'Regula pagos digitales, open banking y autenticación reforzada, facilitando la alta adopción de pagos electrónicos en el comercio interior.',
    focus: ['legal', 'tech'],
  },
  {
    year: '2021',
    country: 'ec',
    title: 'Ley Orgánica de Protección de Datos Personales',
    description: 'Establece principios de privacidad y seguridad de la información, fortaleciendo la confianza en plataformas digitales públicas y privadas.',
    focus: ['legal'],
  },
  {
    year: '2022',
    country: 'dk',
    title: 'MitID y NemLog-in',
    description: 'Implementa una identidad digital única y segura para acceder a servicios públicos y privados, simplificando trámites y operaciones comerciales.',
    focus: ['tech', 'inst'],
  },
]
