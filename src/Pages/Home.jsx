import CardProject from "../components/CardProject";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiMailSend, BiSolidSend } from "react-icons/bi";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import "./Home.css";

const Home = () => {
  const [isPopUp, setIsPopUp] = useState(false);

  // Iniciando servicio de EmailJS
  emailjs.init("ujmGZzSK1SqYSUYPp");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "default_service";
    const templateID = "template_qn9ez4e";

    setIsPopUp(true);

    emailjs
      .sendForm(serviceID, templateID, e.target)
      .then(() => {
        document.getElementById("messagesend").innerHTML = "Mensaje Enviado";
        setTimeout(() => {
          setIsPopUp(false);
          e.target.reset();
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950">
      <section className="flex flex-col gap-4 pt-10 justify-center items-center px-4 dark:text-white xlg:pt-5 relative">
        <h1 className="text-2xl font-bold xxs:text-3xl xmd:text-4xl xlg:text-5xl text-typing">
          Hola, Soy Freddy
        </h1>
        <p className="text-center text-sm xxs:text-lg xmd:text-xl xlg:text-2xl xlg:font-light">
          Desarrollador Web Front-End <br />
          <span>Diseño y codifico páginas web únicas.</span>
        </p>
        <div className="flex flex-col pt-8 items-center gap-28 xxs:gap-36 xmd:gap-16 xlg:gap-10 xlg:pt-0">
          <div className="relative bg-gradient-to-t from-indigo-900 to-indigo-950  dark:bg-gradient-to-b dark:from-emerald-300 dark:to-emerald-300 rounded-full mt-10 dark:bg-white w-[175px] h-[175px] xxs:w-[200px] xxs:h-[200px] xmd:w-[225px] xmd:h-[225px] xlg:w-[250px] xlg:h-[250px]">
            <img
              src="/images/avatar.png"
              alt=""
              className="absolute  object-cover rounded-full w-[225px] h-[225px] -top-[50px] xxs:w-[250px] xxs:h-[250px] xmd:w-[275px] xmd:h-[275px] xlg:w-[300px] xlg:h-[300px]"
            />
          </div>
          <div className="xmd:w-[500px] xlg:w-[600px]  xxl:w-[775px]">
            <img src="/images/dev.svg" alt="" />
          </div>
        </div>
        <div className="absolute w-[250px] bottom-40 xxm:bottom-44 xxs:bottom-52 xmd:bottom-0 xmd:top-64 xlg:top-56 xmd:left-5 xlg:left-16 xxl:left-60 flex justify-center xmd:justify-start">
          <div className="flex flex-col xmd:gap-8 xmd:w-[100px]">
            <a
              href="#contacto"
              className="flex justify-center items-center w-[110px] xxs:w-[120px] xlg:w-[56px] xlg:h-[56px] xxs:text-lg gap-1 bg-emerald-300 rounded-md py-2 text-slate-950 cursor-pointer shadow-md mx-auto xmd:w-[48px] xmd:h-[48px] xmd:rounded-full hover:scale-105 transition-all duration-300"
              alt="Conctactame"
              title="Contactame"
            >
              <span className="xmd:hidden">Contacto</span>{" "}
              <BiSolidSend className="text-lg xxs:text-xl text-slate-950" />
            </a>
            <a
              className="hidden xmd:flex justify-center items-center w-[110px] xxs:w-[120px] xlg:w-[56px] xlg:h-[56px] xxs:text-lg gap-1 bg-emerald-300 rounded-md py-2 text-slate-950 cursor-pointer shadow-md mx-auto xmd:w-[48px] xmd:h-[48px] xmd:rounded-full hover:scale-105 transition-all duration-300"
              href="https://www.linkedin.com/in/freddy-mh/"
              target="_blank"
              alt="Linkedin"
              title="Linkedin"
            >
              <BsLinkedin className="text-lg xxs:text-xl text-slate-950 " />
            </a>
            <a
              className="hidden xmd:flex justify-center items-center w-[110px] xxs:w-[120px] xlg:w-[56px] xlg:h-[56px] xxs:text-lg gap-1 bg-emerald-300 rounded-md py-2 text-slate-950 cursor-pointer shadow-md mx-auto xmd:w-[48px] xmd:h-[48px] xmd:rounded-full hover:scale-105 transition-all duration-300"
              href="https://api.whatsapp.com/send?phone=51924471461&text=Hola!%20Quiero%20contactarme%20contigo!"
              target="_blank"
              alt="Whastapp"
              title="Whastapp"
            >
              <BsWhatsapp className="text-lg xxs:text-xl text-slate-950 " />
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col text-white p-6 py-8 xlg:py-20 bg-indigo-950 xmd:px-6 xlg:px-32 xxl:px-80 xxl:py-24">
        <h2 className="font-bold text-center py-3 text-2xl xxs:text-2xl xmd:text-3xl xlg:text-4xl xxl:text-5xl xxs:py-4">
          Sobre mi
        </h2>
        <p className="font-light dark:font-medium text-justify px-4 text-sm pb-2 xxs:text-lg xmd:px-16 xxs:pb-4 xlg:text-xl xxl:py-6">
          Me apasiona el mundo del desarrollo, he colaborado y creado proyectos
          con diseños adaptativos e integrando funcionalidades que mejore la
          experiencia del usuario. Soy un entusiasta de las nuevas tecnologías,
          confió en mis capacidades y siempre trabajo para mejorar mis
          habilidades y conocimientos.
        </p>
        <section className="flex py-10 gap-3 flex-col justify-center xlg:gap-6">
          <h3 className="text-xl text-center xmd:text-2xl xlg:text-3xl">
            Habilidades Tecnicas
          </h3>
          <div className="px-2 py-6">
            <Skills />
          </div>
        </section>
      </section>
      <section className="w-full bg-white dark:bg-transparent xlg:py-16">
        <div className="flex flex-col p-4 py-12 gap-2">
          <h2 className="font- text-2xl text-center text-black xxs:text-3xl dark:text-white font-semibold xmd:text-4xl xlg:mb-10 xlg:text-5xl">
            Proyectos Recientes
          </h2>
          <section className="w-full grid grid-cols-[repeat(auto-fill,_250px)] xxs:grid-cols-[repeat(auto-fill,325px)] xlg:grid-cols-[repeat(auto-fill,425px)] pt-6 gap-8 justify-center mx-auto max-w-[1024px] xlg:gap-12">
            <CardProject project="weatherapp" />
            <CardProject project="rickandmorty" />
            <CardProject project="pokedex" />
            <CardProject project="academlostore" />
          </section>
          <Link to="/projects" className="w-full flex justify-center pt-12">
            <button className="text-xl text-indigo-950 bg-white border-[1px] border-indigo-950 rounded-full px-4 py-1 flex justify-center items-center gap-2 hover:text-white hover:bg-indigo-950 dark:hover:bg-indigo-800 xxs:px-8 xxs:py-2 xxs:text-2xl">
              <TfiWorld /> Ver todos
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full py-10 xlg:py-20 xlg:px-10 bg-indigo-950">
        <div className="px-6 py-12 flex flex-col gap-5 xlg:gap-16 mx-auto justify-center items-center xxl:max-w-[1850px]">
          <h2 className="text-center font-bold text-2xl mb-6 text-white dark:text-white xxs:text-2xl xmd:text-3xl xlg:mb-10 xlg:text-5xl">
            Formación Profesional
          </h2>
          <section className="w-full px-4 gap-12 xmd:gap-20 xlg:gap-24 justify-center grid grid-cols-[repeat(auto-fill,240px)] xxm:grid-cols-[repeat(auto-fill,300px)] xlg:grid-cols-[repeat(auto-fill,350px)]">
            <article className="flex flex-col gap-4 text-white">
              <div className="w-full flex justify-between items-center xmd:h-[40px] xlg:h-[60px] border-b-[1px] pb-2 xlg:pb-8 border-gray-400/50">
                <div className="flex items-center gap-2">
                  <img src="/logos/academlo.png" alt="" className="w-[32px] xlg:w-[64px] grayscale-[0%]" />
                  <h2 className="text-xl xxs:text-2xl xlg:text-3xl">
                    Academlo
                  </h2>
                </div>
                <span className="text-xs font-extralight text-emerald-300 xxs:text-sm xlg:text-lg">Actualmente</span>
              </div>
              <p className="text-justify text-sm xxs:text-base xlg:text-lg">
                Escuela de Desarrollo Web Full Stack y Ciencias de Computación
              </p>
            </article>
            <article className="flex flex-col gap-4 text-white">
              <div className="w-full flex justify-between items-center xmd:h-[40px] xlg:h-[60px] border-b-[1px] pb-2 xlg:pb-8 border-gray-400/50">
                <div className="flex items-center gap-2">
                  <img src="/logos/platzi.png" alt="" className="w-[32px] xlg:w-[64px]" />
                  <h2 className="text-xl xxs:text-2xl xlg:text-3xl">
                    Platzi
                  </h2>
                </div>
                <span className="text-xs font-extralight text-emerald-300 xxs:text-sm xlg:text-lg">Actualmente</span>
              </div>
              <p className="text-justify text-sm xxs:text-base xlg:text-lg">
                Escuela de tecnologia y desarrollo. Cursos de Javascript, React, Mobile First, Front End Developer con Javascript y otros.
              </p>
            </article>
            <article className="flex flex-col gap-4 text-white">
              <div className="w-full flex justify-between items-center xmd:h-[40px] xlg:h-[60px] border-b-[1px] pb-2 xlg:pb-8 border-gray-400/50">
                <div className="flex items-center gap-2">
                  <img src="/logos/tecsup.png" alt="" className="w-[32px] xlg:w-[64px]" />
                  <h2 className="text-xl xxs:text-2xl xlg:text-3xl">
                    Tecsup
                  </h2>
                </div>
                <span className="text-xs font-extralight text-emerald-300 xxs:text-sm xlg:text-lg">2021 - 2021</span>
              </div>
              <p className="text-justify text-sm xxs:text-base xlg:text-lg">
                Curso de Desarrollo Web con HTML, Javascript, Bootstrap, CSS3.
              </p>
            </article>
            <article className="flex flex-col gap-4 text-white">
              <div className="w-full flex justify-between items-center xmd:h-[40px] xlg:h-[60px] border-b-[1px] pb-2 xlg:pb-8 border-gray-400/50">
                <div className="flex items-center gap-2">
                  <img src="/logos/unitek.png" alt="" className="w-[32px] xlg:w-[64px]" />
                  <h2 className="text-xl xxs:text-2xl xlg:text-3xl">
                    Unitek
                  </h2>
                </div>
                <span className="text-xs font-extralight text-emerald-300 xxs:text-sm xlg:text-lg">2012 - 2014</span>
              </div>
              <p className="text-justify text-sm xxs:text-base xlg:text-lg">
                Carrera Tecnica de Computación e Informatica
              </p>
            </article>
          </section>
        </div>
      </section>
      <section
        id="contacto"
        className="bg-white dark:bg-transparent dark:text-white xxl:flex xxl:p-10 xxl:px-10 xxl:flex-row-reverse xxl:w-[1440px] mx-auto"
      >
        <div className="flex flex-col justify-center items-center p-6 gap-4 xmd:w-[650px] mx-auto">
          <div className="flex justify-between items-center w-full gap-2 mt-5">
            <span className="border-[1px] border-gray-200 w-[30%] xmd:w-[35%]"></span>
            <div className="relative rounded-full bg-indigo-950 w-[100px] h-[100px] xmd:w-[125px] xmd:h-[125px]">
              <img
                src="/images/avatar.png"
                alt=""
                className="absolute w-[125px] h-[125px] -top-[25px] xmd:w-[150px] xmd:h-[150px] object-cover rounded-full"
              />
            </div>
            <span className="border-[1px] border-gray-200 w-[30%] xmd:w-[35%]"></span>
          </div>
          <h4 className="flex text-center font-bold text-xl xxs:text-3xl xmd:text-4xl">
            Contactame
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full py-4 gap-4"
          >
            <div>
              <label
                htmlFor="emailjs_name"
                className="flex gap-1 xxs:text-lg xmd:text-xl"
              >
                Nombres y Apellidos <span className="flex text-red-500">*</span>{" "}
              </label>
              <input
                type="text"
                name="emailjs_name"
                id="emailjs_name"
                className="border w-full h-10 outline-none rounded-md p-2 xxs:py-6 xmd:text-xl text-gray-600 xmd:px-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailjs_email"
                className="flex gap-1 xxs:text-lg xmd:text-xl"
              >
                Correo<span className="flex text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailjs_email"
                id="emailjs_email"
                className="border w-full h-10 outline-none rounded-md p-2 xxs:py-6 xmd:text-xl text-gray-600 xmd:px-3"
                required
              />
            </div>
            <div>
              <label
                htmlFor="emailjs_phone"
                className="xxs:text-lg xmd:text-xl"
              >
                Telefono
              </label>
              <input
                type="text"
                name="emailjs_phone"
                id="emailjs_phone"
                className="border w-full h-10 outline-none rounded-md p-2 xxs:py-6 xmd:text-xl text-gray-600 xmd:px-3"
              />
            </div>
            <div>
              <label
                htmlFor="emailjs_message"
                className="flex gap-1 xxs:text-lg xmd:text-xl"
              >
                Dejame tu mensaje <span className="flex text-red-500">*</span>
              </label>
              <textarea
                type="text"
                name="emailjs_message"
                id="emailjs_message"
                className="border w-full h-40 outline-none rounded-md p-2 xmd:text-xl text-gray-600 xmd:px-3"
                required
              />
            </div>
            <div className="w-full">
              <button className="bg-indigo-950 text-white w-full py-2 rounded-md xxs:py-4 xxs:text-xl ">
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
        <div className="hidden xxl:flex pr-20 pl-10">
          <div className="w-full px-10 py-10 flex flex-col items-start justify-end gap-2">
            <h2 className="text-4xl pb-6">Mis Redes</h2>
            <ul className="flex flex-col gap-4 pb-4">
              <li className="text-4xl text-gray-400 dark:text-white cursor-pointer hover:text-green-600 dark:hover:text-green-600">
                <a
                  href="https://api.whatsapp.com/send?phone=51924471461&text=Hola!%20Quiero%20contactarme%20contigo!"
                  target="_blank"
                  className="flex items-center gap-2"
                  alt="Whastapp"
                  title="Whastapp"
                >
                  <BsWhatsapp />
                  <span className="text-2xl text-black dark:text-white">
                    +51 924471461
                  </span>
                </a>
              </li>
              <li className="text-4xl text-gray-400 dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-slate-600">
                <a
                  href="mailto:freddymh07952023@gmail.com"
                  className="flex items-center gap-2"
                  alt="Correo"
                  title="Correo"
                >
                  <HiMail />
                  <span className="text-2xl text-black dark:text-white">
                    freddymh07952023@gmail.com
                  </span>
                </a>
              </li>
            </ul>
            <ul className="flex py-4 gap-6">
              <li className="text-4xl text-gray-400 dark:text-white cursor-pointer hover:text-blue-400 dark:hover:text-blue-400 xmd:text-4xl">
                <a href="https://twitter.com/freddy_mh95" target="_blank" alt="Twitter" title="Twitter">
                  <BsTwitter />
                </a>
              </li>
              <li className="text-4xl text-gray-400 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-600 xmd:text-4xl">
                <a
                  href="https://www.facebook.com/freddy.munoz.338658"
                  target="_blank" alt="Facebook" title="Facebook"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="text-4xl text-gray-400 dark:text-white cursor-pointer hover:text-blue-950 dark:hover:text-blue-950 xmd:text-4xl">
                <a
                  href="https://www.linkedin.com/in/freddy-mh/"
                  target="_blank" alt="Linkedin" title="Linkedin"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li className="text-4xl text-gray-400 dark:text-white cursor-pointer hover:text-black dark:hover:text-black xmd:text-4xl">
                <a href="https://github.com/fred0727" target="_blank" alt="Git Hub" title="Git Hub">
                  <BsGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-transparent dark:text-white xxl:hidden">
        <div className="px-6 py-2 xmd:w-[650px] mx-auto">
          <h2 className="font-medium text-center text-xl xxs:text-3xl mb-4">
            Mis Redes
          </h2>
          <ul className="flex flex-wrap py-4 justify-around">
            <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white xmd:text-4xl">
              <a
                href="https://twitter.com/freddy_mh95"
                target="_blank"
                title="Twitter"
                alt="Twitter"
              >
                <BsTwitter />
              </a>
            </li>
            <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white xmd:text-4xl">
              <a
                href="https://www.facebook.com/freddy.munoz.338658"
                target="_blank"
                title="Facebook"
                alt="Facebook"
              >
                <BsFacebook />
              </a>
            </li>
            <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white xmd:text-4xl">
              <a
                href="https://www.linkedin.com/in/freddy-mh/"
                target="_blank"
                title="Linkedin"
                alt="Linkedin"
              >
                <BsLinkedin />
              </a>
            </li>
            <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white xmd:text-4xl">
              <a
                href="https://github.com/fred0727"
                target="_blank"
                title="Git Hub"
                alt="Git Hub"
              >
                <BsGithub />
              </a>
            </li>
            <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white xmd:text-4xl">
              <a
                href="https://api.whatsapp.com/send?phone=51924471461&text=Hola!%20Quiero%20contactarme%20contigo!"
                target="_blank"
                title="Whastapp"
                alt="Whastapp"
              >
                <BsWhatsapp />
              </a>
            </li>
            <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white xmd:text-4xl">
              <a href="mailto:freddymh07952023@gmail.com" title="Enviar Correo" alt="Correo">
                <HiMail />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
      {isPopUp && (
        <div className="fixed min-h-screen bg-black/50 w-screen z-50 top-0 flex justify-center items-center">
          <section className="w-[300px] h-[250px] rounded-md bg-white p-5 flex flex-col justify-center items-center gap-3">
            <BiMailSend className="text-8xl text-[#1e1a4f]" />
            <div className="text-2xl" id="messagesend">
              Enviando Mensaje..
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
