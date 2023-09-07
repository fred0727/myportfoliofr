import { Link } from "react-router-dom";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { NavigatePagesContext } from "../Context";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isDarkShow, setisDarkShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const theme = JSON.parse(localStorage.getItem("Theme")) || false;

  const context = useContext(NavigatePagesContext);

  const handleChangeTheme = () => {
    setisDarkShow(!isDarkShow);
    localStorage.setItem("Theme", Boolean(!isDarkShow));
  };

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };

  const navigatePageHome = () => {
    context.setIsPageProject(false);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

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
    <div
      className={`${
        isScroll
          ? "bg-white shadow-md dark:bg-slate-950"
          : "bg-gradient-to-r from-white to-white dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950"
      }  fixed w-full flex justify-between items-center p-3 xmd:px-10 xlg:px-20 xxl:-mb-1 xxl:px-32 mx-auto z-50`}
    >
      <Link to="/" title="Inicio">
        <AiFillCode
          className="text-4xl text-black  xxs:text-5xl dark:text-emerald-300 xmd:text-5xl xlg:text-6xl"
          onClick={navigatePageHome}
        />
      </Link>
      <span onClick={handleShowMenu} className="xlg:hidden">
        {isShowMenu ? (
          <AiFillCloseCircle className="text-2xl text-indigo-950 dark:text-white cursor-pointer xmd:text-4xl xlg:text-6xl" />
        ) : (
          <AiOutlineMenu className="text-2xl text-indigo-950 cursor-pointer xxs:text-4xl dark:text-white xmd:text-4xl xlg:text-6xl" />
        )}
      </span>
      <nav className="hidden xlg:flex xlg:w-[475px] xxl:w-[600px] justify-end">
        {context.isPageProject ? (
          <ul className="flex w-full items-center gap-6 xxl:gap-10 dark:text-white">
            <li className="w-full text-center flex justify-end gap-2 items-center cursor-pointer xxs:text-2xl xmd:text-3xl xlg:text-4xl">
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
        ) : (
          <ul className="flex w-full items-center gap-6 xxl:gap-10 dark:text-white">
            <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl xxl:text-3xl">
              <a href="#home">Inicio</a>
            </li>
            <li className="text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl xxl:text-3xl w-full">
              <a href="#aboutme">Sobre mi</a>
            </li>
            <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl xxl:text-3xl">
              <a href="#projects">Proyectos</a>
            </li>
            <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl xxl:text-3xl">
              <a href="#contact">Contacto</a>
            </li>
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
        )}
      </nav>
      <div
        className={`absolute z-50 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950 dark:shadow-md dark:text-white dark:border-b-[1px] dark:border-white/20 flex flex-col justify-end items-end w-full gap-2 p-4 top-[60px] xmd:top-[72px] xxl:top-[104px] right-0 bg-white shadow-md ${
          isShowMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-opacity-0 duration-500`}
      >
        <ul className="flex flex-col gap-2 w-full py-2">
          <li className="w-full text-center cursor-pointer xxs:text-xl xmd:text-2xl">
            <a href="#home">Inicio</a>
          </li>
          <li className="w-full text-center cursor-pointer xxs:text-lg xmd:text-xl xlg:text-2xl">
            <a href="#aboutme">Sobre mi</a>
          </li>
          <li className="w-full text-center cursor-pointer xxs:text-xl xmd:text-2xl">
            <a href="#projects">Proyectos</a>
          </li>
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
