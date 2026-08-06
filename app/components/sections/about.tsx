import { useTranslation } from "react-i18next";

import { Reveal } from "~/components/reveal";
import { Section, SectionHeader } from "~/components/section";
import { siteConfig } from "~/config/site";

export function About() {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />

      <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16">
        <div className="order-2 space-y-5 text-base leading-relaxed text-muted-foreground md:order-1">
          <Reveal as="span" className="block">
            <p>
              {t("about.line1")}
              <strong className="font-semibold text-foreground">
                {t("about.line2")}
              </strong>
              {t("about.line3")}
              <strong className="font-semibold text-foreground">
                {t("about.line4")}
              </strong>
              {t("about.line5")}
            </p>
          </Reveal>

          <Reveal as="span" className="block" delay={0.1}>
            <p>{t("about.line6")}</p>
          </Reveal>

          <Reveal as="span" className="block" delay={0.2}>
            <p>{t("about.line7")}</p>
          </Reveal>
        </div>

        <Reveal className="order-1 md:order-2" delay={0.1}>
          <div className="relative mx-auto w-full max-w-[320px]">
            {/* Offset frame — a small depth cue that needs no shadow */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-primary/30"
            />
            <img
              src={siteConfig.avatar}
              alt={siteConfig.name}
              loading="lazy"
              className="relative aspect-square w-full rounded-2xl border border-border object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
