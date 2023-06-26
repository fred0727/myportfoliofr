import React from 'react'

const CardProject = ({title, content, img}) => {
  return (
    <article className="relative group h-[200px] w-[300px] flex justify-center items-center bg-[#141c3a] text-white rounded-lg shadow-md mx-auto">
            <div className="relative flex justify-center items-center group-hover:opacity-0 transition-opacity duration-500">
              <h2 className="absolute font-medium text-white text-2xl text-center">
                {title}
              </h2>
              <img
                src={img}
                alt=""
                className="w-full h-full rounded-lg opacity-20"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h- h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-5 px-8 gap-4">
              <h2 className="text-center text-sm">
              {content}
              </h2>
              <a
                href="https://www.google.com"
                className="rounded-sm p-2 py-1 text-sm bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                target="_blank"
              >
                Ver Pagina
              </a>
            </div>
          </article>
  )
}

export default CardProject