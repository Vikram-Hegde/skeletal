import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

export const router = createRouter({
  routeTree,
  // Vite injects import.meta.env.BASE_URL from `base` in vite.config.ts:
  // - dev: "/" → basepath "" (root)
  // - build: "/skeletal/" → basepath "/skeletal" for GitHub Pages project site
  basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  scrollRestoration: true,
  defaultPreload: "intent",
  defaultViewTransition: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
