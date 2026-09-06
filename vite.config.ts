/// <reference types="vitest/config" />
import { fileURLToPath, URL } from "node:url";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defaultExclude, defineConfig } from "vitest/config";

const playgroundAlias = {
  "@": fileURLToPath(new URL("./playground/src", import.meta.url)),
};

// Every src file imports siblings via `@skeletal/*` (see tsconfig paths), so
// any vite server that transforms src files needs this alias — the docs site
// (root config) and the visual-test browser server (project config below).
const skeletalAlias = {
  "@skeletal": fileURLToPath(new URL("./src", import.meta.url)),
};

const visualPattern = "**/*.visual.test.{ts,tsx}";

// Pixel-accurate screenshots need an identical browser environment on every
// machine, so the suite always runs in the pinned Docker image (see
// compose.yaml): `pnpm test:visual` starts the container and sets
// PLAYWRIGHT_WS_ENDPOINT below. Without the env var (e.g. bare
// `vitest --project visual`) it falls back to a locally installed browser,
// which may render differently — only the container output is canonical.
const wsEndpoint = process.env.PLAYWRIGHT_WS_ENDPOINT;
const visualProvider = wsEndpoint
  ? playwright({
      connectOptions: {
        wsEndpoint,
        exposeNetwork: "<loopback>",
      },
    })
  : playwright();

export default defineConfig({
  // Custom domain skeletal.vikram.wiki is served from root → base "/"
  // (project site vikram-hegde.github.io/skeletal would need "/skeletal/")
  base: "/",
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
  build: {
    cssTarget: "chrome130",
  },
  resolve: {
    alias: { ...playgroundAlias, ...skeletalAlias },
  },
  test: {
    root: ".",
    // Failure artifacts (actual/diff screenshots) go here; uploaded by CI.
    attachmentsDir: "./test-results",
    projects: [
      {
        test: {
          name: "unit",
          exclude: [visualPattern, ...defaultExclude],
        },
      },
      {
        // The visual-test browser server is built from this project config,
        // so it needs the same `@skeletal` alias as the docs site above.
        resolve: { alias: skeletalAlias },
        test: {
          name: "visual",
          include: [visualPattern],
          exclude: [...defaultExclude],
          setupFiles: ["./src/visual-setup.ts"],
          browser: {
            enabled: true,
            headless: true,
            provider: visualProvider,
            instances: [{ browser: "chromium", viewport: { width: 1280, height: 720 } }],
            expect: {
              toMatchScreenshot: {
                comparatorName: "pixelmatch",
                comparatorOptions: {
                  threshold: 0.2,
                  allowedMismatchedPixelRatio: 0.01,
                },
              },
            },
          },
        },
      },
    ],
  },
});
