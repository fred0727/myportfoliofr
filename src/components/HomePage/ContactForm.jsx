import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_xxxxxx",  // TU SERVICE ID
        "template_xxxxxx", // TU TEMPLATE ID
        form.current,
        "PUBLIC_KEY"       // TU PUBLIC KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <input
        type="text"
        name="user_name"
        placeholder="Tu nombre"
        className="border p-2 rounded"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Tu correo"
        className="border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Escribe tu mensaje"
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-800"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>
      {status === "success" && (
        <p className="text-green-500">¡Mensaje enviado con éxito!</p>
      )}
      {status === "error" && (
        <p className="text-red-500">Hubo un error, intenta de nuevo.</p>
      )}
    </form>
  );
};

export default ContactForm;
