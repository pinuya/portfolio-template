import type { MetaFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Fragment } from "react/jsx-runtime";
import { HeartDetail } from "~/components/heart-detail";
import { useTranslation } from "react-i18next";
import Typewriter from "~/components/fancy/text/typewriter";
import {
  containerVariants,
  imageVariants,
  itemVariants,
} from "~/consts/animations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MdLanguage } from "react-icons/md";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    {
      name: "Portfolio",
      content: "Bem-vindos ao meu portfolio construido em Remix.",
    },
  ];
};

export default function Index() {
  let { t } = useTranslation();

  const experiences = [
    {
      company: t("companies.0.company"),
      period: t("companies.0.period"),
      role: t("companies.0.role"),
      description: t("companies.0.description"),
      points: [
        t("companies.0.points.0"),
        t("companies.0.points.1"),
        t("companies.0.points.2"),
      ],
    },
    {
      company: t("companies.1.company"),
      period: t("companies.1.period"),
      role: t("companies.1.role"),
      description: t("companies.1.description"),
      points: [t("companies.1.points.0"), t("companies.1.points.1")],
    },
  ];

  return (
    <div className="text-center">
      <nav>
        <div className="flex items-center justify-between px-4">
          <div className="font-libre text-lg font-bold text-primary">
            Pinuya
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MdLanguage className="text-primary" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                <Form>
                  <button type="submit" name="lng" value="pt">
                    🇧🇷 Português
                  </button>
                </Form>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Form>
                  <button type="submit" name="lng" value="en">
                    🇺🇲 English
                  </button>
                </Form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="absolute h-[500px] w-[500px] rounded-full bg-primary blur-3xl"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <span className="mb-4 block font-libre text-2xl text-gray-700">
            {t("title")}
          </span>

          <Typewriter
            text={["Web Designer", "Full-stack Developer", "UX/UI Enthusiast"]}
            speed={70}
            className="font-libre-baskerville text-5xl font-bold text-accent md:text-7xl"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
        </div>
      </section>

      <HeartDetail />

      <section
        id="about"
        className="mx-auto max-w-6xl overflow-hidden px-4 py-16"
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
              className="mb-6 text-lg leading-relaxed"
              variants={itemVariants}
            >
              {t("about.line1")}

              <span className="font-bold text-primary">{t("about.line2")}</span>
              {t("about.line3")}
              <span className="font-bold text-primary">{t("about.line4")}</span>
              {t("about.line5")}
            </motion.p>

            <motion.p
              className="mb-6 text-lg leading-relaxed"
              variants={itemVariants}
            >
              {t("about.line6")}
            </motion.p>

            <motion.p
              className="mb-0 text-lg leading-relaxed"
              variants={itemVariants}
            >
              {t("about.line7")}
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
                  className="block text-3xl text-primary transition-colors hover:text-blue-700"
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
                  className="block text-3xl text-primary transition-colors hover:text-gray-900"
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
          className="mb-4 font-libre text-2xl text-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t("expertice.title")}
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
                    <h2 className="mt-1 text-xl font-bold text-gray-900">
                      {exp.company}
                    </h2>
                    <h3 className="text-sm font-semibold text-gray-700">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-700">{exp.description}</p>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        className="flex items-start gap-2 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                      >
                        <span className="mt-1.5 flex-shrink-0 text-primary">
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

      <footer className="w-full py-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} {t("footer.rights")}
        </p>
      </footer>
    </div>
  );
}
