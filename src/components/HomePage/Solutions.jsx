import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShoppingCart,
  FaCogs,
  FaProjectDiagram,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "Sitios Web & Apps Responsivas",
    desc: "Diseño y desarrollo de sitios web y aplicaciones móviles optimizadas para cualquier dispositivo.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Tiendas Online (E-commerce)",
    desc: "Ventas online con integración de pagos locales, envíos y soluciones adaptadas al modelo de tu negocio.",
  },
  {
    icon: <FaCogs />,
    title: "Desarrollo de Sistemas a Medida",
    desc: "Plataformas web personalizadas y soluciones empresariales diseñadas para escalar tu negocio.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Automatización con Odoo",
    desc: "Ventas, facturación electrónica, inventarios y módulos hechos a la medida para tu empresa.",
  },
  {
    icon: <FaSearch />,
    title: "SEO y Optimización",
    desc: "Mejora tu posicionamiento en Google y aumenta conversiones con sitios rápidos y seguros.",
  },
];

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="bg-white dark:bg-slate-950 py-20 px-6 lg:px-16 text-gray-800 dark:text-gray-100 xlg:pt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.h2
          className="text-3xl xmd:text-4xl xlg:text-5xl font-heading font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soluciones <span className="text-primary">Digitales</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-center max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Ayudo a negocios y emprendedores a{" "}
          <span className="text-primary font-semibold">
            digitalizar y escalar sus operaciones
          </span>{" "}
          con soluciones modernas y rentables.
        </motion.p>

        {/* Contenedor con Flex */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
              style={{
                flex: "1 1 300px", // base 300px y flexible
                maxWidth: "350px", // límite máximo
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icono */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary text-3xl mb-6">
                {service.icon}
              </div>
              {/* Título */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              {/* Descripción */}
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA WhatsApp */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* <a
            href="https://wa.me/51924471461?text=Hola%20Freddy,%20quiero%20más%20información%20sobre%20tus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-xl"
          >
            Hablemos por WhatsApp
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
