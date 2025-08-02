// src/components/HomePage/Projects.jsx
import { motion } from "framer-motion";
import { TfiWorld } from "react-icons/tfi";
import CardProject from "./CardProject";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectList = [
    "fraremsac",
    "petblog",
    "academlostore",
    "moviessearch",
  ];

  return (
    <section
      id="projects"
      className="w-full bg-white dark:bg-slate-900 py-16 px-6 xlg:px-16 xlg:py-24"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Título */}
        <motion.h2
          className="text-3xl xmd:text-4xl xlg:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Lo que puedo construir<span className="text-primary"> para ti</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-body">
          Estos proyectos muestran mi experiencia construyendo interfaces
          modernas, APIs y soluciones web funcionales. Son ejemplos reales que
          demuestran lo que puedo crear para ti o tu empresa.
        </motion.p>

        {/* Contenedor Flex */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CardProject project={project} />
            </motion.div>
          ))}
        </div>

        {/* CTA Ver todos */}
        <div className="mt-12 flex justify-center items-center w-full">
          <Link to="/projects">
            <button className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition duration-300">
              <TfiWorld /> Ver todos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
