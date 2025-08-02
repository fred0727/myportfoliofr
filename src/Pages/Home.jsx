import CardProject from "../components/HomePage/CardProject";
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
import { useContext, useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Hero from "../components/HomePage/Hero";
import Solutions from "../components/HomePage/Solutions";
import AboutMe from "../components/HomePage/AboutMe";
import Projects from "../components/HomePage/Projects";
import "./Home.css";
import { NavigatePagesContext } from "../Context";

const Home = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const context = useContext(NavigatePagesContext);

  const redirectPageProject = () => {
    context.setIsPageProject(true);
  };

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
    <div>
      <div className="w-full dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950">
        <Hero />
        <Solutions />
        <AboutMe />
        <Projects />

        <section
          id="contact"
          className="bg-white pt-[80px] xlg:pt-[110px] dark:bg-transparent dark:text-white xxl:flex xxl:p-10 xxl:px-10 xxl:flex-row-reverse xxl:w-[1440px] mx-auto mb-16"
        >
          {/* CONTENEDOR DEL FORMULARIO */}
          <div className="flex flex-col justify-center items-center p-6 gap-4 xmd:w-[650px] mx-auto">
            {/* AVATAR Y TÍTULO */}
            <div className="hidden justify-between items-center w-full gap-2 mt-5">
              <span className="border-[1px] border-gray-200 w-[30%] xmd:w-[35%]"></span>
              <div className="relative rounded-full bg-gradient-to-t from-indigo-900 to-indigo-950 dark:from-emerald-300 dark:to-emerald-300 w-[100px] h-[100px] xmd:w-[125px] xmd:h-[125px]">
                <img
                  src="/images/avatar.png"
                  alt="Foto de perfil"
                  className="absolute w-[125px] h-[125px] -top-[25px] xmd:w-[150px] xmd:h-[150px] object-cover rounded-full"
                />
              </div>
              <span className="border-[1px] border-gray-200 w-[30%] xmd:w-[35%]"></span>
            </div>

            <h4 className="text-center font-bold text-xl xxs:text-3xl xmd:text-4xl">
              ¡Hablemos!
            </h4>
            <p className="text-center text-gray-600 dark:text-gray-300 text-base xmd:text-lg max-w-md">
              ¿Tienes una idea, proyecto o idea de negocio? Escríbeme y te
              responderé pronto.
            </p>

            {/* FORMULARIO */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full py-4 gap-4"
            >
              <div>
                <label
                  htmlFor="emailjs_name"
                  className="block text-lg font-medium mb-1"
                >
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="emailjs_name"
                  id="emailjs_name"
                  className="border w-full h-12 outline-none rounded-md p-3 text-gray-700 dark:text-white xmd:text-xl"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="emailjs_email"
                  className="block text-lg font-medium mb-1"
                >
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="emailjs_email"
                  id="emailjs_email"
                  className="border w-full h-12 outline-none rounded-md p-3 text-gray-700 dark:text-white xmd:text-xl"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="emailjs_phone"
                  className="block text-lg font-medium mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="text"
                  name="emailjs_phone"
                  id="emailjs_phone"
                  className="border w-full h-12 outline-none rounded-md p-3 text-gray-700 dark:text-white xmd:text-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="emailjs_message"
                  className="block text-lg font-medium mb-1"
                >
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="emailjs_message"
                  id="emailjs_message"
                  className="border w-full h-40 outline-none rounded-md p-3 text-gray-700 dark:text-white xmd:text-xl resize-none"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-indigo-600 text-white hover:opacity-90 dark:text-white w-full py-3 rounded-md xxs:text-xl transition-all"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
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
    </div>
  );
};

export default Home;
