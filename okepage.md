# Okepage: Print Many Photos on One Page, In Your Browser

> Printing a stack of photos usually means one sheet per photo, a photo-shop trip, or fighting a word processor into a grid. Okepage (ఒకేపేజీ — “just one page”) is a single-page browser tool that takes a pile of photos and lays them out on A4 sheets ready to print and cut: pick 1, 2, 4, 6, 9 per page or let Auto find the tightest grid the paper allows, flip between portrait and landscape, crop to fill or keep the whole photo, and set gap, paper-edge margin and a cutting line in real millimetres. It is deliberately dependency-free — no framework, no bundler, no npm packages, no server — five plain scripts that also run straight from a file:// URL, so the photos are read from disk in the browser and never leave the machine. It is an installable PWA backed by a hand-written service worker, so after one visit it opens and prints with no network at all, and it never reloads itself out from under a print job. The interface is bilingual (Telugu by default, English one click away), and the whole thing ships to Cloudflare Workers static assets from a GitHub Action.

- **Author:** Keshav Lingala (Senior Software Engineer) — https://keshav.codes
- **Published:** August 2026
- **Project page:** https://keshav.codes/okepage/ (screenshots and diagrams are on that page)
- **Tech:** HTML, CSS, Javascript, PWA, Github Actions
- **Live demo:** https://okepage.keshav.codes
- **Source:** https://github.com/keshavlingala/okepage
- **Topics:** Okepage, ఒకేపేజీ, Photo printing, A4 photo grid, Print photos on one page, Passport photo sheet, Vanilla JavaScript, No build step, Offline first, PWA, Progressive Web App, Service worker, Installable web app, Works offline, Telugu app, Bilingual UI, Cloudflare Workers, Static site, Keshav Lingala, Keshav Reddy, Keshav Reddy Lingala, Lingala Keshav Reddy, Keshav

---

> Live: [okepage.keshav.codes](https://okepage.keshav.codes) — drop a few photos in; nothing is uploaded anywhere.

## ABSTRACT

**Okepage** (ఒకేపేజీ — *"just one page"*) solves a small, stubborn, very domestic problem: you have twenty photos and you want them on paper, several to a sheet, cut apart afterwards. Every existing route is annoying — a photo studio, a subscription design tool, or half an hour of dragging images into a word processor that thinks in inches and margins you cannot see. Okepage is a single HTML page that does exactly this one job: drop photos in, choose how many fit on an A4 sheet, print. It has no backend, no build step, no dependencies and no accounts, and the photos never leave the browser.

*Figure: Okepage in Telugu — six photos auto-packed onto one A4 sheet*

## The Idea

The tool is built for the way this actually happens at home: a folder of WhatsApp downloads, a pen drive from a function, a phone plugged into a laptop — and a printer that will happily waste a full sheet on each photo. The entire interaction is therefore four decisions, numbered down the sidebar in the order you make them: **paper orientation → photos per page → cutting and spacing → the one photo you are fiddling with**. Nothing else is on screen.

Telugu is the default language, not a translation afterthought. The people I built this for read Telugu first, so the app opens in Telugu and English is one click away in the top bar; exactly one language is visible at a time, and every string — including the dynamic ones like "6 photos on 1 sheet" — exists in both.

*Figure: The drop zone — the whole window accepts a drop*

## How It Works

### Everything is millimetres until the last moment

A printer thinks in millimetres, so `layout.js` does too. A4 is 210 × 297 mm; landscape swaps them. The module is pure geometry with no DOM access — given the settings and a photo count it returns the grid, the printable area, the cell size, the gaps and the page count, in mm plus the pixel values the drag maths needs (`PX_PER_MM` is 96/25.4). The renderer writes those numbers into CSS custom properties on the sheet container, so the stylesheet never hardcodes a size and the same code path drives the screen preview and the printed sheet.

**Auto** is the preset I use most: instead of asking the user to know that six portrait photos want a 2 × 3 grid, it derives the grid from the photo count and the printable area's aspect ratio, then drops any row or column that would come out completely empty — so five photos do not print with a blank sixth cell reserved.

*Figure: Nine per page, portrait, with a 1 px cutting line and a 3 mm gap*

### Getting the print right

Printing is where tools like this usually fall apart, because the screen preview is a scaled-down transform and the printer does not care about your transform. The preview shrinks a sheet to fit the stage with a `--scale` factor, and the `@media print` block exists to undo exactly that: it strips the transform and every layout wrapper so each sheet prints at its true millimetre size, and hides anything marked as UI chrome. A `<style id="page-rule">` element is rewritten on every render with `@page { size: A4 portrait|landscape; margin: 0 }`, so the browser's print dialog already has the right paper and orientation before the user touches it. The footer permanently states the four settings that matter — A4, margins **None**, scale **100%**, headers **off** — because those are what people get wrong.

Because a broken print is invisible on screen, the print path gets verified headlessly: Chrome's `--print-to-pdf` on a seeded page, then a check that the PDF's MediaBox is 595 × 842 pt for portrait and 842 × 595 pt for landscape.

### Cropping without re-rendering

Each photo is a small record — id, blob URL, `cover` or `contain`, an object-position pair, and a zoom. Selecting one lets you drag it inside its cell to choose what survives the crop, zoom it, duplicate it, fill an entire sheet with copies of it, or remove it.

The app has no framework: state lives in a `Store`, every mutation goes through it, and the single subscriber rebuilds the visible UI. Two deliberate exceptions keep that honest approach fast — `<img>` nodes are cached per photo id and re-parented on each render so a photo never reloads or flashes, and a crop drag writes `objectPosition` straight onto the cached image while recording it silently, instead of re-rendering on every pointer move.

*Figure: Landscape A4, four per page, one photo selected for cropping — the English UI*

### Working with no network at all

A tool for printing things at home should not need the internet, so Okepage is a PWA: a service worker precaches every file on install and serves everything cache-first afterwards, and a manifest plus a set of icons make it installable, so it gets a Home Screen icon and its own window instead of living in a tab. Google Fonts — the one thing loaded from another origin — goes into a second cache lazily rather than up front, so even a first visit that is already offline works; it just falls back to system fonts.

Having no build step shows up here in an interesting way. Nothing hashes the filenames, so there is no generated precache manifest to lean on: the worker carries a hand-written list of files and a `VERSION` constant that must be bumped whenever one of them changes. That is the honest price of not having a bundler, and it is still cheaper than the bundler.

Updates are deliberately *not* automatic. A worker that calls `skipWaiting()` can swap the app out from under a live page, and for a tool whose whole job ends in a print dialog, that is precisely the moment you must not interrupt. So a new version installs, then waits. The footer offers **"new version — click to reload"**, and nothing moves until that click. The same footer only claims **"works without internet"** once the worker has genuinely finished caching — before that it stays silent, because the promise would not yet be true.

None of it disturbs the `file://` route: service workers do not exist there at all, so the registration checks the protocol and no-ops, and a downloaded folder behaves exactly as it did before.

## Constraints I Kept

- **No ES modules.** Scripts load as ordered `<script>` tags, each exposing one global (`I18N`, `Store`, `Layout`, `Offline`). Modules would break `file://` usage — and opening `index.html` straight from a downloaded folder is a legitimate way to run this.
- **No npm packages, bundlers or CSS frameworks.** Five files, ~zero install, readable in an afternoon.
- **No server, ever.** Photos are read as blob URLs in the browser and are gone when the tab closes. Only the layout settings persist, in `localStorage`.
- **One network request**, for the Google Fonts stylesheet — cached by the service worker after the first visit, and the page still works without it.

## Deployment

The repo *is* the deployable artifact. A GitHub Action on `main` hands it to `wrangler`, which uploads the directory to **Cloudflare Workers static assets** — no build command, because there is nothing to build. An `.assetsignore` keeps the things that are not the app (README, `CLAUDE.md`, workflow files) out of the upload, and `wrangler.jsonc` binds the custom domain `okepage.keshav.codes` while leaving the apex records that point `keshav.codes` at GitHub Pages untouched. The service worker ships as just another file in that directory — which is why bumping its `VERSION` is part of changing the app, not part of a build.

## What I Took From It

The interesting constraint was not technical, it was editorial: every feature that would have made this a "photo editor" was left out. No filters, no templates, no login, no cloud library. What remains is a tool that loads instantly, works on a laptop with no internet, and can be explained to a parent in one sentence — in their own language.

---

From the project archive of Keshav Lingala — https://keshav.codes. Machine-readable index: https://keshav.codes/llms.txt
