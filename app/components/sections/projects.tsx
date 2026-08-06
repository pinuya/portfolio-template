import { useTranslation } from "react-i18next";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

import { Reveal } from "~/components/reveal";
import { Section, SectionHeader } from "~/components/section";

interface Project {
  name: string;
  description: string;
  tags: string[];
  href: string;
  repo: string;
}

export function Projects() {
  const { t } = useTranslation();

  const projects = t("projects", { returnObjects: true }) as Project[];

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow={t("work.eyebrow")}
        title={t("work.title")}
        subtitle={t("work.subtitle")}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            as="article"
            key={project.name}
            delay={index * 0.08}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <h3 className="font-serif text-lg font-bold tracking-tight">
              {project.name}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {project.href || project.repo ? (
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {t("work.viewLive")}
                    <LuArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : null}

                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LuGithub className="h-4 w-4" />
                    {t("work.viewCode")}
                  </a>
                ) : null}
              </div>
            ) : null}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
