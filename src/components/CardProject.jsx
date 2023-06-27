import React from "react";

const CardProject = ({ title, content, img }) => {
  return (
    <article className="flex flex-col gap-4 justify-center p-4 py-6 shadow-lg rounded-md bg-white border-[1px] border-gray-400/30 dark:bg-[#1e1a4f] dark:shadow-white dark:shadow-none dark:border-none">
      <div className="overflow-hidden rounded-md w-full h-[150px] xxs:h-[200px] flex justify-center items-center">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500 "
        />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-md font-semibold text-[#1e1a4f] dark:text-white">
          {title}
        </h3>
        <p className="text-sm dark:text-white">{content}</p>
        <a
          href="#"
          className="text-black cursor-pointer p-2 bg-white border rounded-md text-sm w-[85px] text-center hover:bg-gray-100 transition-all duration-300 dark:hover:bg-slate-950 dark:border-none dark:hover:text-white"
        >
          Ver pagina
        </a>
      </div>
    </article>
  );
};

export default CardProject;
