import {
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandBootstrap,
} from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { BiLogoReact, BiLogoGit } from "react-icons/bi";
import { FaPhp, FaNodeJs, FaLaravel, FaPython } from "react-icons/fa";
import { SiExpress, SiMysql, SiPostgresql, SiFlutter } from "react-icons/si";
import { BiCube } from "react-icons/bi"; // Odoo

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
  { Icon: BiCube, label: "Odoo" },
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: SiMysql, label: "MySQL" },
  { Icon: SiPostgresql, label: "PostgreSQL" },
  { Icon: BiLogoGit, label: "Git" },
];

const TechStackGrid = () => (
  <ul
    className="grid grid-cols-2 xxm:grid-cols-3 xmd:grid-cols-4 xlg:grid-cols-5 xxl:grid-cols-6
               gap-6 xmd:gap-8 justify-center items-start font-body"
  >
    {techs.map(({ Icon, label }) => (
      <li
        key={label}
        className="group flex flex-col items-center text-center cursor-default"
      >
        <Icon className="text-4xl xmd:text-5xl text-primary group-hover:scale-110 transition-transform" />
        <span className="mt-2 text-sm xmd:text-base text-gray-700 dark:text-gray-300">
          {label}
        </span>
      </li>
    ))}
  </ul>
);

export default TechStackGrid;
