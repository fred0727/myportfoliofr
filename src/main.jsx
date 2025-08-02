import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Fuentes optimizadas
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

// Carga de app con Router
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
