// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://keshav.codes",
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    mdx(),
    // The sitemap lists indexable HTML pages only — the machine-readable
    // twins (/llms.txt, /about.md, /<slug>.md) are advertised in robots.txt
    // and via <link rel="alternate"> instead.
    sitemap({
      filter: (page) => !/\.(md|txt)$/.test(new URL(page).pathname),
    }),
    AstroPWA({
      registerType: "autoUpdate",
      // We ship our own public/manifest.webmanifest (linked in Base.astro),
      // so the plugin only generates + registers the service worker.
      manifest: false,
      workbox: {
        // Precache the app shell: HTML, JS, CSS, fonts, icons and smaller images.
        globPatterns: ["**/*.{html,js,css,svg,woff2,ico,png,jpg,jpeg,webp}"],
        // The demo gifs are 2–21 MB each — never precache them.
        globIgnores: ["**/gifs/**"],
        // Cap precache entries so a stray large image can't bloat the install.
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        cleanupOutdatedCaches: true,
        // Anything not precached (large images, gifs) is cached on first view,
        // so a visited project page keeps working offline.
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
});
