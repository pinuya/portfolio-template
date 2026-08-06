import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter()],

  // Resolve o alias `~/*` do tsconfig.json. A partir do Vite 8 isso é nativo,
  // então o plugin `vite-tsconfig-paths` não é mais necessário.
  resolve: {
    tsconfigPaths: true,
  },
});
