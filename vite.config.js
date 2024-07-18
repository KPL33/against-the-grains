import { defineConfig } from "vite";

export default defineConfig({
  root: "client", // Set the root directory for Vite
  build: {
    outDir: "dist", // Output directory for the build
    emptyOutDir: true, // Ensure the output directory is emptied before each build
  },
});
