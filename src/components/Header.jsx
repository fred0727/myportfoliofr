import { Link } from "react-router-dom";
import { PiDevicesFill } from "react-icons/pi";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
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
    <div className="w-full flex justify-between items-center dark:bg-slate-950 relative p-4 xmd:px-10 xlg:px-20">
      <Link to="/">
        <PiDevicesFill className="text-4xl text-[#5be9b9] xxs:text-5xl dark:text-white xmd:text-6xl xlg:text-7xl" />
      </Link>
      <span onClick={handleShowMenu} className="xlg:hidden">
        {isShowMenu ? (
          <AiFillCloseCircle className="text-2xl text-[#1e1a4f] dark:text-white cursor-pointer xmd:text-4xl xlg:text-6xl" />
        ) : (
          <AiOutlineMenu className="text-2xl text-[#1e1a4f] cursor-pointer xxs:text-4xl dark:text-white xmd:text-4xl xlg:text-6xl" />
        )}
      </span>
      <nav className="hidden xlg:flex">
        <ul className="flex items-center gap-6 xxl:gap-10 dark:text-white">
          <Link to="/">
            <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl">
              Inicio
            </li>
          </Link>
          <Link to="/projects">
            <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl">
              Proyectos
            </li>
          </Link>
          <li className="w-full text-center flex justify-center gap-2 items-center cursor-pointer xxs:text-2xl xmd:text-3xl xlg:text-4xl">
            {isDarkShow ? (
              <BsToggleOn onClick={handleChangeTheme} />
            ) : (
              <BsToggleOff onClick={handleChangeTheme} />
            )}
          </li>
        </ul>
      </nav>
      <div
        className={`absolute z-50 dark:bg-slate-950 dark:shadow-md dark:text-white dark:border-b-[1px] dark:border-white/20 flex flex-col justify-end items-end w-full gap-2 p-4 top-[68px] xmd:top-[92px] right-0 bg-white shadow-md ${
          isShowMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity-0 duration-500`}
      >
        <ul className="flex flex-col gap-2 w-full py-2">
          <Link to="/">
            <li className="w-full text-center cursor-pointer xxs:text-xl xmd:text-2xl">
              Inicio
            </li>
          </Link>
          <Link to="/projects">
            <li className="w-full text-center cursor-pointer xxs:text-xl xmd:text-2xl">
              Proyectos
            </li>
          </Link>
          <li className="w-full text-center flex justify-center gap-2 items-center cursor-pointer xxs:text-2xl xmd:text-3xl">
            {isDarkShow ? (
              <BsToggleOn onClick={handleChangeTheme} />
            ) : (
              <BsToggleOff onClick={handleChangeTheme} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
