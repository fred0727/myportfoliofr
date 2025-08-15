// Información personal
export const personalInfo = {
  name: 'Freddy Muñoz',
  title: 'Especialista en Tecnologías Web',
  subtitle: 'Especializado en soluciones web y móviles con tecnologías modernas',
  description: 'Creo sitios web y sistemas que hacen tu vida más fácil y tu negocio más productivo. Con experiencia en Odoo, PHP, Python y tecnologías actuales, puedo ayudarte a optimizar procesos, mejorar la experiencia de tus clientes y llevar tu proyecto al siguiente nivel, sin complicaciones y con resultados visibles desde el primer día.',
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
  }
];

// Proyectos destacados
export const projects = [
  {
    id: 'agroverde',
    title: 'AgroVerde Landing',
    description: 'Página web para una empresa agrícola con información sobre productos y servicios.',
    image: '/captureprojects/agroverde.png',
    technologies: ['HTML', 'JavaScript', 'TailwindCSS', 'Vite'],
    demo: 'https://agrowebsite.netlify.app/',
    github: 'https://github.com/fred0727/template-agro-website',
    featured: true
  },
  {
    id: 'llantassac',
    title: 'Landing Corporativa',
    description: 'Página de presentación para empresa industrial. Diseño enfocado en la conversión, servicios destacados y contacto directo.',
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
