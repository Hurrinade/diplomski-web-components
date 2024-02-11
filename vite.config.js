import { fileURLToPath, URL } from "node:url";
import path from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      // Use for lib building
      entry: "./src/init.js",
      formats: ["es", "cjs"],
      name: "web-component",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    sourcemap: true, // create source map, map compailed code to original
    target: "esnext", // choose target build
  },
});
