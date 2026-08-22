import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "tsdown";

export default defineConfig({
  platform: "browser",
  dts: true,
  entry: ["src/index.ts", "src/*/index.ts"],
  exports: false,
  alias: {
    "@skeletal": fileURLToPath(new URL("./src", import.meta.url)),
  },
  css: {
    fileName: "index.css",
    inject: true,
    splitting: true,
  },
});
