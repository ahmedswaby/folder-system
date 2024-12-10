import { defineConfig } from 'vitest/config';
import path from "path";

export default defineConfig({
    resolve: {
        alias: [
          { find: "~/Core", replacement: path.resolve(__dirname, "./src/Core") },
          { find: "~/Models", replacement: path.resolve(__dirname, "./src/Models") },
          { find: "~/API", replacement: path.resolve(__dirname, "./src/API") },
          { find: "~/Assets", replacement: path.resolve(__dirname, "./src/Assets") },
          { find: "~/Pages", replacement: path.resolve(__dirname, "./src/Pages") },
        ],
      },
  test: {
    environment: 'jsdom',
    globals: true,
  }
});