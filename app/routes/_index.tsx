import type { MetaFunction } from "@remix-run/node";
import { motion } from "motion/react";
import Experience from "~/components/experience";
import Projects from "~/components/projects";
import Skills from "~/components/skills";

import { aboutMe } from "../constants/about";


export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" }, // coloque seu nome se quiser
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio construido em Remix.",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="flex flex-col min-h-[100dvh] z-10">
        {/* conteudo principal do seu portfolio */}
        <section
          id="hero"
          className="h-screen flex flex-col items-center justify-center gap-16 py-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl">Hello World.</h1>
                <h1 className="text-4xl">
                  I'm{" "}
                  <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    {aboutMe.name}.
                  </span>
                </h1>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                {/* insira suas informacoes aqui */}
                <span className="text-gray-400">
                  {aboutMe.profession}
                </span>
                <p className="text-gray-400 w-96 mt-4">
                  Uma <b>Software Engineer</b> com foco no <b>Front-End</b>.
                  Buscando sempre desenvolver telas robustas e responsivas.
                  Sinto-me confortável projetando meus próprios designs e
                  aplicando-os na prática durante o desenvolvimento.
                </p>
              </motion.div>
            </div>

            <motion.img
              src="/yourProfilePic.jpg"
              className="rounded-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>

          {/* elemento decorativo */}
          <motion.div
            className="p-20 hidden flex-col items-center sm:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse"></div>
          </motion.div>
        </section>

        {/* sessao de skills e experiencia altere para suas skills e experiencia no componente skills.tsx e experience.tsx*/}
        <motion.section
          id="skills"
          className=" flex flex-col items-center justify-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl text-center">Habilidades e experiência</h1>

          <div className="flex flex-col gap-28">
            {/* componente de skills */}
            <Skills />

            {/* componente de experiencia */}
            <Experience />
          </div>
        </motion.section>

        {/* sessao onde voce vai descrever sobre seus projetos altere seus projetos no componente de projects.tsx */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="projects"
          className="mt-20 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl">Projetos</h1>

          <Projects />
        </motion.section>
      </div>
    </div>
  );
}
