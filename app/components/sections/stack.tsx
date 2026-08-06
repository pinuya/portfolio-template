import type { ComponentType } from "react";
import { useTranslation } from "react-i18next";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRemix,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { Reveal } from "~/components/reveal";
import { Section, SectionHeader } from "~/components/section";
import { siteConfig } from "~/config/site";

/**
 * Maps a technology name from `app/config/site.ts` to its icon.
 * Names that aren't listed here simply render as a text badge, so you can
 * add anything to your stack without editing this file.
 */
const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Remix: SiRemix,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "CI/CD": SiGithubactions,
  "VS Code": VscVscode,
  Figma: SiFigma,
};

export function Stack() {
  const { t } = useTranslation();

  return (
    <Section id="stack">
      <SectionHeader
        eyebrow={t("stack.eyebrow")}
        title={t("stack.title")}
        subtitle={t("stack.subtitle")}
      />

      <div className="grid gap-10 sm:grid-cols-2">
        {siteConfig.stack.map((category, index) => (
          <Reveal key={category.title} delay={index * 0.06}>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {category.title}
            </h3>

            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => {
                const Icon = ICONS[item];

                return (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4 shrink-0" />
                    ) : null}
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
