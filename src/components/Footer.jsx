import React from "react";
import {
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contacto directo */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">Contáctame</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=51924471461&text=Hola!%20Quiero%20contactarme%20contigo!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <BsWhatsapp className="text-2xl" />
                +51 924 471 461
              </a>
            </li>
            <li>
              <a
                href="mailto:freddymh07952023@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition"
              >
                <HiMail className="text-2xl" />
                freddymh07952023@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-primary">Sígueme</h2>
          <ul className="flex gap-6 text-3xl">
            <li>
              <a
                href="https://twitter.com/freddy_mh95"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <BsTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/freddy.munoz.338658"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/freddy-mh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/fred0727"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider y créditos */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        Hecho por &copy;{" "}
        <span className="text-white font-semibold">Freddy Muñoz - 2025</span>
      </div>
    </footer>
  );
};

export default Footer;
