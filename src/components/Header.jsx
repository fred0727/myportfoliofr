import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { PiDevicesFill } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isDarkShow, setisDarkShow] = useState(false);

  const handleChangeTheme = () => {
    setisDarkShow(!isDarkShow);
  };

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  useEffect(() => {
    if (isDarkShow) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkShow]);

  return (
    <div className="w-full flex justify-between items-center p-4 relative dark:bg-slate-950">
      <Link to="/">
        <PiDevicesFill className="text-4xl text-[#5be9b9] xxs:text-5xl dark:text-white" />
      </Link>
      <span onClick={handleShowMenu}>
        {isShowMenu ? (
          <AiFillCloseCircle className="text-2xl text-[#1e1a4f] dark:text-white cursor-pointer" />
        ) : (
          <FcMenu className="text-2xl text-[#1e1a4f] cursor-pointer xxs:text-4xl dark:text-white" />
        )}
      </span>
      <div
        className={`absolute dark:bg-slate-950 dark:shadow-md dark:text-white dark:border-b-[1px] dark:border-white/20 flex flex-col justify-end items-end w-full gap-2 p-4 top-[68px] right-0 bg-white shadow-md ${
          isShowMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity-0 duration-500`}
      >
        <ul className="flex flex-col gap-2 w-full py-2">
          <Link to="/">
            <li className="w-full text-center cursor-pointer xxs:text-xl">Inicio</li>
          </Link>
          <Link to="/projects">
            <li className="w-full text-center cursor-pointer xxs:text-xl">Projects</li>
          </Link>
          <Link to="/contact">
            <li className="w-full text-center cursor-pointer xxs:text-xl">Contacto</li>
          </Link>
          <li className="w-full text-center flex justify-center gap-2 items-center cursor-pointer xxs:text-xl">
            {isDarkShow ? (
              <BsSunFill onClick={handleChangeTheme} />
            ) : (
              <FaMoon onClick={handleChangeTheme} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
