import type { ReactNode } from "react";

import { Reveal } from "~/components/reveal";
import { cn } from "~/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/** Consistent vertical rhythm and max width for every block of the page. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("container scroll-mt-24 py-20 md:py-28", className)}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-primary">
          <span aria-hidden className="h-px w-6 bg-primary/50" />
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-serif text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
