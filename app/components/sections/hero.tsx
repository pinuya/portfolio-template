import { useTranslation } from "react-i18next";
import { LuArrowDown, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

import Typewriter from "~/components/fancy/text/typewriter";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/config/site";

const socials = [
  { href: siteConfig.links.github, icon: LuGithub, label: "GitHub" },
  { href: siteConfig.links.linkedin, icon: LuLinkedin, label: "LinkedIn" },
  {
    href: siteConfig.links.email ? `mailto:${siteConfig.links.email}` : "",
    icon: LuMail,
    label: "Email",
  },
].filter((social) => social.href);

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden"
    >
      {/* Backdrop: a faint dot grid plus one soft glow, both purely decorative */}
      <div
        aria-hidden
        className="bg-dot-grid mask-radial-fade pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="animate-pulse-slow pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[min(680px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/25 blur-[120px]"
      />

      <div className="container relative z-10 flex flex-col items-center pt-16 text-center">
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          {t("hero.badge")}
        </div>

        <h1
          className="animate-fade-up font-serif text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {t("hero.greeting")}
        </h1>

        <div
          className="animate-fade-up mt-5 flex min-h-[2.5rem] items-center justify-center text-xl text-muted-foreground sm:text-2xl md:text-3xl"
          style={{ animationDelay: "160ms" }}
        >
          <Typewriter
            text={[...siteConfig.headlines]}
            speed={70}
            waitTime={1800}
            deleteSpeed={40}
            cursorChar="_"
            className="font-medium text-foreground"
            cursorClassName="ml-1 text-primary"
          />
        </div>

        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-balance"
          style={{ animationDelay: "240ms" }}
        >
          {t("description")}
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row"
          style={{ animationDelay: "320ms" }}
        >
          <Button asChild size="lg">
            <a href="#contact">{t("hero.cta")}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">{t("hero.secondaryCta")}</a>
          </Button>
        </div>

        <div
          className="animate-fade-up mt-8 flex items-center gap-1"
          style={{ animationDelay: "400ms" }}
        >
          {socials.map((social) => (
            <Button key={social.label} asChild variant="ghost" size="icon">
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            </Button>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label={t("hero.scroll")}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        {t("hero.scroll")}
        <LuArrowDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
}
