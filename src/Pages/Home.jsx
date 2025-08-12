import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiExternalLink, FiGithub, FiStar, FiUsers, FiTrendingUp, FiCode, FiSmartphone, FiDatabase, FiTool } from 'react-icons/fi';
import { FaLaptopCode, FaMobile, FaCogs, FaServer } from 'react-icons/fa';
import { BsWhatsapp, BsLinkedin } from 'react-icons/bs';
import { personalInfo, services, projects, testimonials, skills } from '../data/portfolioData';

// SEO Component with Meta Tags and Structured Data
const SEOTags = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "url": "https://freddymunoz-dev.netlify.app",
    "image": personalInfo.avatar,
    "jobTitle": "Desarrollador Full Stack Freelance",
    "description": personalInfo.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personalInfo.location
    },
    "email": personalInfo.email,
    "telephone": personalInfo.phone,
    "sameAs": [
      personalInfo.social.linkedin,
      personalInfo.social.github,
      personalInfo.social.whatsapp
    ],
    "knowsAbout": ["JavaScript", "React", "PHP", "Laravel", "Python", "Node.js", "MySQL", "PostgreSQL"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desarrollador Web Full Stack",
      "occupationLocation": {
        "@type": "Place",
        "name": personalInfo.location
      }
    }
  };

  React.useEffect(() => {
    // Meta tags básicos
    document.title = "Freddy Muñoz - Desarrollador Full Stack Freelance | Experto en React, PHP, Laravel";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Desarrollador Full Stack especializado en React, PHP, Laravel y Python. Creo aplicaciones web modernas y soluciones digitales para empresas. ¡Contacta para tu proyecto!";
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "desarrollador freelance, programador web, React developer, PHP developer, Laravel, full stack developer, desarrollo web, aplicaciones web";
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }

    // Open Graph meta tags
    const ogTags = [
      { property: "og:title", content: "Freddy Muñoz - Desarrollador Full Stack Freelance" },
      { property: "og:description", content: "Especialista en desarrollo web con React, PHP, Laravel y Python. Soluciones digitales modernas para tu negocio." },
      { property: "og:image", content: personalInfo.avatar },
      { property: "og:url", content: "https://freddymunoz-dev.netlify.app" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Freddy Muñoz Portfolio" }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`) || document.createElement('meta');
      meta.setAttribute('property', tag.property);
      meta.content = tag.content;
      if (!document.querySelector(`meta[property="${tag.property}"]`)) {
        document.head.appendChild(meta);
      }
    });

    // Twitter Card meta tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Freddy Muñoz - Desarrollador Full Stack Freelance" },
      { name: "twitter:description", content: "Especialista en desarrollo web con React, PHP, Laravel y Python. Soluciones digitales modernas para tu negocio." },
      { name: "twitter:image", content: personalInfo.avatar }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`) || document.createElement('meta');
      meta.name = tag.name;
      meta.content = tag.content;
      if (!document.querySelector(`meta[name="${tag.name}"]`)) {
        document.head.appendChild(meta);
      }
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.rel = "canonical";
    canonical.href = "https://freddymunoz-dev.netlify.app";
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }

    // Structured Data
    let structuredDataScript = document.querySelector('#structured-data') || document.createElement('script');
    structuredDataScript.id = 'structured-data';
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    if (!document.querySelector('#structured-data')) {
      document.head.appendChild(structuredDataScript);
    }

    // Additional SEO meta tags
    const additionalTags = [
      { name: "robots", content: "index, follow" },
      { name: "author", content: personalInfo.name },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { httpEquiv: "Content-Language", content: "es" }
    ];

    additionalTags.forEach(tag => {
      const attribute = tag.name ? 'name' : 'http-equiv';
      const value = tag.name || tag.httpEquiv;
      let meta = document.querySelector(`meta[${attribute}="${value}"]`) || document.createElement('meta');
      meta.setAttribute(attribute, value);
      meta.content = tag.content;
      if (!document.querySelector(`meta[${attribute}="${value}"]`)) {
        document.head.appendChild(meta);
      }
    });

  }, []);

  return null;
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Inicializar EmailJS
  React.useEffect(() => {
    emailjs.init("ujmGZzSK1SqYSUYPp");
    console.log('EmailJS inicializado correctamente');
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Mapear los nombres de EmailJS a nuestro estado
    const fieldMap = {
      'user_name': 'name',
      'user_email': 'email', 
      'user_phone': 'phone',
      'service_type': 'service',
      'message': 'message'
    };
    
    const stateField = fieldMap[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [stateField]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceID = "service_cid4w45";
    const templateID = "template_qn9ez4e";

    // Enviar formulario usando EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target)
      .then(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      })
      .catch((err) => {
        console.error('Error enviando formulario:', err);
        setSubmitStatus('error');
        
        // Solo abrir WhatsApp como backup cuando hay error
        const whatsappMessage = `
🚀 *Nuevo Proyecto - ${formData.name}*

📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
💼 *Servicio:* ${formData.service}

📝 *Mensaje:*
${formData.message}

⚠️ *Nota:* El formulario web tuvo problemas, contacto directo por WhatsApp
        `.trim();

        const whatsappUrl = `${personalInfo.social.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Mostrar detalles del error para debugging
        if (err.text) {
          console.error('Detalles del error:', err.text);
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div>
          <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
            placeholder="Tu nombre completo"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
            placeholder="tu@email.com"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label htmlFor="user_phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="user_phone"
            name="user_phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
            placeholder="+51 999 999 999"
          />
        </div>

        {/* Servicio */}
        <div>
          <label htmlFor="service_type" className="block text-sm font-semibold text-gray-700 mb-2">
            ¿Qué servicio necesitas? *
          </label>
          <select
            id="service_type"
            name="service_type"
            value={formData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
          >
            <option value="">Selecciona un servicio</option>
            <option value="Desarrollo Web">Desarrollo Web</option>
            <option value="SEO y Landing Pages">SEO y Landing Pages</option>
            <option value="Backend & APIs">Backend & APIs</option>
            <option value="Automatización & ERP">Automatización & ERP</option>
            <option value="Desarrollo Full Stack">Desarrollo Full Stack</option>
            <option value="DevOps & Cloud">DevOps & Cloud</option>
            <option value="Consultoría">Consultoría Técnica</option>
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Cuéntame más sobre tu proyecto *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
          placeholder="Describe tu proyecto, objetivos, funcionalidades específicas que necesitas, tecnologías preferidas, etc."
        />
      </div>

      {/* Submit Status */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
        >
          <div className="font-semibold mb-2">✅ ¡Formulario enviado exitosamente!</div>
          <p className="text-sm">
            Tu mensaje ha sido enviado a mi email. Te responderé en menos de 24 horas con una propuesta personalizada para tu proyecto.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
        >
          <div className="font-semibold mb-2">❌ Error al enviar el formulario</div>
          <p className="text-sm mb-3">
            Hubo un problema con el servicio de email. Se ha abierto WhatsApp automáticamente como alternativa para que puedas contactarme directamente.
          </p>
          <div className="text-sm">
            <p>💡 <strong>Tip:</strong> También puedes enviarme un email directamente a: <strong>{personalInfo.email}</strong></p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row gap-4">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Enviando...
            </>
          ) : (
            <>
              <FiMail size={20} />
              Enviar Propuesta
            </>
          )}
        </motion.button>

        {/* <motion.a
          href={personalInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <BsWhatsapp size={20} />
          WhatsApp Directo
        </motion.a> */}
      </div>

      <div className="text-center text-sm text-gray-500">
        🔒 Tu información está segura y solo será usada para contactarte sobre tu proyecto
      </div>
    </form>
  );
};

const Home = () => {
  return (
    <Fragment>
      {/* SEO Tags */}
      <SEOTags />
      
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#inicio" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logos/logo.png" 
              alt="FM Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#proyectos" className="text-gray-600 hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">Contacto</a>
          </nav>
          <motion.a
            href="#contacto"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contratar
          </motion.a>
        </div>
      </motion.header>
      
      {/* Hero Section */}
      <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Listo para impulsar tu próximo proyecto 🚀
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span itemProp="jobTitle">Desarrollador{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Freelance
              </span></span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 max-w-lg leading-relaxed" itemProp="description">
              {personalInfo.description}
            </p>

            {/* Stats Freelance */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Proyectos</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-green-600">8+</div>
                <div className="text-sm text-gray-600">Tecnologías</div>
              </motion.div>
              <motion.div 
                className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-slate-700">3+</div>
                <div className="text-sm text-gray-600">Años Exp.</div>
              </motion.div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FiMail size={20} />
                Iniciar mi proyecto
              </motion.button>
              
              <motion.a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsWhatsapp size={20} />
                Contactame
              </motion.a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsLinkedin size={24} />
              </motion.a>
              <motion.a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a 
                href={personalInfo.social.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <BsWhatsapp size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decoraciones de fondo */}
              <motion.div 
                className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-2xl opacity-50 transform rotate-6"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [6, 8, 6]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-200 rounded-2xl opacity-50 transform -rotate-6"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [-6, -8, -6]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
              
              {/* Imagen principal */}
              <motion.div 
                className="relative w-80 h-96 mx-auto overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} - Freelance Profesional`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Badge flotante */}
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-gray-800">{personalInfo.name}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50" itemScope itemType="https://schema.org/Service">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mis <span className="text-blue-600">Servicios</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrezco soluciones tecnológicas completas para hacer crecer tu negocio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Desarrollo Web */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLaptopCode />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Desarrollo Web
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aplicaciones web modernas y responsivas con interfaces atractivas y funcionalidad robusta
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Laravel', 'PHP', 'TailwindCSS', 'Bootstrap'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* SEO y Landing Pages */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-green-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiTrendingUp />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                SEO y Landing Pages
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Páginas optimizadas para SEO y landing pages de alta conversión para tu marca personal o negocio
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['SEO Técnico', 'Landing Pages', 'WordPress', 'Analytics', 'Conversión', 'Marketing'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend & APIs */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-slate-700 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaServer />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Backend & APIs
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sistemas backend escalables y APIs REST robustas para conectar aplicaciones
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'FastAPI', 'MySQL', 'PostgreSQL', 'APIs REST'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ERP & Automation */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-orange-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaCogs />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automatización & ERP
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sistemas empresariales y automatización de procesos con frameworks modernos
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Odoo', 'Python', 'PostgreSQL', 'Automatización', 'Integración'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Full Stack Development */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-indigo-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiCode />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Desarrollo Full Stack
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Soluciones completas desde el frontend hasta el backend con arquitectura moderna
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Frontend', 'Backend', 'APIs', 'Bases de Datos', 'DevOps'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* DevOps & Deployment */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-red-600 text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FiDatabase />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                DevOps & Cloud
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Despliegue y gestión de aplicaciones con contenedores y mejores prácticas
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Linux', 'Git', 'CI/CD', 'Deployment'].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Servicios */}
          <motion.div
            className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Combinemos estas tecnologías para crear la solución perfecta para tu proyecto
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Solicitar cotización
              </motion.button>
              
              <motion.a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <BsWhatsapp size={20} />
                WhatsApp directo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 bg-gray-50" itemScope itemType="https://schema.org/CreativeWork">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portafolio de <span className="text-blue-600">Proyectos Destacados</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aplicaciones web, móviles y sistemas empresariales desarrollados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                          <FiExternalLink size={20} className="text-gray-800" />
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                          <FiGithub size={20} className="text-gray-800" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ver más proyectos */}
          {/* <div className="text-center mt-12">
            <motion.button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Ver todos mis proyectos
            </motion.button>
          </div> */}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-white" itemScope itemType="https://schema.org/ContactPage">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cuéntame sobre <span className="text-blue-600">tu proyecto</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completa el formulario y te responderé en menos de 24 horas con una propuesta personalizada
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/Person">
        {/* Footer Content */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6 rounded-md">
                  <img 
                    src="/logos/logo.png" 
                    alt="FM Logo" 
                    className="h-14 md:h-16 w-auto rounded-md"
                    loading="lazy"
                  />
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed" itemProp="description">
                  Desarrollador Freelance especializado en crear soluciones digitales modernas para empresas. 
                  Combinando tecnología de vanguardia con diseño intuitivo para impulsar tu negocio.
                </p>
                
                {/* Información de contacto destacada */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3" itemScope itemType="https://schema.org/ContactPoint">
                    <FiMail className="text-blue-400" size={20} />
                    <div>
                      <p className="text-white font-medium" itemProp="email">{personalInfo.email}</p>
                      <p className="text-gray-400 text-sm">Respuesta en 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3" itemScope itemType="https://schema.org/ContactPoint">
                    <BsWhatsapp className="text-green-400" size={20} />
                    <div>
                      <p className="text-white font-medium" itemProp="telephone">{personalInfo.phone}</p>
                      <p className="text-gray-400 text-sm">Respuesta inmediata</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3" itemScope itemType="https://schema.org/PostalAddress">
                    <FiMapPin className="text-purple-400" size={20} />
                    <div>
                      <p className="text-white font-medium" itemProp="addressLocality">{personalInfo.location}</p>
                      <p className="text-gray-400 text-sm">Trabajo remoto disponible</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <motion.a 
                    href={personalInfo.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BsLinkedin size={24} />
                  </motion.a>
                  <motion.a 
                    href={personalInfo.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiGithub size={24} />
                  </motion.a>
                  <motion.a 
                    href={personalInfo.social.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <BsWhatsapp size={24} />
                  </motion.a>
                </div>
              </div>
              
              {/* Servicios */}
              <div>
                <h4 className="font-semibold mb-6 text-lg">Servicios</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">Desarrollo Web</li>
                  <li className="hover:text-white transition-colors cursor-pointer">SEO & Landing Pages</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Backend & APIs</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Automatización & ERP</li>
                  <li className="hover:text-white transition-colors cursor-pointer">DevOps & Cloud</li>
                </ul>
              </div>
              
              {/* Tecnologías */}
              <div>
                <h4 className="font-semibold mb-6 text-lg">Tecnologías</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="hover:text-white transition-colors">React & JavaScript</li>
                  <li className="hover:text-white transition-colors">Laravel & PHP</li>
                  <li className="hover:text-white transition-colors">Python & FastAPI</li>
                  <li className="hover:text-white transition-colors">Docker & Linux</li>
                  <li className="hover:text-white transition-colors">MySQL & PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 {personalInfo.name}. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Desarrollador Freelance</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Disponible para proyectos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
