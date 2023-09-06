import React from "react";
import { projects } from "../utlis/projectsdb";

const CardProject = ({ project }) => {
  return (
    <article className="flex flex-col xmd:flex-row xlg:flex-row gap-4 xlg:gap-6 justify-center shadow-lg rounded-md bg-white border-[1px] border-gray-400/30 dark:bg-slate-950 dark:shadow-black/40 dark:border-none xlg:h-[225px] hover:scale-105 transition-all duration-500">
      <div className="overflow-hidden rounded-t-md xlg:rounded-none xmd:rounded-b-md xmd:rounded-r-none xlg:rounded-l-md flex justify-center items-center w-full h-[200px] xxs:h-[225px] xmd:h-[225px] xmd:w-[250px] xlg:w-[175px] xxl:w-[275px] xlg:shadow-md">
        <img
          src={projects[project].img}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="flex flex-col gap-3 justify-center p-4 xlg:px-3 xlg:py-5 xlg:ps-0 xmd:w-[350px] xlg:w-[250px] xxl:w-[275px] xlg:justify-between">
        <h3 className="text-md font-semibold text-indigo-950 dark:text-white xxm:text-2xl xmd:text-3xl xlg:text-3xl">
          {projects[project].title}
        </h3>
        <p className="text-sm dark:text-white xxm:text-lg xmd:text-lg xlg:text-base">
          {projects[project].content}
        </p>
        <a
          href={projects[project].url}
          target="_blank"
          className="text-black cursor-pointer p-2 border rounded-md bg-white hover:bg-gray-100 text-base w-[85px] text-center transition-all duration-300 dark:hover:bg-indigo-950 dark:border-none dark:hover:text-white xxs:text-sm xmd:text-base xlg:text-lg  xxs:w-[95px] xmd:w-[110px]"
        >
          Ver pagina
        </a>
      </div>
    </article>
  );
};

export default CardProject;
