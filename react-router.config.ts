import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  /**
   * Server-side rendering. Deixe `true` para o portfólio ser renderizado no
   * servidor (melhor para SEO e para o compartilhamento de links).
   *
   * Se quiser gerar um site totalmente estático, troque para `false` — o
   * `react-router build` passa a emitir HTML pré-renderizado.
   */
  ssr: true,

  /**
   * Ajusta o build para o runtime da Vercel (funções serverless e assets).
   */
  presets: [vercelPreset()],

  /**
   * Comportamentos que passam a ser padrão no React Router v8. Ligar agora
   * deixa a futura atualização quase sem trabalho — e silencia os avisos
   * que apareceriam em todo build.
   */
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
} satisfies Config;
