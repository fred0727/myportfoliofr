import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoPhp,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { projects } from "../utlis/projectsdb";
import { BsGithub, BsBootstrapFill, BsGit } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { SiVite } from "react-icons/si";

const CardProjectDetail = ({ project }) => {
  const imagescode = {
    html: <BiLogoHtml5 className="text-black dark:text-emerald-300 text-4xl" />,
    bootstrap: (
      <BsBootstrapFill className="text-black dark:text-emerald-300 text-4xl" />
    ),
    css3: <BiLogoCss3 className="text-black dark:text-emerald-300 text-4xl" />,
    git: <BsGit className="text-black dark:text-emerald-300 text-4xl" />,
    github: <BsGithub className="text-black dark:text-emerald-300 text-4xl" />,
    js: (
      <BiLogoJavascript className="text-black dark:text-emerald-300 text-4xl" />
    ),
    mysql: <DiMysql className="text-black dark:text-emerald-300 text-4xl" />,
    php: <BiLogoPhp className="text-black dark:text-emerald-300 text-4xl" />,
    reactjs: (
      <BiLogoReact className="text-black dark:text-emerald-300 text-4xl" />
    ),
    tailwind: (
      <BiLogoTailwindCss className="text-black dark:text-emerald-300 text-4xl" />
    ),
    vite: <SiVite className="text-black dark:text-emerald-300 text-4xl" />,
  };

  return (
    <article className="flex flex-col xlg:justify-between xlg:flex-row gap-4 xlg:gap-8 justify-center shadow-lg rounded-md bg-white border-[1px] border-gray-400/30 dark:bg-slate-950 dark:shadow-white dark:shadow-none dark:border-none xlg:h-[250px] xxl:h-[275px] hover:scale-105 transition-all duration-500">
      <div className="overflow-hidden rounded-t-md xlg:rounded-none xlg:rounded-b-md xlg:rounded-r-none xlg:rounded-l-md flex justify-center items-center w-full h-[150px] xxs:h-[200px] xlg:w-[300px] xlg:h-full xxl:h-full xxl:w-[275px]">
        <img
          src={projects[project].img}
          alt=""
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center xxl:justify-between pb-6 py-2 px-4 xlg:w-[300px] xxl:w-[325px] xlg:py-12 xxl:py-4 xxl:gap-2 xxl:pr-6 xlg:ps-0">
        <div className="flex flex-col xxl:gap-3">
          <h3 className="text-md font-medium text-[#1e1a4f] dark:text-white xmd:text-xl xxl:text-2xl">
            {projects[project].title}
          </h3>
          <p className="text-sm dark:text-white xmd:text-base xxl:text-lg">
            {projects[project].content}
          </p>
        </div>
        <div className="flex gap-2 py-2">
          {projects[project].codes.map((img) => (
            <span>{imagescode[img]}</span>
          ))}
        </div>
        <div className="flex gap-3 justify-end items-center xxl:gap-3">
          <a href={projects[project].github} target="_blank">
            <BsGithub className="text-4xl xxl:text-4xl dark:text-white" />
          </a>
          <a
            href={projects[project].url}
            target="_blank"
            className="text-black cursor-pointer p-2 border rounded-md bg-white hover:bg-gray-100 text-sm w-[85px] text-center transition-all duration-300 dark:hover:bg-slate-950 dark:border-none dark:hover:text-white xmd:text-lg xmd:w-[110px] xxl:text-xl xxl:py-2"
          >
            Ver pagina
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProjectDetail;
