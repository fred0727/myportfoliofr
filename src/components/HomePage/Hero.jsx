import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 lg:px-16 
                 bg-gradient-to-r from-white via-gray-50 to-gray-100 
                 dark:from-darkBg dark:to-gray-900 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/portadaprueba.webp')", // ✅ Ruta correcta para public
      }}
    >
      {/* Overlay con degradado */}
      <div
        className="absolute inset-0 bg-gradient-to-r 
                      from-black/80 via-black/60 to-transparent 
                      dark:from-black/90 dark:via-black/80"
      ></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Texto Animado */}
        <motion.div
          className="flex flex-col gap-6 font-body text-gray-100 max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Título */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Construyo <span className="text-primary">soluciones digitales</span>
            <br /> para hacer crecer tu negocio
          </motion.h1>

          {/* Efecto typing */}
          <TypeAnimation
            sequence={[
              "Aplicaciones Web Profesionales",
              2000,
              "Apps Móviles Personalizadas",
              2000,
              "Automatización y ERP con Odoo",
              2000,
              "Integraciones con Laravel & Python",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl md:text-2xl text-primary font-semibold"
            repeat={Infinity}
          />

          {/* Descripción */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transformo ideas en experiencias digitales impactantes. Desarrollo{" "}
            <strong>plataformas escalables</strong>,{" "}
            <strong>apps modernas</strong> y soluciones que generan{" "}
            <span className="text-primary font-semibold">
              resultados reales
            </span>
            .
          </motion.p>

          {/* CTA + Redes */}
          <motion.div
            className="flex flex-col gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg 
                         hover:bg-blue-700 transition font-semibold text-lg 
                         shadow-md max-w-[250px] text-center"
            >
              ¡Trabajemos Juntos!
            </a>

            <div className="flex gap-6 text-2xl mt-4">
              <a
                href="https://www.linkedin.com/in/freddy-mh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-white"
                title="LinkedIn"
                aria-label="Perfil de Freddy en LinkedIn"
              >
                <BsLinkedin />
              </a>

              <a
                href="https://github.com/fred0727"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-white"
                title="GitHub"
                aria-label="Perfil de Freddy en GitHub"
              >
                <BsGithub />
              </a>

              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-white"
                title="WhatsApp"
                aria-label="Escríbeme por WhatsApp"
              >
                <BsWhatsapp />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
