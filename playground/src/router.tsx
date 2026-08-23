import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

export const router = createRouter({
  routeTree,
  // base "/" for custom domain skeletal.vikram.wiki (root)
  scrollRestoration: true,
  defaultPreload: "intent",
  defaultViewTransition: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
