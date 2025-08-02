import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#f9fafb] dark:bg-slate-900 py-16 px-6 xlg:px-20 text-gray-800 dark:text-gray-100 xlg:pt-32"
    >
      <div className="max-w-7xl mx-auto flex flex-col xlg:flex-row gap-12 items-center xlg:items-start">
        {/* Texto (izquierda en desktop) */}
        <motion.div
          className="flex-1 order-2 xlg:order-1 flex flex-col gap-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl xmd:text-4xl font-heading font-bold">
            Sobre mí
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-body">
            Soy <strong>Freddy Muñoz</strong>, Desarrollador Web especializado
            en soluciones digitales: sitios web, tiendas online y automatización
            de procesos. Ayudo a negocios y emprendedores a crecer con
            plataformas modernas, seguras y rentables.
          </p>

          {/* Formación breve */}
          <div className="space-y-3">
            <h3 className="text-xl font-heading font-semibold">
              Experiencia & Formación
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm xmd:text-base">
              <li>Full Stack Development – Academlo</li>
              <li>Integraciones ERP y Odoo – Proyectos reales LATAM</li>
              <li>Aplicaciones Web & Mobile – React, Node.js, PHP y Python</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://wa.me/51924471461?text=Hola%20Freddy,%20me%20gustaría%20hablar%20sobre%20un%20proyecto%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              ¡Hablemos!
            </a>
            <a
              href="https://www.linkedin.com/in/freddy-mh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <BsLinkedin /> Ver LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Imagen (derecha en desktop) */}
        <motion.div
          className="flex justify-center items-center order-1 xlg:order-2 flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-56 h-80 xmd:w-80 xmd:h-[500px] rounded-xl overflow-hidden shadow-xl">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-30 blur-md"></div>
            {/* Foto */}
            <img
              src="/images/mifoto.jpg"
              alt="Freddy Muñoz"
              className="relative z-10 w-full h-full object-cover rounded-xl border-4 border-white dark:border-gray-900"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
