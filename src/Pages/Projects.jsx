import { useLocation } from "react-router-dom";
import CardProjectDetail from "../components/CardProjectDetail";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  const routePath = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [routePath]);

  AOS.init({
    duration: 1500,
  });

  return (
    <div className="w-full flex flex-col gap-6 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-950 xmd::h-[400px]">
      <h2 className="text-center text-2xl xlg:text-4xl mt-6 dark:text-white">Mis Proyectos</h2>
      <section className="w-full grid grid-cols-[repeat(auto-fill,_250px)] xxs:grid-cols-[repeat(auto-fill,325px)] xlg:grid-cols-[repeat(auto-fill,600px)] xlg:px-10 pt-6 pb-6 gap-8 justify-center mx-auto xlg:max-w-[1000px] xxl:grid-cols-[repeat(auto-fill,550px)] xxl:max-w-[1240px]">
        <div data-aos="zoom-in">
          <CardProjectDetail project="ecomercereact"/>
        </div>
        <div data-aos="zoom-in">
          <CardProjectDetail project="pokedex"/>
        </div>
        <div data-aos="fade-up">
          <CardProjectDetail project="academlostore"/>
        </div>
        <div data-aos="fade-up">
          <CardProjectDetail project="rickandmorty"/>
        </div>
        <div data-aos="fade-down">
          <CardProjectDetail project="weatherapp"/>
        </div>
        <div data-aos="fade-up">
          <CardProjectDetail project="pharserandom"/>
        </div>
        <div data-aos="zoom-out">
          <CardProjectDetail project="fraremsac"/>
        </div>
        <div data-aos="slide-up">
          <CardProjectDetail project="moviessearch"/>
        </div>
        <div data-aos="fade-up">
          <CardProjectDetail project="petblog"/>
        </div>
        <div data-aos="fade-up">
          <CardProjectDetail project="cruduser"/>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Projects;
