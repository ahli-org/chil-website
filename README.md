# AHLI CHIL — website

Website for **AHLI CHIL, the Conference on Health, Inference, and Learning**
([chil.ahli.cc](https://chil.ahli.cc)), built with [Astro](https://astro.build) as a
static site.

## Quick start

Requires [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install      # install dependencies
npm run dev      # local dev server — open the URL it prints
npm run build    # production build into ./dist
npm run preview  # serve the built ./dist locally
```

Pushing to `main` deploys the site to GitHub Pages via `.github/workflows/deploy.yml`.

## Editing content

| To change… | Edit… |
| --- | --- |
| Name, dates, venue, email, social links, Register URL, home-page stats | `src/lib/site.ts` (`SITE`) |
| Navigation menu | `src/lib/site.ts` (`NAV`) |
| Home page | `src/pages/index.astro` |
| Speakers, talks, organizers | `src/data/people.ts` |
| Schedule | `src/pages/attend/schedule.astro` |
| Sponsorship levels | `src/pages/sponsor.astro` |
| Sponsor logos | `src/lib/sponsors.ts` + `public/sponsors/` |
| Other pages (CFP, doctoral symposium, policies, …) | `src/pages/**/*.md` |
| Colours, fonts, layout | `src/styles/global.css` |

### Adding a Markdown page

Create `src/pages/<section>/<page>.md` with this frontmatter, then add it to `NAV`:

```md
---
layout: ../../layouts/MarkdownLayout.astro
title: My Page
eyebrow: Program   # breadcrumb section
---
```

`NAV` paths are either site paths (`'speakers'`) or absolute URLs, which open in a
new tab.
