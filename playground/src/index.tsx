import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/geist";
import "@fontsource-variable/jetbrains-mono";
import { router } from "@/router";
import { ThemeProvider } from "@/theme";
import "@skeletal/index.css";
import "@/docs.css";

const rootElement = document.querySelector("#app");
if (!rootElement) throw new Error("Missing #app root element");

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
