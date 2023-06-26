import CardProject from "../components/CardProject";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Home = () => {
  return (
    <div className="w-full dark:bg-slate-950">
      <section className="flex flex-col gap-4 pt-10 justify-center items-center px-4 dark:text-white">
        <h1 className="text-xl font-bold xxs:text-3xl">Hola, mi nombre es Freddy.</h1>
        <p className="text-center text-sm xxs:text-lg">
          Desarrollador Web Front-End, diseño y <br /> codifico paginas web
          unicas.{" "}
        </p>
        <div className="flex flex-col pt-8 items-center gap-20">
          <div className="relative bg-[#1e1a4f] dark:bg-white w-[175px] h-[175px] xxs:w-[200px] xxs:h-[200px] rounded-full mt-10">
            <img
              src="/images/avatar.png"
              alt=""
              className="absolute w-[225px] h-[225px] -top-[50px] xxs:w-[250px] xxs:h-[250px] xxs:-top-[50px] object-cover rounded-full"
            />
          </div>
          <div>
            <img src="/images/dev.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#1e1a4f] flex flex-col text-white p-6">
        <h2 className="font-bold text-center py-2 text-2xl xxs:text-4xl xxs:py-4">Conoce de mi</h2>
        <p className="font-light text-center text-sm pb-2 xxs:text-lg xxs:pb-4 dark:font-medium">
          Me inserte a este apasionante mundo del desarrollo hace 2 años, he
          colaborado y creado proyectos con diseños adaptativos e integrando
          funcionalidades que mejore la experencia del usuario. Soy un
          entusiasta de las nuevas teconologias, confio en mis capacidades y
          siempre trabajo para mejorar mis habilidades y conocimientos.
        </p>
      </section>
      <section className="bg-white flex flex-col p-4 py-8 gap-2 dark:bg-slate-950">
        <h2 className="font-bold text-xl text-center text-black xxs:text-3xl dark:text-white">Proyectos</h2>
        <h3 className="text-center font-light text-sm text-black xxs:text-lg dark:text-white">
          Algunos proyectos en los que he trabajado
        </h3>
        <section className="grid grid-cols-[repeat(auto-fill,_350px)] pt-6 gap-8 w-full justify-center">
          <CardProject
            title="Pokedex"
            content="App creada consumiendo la API de Pokemon"
            img="/captureprojects/pokeapi.png"
          />
          <CardProject
            title="Weathe App"
            content="App creada consumiendo la API de OpenWeather"
            img="/captureprojects/weatherapp.png"
          />
          <CardProject
            title="Frarem"
            content="App creada consumiendo la API de OpenWeather"
            img="/captureprojects/weatherapp.png"
          />
          <CardProject
            title="Shopping Cart"
            content="App creada consumiendo la API de OpenWeather"
            img="/captureprojects/weatherapp.png"
          />
        </section>
      </section>
      <section className="px-6 py-12 flex flex-col gap-5 bg-[#1e1a4f]">
        <h2 className="text-center font-bold text-xl mb-6 text-white">
          Tecnologias y lenguajes con las que he trabajado:
        </h2>
        <ul className="grid grid-cols-[repeat(auto-fill,_100px)] justify-center items-center gap-6">
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/html5.png" alt="" width={50} />
            <span className="text-white">Html5</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/css3.png" alt="" width={50} />
            <span className="text-white">Css3</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/js.png" alt="" width={50} />
            <span className="text-white">Javascript</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/reactjs.png" alt="" width={50} />
            <span className="text-white">React JS</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/php.png" alt="" width={50} />
            <span className="text-white">PHP</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/mysql.png" alt="" width={50} />
            <span className="text-white">Mysql</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/bootstrap.png" alt="" width={50} />
            <span className="text-white">Bootstrap</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/tailwind.png" alt="" width={50} />
            <span className="text-white text-center">Tailwind Css</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/git.png" alt="" width={50} />
            <span className="text-white text-center">Git</span>
          </li>
          <li className="flex justify-center items-center flex-col gap-3">
            <img src="/logos/github.png" alt="" width={50} />
            <span className="text-white text-center">Git Hub</span>
          </li>
        </ul>
      </section>
      <section id="contact" className="bg-white flex flex-col justify-center items-center p-6 gap-4 dark:bg-slate-950 dark:text-white">
        <div className="flex justify-between items-center w-full gap-2 mt-5">
          <span className="border-[1px] border-gray-200 w-[30%]"></span>
          <div className="relative bg-[#1e1a4f] w-[100px] h-[100px] rounded-full">
            <img
              src="/images/avatar.png"
              alt=""
              className="absolute w-[125px] h-[125px] -top-[25px] object-cover rounded-full"
            />
          </div>
          <span className="border-[1px] border-gray-200 w-[30%]"></span>
        </div>
        <h4 className="flex text-center font-bold text-xl xxs:text-3xl">Contactame</h4>
        <form className="flex flex-col w-full py-4 gap-4">
          <div>
            <label htmlFor="name" className="flex gap-1 xxs:text-lg">
              Nombres y Apellidos <span className="flex text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border w-full h-10 outline-none rounded-md p-2 xxs:py-6"
            />
          </div>
          <div>
            <label htmlFor="gmail" className="flex gap-1 xxs:text-lg">
              Gmail<span className="flex text-red-500">*</span>
            </label>
            <input
              type="text"
              name="gmail"
              id="gmail"
              className="border w-full h-10 outline-none rounded-md p-2 xxs:py-6"
            />
          </div>
          <div>
            <label htmlFor="phone" className="xxs:text-lg">Telefono</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="border w-full h-10 outline-none rounded-md p-2 xxs:py-6"
            />
          </div>
          <div>
            <label htmlFor="message" className="flex gap-1 xxs:text-lg">
              Dejame tu mensaje <span className="flex text-red-500">*</span>
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="border w-full h-40 outline-none rounded-md p-2"
            />
          </div>
          <div className="w-full">
            <button className="bg-red-600 text-white w-full py-2 rounded-md xxs:py-4">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </section>
      <section className="px-6 py-2 bg-white dark:bg-slate-950 dark:text-white">
        {/* <a href="mailto:freddymh07952023@gmail.com">Mi correo</a> */}
        <h2 className="font-bold text-center text-xl xxs:text-3xl mb-4">Mis Redes</h2>
        <ul className="flex flex-wrap py-4 justify-around">
          <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white"><BsTwitter/></li>
          <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white"><BsFacebook/></li>
          <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white"><BsLinkedin/></li>
          <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white"><BsGithub/></li>
          <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white"><BsWhatsapp/></li>
          <li className="text-3xl text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#1e1a4f] dark:hover:text-white"><HiMail/></li>
        </ul>
      </section>
      <section className="pb-8 py-4 bg-white dark:bg-slate-950 dark:text-white">
        <h3 className="text-center text-gray-400 xxs:text-xl dark:text-gray-300">Hecho por &copy;
        <span className="text-gray-600 dark:text-white">Freddy Muñoz</span></h3>
      </section>
    </div>
  );
};

export default Home;
