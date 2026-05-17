# CLAUDE.md

Personal portfolio site for Keshav Lingala — a static Gatsby 5 site deployed to GitHub Pages at **https://keshav.codes**.

## Commands

```bash
npm run start      # gatsby clean && develop on 127.0.0.1 (use this for local dev)
npm run develop    # gatsby develop (no clean)
npm run build      # gatsby clean && build → ./public
npm run serve      # serve the built ./public
npm run buildRun   # build + serve
npm run typecheck  # tsc --noEmit (no separate lint setup)
npm run clean      # clear Gatsby cache
```

Node >= 18 (see `engines`). After dependency or schema changes, run `npm run clean` — Gatsby's `.cache` causes stale GraphQL/type errors otherwise.

## Architecture

Content-driven static site. Project case studies live as MDX, the homepage and per-project pages are generated from them.

- **Content source of truth:** `src/content/posts/<slug>/index.mdx`. Each post's frontmatter (`slug`, `title`, `date`, `description`, `techs`, `code`, `code2?`, `demo`, `featuredImage`) drives everything. Co-located `images/` are processed by `gatsby-plugin-sharp`.
- **Page generation:** `gatsby-node.ts` → `createPages` queries `allMdx` and creates one page per post at `/<slug>` using `src/templates/PostLayout.tsx`. `createSchemaCustomization` declares the `MdxFrontmatter` GraphQL type.
- **Homepage:** `src/pages/index.tsx` composes single-page sections: `Profile` → `Projects` (static query over all MDX, sorted by date) → `Skills` → `ContactMe`. Anchor `<span>`s provide in-page nav targets.
- **Layout:** `src/layouts/layout.tsx` wraps every page (header logo + footer). Global CSS in `src/layouts/layout.css` (~900 lines: animations, fonts, base styles).
- **SEO:** `src/components/SEO.tsx` rendered via Gatsby's **Head API** (`export const Head`) in `index.tsx` and `PostLayout.tsx`. Site-wide metadata comes from `gatsby-config.ts` → `useSiteMetadata` hook.
- **Icons:** tech icons are SVGs in `src/content/icons/`. `src/iconNames.ts` is the `IconNames` enum (display label = enum value), `src/hooks/useIcons.tsx` maps each name to its imported SVG. Frontmatter `techs: [...]` and `Skills.tsx` reference icons by these names.
- **Contact form:** `ContactMe.tsx` POSTs to an external mailing service; endpoints are hardcoded in `src/constants.tsx` (`MAILING_URL`, `ANON_MAILING_URL`, Railway-hosted).
- **Deploy:** `.github/workflows/build_gatsby.yml` builds on push to `main`, writes `public/CNAME` (`keshav.codes`), publishes to the `gh-pages` branch via `peaceiris/actions-gh-pages`.

## Conventions

- **Styling:** Emotion `styled` components defined at the top of each component file. Dark theme; accent color `#ffd285`, background `#1b1b1b`. Responsive breakpoint is `@media (max-width: 600px)`. Prefer extending this pattern over adding new CSS files.
- **TypeScript:** `strict: true`. Shared types in `src/types.d.ts`; SVG module shim in `src/custom.d.ts`. Static-query results are often loosely typed (`any`/non-null `!`) — acceptable here, but type new queries when practical.
- **Adding a project:** create `src/content/posts/<slug>/index.mdx` with full frontmatter + a `featuredImage`; no code changes needed. `techs` values must match `IconNames` enum values exactly or the icon is silently skipped.
- **Adding a tech icon:** drop the SVG in `src/content/icons/`, add an `IconNames` entry, then register it in `useIcons.tsx`.

## Gotchas

- `code2` frontmatter is queried in `gatsby-node.ts` but **not** declared in `createSchemaCustomization` — it currently works only because two posts (`payment-dbs`, `bump`) define it, letting Gatsby infer the field. Removing those posts would break the build until `code2` is added to the schema.
- `gatsby-node.ts` queries `tableOfContents` and passes it through page context, but nothing renders it (TOC was removed). Dead query/context weight.
- `Projects.tsx` calls `useState` **inside a `.map()`** — violates the Rules of Hooks; works only because the post list length is stable per render.
- `Skills.tsx` tracks the active skill via a **reassigned module-level `let skills`**, not React state — the active highlight updates only as a side effect of `setItems` re-rendering.
- Unused dependencies: `gatsby-image`, `react-helmet` + `gatsby-plugin-react-helmet`, and `gatsby-remark-gifs` (not registered in `gatsby-config.ts`) are not imported/used anywhere.
- `onCreateWebpackConfig` in `gatsby-node.ts` patches `Compilation.getAssetPath` and forces `[fullhash]` filenames — a deliberate Gatsby 5 / webpack workaround; don't remove without retesting the build.
</content>
</invoke>
