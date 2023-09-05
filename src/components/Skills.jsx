import { AiOutlineHtml5 } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandTailwind,
} from "react-icons/tb";
import { BiLogoReact, BiLogoGit } from "react-icons/bi";
import { FaPhp, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql } from "react-icons/si";

const Skills = () => {
  return (
    <ul className="grid gap-6 xxm:gap-6  justify-center grid-cols-[repeat(auto-fill,_100px)] xxm:grid-cols-[repeat(auto-fill,_120px)] xxs:grid-cols-[repeat(auto-fill,150px)] xmd:gap-8 xmd:justify-between xmd:px-16">
      <li className="flex gap-2 w-full items-center">
        <AiOutlineHtml5 className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Html5</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandCss3 className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Css3</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandJavascript className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Javascript</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <BiLogoReact className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>React JS</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <FaNodeJs className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Node JS</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <SiExpress className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Express JS</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <BiLogoGit className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Git</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandTailwind className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Tailwind CSS</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandBootstrap className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Bootstrap</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <FaPhp className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>PHP</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <SiMysql className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Mysql</span>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <SiPostgresql className="text-4xl xxm:text-5xl xmd:text-6xl" />
        <div className="flex flex-col w-full xxm:text-xl">
          <span>Postgres SQL</span>
        </div>
      </li>
    </ul>
  );
};

export default Skills;
