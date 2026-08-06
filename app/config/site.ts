/**
 * ─────────────────────────────────────────────────────────────
 *  EDITE ESTE ARQUIVO PARA PERSONALIZAR O SEU PORTFÓLIO
 *  EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
 * ─────────────────────────────────────────────────────────────
 *
 * Textos longos (bio, experiências, projetos) ficam em
 * `app/locales/pt.ts` e `app/locales/en.ts`, porque são traduzidos.
 * Aqui ficam os dados que não mudam de idioma.
 */

export const siteConfig = {
  /** Nome exibido na navbar e no rodapé. */
  name: "Pinuya",

  /** Usado no título da aba e em metatags. */
  url: "https://portfolio-template-one-bice.vercel.app",

  /** Foto de perfil — coloque a sua em `public/`. */
  avatar: "/pfp.jpg",

  /** Frases que aparecem no efeito de digitação da home. */
  headlines: ["Web Designer", "Full-stack Developer", "UX/UI Enthusiast"],

  /** Deixe uma string vazia para esconder o link correspondente. */
  links: {
    github: "https://github.com/pinuya",
    linkedin: "https://linkedin.com",
    email: "hello@example.com",
  },

  /**
   * Seções da navbar. O `id` precisa bater com o id da <section>
   * e o `label` com uma chave de `nav` nos arquivos de tradução.
   */
  nav: [
    { id: "about", label: "nav.about" },
    { id: "experience", label: "nav.experience" },
    { id: "projects", label: "nav.projects" },
    { id: "stack", label: "nav.stack" },
  ],

  /**
   * Suas tecnologias. Os nomes são resolvidos para ícones em
   * `app/components/sections/stack.tsx` — nomes sem ícone
   * conhecido aparecem só com o texto, então pode adicionar o que quiser.
   */
  stack: [
    {
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "Remix",
        "TypeScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "Supabase", "PostgreSQL", "MongoDB"],
    },
    {
      title: "DevOps",
      items: ["Git", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Tools",
      items: ["VS Code", "Figma"],
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
