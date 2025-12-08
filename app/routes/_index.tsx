import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Typewriter from "components/fancy/text/typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Footer } from "~/components/footer";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="text-center">
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute h-[500px] w-[500px] rounded-full bg-primary blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <span className="mb-4 block text-2xl font-libre">Pinuya</span>
          <Typewriter
            text={["Web Designer", "Full-stack Developer", "UX/UI Enthusiast"]}
            speed={70}
            className="text-accent font-libre-baskerville text-5xl md:text-7xl font-bold"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl px-4 py-16 overflow-hidden"
      >
        <motion.div
          className="flex flex-col items-center gap-12 md:flex-row md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex-1 text-left">
            <motion.p
              className="text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              Oi, eu sou a Pinuya, uma{" "}
              <span className="font-bold text-primary">
                Desenvolvedora Full-Stack
              </span>{" "}
              com experiência em criação de aplicações web modernas e
              responsivas. Especializada em{" "}
              <span className="font-bold text-primary">
                React, Next.js, Node.js e TypeScript,{" "}
              </span>
              com foco em performance, acessibilidade e experiência do usuário.
              Apaixonada por resolver problemas complexos através de código
              limpo e arquiteturas escaláveis.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              Além de minhas habilidades técnicas, sou uma comunicadora eficaz e
              colaboradora de equipe, sempre buscando aprender e crescer como
              desenvolvedora. Estou animada para contribuir com projetos
              desafiadores e inovadores que façam a diferença.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed mb-0"
              variants={itemVariants}
            >
              Quando não estou programando, você pode me encontrar explorando
              novas coleções de bonecas. ૮ ྀིᴗ͈ . ᴗ͈ ྀིა
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col items-center"
            variants={imageVariants}
          >
            <motion.img
              src="/pfp.jpg"
              alt="Foto de perfil"
              className="mb-6 h-96 w-96 rounded-lg object-cover shadow-xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            />

            <motion.div className="flex gap-6" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="text-3xl text-primary hover:text-blue-700 transition-colors block"
                >
                  <FaLinkedin />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="https://github.com"
                  target="_blank"
                  className="text-3xl text-primary hover:text-gray-900 transition-colors block"
                >
                  <FaGithub />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section id="experience" className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute -left-2 top-1/2 h-3/4 w-1 -translate-y-1/2 rounded-full bg-accent group-hover:h-4/5 transition-all"></div>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {exp.company}
                    </h2>
                    <span className="inline-block rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-gray-700">
                    {exp.role}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <div className="h-2 w-12 rounded-full bg-gray-200 md:w-2 md:h-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
