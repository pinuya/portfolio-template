import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Typewriter from "components/fancy/text/typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Footer } from "~/components/footer";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import { HeartDetail } from "~/components/heart-detail";

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
    points: [
      "Desenvolvedora Front-End, React",
      "Time do Mais Taúá",
      "Refatoração de aplicação",
    ],
  },
  {
    company: "Hubfy",
    period: "Out 2024 - Fev. 2025",
    role: "Front-End Developer Jr.",
    description:
      "Desenvolvi interfaces dinâmicas e responsivas, sendo responsável pelo front-end do novo sistema da Hubfy. Apliquei meus conhecimentos em Tailwind, React e Next.js para tornar a nova aplicação moderna, interativa e adaptável a diferentes dispositivos.",
    points: [
      "Desenvolvedora Front-End, React e Next.js",
      "Criação de interfaces responsivas",
    ],
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
          <span className="mb-4 block text-2xl font-libre text-gray-700">
            Pinuya
          </span>
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

      <HeartDetail />

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

      <section id="experience" className="mx-auto max-w-3xl px-4 py-16">
        <motion.h1
          className="font-libre text-2xl mb-4 text-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Resume
        </motion.h1>
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <Fragment key={index}>
              <motion.div variants={itemVariants} className="text-left">
                <div>
                  <div className="mb-2 space-y-2">
                    <span className="text-sm font-medium text-primary">
                      {exp.period}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mt-1">
                      {exp.company}
                    </h2>
                    <h3 className="text-sm font-semibold text-gray-700">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  </div>

                  <ul className="space-y-2 mt-3">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {index < experiences.length - 1 && <HeartDetail />}
            </Fragment>
          ))}
        </motion.div>
      </section>

      <HeartDetail />

      <Footer />
    </div>
  );
}
