import { useTranslation } from "react-i18next";
import { LuArrowUpRight, LuGithub, LuLinkedin } from "react-icons/lu";

import { Reveal } from "~/components/reveal";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/config/site";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container scroll-mt-24 py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center md:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[min(560px,90%)] -translate-x-1/2 rounded-full bg-glow/20 blur-[100px]"
        />

        <div className="relative">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {t("contact.eyebrow")}
          </p>

          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {t("contact.title")}
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
            {t("contact.subtitle")}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {siteConfig.links.email ? (
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.links.email}`}>
                  {t("contact.cta")}
                  <LuArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            ) : null}

            {siteConfig.links.linkedin ? (
              <Button asChild variant="outline" size="lg">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LuLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            ) : null}

            {siteConfig.links.github ? (
              <Button asChild variant="outline" size="lg">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LuGithub className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
