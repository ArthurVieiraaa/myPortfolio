"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
};

function sendEmail(e) {
  e.preventDefault();
  
  if (!name || !email || !message) {
    alert('Preencha todos os campos!');
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }
  
  emailjs.send("service_n0bcnct", "template_9u2uzik", templateParams, "sDEsSFoBHnugReiwP")
  .then((response) => {
    console.log('Email Enviado!', response.status, response.text);
    alert('E-mail enviado com sucesso!');
    setName('');
    setEmail('');
    setMessage('')
  }, (error) => {
    console.log('Erro ao enviar e-mail', error);
    alert('Erro ao enviar e-mail');
  })

}

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
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
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Seu Nome:
              </label>
              <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Email:
              </label>
              <input
                name="email"
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="seu@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensagem:
              </label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar 
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;
