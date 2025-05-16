// A index e a pagina principal, aqui e redenreizado o conteudo do seu portfolio.
// Aqui e onde voce vai colocar suas informacoes, habilidades e projetos.
// Caso tenha conhecimentos avancados voce pode tambem adicionar um banco de dados e componentizar algumas coisas, fazendo com que o portfolio seja mais dinamico.

import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "motion/react";
import { FaHeart, FaLinkedin } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Projects } from "~/components/projects";
import { Skills } from "~/components/skills";

export const meta: MetaFunction = () => {
  // API de meta do Remix para SEO
  return [
    { title: "Portfolio" },
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio construido em Remix.",
    },
  ];
};

// mock de dados para as experiencias e projetos adapte para o seu portfolio
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

//renderizacao do projeto, abaixo do return e o que sera renderizado na pagina
export default function Index() {
  const year = new Date().getFullYear();
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="from-background via-background/90 to-background absolute inset-0 bg-gradient-to-b" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="z-10 flex min-h-[100dvh] flex-col">
        {/* section hero conteudo principal do seu portfolio */}
        <section
          id="hero"
          className="flex h-screen flex-col items-center justify-center gap-16 py-20"
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl">Hello World.</h1>
                <h1 className="text-4xl">
                  I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-transparent">
                    Tifany.
                  </span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                {/* insira suas informacoes aqui */}
                <span className="text-gray-400">
                  Web Designer | Front-End Developer
                </span>
                <p className="mt-4 w-96 text-gray-400">
                  Uma <b>Software Engineer</b> com foco no <b>Front-End</b>.
                  Buscando sempre desenvolver telas robustas e responsivas.
                  Sinto-me confortável projetando meus próprios designs e
                  aplicando-os na prática durante o desenvolvimento.
                </p>
              </motion.div>
            </div>

            <motion.img
              src="/yourProfilePic.jpg"
              className="h-32 w-32 rounded-full sm:h-80 sm:w-80"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>

          {/* elemento decorativo */}
          <motion.div
            className="hidden flex-col items-center p-20 sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="h-12 w-1 animate-pulse rounded-full bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"></div>
          </motion.div>
        </section>

        {/* sessao de skills e experiencia altere para suas skills e experiencia no componente */}
        <motion.section
          id="skills"
          className="flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-center text-4xl">Experiência e Habilidades</h1>

          <div>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 flex gap-6">
                <div className="pt-1">
                  <MdWork className="text-2xl text-gray-600" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-2xl font-semibold">{exp.company}</h3>
                    <span className="text-sm font-light text-gray-400">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {exp.role}
                    </span>

                    <p className="mt-2 max-w-prose text-gray-400">
                      {exp.description}
                    </p>
                  </div>

                  {index !== experiences.length - 1 && (
                    <div className="mt-4 rotate-90 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-3xl tracking-widest text-transparent">
                      ...
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Skills />
        </motion.section>

        {/* sessao onde voce vai descrever sobre seus projetos altere seus projetos no componente de projects.tsx */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="projects"
          className="mb-5 mt-20 flex flex-col items-center justify-center"
        >
          <Projects />
        </motion.section>
      </div>

      <div className="container mx-auto my-4 flex flex-col items-center gap-3 text-gray-400 md:flex-row md:justify-between md:gap-0">
        <div className="flex items-center gap-2 text-center text-sm">
          &copy; {year} Feito com <FaHeart className="text-purple-500" /> por
          Tifany Nunes
        </div>

        {/* suas redes sociais */}
        <div className="flex gap-4">
          <Link
            to="https://www.linkedin.com/in/tifanyanunes/"
            target="_blank"
            className="transition-colors hover:text-purple-500"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
}
