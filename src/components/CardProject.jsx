import React from "react";
import { projects } from "../utlis/projectsdb";

const CardProject = ({ project }) => {

  return (
    <article className="flex flex-col xlg:flex-row gap-4 xlg:gap-6 justify-center shadow-lg rounded-md bg-white border-[1px] border-gray-400/30 dark:bg-[#1e1a4f] dark:shadow-white dark:shadow-none dark:border-none xlg:h-[225px] hover:scale-105 transition-all duration-500">
      <div className="overflow-hidden rounded-t-md xlg:rounded-none xlg:rounded-b-md xlg:rounded-r-none xlg:rounded-l-md flex justify-center items-center w-full h-[150px] xxs:h-[200px] xlg:w-[275px] xlg:h-full xlg:shadow-md">
        <img
          src={projects[project].img}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 justify-center p-4 xlg:px-3 xlg:py-5 xlg:max-w-[175px] xlg:justify-between">
        <h3 className="text-md font-semibold text-[#1e1a4f] dark:text-white xxs:text-xl xmd:text-2xl xlg:text-2xl">
        {projects[project].title}
        </h3>
        <p className="text-sm dark:text-white xxs:text-base xmd:text-lg">{projects[project].content}</p>
        <a
          href={projects[project].url}
          target="_blank"
          className="text-black cursor-pointer p-2 border rounded-md bg-white hover:bg-gray-100 text-sm w-[85px] text-center transition-all duration-300 dark:hover:bg-slate-950 dark:border-none dark:hover:text-white xxs:text-base xmd:text-lg xxs:w-[95px] xmd:w-[110px]"
        >
          Ver pagina
        </a>
      </div>
    </article>
  );
};

export default CardProject;
