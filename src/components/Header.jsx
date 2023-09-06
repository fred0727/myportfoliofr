import { Link } from "react-router-dom";
import { PiDevicesFill } from "react-icons/pi";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import {
  BsToggleOn,
  BsToggleOff,
  BsSun,
  BsMoonFill,
  BsSunFill,
} from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { useEffect, useState } from "react";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isDarkShow, setisDarkShow] = useState(true);

  const theme = JSON.parse(localStorage.getItem("Theme")) || true;

  const handleChangeTheme = () => {
    setisDarkShow(!isDarkShow);
    localStorage.setItem("Theme", Boolean(!isDarkShow));
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

  useEffect(() => {
    if (theme) {
      setisDarkShow(theme);
    }
  }, []);

  return (
    <div className="fixed w-full flex justify-between items-center bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950 p-3 xmd:px-10 xlg:px-20 xxl:-mb-1 xxl:px-32 mx-auto z-50 ">
      <Link to="/" title="Inicio">
        <AiFillCode className="text-4xl text-black  xxs:text-5xl dark:text-emerald-300 xmd:text-5xl xlg:text-6xl" />
      </Link>
      <span onClick={handleShowMenu} className="xlg:hidden">
        {isShowMenu ? (
          <AiFillCloseCircle className="text-2xl text-indigo-950 dark:text-white cursor-pointer xmd:text-4xl xlg:text-6xl" />
        ) : (
          <AiOutlineMenu className="text-2xl text-indigo-950 cursor-pointer xxs:text-4xl dark:text-white xmd:text-4xl xlg:text-6xl" />
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
              <BsSunFill
                onClick={handleChangeTheme}
                className="text-white transition-all duration-300"
              />
            ) : (
              <BsSunFill
                onClick={handleChangeTheme}
                className="text-black transition-all duration-300"
              />
            )}
          </li>
        </ul>
      </nav>
      <div
        className={`absolute z-50 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950 dark:shadow-md dark:text-white dark:border-b-[1px] dark:border-white/20 flex flex-col justify-end items-end w-full gap-2 p-4 top-[60px] xmd:top-[92px] xxl:top-[104px] right-0 bg-white shadow-md ${
          isShowMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity-0 duration-500`}
      >
        <ul className="flex flex-col gap-2 w-full py-2">
          <Link to="/">
            <li className="w-full text-center cursor-pointer xxs:text-xl xmd:text-2xl">
              Inicio
            </li>
          </Link>
          <Link to="/">
            <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl">
              Sobre Mi
            </li>
          </Link>
          <Link to="/projects">
            <li className="w-full text-center cursor-pointer xxs:text-xl xmd:text-2xl">
              Proyectos
            </li>
          </Link>
          <li className="w-full text-center flex justify-center gap-2 items-center cursor-pointer text-xl xxs:text-2xl xmd:text-3xl">
            {isDarkShow ? (
              <BsSunFill onClick={handleChangeTheme} />
            ) : (
              <BsSunFill onClick={handleChangeTheme} />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
