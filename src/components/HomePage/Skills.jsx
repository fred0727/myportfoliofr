import { AiOutlineHtml5 } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
  TbBrandTailwind,
} from "react-icons/tb";
import { BiLogoReact, BiLogoGit } from "react-icons/bi";
import { FaPhp, FaNodeJs, FaLaravel, FaPython } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql, SiFlutter } from "react-icons/si";
import { BiCube } from "react-icons/bi"; // Para Odoo

const Skills = () => {
  const techs = [
    { Icon: AiOutlineHtml5, label: "HTML5" },
    { Icon: TbBrandCss3, label: "CSS3" },
    { Icon: TbBrandJavascript, label: "JavaScript" },
    { Icon: BiLogoReact, label: "React" },
    { Icon: TbBrandTailwind, label: "Tailwind" },
    { Icon: TbBrandBootstrap, label: "Bootstrap" },
    { Icon: FaPhp, label: "PHP" },
    { Icon: FaLaravel, label: "Laravel" },
    { Icon: FaPython, label: "Python" },
    { Icon: FaNodeJs, label: "Node.js" },
    { Icon: SiExpress, label: "Express" },
    { Icon: BiCube, label: "Odoo" }, // reemplazo
    { Icon: SiFlutter, label: "Flutter" },
    { Icon: SiMysql, label: "MySQL" },
    { Icon: SiPostgresql, label: "PostgreSQL" },
    { Icon: BiLogoGit, label: "Git" },
  ];

  return (
    <ul className="grid gap-6 xxm:gap-6 justify-center grid-cols-[repeat(auto-fill,_100px)] xxm:grid-cols-[repeat(auto-fill,_120px)] xxs:grid-cols-[repeat(auto-fill,150px)] xxl:grid-cols-[repeat(auto-fill,175px)] xmd:gap-8 xmd:justify-between xmd:px-16">
      {techs.map(({ Icon, label }, index) => (
        <li key={index} className="flex gap-2 w-full items-center">
          <Icon className="text-4xl xxm:text-5xl xmd:text-6xl xxl:text-8xl" />
          <div className="flex flex-col w-full xxm:text-xl xlg:text-2xl xxl:text-3xl">
            <span>{label}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Skills;
