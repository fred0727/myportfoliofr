import { AiOutlineHtml5 } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandTailwind,
} from "react-icons/tb";
import { BiLogoReact, BiLogoGit } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const Skills = () => {
  return (
    <ul className="grid gap-6 justify-center grid-cols-[repeat(auto-fill,_250px)] xxs:grid-cols-[repeat(auto-fill,325px)] xmd:gap-8 xmd:justify-between">
      <li className="flex gap-2 w-full items-center">
        <AiOutlineHtml5 className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>Html5</span>
            <span>80%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[80%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandCss3 className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>Css3</span>
            <span>75%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[75%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandJavascript className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>Javascript</span>
            <span>85%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[85%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <BiLogoReact className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>React JS</span>
            <span>60%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[60%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandTailwind className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>Tailwind CSS</span>
            <span>70%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[70%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <TbBrandBootstrap className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>Bootstrap</span>
            <span>50%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[50%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <FaPhp className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>PHP</span>
            <span>70%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[70%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
      <li className="flex gap-2 w-full items-center">
        <SiMysql className="text-4xl xmd:text-6xl" />
        <div className="flex flex-col w-full">
          <div className="flex justify-between xmd:text-lg">
            <span>Mysql</span>
            <span>50%</span>
          </div>
          <div className="h-[8px] xmd:h-[12px] bg-white rounded-md">
            <div className="h-[8px] xmd:h-[12px] w-[50%] bg-emerald-300 rounded-md"></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Skills;
