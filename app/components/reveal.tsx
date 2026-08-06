import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the element animates in. */
  delay?: number;
  /** Pixels to travel on the Y axis. Use a negative value to come from above. */
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}

/**
 * Fades content in once it scrolls into view. Deliberately subtle — the goal
 * is to make the page feel alive, not to draw attention to the animation.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  // Visitors who asked for less motion still get the content, just without
  // the travel — only a very short fade.
  const reduceMotion = useReducedMotion();

  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </Component>
  );
}
