import { defineConfig } from "vite";

export default defineConfig({
  root: "client", // Specify the root directory for Vite
  build: {
    outDir: "../dist", // Specify the output directory relative to the root
    emptyOutDir: true, // Ensure the output directory is emptied before each build
  },
});
