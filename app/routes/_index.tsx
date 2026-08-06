import type { MetaFunction } from "react-router";

import { About } from "~/components/sections/about";
import { Contact } from "~/components/sections/contact";
import { Experience } from "~/components/sections/experience";
import { Hero } from "~/components/sections/hero";
import { Projects } from "~/components/sections/projects";
import { Stack } from "~/components/sections/stack";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { siteConfig } from "~/config/site";

export const meta: MetaFunction = () => {
  const title = `${siteConfig.name} — Portfolio`;
  const description =
    "Portfolio built with React Router, Tailwind CSS and TypeScript.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteConfig.url },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

export default function Index() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
