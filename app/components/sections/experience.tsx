import { useTranslation } from "react-i18next";

import { Reveal } from "~/components/reveal";
import { Section, SectionHeader } from "~/components/section";

interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  points: string[];
}

export function Experience() {
  const { t } = useTranslation();

  // Reading the whole array lets you add or remove jobs in the locale files
  // without ever touching this component.
  const experiences = t("companies", { returnObjects: true }) as Experience[];

  return (
    <Section id="experience">
      <SectionHeader
        eyebrow={t("expertise.eyebrow")}
        title={t("expertise.title")}
        subtitle={t("expertise.subtitle")}
      />

      <ol className="relative border-l border-border">
        {experiences.map((experience, index) => (
          <Reveal
            as="li"
            key={`${experience.company}-${index}`}
            delay={index * 0.08}
            className="relative pb-12 pl-8 last:pb-0 md:pl-12"
          >
            <span
              aria-hidden
              className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary ring-4 ring-primary/15"
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="font-serif text-xl font-bold tracking-tight">
                {experience.company}
              </h3>
              {index === 0 ? (
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {t("expertise.current")}
                </span>
              ) : null}
            </div>

            <p className="mt-1 text-sm font-medium text-foreground/80">
              {experience.role}
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
              {experience.period}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {experience.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {experience.points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
