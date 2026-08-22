/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./playground",
  plugins: [
    tanstackRouter({
      routesDirectory: fileURLToPath(new URL("./playground/src/routes", import.meta.url)),
      generatedRouteTree: fileURLToPath(
        new URL("./playground/src/routeTree.gen.ts", import.meta.url),
      ),
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./playground/src", import.meta.url)),
      "@elemental": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    root: ".",
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: "chromium" }],
      headless: true,
    },
  },
});
