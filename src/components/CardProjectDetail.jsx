import React from "react";
import { projects } from "../utlis/projectsdb";

const CardProjectDetail = ({ project }) => {
  const imagescode = {
    html: "/logos/html5.png",
    bootstrap: "/logos/bootstrap.png",
    css3: "/logos/css3.png",
    git: "/logos/git.png",
    github: "/logos/github.png",
    js: "/logos/js.png",
    mysql: "/logos/mysql.png",
    php: "/logos/php.png",
    reactjs: "/logos/reactjs.png",
    tailwind: "/logos/tailwind.png",
    vite: "/logos/vite.svg",
  };

  console.log(projects[project]);

  return (
    <article className="flex flex-col xxl:justify-between xxl:px-6 xlg:flex-row gap-4 xlg:gap-6 justify-center p-4 py-6 shadow-lg rounded-md bg-white border-[1px] border-gray-400/30 dark:bg-[#1e1a4f] dark:shadow-white dark:shadow-none dark:border-none xlg:h-[225px] xxl:h-auto">
      <div className="overflow-hidden rounded-md flex justify-center items-center w-full h-[150px] xxs:h-[200px] xlg:max-w-[175px] xlg:h-[150px] xxl:h-[250px] xxl:max-w-[250px]">
        <img
          src={projects[project].img}
          alt=""
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500 opacity-50 hover:opacity-100"
        />
      </div>
      <div className="flex flex-col gap-2 justify-center xxl:justify-between py-2">
        <div className="flex flex-col xxl:gap-3">
          <h3 className="text-md font-semibold text-[#1e1a4f] dark:text-white xmd:text-xl xxl:text-2xl">
            {projects[project].title}
          </h3>
          <p className="text-sm dark:text-white xmd:text-base xxl:text-lg">
            {projects[project].content}
          </p>
        </div>
        <div className="flex gap-2 py-2">
          {projects[project].codes.map((img) => (
            <img src={imagescode[img]} alt="" className="w-[24px] xxs:w-[32px] opacity-60 hover:opacity-100 transition-opacity duration-200"/>
          ))}
        </div>
        <div className="flex gap-2 justify-end items-center xxl:gap-3">
          <a href={projects[project].github} target="_blank">
            <img
              src="/logos/github.png"
              alt=""
              className="w-[32px] xxl:w-[50px]"
            />
          </a>
          <a
            href={projects[project].url}
            target="_blank"
            className="text-black cursor-pointer p-2 border rounded-md bg-white hover:bg-gray-100 text-sm w-[85px] text-center transition-all duration-300 dark:hover:bg-slate-950 dark:border-none dark:hover:text-white xmd:text-lg xmd:w-[110px] xxl:text-xl xxl:py-3"
          >
            Ver pagina
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProjectDetail;
