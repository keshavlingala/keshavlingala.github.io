# CLAUDE.md

Personal portfolio of Keshav Reddy Lingala, built with **Astro 5** (static output) and deployed to **GitHub Pages** at https://keshav.codes.

## Commands

```bash
npm run dev        # astro dev server on http://127.0.0.1:4321
npm run build      # static build to ./dist
npm run preview    # serve the built ./dist
npm run typecheck  # astro check
```

Node >= 18 (CI uses Node 20).

## Architecture

- **Static Astro site** — `astro.config.mjs` sets `output: "static"`, `site: "https://keshav.codes"`, with `@astrojs/mdx` and `@astrojs/sitemap` integrations.
- **Pages** (`src/pages/`): `index.astro` (single-page portfolio), `[slug].astro` (project post pages from the content collection), `404.astro`.
- **Layouts** (`src/layouts/`): `Base.astro` (global shell + SEO), `PostLayout.astro` (project post wrapper).
- **Components** (`src/components/`): `Hero`, `Nav`, `Experience`, `ProjectsLog`, `SkillGalaxy`, `Contact`, `Footer`, plus `SEO`, `Section`, `SectionHeader`, `ToolTip`.
- **Content collection**: project write-ups live in `src/content/posts/<name>/` (MDX + colocated `images/`), configured in `src/content.config.ts`. Each renders at `/<slug>` via `[slug].astro`.
- **Data**: `src/data/experience.ts` and `src/data/skills.ts` drive the Experience and Skill sections. `src/constants.ts`, `src/site.ts`, `src/iconNames.ts`, `src/icons.ts` hold site config and icon registries.
- **Machine-readable twins** (`src/lib/markdown.ts` + endpoints in `src/pages/`): `llms.txt.ts`, `llms-full.txt.ts`, `about.md.ts` and `[slug].md.ts` render the same content as plain markdown for LLM crawlers and agents. Pages advertise their twin with `<link rel="alternate" type="text/markdown">` (the `markdown` prop on `Base`/`SEO`); `public/robots.txt` points at them; the sitemap filters `.md`/`.txt` routes out.
- **Client scripts**: `src/scripts/skill-galaxy.ts` (interactive skill visualization).
- **Styles**: global CSS in `src/styles/global.css`; components use Astro scoped `<style>` blocks.
- **Static assets**: `public/` — includes `CNAME` (`keshav.codes`), `manifest.webmanifest`, `robots.txt`, `logo.svg`, icons, gifs. Astro copies `public/` verbatim into `dist/`.

## Deployment

`.github/workflows/build_astro.yml` runs on push to `main`: `npm ci` → `npm run build` → publishes `./dist` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. The custom domain works because `public/CNAME` ends up in the build output — do not remove it.

## Project rules

These are learned constraints specific to this Astro codebase — follow them:

- **Do not self-validate.** The user tests every change manually (builds, typechecks, dev server, visual checks) and reports back. After making code changes, stop and hand off with a summary — don't run `astro check`, `npm run build`, `npm run dev`, etc. just to confirm a change works. (The user catches visual regressions that static inspection misses.)
