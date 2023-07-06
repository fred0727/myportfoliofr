/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {

      'xxm': "375px",
      // => @media (min-width: 375px) { ... }

      'xxs': "425px",
      // => @media (min-width: 425px) { ... }

      'xmd': "768px",
      // => @media (min-width: 768px) { ... }

      'xlg': "1024px",
      // => @media (min-width: 1024px) { ... }
      
      'xxl': "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  extend: {},
  darkMode: 'class',
  plugins: [],
};
