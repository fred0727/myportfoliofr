import React from "react";
import { projects } from "../../utlis/projectsdb";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const CardProject = ({ project }) => {
  const { title, content, img, url, github, codes } = projects[project];

  return (
    <article className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-sm xmd:max-w-md border border-gray-200 dark:border-gray-700">
      {/* Imagen con efecto moderno */}
      <div className="relative group overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Botón en hover */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-500">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Ver Proyecto
          </a>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {content}
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {codes.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="flex gap-3 mt-auto">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-blue-700 transition"
            >
              <FiExternalLink /> Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              <FiGithub /> Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardProject;
