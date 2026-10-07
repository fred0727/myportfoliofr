# Factory Kode — Portfolio de Freddy Muñoz

Portfolio profesional desarrollado con React, TailwindCSS y Vite para presentar servicios de Odoo, automatización, integraciones con IA y desarrollo de sistemas empresariales.

## Características

- Diseño responsive para móvil, tablet y escritorio.
- Hero orientado a resultados empresariales.
- Servicios de Odoo, automatización, IA, sistemas web y soporte mensual.
- Sección de proyectos destacados.
- Sección “Cómo trabajo” con tres etapas del servicio.
- Botón flotante de WhatsApp como canal principal de contacto.
- Metadatos SEO y datos estructurados.
- Animaciones con Framer Motion.

## Tecnologías

- React 18
- Vite
- TailwindCSS
- Framer Motion
- React Icons
- PostCSS y Autoprefixer

## Requisitos

- Node.js 16 o superior.
- npm.

## Instalación

```bash
git clone https://github.com/fred0727/myportfoliofr.git
cd myportfoliofr
npm install
```

### Desarrollo

```bash
npm run dev
```

### Build de producción

```bash
npm run build
npm run preview
```

### Verificación de código

```bash
npm run lint
```

> El lint requiere que las dependencias de configuración de ESLint/Prettier estén instaladas correctamente en el proyecto.

## Estructura actual

```text
.
├── public/
│   ├── captureprojects/       # Capturas de proyectos
│   ├── docs/                  # CV
│   ├── images/                # Imágenes personales y recursos
│   └── logos/                 # Logos y tecnologías
├── src/
│   ├── Pages/Home.jsx         # Landing principal
│   ├── data/portfolioData.js  # Datos personales, servicios y proyectos
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Personalización

La información principal se encuentra en `src/data/portfolioData.js`:

- `personalInfo`: nombre, descripción, ubicación, redes y WhatsApp.
- `services`: catálogo de servicios.
- `projects`: proyectos destacados y sus enlaces.
- `testimonials`: testimonios.
- `skills`: tecnologías y niveles de experiencia.

La landing utiliza el logo de Factory Kode en `public/logos/fk-logo.png`.

## Servicios presentados

- Implementación y personalización de Odoo.
- Integraciones con IA y automatizaciones.
- Desarrollo de sistemas y páginas web.
- Soporte y capacitación mensual.

## Despliegue

El proyecto puede desplegarse en Netlify, Vercel o cualquier hosting que permita servir una aplicación Vite.

```bash
npm run build
```

La carpeta generada para producción es `dist/`.

## Contacto

- Email: `freddymunoz.dev@gmail.com`
- WhatsApp: [+51 924 471 461](https://wa.me/51924471461)
- LinkedIn: [Freddy Muñoz](https://www.linkedin.com/in/freddy-mh)
- GitHub: [fred0727](https://github.com/fred0727)

## Autor

**Freddy Muñoz — Factory Kode**
