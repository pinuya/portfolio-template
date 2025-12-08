import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Typewriter from "components/fancy/text/typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Footer } from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio construido em Remix.",
    },
  ];
};

const experiences = [
  {
    company: "Utrip",
    period: "Mar. 2025 - Atual",
    role: "Front-End Developer Jr.",
    description:
      "Atuo como desenvolvedora Front-End utilizando React. Atualmente, estou alocada no time do Mais Taúá, trabalhando no desenvolvimento e na refatoração da aplicação do novo sistema.",
  },
  {
    company: "Hubfy",
    period: "Out 2024 - Fev. 2025",
    role: "Front-End Developer Jr.",
    description:
      "Desenvolvi interfaces dinâmicas e responsivas, sendo responsável pelo front-end do novo sistema da Hubfy. Apliquei meus conhecimentos em Tailwind, React e Next.js para tornar a nova aplicação moderna, interativa e adaptável a diferentes dispositivos.",
  },
];

export default function Index() {
  return (
    <div>
      <section
        id="hero"
        className="flex min-h-screen items-center justify-center"
      >
        <div className="h-96 w-96 rounded-full bg-primary blur-3xl"></div>

        <div>
          <span>Pinuya</span>
          <Typewriter
            text={["Web Designer", "Full-stack Developer", "UX/UI Enthusiast"]}
            speed={70}
            className="text-accent font-libre-baskerville text-4xl font-bold"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </div>
      </section>

      <section id="about">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h1>sobre</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              natus odit commodi laborum doloremque. Nostrum et delectus, quo
              eaque possimus dignissimos harum pariatur odio, quis voluptatibus,
              recusandae mollitia voluptatum veritatis.
            </p>
          </div>

          <div>
            <img
              src="/pfp.jpg"
              alt="Foto de perfil"
              className="w-48 h-48 rounded-md"
            />
            <Link to={"/"}>
              <FaLinkedin />
            </Link>

            <Link to={"/"}>
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>

      <section id="experience">
        <h1>experiência</h1>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-accent pl-4">
              <h2 className="text-xl font-bold">{exp.company}</h2>
              <span className="text-sm italic">{exp.period}</span>
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
