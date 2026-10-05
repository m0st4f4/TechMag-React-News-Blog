import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      usePolling: true,
      // this line tell vite to ignore change db.json file
      ignored: ["**/db.json"],
    },
    host: true,
    strictPort: true,
    port: 5173,
  },
});
