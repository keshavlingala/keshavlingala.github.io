// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  server:{
    host:true,
    port:4321
  },
  site: "https://keshav.codes",
  output: "static",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
});
