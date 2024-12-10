/// <reference types="vitest" />

import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";
import inject from "@rollup/plugin-inject";
import viteReact from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export const hash = Math.floor(Math.random() * 90000) + 10000;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
    port: 3000,
  },
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `Assets/[name]${hash}.js`,
        chunkFileNames: `Assets/[name]${hash}.js`,
        assetFileNames: `Assets/[name]${hash}.[ext]`,
      },
      plugins: [
        inject({
          React: "react",
          exclude: "src/**",
        }),
      ],
    },
    commonjsOptions: { requireReturnsDefault: "preferred" },
  },
  plugins: [viteReact()],
  resolve: {
    alias: [
      { find: "~/Components", replacement: path.resolve(__dirname, "./src/Components") },
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [],
    },
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "happy-dom",
    // include: ['**/*.test.ts'],
    reporters: "dot",
    isolate: true,
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
    globals: true,
    setupFiles: "/Tests/setup.ts",
  },
});
