/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Azul
        secondary: "#10b981", // Verde
        darkBg: "#0f172a", // Fondo oscuro
        lightBg: "#ffffff", // Fondo claro
        textDark: "#1f2937", // Texto oscuro
        textLight: "#f9fafb", // Texto claro
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
    screens: {
      'xxm': "375px",
      'xxs': "425px",
      'xmd': "768px",
      'xlg': "1024px",
      'xxl': "1440px",
    },
  },
  darkMode: 'class',
  plugins: [],
};
