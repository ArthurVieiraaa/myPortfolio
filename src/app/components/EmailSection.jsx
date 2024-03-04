"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { Notify } from "notiflix/build/notiflix-notify-aio";

const EmailSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    setError(null);

    if (!name || !email || !message) {
      Notify.failure("Preencha todos os campos!")
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_n0bcnct", "template_9u2uzik", templateParams, "sDEsSFoBHnugReiwP")
      .then(() => {
        Notify.success("Email enviado com sucesso!")
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch(error => {
        Notify.failure("Não enviado");
        console.log(error)
        setError('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
      })
      .finally(() => setLoading(false));
  }

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Vamos nos conectar!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta. Se você tiver alguma dúvida ou apenas quiser dizer oi, farei o possível para entrar em contato com você!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ArthurVieiraaa">
              <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/arthur-vieira-bruske-3981b1243/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
              Seu Nome:
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name={"name"}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
              Email:
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name={"email"}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
              Mensagem:
            </label>
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name={"message"}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;