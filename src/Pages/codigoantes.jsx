<section
  id="home"
  className="relative min-h-screen w-full flex items-center bg-cover bg-center px-6 md:px-16 lg:px-24 text-white"
  style={{
    backgroundImage: "url('/images/hero-bg.jpg')", // ✅ Cambia por tu imagen profesional
  }}
>
  <div className="absolute inset-0 bg-black/60"></div> {/* Overlay oscuro */}
  <div className="relative z-10 max-w-3xl">
    {/* Título */}
    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
      Soluciones Web que Impulsan tu Negocio
    </h1>

    {/* Subtítulo */}
    <p className="font-sans text-lg sm:text-xl lg:text-2xl text-gray-200 mb-6">
      Desarrollo de sitios web, e-commerce y sistemas a medida.
      <br />
      Experto en{" "}
      <span className="text-emerald-400">PHP, Python, Laravel, Odoo, JS</span> y
      más.
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <a
        href="#contact"
        className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md text-lg transition"
      >
        Contrátame
      </a>
      <a
        href="#projects"
        className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-md text-lg transition"
      >
        Ver Portafolio
      </a>
    </div>

    {/* Redes */}
    <div className="flex gap-4 text-3xl">
      <a
        href="https://www.linkedin.com/in/freddy-mh/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="hover:text-emerald-400 transition" />
      </a>
      <a href="https://github.com/fred0727" target="_blank" rel="noreferrer">
        <BsGithub className="hover:text-emerald-400 transition" />
      </a>
      <a href="#contact">
        <GrMail className="hover:text-emerald-400 transition" />
      </a>
    </div>
  </div>
</section>;


        <section
          id="aboutme"
          className="flex flex-col pt-[100px] xlg:pt-[125px] p-6 py-8 xlg:py-20 bg-gray-200 dark:bg-slate-950 xmd:px-6 xlg:px-10 xxl:px-36 xxl:py-24 dark:text-white"
        >
          <h2 className="font-bold text-center py-3 text-2xl xxs:text-2xl xxm:text-3xl xlg:text-5xl xxl:text-6xl xxs:py-4">
            Sobre mi
          </h2>
          <p className="font-light dark:font-medium text-justify px-4 text-sm pb-2 xxs:text-lg xxm:text-xl xmd:px-16 xxs:pb-4 xlg:text-2xl xxl:text-3xl xxl:py-6">
            Me apasiona el mundo del desarrollo, he colaborado y creado
            proyectos front-end con Javascript, React, Redux y Tailwind CSS, así
            como en el desarrollo back-end con Node.js, Express, PHP, MySQL y
            PostgreSQL. Soy un entusiasta de las nuevas tecnologías, confió en
            mis capacidades y siempre trabajo para mejorar mis habilidades y
            conocimientos. Mi meta es seguir creciendo como profesional y poder
            aportar de mis aptitudes y habilidades en mi entorno laboral y
            comunidad web.
          </p>
          <section className="flex py-10 gap-3 flex-col justify-center xlg:gap-6">
            <h3 className="text-xl text-center font-medium xxm:text-2xl xmd:text-2xl xlg:text-3xl xxl:text-5xl">
              Habilidades Tecnicas
            </h3>
            <div className="px-2 py-6">
              <Skills />
            </div>
          </section>
        </section>

        