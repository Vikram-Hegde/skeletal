// Setup for the `visual` project only (runs in the browser).
// - design-system tokens (index.css) so screenshots render styled
// - frozen animations/transitions for deterministic screenshots
//   (per https://vitest.dev/guide/browser/visual-regression-testing)
// - settled fonts before every screenshot, declared once here instead of in
//   each test (setup-file hooks apply to every test file in the project)
import { beforeEach } from "vitest";
import "./index.css";

beforeEach(async () => {
  await document.fonts.ready;
});

if (typeof document !== "undefined") {
  const stylesheet = document.createElement("style");
  stylesheet.textContent = `*,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important;transition-duration:0s!important;transition-delay:0s!important}`;
  document.head.appendChild(stylesheet);
}
