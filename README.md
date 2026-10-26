# Aether Mocker

A personal portfolio site presented as an interactive résumé: a three-column directory (`rail` /** **`feed` /** **`entries`) framed in solid rules, built so each section reads like a sheet of a well-set printed document. The palette is restricted to exactly two colours at a time and can be swapped between schemes at runtime. All content lives in a single JavaScript module.

Built with Vue 3 + Vite. Deployed to GitHub Pages.

It began as a** ****prototype in plain HTML** (static markup, CSS and a little vanilla JavaScript, built on the Tooplate 2161** ***Vora Bold* template). Once the structure settled, it was** ****converted to Vue 3 + Vite** for more in-depth development and customization: componentized sections, content driven by one file, and a theme system that swaps two CSS colour variables at runtime.

## Project structure

```
index.html                 Entry HTML + Google Fonts link
vite.config.js             Includes `base` for GitHub Pages
serve.js                   Local static server for dist/ (see above)
.github/workflows/
└── deploy.yml             Builds and deploys to GitHub Pages on push to main
public/                    Copied as-is into dist/
├── images/                Referenced from site.js (e.g. images/portrait.jpg)
└── vault/                 Optional password-protected pages (see Vaulting)
src/
├── main.js                Creates the app and imports the stylesheet
├── style.css              The single stylesheet; reads --bg / --fg everywhere
├── App.vue                Owns theme + active-section state, lays out the page
├── content/
│   └── site.js            All site copy, themes, projects, links
├── components/
│   ├── Rail.vue           Left rail: site functions, skills, colour schemes
│   ├── About.vue          Wordmark, kicker, portrait, bio, stats
│   ├── Work.vue           Experience feed
│   ├── Education.vue      Education feed
│   ├── Projects.vue       Filterable accordion with images / blocks / links
│   ├── Approach.vue       Approach, expectations, timeline, CTA
│   └── Contact.vue        Big mailto link, contact rows, socials
└── composables/
    ├── useTheme.js        Applies --bg / --fg for the active scheme, remembers the choice
    └── useActiveSection.js  Highlights the current section in the rail
```

## Layout

The page is a four-track grid:

```
[ logo ] [ rail ] [ feed ] [ entries ]
```

* **Logo**: vertical wordmark pinned to the top of the page (horizontal on narrow screens). It wraps rather than overflowing; the wordmark's font-size is tied to its container width via** **`container-type: inline-size`.
* **Rail**: holds site functions (nav), skills (optional), and the colour picker. It scrolls with the page and only pins (`position: sticky`) when the window is at least 1000px tall and wider than the narrow breakpoint, so the colour box is never cut off.
* **Feed**:** **`About` →** **`Work` →** **`Education`. Reading material, one item per rule.
* **Entries**:** **`Projects` →** **`Approach` →** **`Contact`. Slightly wider than the feed to give project imagery more room.

### Zoom and breakpoints

The design looks best at roughly 115–120% browser zoom, so that scale is baked in:** **`html { zoom: var(--zoom) }`with** **`--zoom: 1.18` in** **`:root`. Viewport units (`vh`,** **`vw`) are divided by** **`--zoom` where used, and the breakpoints are the original values multiplied by it, because media queries can't use variables:


| Breakpoint | Original | Now (× 1.18) | Behaviour                                                     |
| ---------- | -------- | ------------- | ------------------------------------------------------------- |
| Tablet     | 1180px   | 1390px        | Rail + one stacked content column                             |
| Phone      | 760px    | 900px         | One column; logo turns horizontal; rail becomes a two-up grid |

If you change** **`--zoom`, rescale both breakpoints in the same way. Firefox before version 126 ignores CSS** **`zoom`, so the site shows at 100% there.

### Responsive details

* **Colour swatches**: at most 8 themes. 4 per row in the rail (two rows), 8 in one row on narrow screens, so there is never a single orphaned swatch.
* **About stats**: four columns that can shrink; below a 460px-wide profile box they become 2 × 2. Values scale with the box and wrap if a word is long.
* **Work thumbnails**: sized from the image, any shape, never cropped. The title and tags span the full width, with the description on the left and the thumbnail on the right. On narrow screens the thumbnail drops below the text.
* **Project dates**: the date/season sits on its own line above the project name, so any length (e.g. "Fall 2025 + Spring 2026") fits.

## From prototype to Vue


| Prototype (HTML)                       | Vue                                                     |
| -------------------------------------- | ------------------------------------------------------- |
| Hand-written sections in one HTML file | One component per section under`src/components/`        |
| Copy written directly into the markup  | Imported from`src/content/site.js`                      |
| Theme switching with a script          | `useTheme.js` sets `--bg` / `--fg` and saves the choice |
| Active-nav IntersectionObserver        | `useActiveSection.js`                                   |
| Project accordion script               | Local`ref` in `Projects.vue`                            |

## Themes

A theme is a pair of colours:** **`{ name, bg, fg }`, listed in** **`themes` in** **`src/content/site.js`.** **`useTheme.js` writes the pair as** **`--bg` /** **`--fg` custom properties on** **`document.documentElement`, and the single stylesheet reads those properties everywhere. No stylesheet is swapped.

The active theme is remembered in** **`localStorage` as** **`{ name, bg, fg }`, and on the next visit it is applied before Vue mounts, so there is no flash of default colours. The fallback pair in** **`:root` is the "Tulip" scheme (`#F2F5F5` /** **`#2e398b`).

Current schemes: Tulip, Ink, Terminal, Rose, Orange, Stone, Blueberry, Notepad.

**Adding a theme:** add one object to** **`themes` (keep the total at 8 or fewer so the swatch grid stays balanced):

```js
{ name: "Rose", bg: "#897491", fg: "#c5ed56" }
```

## Content (`src/content/site.js`)

`site.js` exports a single** **`site` object that every component imports.


| Key                                                                  | Used by                                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `site` (`name`, `year`)                                              | Logo, document title                                                             |
| `nav`                                                                | Rail. Each`href` must match a section id (`#about`, `#work`, …)                 |
| `skills` (optional)                                                  | Rail: a plain array of strings, rendered as a numbered list                      |
| `themes` (`name`, `bg`, `fg`)                                        | Rail colour picker,`useTheme`                                                    |
| `about` (`text`, `tagline`, `stats`, `portrait`, …)                 | About                                                                            |
| `about.education` (`dates`, `institution`, `degree`, `note`)         | Education                                                                        |
| `work.items` (`num`, `title`, `slug`, `tag`, `desc`, `cover`)        | Work.`num` is the organisation, `slug` the dates; `tag` and `cover` are optional |
| `projects.list` (`num`, `name`, `desc`, `images`, `blocks`, `links`) | Projects accordion                                                               |
| `projects` (`approach`, `expect`, `timeline`, `cta`)                 | Approach                                                                         |
| `contact`, `footer`                                                  | Contact, footer                                                                  |

**Projects:** `num` is the date or season (e.g. "Summer 2026") and may repeat.** **`name` must be** ****unique**, because it is used as the list key and to track which project is open.

A handful of fields are rendered with** **`v-html` because they intentionally contain markup (`<br>`,** **`<strong>`,** **`<em>`):** **`about.text`,** **`projects.list[].desc`,** **`projects.approach.heading`,** **`projects.timeline.text`,** **`contact.location`,`contact.manifesto`,** **`contact.bigLinkText`. Keep markup out of every other field.

Empty or missing optional values (`about.portrait`,** **`work.items[].cover`,** **`projects.list[].images`,** **`projects.list[].links`) simply hide the element.

**Image paths** are relative and have** ****no leading slash** (`images/portrait.jpg`, not** **`/images/portrait.jpg`). They resolve to** **`public/images/`, and the leading slash would break on the GitHub Pages subpath.

## Deploying to GitHub Pages

The site is a project site at** **`https://aethermocker.github.io/personal-website/`.

1. **Base path**:** **`vite.config.js` sets** **`base: '/personal-website/'`. It must match the repository name exactly, including capitalisation. Use** **`'/'` only if the repo is named** **`aethermocker.github.io`.
2. **Workflow**:** **`.github/workflows/deploy.yml` runs** **`npm ci` and** **`npm run build` on every push to** **`main`, then publishes** **`dist/`. Commit** **`package-lock.json`.
3. **Enable Pages**: in the repo, Settings → Pages → Source →** ****GitHub Actions**. The repository must be public on a free account.
4. **Push** to** **`main` and watch the Actions tab. When both jobs are green the site is live.

`.gitignore` should contain** **`node_modules`,** **`dist` and** **`.DS_Store`.

## Credits

Began as a Tooplate 2161** ***Vora Bold* base.
