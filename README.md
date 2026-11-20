# Leigh-Ann Martin — services site

Astro + Tailwind static site, deployed to GitHub Pages on every push to `main`.

**Live base URL:** https://izzydoesizzy.github.io/leigh-ann-services/
**Start here (for Leigh-Ann):** https://izzydoesizzy.github.io/leigh-ann-services/review
**Page directory (in the browser):** https://izzydoesizzy.github.io/leigh-ann-services/archive
**Intake form (every Book a call button):** https://docs.google.com/forms/d/1NiMiUdhcx3ph5VCF6yI_nZJgvUZbihtdkXCPmrCju1E/viewform
**Contact email used on every page:** info@leighannmartin.com

The repo holds several versions of the site side by side. This file is the map. Every page below has a header screenshot (first screen at 1280px) and a full-page screenshot in [`docs/screenshots/`](docs/screenshots/). Click any full-page thumbnail to open it at full size.

---

## 1. Current candidates

The simplified one-page site, built in October 2026 from Leigh-Ann's outline: hero, about, core skills, who she works with, industries, two case studies, done by / with / for you, 1–3 month engagement terms, and a single **Book a call** button. No pricing on the page (pricing lives in the intake form). Same content in two visual themes.

| | Homepage | Teal & Clay |
|---|---|---|
| **Live** | https://izzydoesizzy.github.io/leigh-ann-services/ | https://izzydoesizzy.github.io/leigh-ann-services/new |
| **Source** | `src/pages/index.astro` | `src/pages/new.astro` |
| **Theme** | Editorial: ivory paper, near-black ink, copper accent. Fraunces + Inter. | Teal & Clay: ivory, sage colour block, teal accent, one clay flourish. Fraunces + Figtree. Ported from Variation C of the `leigh-ann-ea` repo's `/v10/heroes` explorations. |
| **Differs by** | Keeps the palette of the previous site, so it reads as a trimmed-down version of it. | Warmer and softer. Arch-shaped portrait, stat pills under the hero, cards for skills and case studies, sage band for packages, dark footer. |
| **Indexed** | Yes | No (preview) |
| **Header** | ![](docs/screenshots/home-header.png) | ![](docs/screenshots/new-header.png) |
| **Full page** | [![](docs/screenshots/home-header.png)](docs/screenshots/home-full.jpg) | [![](docs/screenshots/new-header.png)](docs/screenshots/new-full.jpg) |

Every **Book a call** button on both pages, and on both capability briefs, goes to the Google intake form. The link is set once, as `BOOK_URL` in `src/data/capability-brief.ts`.

**Heading picker.** Both pages have a floating "Heading 1 / 2" pill at the bottom so Leigh-Ann can flip between candidate hero headings. The candidates (title + lead paragraph) live in `src/data/headings.ts`; the pill is `src/components/HeadingSwitcher.astro`. Append `?heading=2` to a URL to open a page on a given heading. Once she's chosen, delete the unused entry, remove the `<HeadingSwitcher>` from both pages and the `data-heading-*` hooks in their heroes.

---

## 2. Capability brief (updated November 2026)

A long-form brief to send to prospects, also printable to PDF. Rebuilt in November 2026 from Leigh-Ann's voice note, her "Cap Briefing Updates" doc, and the Oct 1 and Nov 7 calls. Same content in two visual themes.

| | Editorial | Teal & Clay |
|---|---|---|
| **Live** | https://izzydoesizzy.github.io/leigh-ann-services/capability-brief | https://izzydoesizzy.github.io/leigh-ann-services/new/capability-brief |
| **Source** | `src/pages/capability-brief.astro` | `src/pages/new/capability-brief.astro` |
| **Theme** | Editorial, matches `/` | Teal & Clay, matches `/new` |
| **Indexed** | Yes | No (preview) |
| **Header** | ![](docs/screenshots/capability-brief-header.png) | ![](docs/screenshots/new-capability-brief-header.png) |
| **Full page** | [![](docs/screenshots/capability-brief-header.png)](docs/screenshots/capability-brief-full.jpg) | [![](docs/screenshots/new-capability-brief-header.png)](docs/screenshots/new-capability-brief-full.jpg) |

**All the copy lives in one file:** `src/data/capability-brief.ts`. Edit it there and both pages update. It holds the bio, At a glance, stats, case studies, packages, process steps, credentials, the email address and the booking link (`BOOK_URL`, also used by `/` and `/new`). Testimonials come from `src/data/pull-quotes.ts`.

**Chapters:**

1. **About**: Leigh-Ann's bio and an At a glance panel.
2. **By the numbers**: eight headline metrics.
3. **Selected work**: To Be Hosted (fractional EA and operations, current client), then Ascend board cadence, Immunovant EA function, and Ascend earnings prep.
4. **How clients describe me**: one feature quote from Pam Connealy, four short quotes, and a closer. Only Pam's is live on LinkedIn; the rest are anonymised by role.
5. **Ways to work together**: done by you, done with you, done for you, plus the four disciplines (operations, executive partnership, board and governance, investor relations). No prices, by decision.
6. **How I work**: intake form, discovery call, scope, kickoff, handoff or ongoing.
7. **Credentials**
8. **Next steps**: Book a call (intake form) or email.

**Placeholders waiting on Leigh-Ann** (also listed on `/review`):
- The To Be Hosted metrics panel ("Founder + 4 / Google Workspace / Admin to proposals"), and her title there.
- The new LinkedIn recommendations she wants added.
- Whether to keep the "Resume-backed metrics…" line in chapter 2.
- The cover line and the "Open to" line, which may no longer fit.
- An expected date for the Salesforce certification.

The previous version of the brief is kept unchanged at `/archive/editorial/capability-brief` (section 3).

---

## 3. Review page for Leigh-Ann

| | |
|---|---|
| **Live** | https://izzydoesizzy.github.io/leigh-ann-services/review |
| **Source** | `src/pages/review.astro` |
| **Theme** | Teal & Clay. Not indexed. |
| **Screenshot** | [![](docs/screenshots/review-header.png)](docs/screenshots/review-full.jpg) |

One page to send her: links to both briefs, both homepages, the intake form and the older versions, a list of what changed, and the open questions. The lists are plain arrays at the top of the file, so update them each review round.

---

## 4. Previous site (editorial)

The long-form fractional-EA site that was the homepage until October 2026, aimed at pre-IPO and public-company executives: personas, four engagement tiers, case studies with metrics, a skills matrix, FAQ, press. Kept intact under `/archive/editorial/` with its three subpages. All noindex.

| Page | Live | Source | What it is |
|---|---|---|---|
| Homepage | https://izzydoesizzy.github.io/leigh-ann-services/archive/editorial | `src/pages/archive/editorial/index.astro` | 17 sections. Assembled from the components in `src/components/editorial/`. |
| Services index | https://izzydoesizzy.github.io/leigh-ann-services/archive/editorial/services | `src/pages/archive/editorial/services.astro` | Catalogue of 37 services across disciplines. Linked from the editorial homepage. |
| Packages | https://izzydoesizzy.github.io/leigh-ann-services/archive/editorial/packages | `src/pages/archive/editorial/packages.astro` | Priced packages. Deliberately unlinked; shared only after a discovery call. |
| Capability brief | https://izzydoesizzy.github.io/leigh-ann-services/archive/editorial/capability-brief | `src/pages/archive/editorial/capability-brief.astro` | The brief as it was before the November 2026 update, frozen. Has its own copy inline; it does not read `src/data/capability-brief.ts`. The current brief is section 2. |

| Homepage | Services index |
|---|---|
| ![](docs/screenshots/editorial-home-header.png) | ![](docs/screenshots/editorial-services-header.png) |
| [Full page](docs/screenshots/editorial-home-full.jpg) (very long) | [Full page](docs/screenshots/editorial-services-full.jpg) |

| Packages | Capability brief |
|---|---|
| ![](docs/screenshots/editorial-packages-header.png) | ![](docs/screenshots/editorial-capability-brief-header.png) |
| [Full page](docs/screenshots/editorial-packages-full.jpg) | [Full page](docs/screenshots/editorial-capability-brief-full.jpg) |

---

## 5. Style mockups

Four alternative looks for the previous site, built to pick a visual direction. Content is a trimmed copy of the editorial homepage, so only the styling differs. Each has a floating "Preview" switcher at the bottom to jump between them. All noindex.

| Mockup | Live | Source | Look |
|---|---|---|---|
| Minimalist | https://izzydoesizzy.github.io/leigh-ann-services/archive/mockups/minimalist | `src/pages/archive/mockups/minimalist.astro` | White, Inter, hairlines. Quiet product-site feel. |
| Institutional | https://izzydoesizzy.github.io/leigh-ann-services/archive/mockups/institutional | `src/pages/archive/mockups/institutional.astro` | Navy, gold, serif. Law-firm / advisory feel. |
| Brutalist | https://izzydoesizzy.github.io/leigh-ann-services/archive/mockups/brutalist | `src/pages/archive/mockups/brutalist.astro` | Black, bone, mono. Heavy rules, uppercase, grid. |
| Dark luxe | https://izzydoesizzy.github.io/leigh-ann-services/archive/mockups/dark-luxe | `src/pages/archive/mockups/dark-luxe.astro` | Near-black, gold. High-contrast luxury feel. |

| Minimalist | Institutional |
|---|---|
| ![](docs/screenshots/mockup-minimalist-header.png) | ![](docs/screenshots/mockup-institutional-header.png) |
| [Full page](docs/screenshots/mockup-minimalist-full.jpg) | [Full page](docs/screenshots/mockup-institutional-full.jpg) |

| Brutalist | Dark luxe |
|---|---|
| ![](docs/screenshots/mockup-brutalist-header.png) | ![](docs/screenshots/mockup-dark-luxe-header.png) |
| [Full page](docs/screenshots/mockup-brutalist-full.jpg) | [Full page](docs/screenshots/mockup-dark-luxe-full.jpg) |

---

## Change log

**November 2026**
- Restored `/capability-brief`, which went missing when the October reorganisation moved the old brief to `/archive/editorial/capability-brief`.
- Rewrote the brief from Leigh-Ann's notes and calls (see section 2): new bio, To Be Hosted case study, simpler testimonials, packages instead of the 37-service catalog, new process, updated credentials. Removed "Four shapes of fractional" and "In the press".
- Added a Teal & Clay version at `/new/capability-brief`, and moved the brief's copy into `src/data/capability-brief.ts` so both versions share it.
- Every **Book a call** button on `/`, `/new` and both briefs now goes to the Google intake form instead of Calendly. The archived pages still link to Calendly.
- Replaced the old Gmail address with info@leighannmartin.com on every page, archive included.
- Added the `/review` start page for Leigh-Ann.

**October 2026**
- Simplified one-page site became the homepage; `/new` added in the Teal & Clay theme.
- Everything older moved under `/archive` (see Old slugs below).
- Heading picker and share images added to `/` and `/new`.

---

## Old slugs

Slugs were flattened out in October 2026. If you have an old link:

| Old | Now |
|---|---|
| `/` (editorial homepage) | `/archive/editorial` |
| `/services` | `/archive/editorial/services` |
| `/packages` | `/archive/editorial/packages` |
| `/capability-brief` | Still `/capability-brief`, now the updated brief. The old version is at `/archive/editorial/capability-brief`. |
| `/v2` (mockup) | `/archive/mockups/minimalist` |
| `/v3` | `/archive/mockups/institutional` |
| `/v4` | `/archive/mockups/brutalist` |
| `/v5` | `/archive/mockups/dark-luxe` |

---

## Repo layout

```
src/
  pages/
    index.astro                  /                       simplified site, editorial theme
    new.astro                    /new                    simplified site, teal & clay theme
    capability-brief.astro       /capability-brief       capability brief, editorial theme
    new/capability-brief.astro   /new/capability-brief   capability brief, teal & clay theme
    review.astro                 /review                 start page for Leigh-Ann: links, changes, questions
    archive/
      index.astro                /archive                directory of every page
      editorial/                 /archive/editorial/…    previous site + subpages
      mockups/                   /archive/mockups/…      four style mockups
  layouts/
    EditorialLayout.astro        loads styles/editorial.css (used by /, /capability-brief, archive/editorial, mockups)
    TealLayout.astro             loads styles/teal.css     (used by /new, /new/capability-brief, /review, /archive)
  styles/
    editorial.css                ivory / ink / copper tokens, Fraunces + Inter
    teal.css                     ivory / sage / teal / clay tokens, Fraunces + Figtree
  components/
    editorial/                   sections of the previous site (Masthead, Overture, TwoPaths, …)
    mockups/VariantSwitcher.astro
    HeadingSwitcher.astro        floating picker for the candidate hero headings on / and /new
  data/
    capability-brief.ts          all copy for both capability briefs, plus BOOK_URL and EMAIL used site-wide
    headings.ts                  candidate hero headings (title + lead paragraph) for / and /new
    pull-quotes.ts               anonymised testimonials used by the briefs and editorial pages
public/portrait.jpg              the one portrait every version uses
docs/screenshots/                header (PNG) + full-page (JPG) shots of every page
```

The two stylesheets are independent: each imports Tailwind and declares its own `@theme`, so a page only ever gets the tokens of the layout it uses.

## Working on it

```
pnpm install
pnpm dev        # http://localhost:4321/leigh-ann-services/
pnpm build      # output in dist/
```

Pushing to `main` deploys everything in `dist/` to GitHub Pages via `.github/workflows/deploy.yml`. Work on a branch and merge when ready.

**Share images** (the preview card when a link is pasted into LinkedIn, iMessage, Slack, etc.): `public/og.png` for `/` and `public/og-new.png` for `/new`, both 1200×630. They're rendered from `scripts/og/template.html` with `node scripts/og/render.mjs` (needs Playwright). The headline is hard-coded in the template; update it there once Leigh-Ann picks a heading, re-run, and commit the PNGs. Add `--all` to dump the other four concepts into `scripts/og/out/`.

**Refreshing the screenshots** after a visual change: run `pnpm build && pnpm preview`, then take a 1280px-wide header shot (800px tall viewport) and a full-page JPEG for each page and drop them in `docs/screenshots/` using the existing names.

**Adding a page:** put it under `src/pages/`, add a row to the `/archive` directory (`src/pages/archive/index.astro`) and to this README, and add its screenshots.
