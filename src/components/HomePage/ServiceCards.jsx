import { FaLaptopCode, FaShoppingCart, FaCogs, FaMobileAlt } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";

const services = [
  {
    icon: FaLaptopCode,
    title: "Sitios Web & Landing Pages",
    desc: "Presencia profesional, lista para captar leads y clientes.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce",
    desc: "Tiendas online rápidas, integradas con pagos y envíos.",
  },
  {
    icon: FaCogs,
    title: "Integraciones & Odoo",
    desc: "Automatiza ventas, inventarios y CRM con Odoo.",
  },
  {
    icon: FaMobileAlt,
    title: "Apps Web & Móviles",
    desc: "Soluciones multiplataforma para tus usuarios.",
  },
  {
    icon: BiServer,
    title: "APIs & Backends",
    desc: "Servicios escalables con Node, Python o Laravel.",
  },
  {
    icon: MdSpeed,
    title: "Mantenimiento & Performance",
    desc: "Optimización, hosting gestionado y soporte continuo.",
  },
];

const ServiceCards = () => {
  return (
    <div className="grid gap-6 xmd:grid-cols-2 xlg:grid-cols-3">
      {services.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group p-6 rounded-xl bg-white dark:bg-slate-900 shadow-md hover:shadow-lg border border-gray-200/60 dark:border-white/10 transition"
        >
          <Icon className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform" />
          <h4 className="font-heading text-lg font-semibold mb-2">{title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
