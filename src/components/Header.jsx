import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // Leer tema guardado en localStorage
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("Theme"));
    if (savedTheme) setIsDark(savedTheme);
  }, []);

  // Aplicar modo oscuro y guardar en localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("Theme", JSON.stringify(isDark));
  }, [isDark]);

  // Detectar scroll para aplicar sombra y fondo fijo
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Soluciones", href: "#solutions" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        isScroll
          ? "bg-lightBg shadow-md dark:bg-darkBg"
          : "bg-lightBg dark:bg-darkBg"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 xmd:px-12 xlg:px-16 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-heading font-semibold text-textDark dark:text-textLight outline-none"
        >
          Freddy<span className="text-primary">Dev</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden xmd:flex gap-8 text-textDark dark:text-gray-200 font-medium font-body">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary dark:hover:text-secondary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA + Dark Mode */}
        <div className="hidden xmd:flex items-center gap-6">
          <a
            href="#contact"
            className="bg-gradient-to-r from-primary to-indigo-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition font-medium font-body"
          >
            Contáctame
          </a>
          <BsSunFill
            onClick={() => setIsDark(!isDark)}
            className="cursor-pointer text-xl hover:text-primary dark:hover:text-secondary transition"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xmd:hidden text-2xl"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          title={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xmd:hidden fixed top-[64px] left-0 w-full bg-lightBg dark:bg-darkBg shadow-md transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6 text-textDark dark:text-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium hover:text-primary dark:hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-primary to-indigo-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition font-medium text-center"
          >
            Contáctame
          </a>
          <div className="flex justify-center pt-4">
            <BsSunFill
              onClick={() => setIsDark(!isDark)}
              className="cursor-pointer text-xl hover:text-primary dark:hover:text-secondary transition"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
