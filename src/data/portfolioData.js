// Información personal
export const personalInfo = {
  name: 'Freddy Muñoz',
  title: 'Odoo, automatización y sistemas empresariales',
  subtitle: 'Soluciones digitales para ordenar y hacer crecer tu negocio',
  description: 'Te ayudo a organizar ventas e inventario, conectar aplicaciones y reducir tareas manuales con soluciones adaptadas a tu negocio.',
  email: 'freddymunoz.dev@gmail.com',
  phone: '+51 924 471 461',
  location: 'Perú',
  avatar: '/images/mifotonew.webp',
  cv: '/docs/FreddyMCV.pdf',
  social: {
    github: 'https://github.com/fred0727',
    linkedin: 'https://www.linkedin.com/in/freddy-mh',
    whatsapp: 'https://wa.me/51924471461'
  }
};

// Servicios
export const services = [
  {
    id: 'desarrollo-web-movil',
    title: 'Desarrollo Web & Móvil',
    description: 'Aplicaciones web responsivas y apps móviles multiplataforma que se adaptan a cualquier dispositivo',
    features: [
      'Interfaces modernas con React & JavaScript',
      'Apps móviles nativas con Flutter',
      'Diseño responsive con Bootstrap & TailwindCSS',
      'Optimización para performance y SEO'
    ],
    technologies: ['React', 'Flutter', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'TailwindCSS'],
    price: 'Desde $350',
    icon: '📱'
  },
  {
    id: 'backend-apis',
    title: 'Backend & APIs REST',
    description: 'Sistemas backend escalables y APIs robustas para conectar aplicaciones de manera eficiente',
    features: [
      'APIs REST con Node.js, Laravel y FastAPI',
      'Bases de datos MySQL y PostgreSQL',
      'Autenticación y seguridad avanzada',
      'Documentación completa de APIs'
    ],
    technologies: ['Node.js', 'Laravel', 'PHP', 'Python', 'FastAPI', 'MySQL', 'PostgreSQL'],
    price: 'Desde $300',
    icon: '⚙️'
  },
  {
    id: 'sistemas-empresariales',
    title: 'Sistemas Empresariales',
    description: 'Soluciones empresariales personalizadas con frameworks modernos y contenedores Docker',
    features: [
      'Desarrollo con frameworks Odoo',
      'Implementación con Docker y contenedores',
      'Integración de sistemas existentes',
      'Automatización de procesos empresariales'
    ],
    technologies: ['Odoo', 'Docker', 'Python', 'PostgreSQL', 'Linux'],
    price: 'Desde $500',
    icon: '🏢'
  },
  {
    id: 'ia-automatizaciones',
    title: 'Integraciones con IA y automatizaciones',
    description: 'Conecta herramientas de IA con tus aplicaciones y automatiza tareas repetitivas para ahorrar tiempo y operar mejor.',
    features: [
      'Asistentes de IA para atención y operaciones',
      'Automatización de tareas y flujos de trabajo',
      'Integración con APIs y herramientas existentes',
      'Procesamiento y clasificación de información'
    ],
    technologies: ['IA', 'Python', 'APIs', 'Automatización', 'Odoo'],
    price: 'Consultar',
    icon: '🤖'
  }
];

// Proyectos destacados
export const projects = [
  {
    id: 'agroverde',
    title: 'AgroVerde | Presencia digital',
    description: 'Landing page para presentar productos y servicios agrícolas, facilitar el contacto y comunicar la propuesta de valor.',
    image: '/captureprojects/agroverde.png',
    technologies: ['HTML', 'JavaScript', 'TailwindCSS', 'Vite'],
    demo: 'https://agrowebsite.netlify.app/',
    github: 'https://github.com/fred0727/template-agro-website',
    featured: true
  },
  {
    id: 'llantassac',
    title: 'Landing corporativa industrial',
    description: 'Sitio orientado a conversión para destacar servicios, generar confianza y llevar prospectos al contacto directo.',
    image: '/captureprojects/frarem.png',
    technologies: ['HTML', 'JavaScript', 'CSS3', 'PHP'],
    demo: 'https://frarem-sacfr.netlify.app/',
    github: 'https://github.com/fred0727/fraremsac',
    featured: true
  },
  {
    id: 'petblog',
    title: 'Pet Blog | Blog de Mascotas',
    description: 'Blog informativo enfocado en mascotas: artículos, consejos y secciones para comunidad o marcas aliadas.',
    image: '/captureprojects/blogpet.png',
    technologies: ['HTML', 'JavaScript', 'CSS3'],
    demo: 'https://petblogfr.netlify.app/',
    github: 'https://github.com/fred0727/pet-blog-academlo',
    featured: true
  },
  {
    id: 'crm-saas',
    title: 'CRM para clientes y ventas',
    description: 'Interfaz de gestión comercial para centralizar clientes y oportunidades con una experiencia clara y rápida.',
    image: '/captureprojects/crm-sass.png',
    technologies: ['React', 'JavaScript', 'CSS3'],
    demo: 'https://keen-swan-134193.netlify.app/',
    github: 'https://github.com/fred0727/sass-crm',
    featured: true
  },
  {
    id: 'trello-clone',
    title: 'Trello Clone | Frontend en React',
    description: 'Aplicación web para la gestión de proyectos y tareas, inspirada en Trello. Offline',
    image: '/captureprojects/trello-clone.png',
    technologies: ['React', 'JavaScript', 'CSS3'],
    demo: 'https://glistening-otter-0de53c.netlify.app/',
    github: 'https://github.com/fred0727/trello-clone',
    featured: true
  },
  {
    id: 'gestion-almacen',
    title: 'Gestión de Almacén',
    description: 'Aplicación web para la gestión de inventarios y control de stock.',
    image: '/captureprojects/gestion-almacen.png',
    technologies: ['HTML','JavaScript', 'CSS3'],
    demo: 'https://earnest-concha-28cd31.netlify.app/',
    github: 'https://github.com/fred0727/gestion-almacen',
    featured: true
  },
];

// Testimonios
export const testimonials = [
  {
    id: 'testimonio-1',
    name: 'Ana Rodríguez',
    position: 'Gerente de TI',
    company: 'Empresa Local',
    comment: 'Freddy desarrolló un sistema web que optimizó completamente nuestros procesos. Su conocimiento en PHP y JavaScript es excelente, y la implementación fue perfecta.',
    rating: 5,
    project: 'Sistema Web Empresarial'
  },
  {
    id: 'testimonio-2',
    name: 'Marco Silva',
    position: 'Director de Operaciones',
    company: 'Consultora Tech',
    comment: 'Trabajar con Freddy ha sido una gran experiencia. Su dominio de Odoo, Python y FastAPI nos ayudó a automatizar tareas importantes y mejorar la eficiencia.',
    rating: 5,
    project: 'Módulo Odoo Personalizado'
  }
];

// Habilidades técnicas
export const skills = {
  frontend: [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'TailwindCSS', level: 85 }
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Laravel', level: 80 },
    { name: 'PHP', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'FastAPI', level: 75 }
  ],
  databases: [
    { name: 'MySQL', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 }
  ],
  tools: [
    { name: 'Docker', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'Odoo', level: 75 },
    { name: 'Flutter', level: 70 }
  ]
};
