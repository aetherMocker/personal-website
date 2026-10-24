# Aether Mocker

A personal portfolio site presented as an interactive résumé — a three-column
directory (`rail` / `feed` / `entries`) framed in solid rules, built so each
section reads like a sheet of a well-set printed document. The palette is
restricted to exactly two colours at a time and can be swapped between schemes
at runtime. Content is driven by a single JSON file.

Built with Vue 3 + Vite.

## Run it

```bash
npm install
npm run dev
```


A personal portfolio site with swappable visual themes.

It began as a **prototype in plain HTML** (static markup, CSS and a little vanilla JavaScript, built on the Tooplate 2161 *Vora Bold* template). Once the structure settled, it was **converted to Vue 3 + Vite** to allow more in-depth development and customization: componentized sections, content driven by a single JSON file, and a theme system that swaps whole stylesheets at runtime.

## Project structure

```
index.html                 Entry HTML + Google Fonts link for every scheme
vite.config.js
public/                    Served as-is by Vite
├── data.json              All site copy and the list of colour schemes
├── images/                Referenced from data.json (e.g. images/portrait.jpg)
└── vault/                 Optional password-protected pages (see Vaulting)
src/
├── main.js                Creates the app, imports the stylesheet, registers v-reveal
├── style.css              The single stylesheet — reads --bg / --fg everywhere
├── App.vue                Loads data, owns theme + active-section state, lays out the page
├── components/
│   ├── Rail.vue           Left rail: site functions, skills, colour schemes
│   ├── About.vue          Wordmark, kicker, portrait, bio, stats
│   ├── Work.vue           Experience feed
│   ├── Education.vue      Education feed
│   ├── Projects.vue       Filterable accordion with images / blocks / links
│   ├── Approach.vue       Approach, expectations, timeline, CTA
│   └── Contact.vue        Big mailto link, contact rows, socials
├── composables/
│   ├── useSiteData.js     Fetches /data.json
│   ├── useTheme.js        Applies --bg / --fg for the active scheme, remembers the choice
│   └── useActiveSection.js  Highlights the current section in the rail
└── directives/
    └── reveal.js          v-reveal: fade-in on scroll
```

## Layout

The page is a four-track grid:

```[ logo ] [ rail ] [ feed ] [ entries ]```

* **Logo** — vertical wordmark pinned to the top of the page (horizontal on narrow screens). Wraps rather than overflowing; the wordmark's font-size is tied to the feed column width via** **`container-type: inline-size`.
* **Rail** — fixed column holding site functions (nav), skills (optional), and the colour picker.
* **Feed** —** **`About` →** **`Work` →** **`Education`. Reading material, one item per rule.
* **Entries** —** **`Projects` →** **`Approach` →** **`Contact`. Slightly wider than the feed to give project imagery more room.

Below 1180px the rail and one content column remain; the two content columns stack into a single track under the rail. Below 760px everything collapses to one column, the logo turns horizontal, and the rail becomes a two-up grid of boxes.

## From prototype to Vue


| Prototype (HTML)                       | Vue                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Hand-written sections in one HTML file | One component per section under`src/components/`                                                    |
| Copy written directly into the markup  | Loaded from`public/data.json` at runtime                                                            |
| Theme switching with a script          | `useTheme.js` updates a `<link id="theme-link">` in `<head>` and saves the choice to `localStorage` |
| `data-reveal` + IntersectionObserver   | `v-reveal` custom directive                                                                         |
| Active-nav IntersectionObserver        | `useActiveSection.js`                                                                               |
| Project accordion script               | Local`ref` in `Projects.vue`                                                                        |

## Themes

A theme is a pair of colours —** **`{ "name", "bg", "fg" }` — listed in
`data.json`.** **`useTheme.js` writes the pair as** **`--bg` /** **`--fg` custom properties
on** **`document.documentElement`, and the single stylesheet (`src/style.css`)
reads those properties everywhere. No stylesheet is swapped, no** **`<link>` is
injected.

The active theme is remembered in** **`localStorage` as** **`{ name, bg, fg }`; on the
next visit the palette is applied before Vue mounts, so there is no flash of
default colours while** **`data.json` loads. The fallback pair in** **`:root` is the
"Ink" scheme (`#cdc6a2` /** **`#304c90`).

**Adding a theme:** add one object to** **`themes` in** **`data.json`. That's it.

```
{ "name": "Rose", "bg": "#e6a0b4", "fg": "#b6e33c" }
```

## Content (`public/data.json`)


| Key                                                          | Used by                                                          |
| ------------------------------------------------------------ | ---------------------------------------------------------------- |
| `site` (`name`, `year`)                                      | Logo, document title                                             |
| `nav`                                                        | Rail. Each`href` must match a section id (`#about`, `#work`, …) |
| `skills` (optional)                                          | Rail — a plain array of strings, rendered as a numbered list    |
| `themes` (`name`, `bg`, `fg`)                                | Rail colour picker,`useTheme`                                    |
| `about` (`text`, `stats`, `portrait`, …)                    | About                                                            |
| `about.education` (`dates`, `institution`, `degree`, `note`) | Education                                                        |
| `work` (`items`)                                             | Work.`cover` is optional; `featured` controls the wide layout    |
| `projects` (`list`, `approach`, `expect`, `timeline`, `cta`) | Projects, Approach                                               |
| `projects.list[].images` / `blocks` / `links`                | Project accordion body                                           |
| `contact`, `footer`                                          | Contact                                                          |
| `vault` (optional)                                           | Contact — links to password-protected pages (see Vaulting)      |

A handful of fields are rendered with** **`v-html` because they intentionally contain markup (`<br>`,** **`<strong>`,** **`<em>`):** **`about.text`, `projects.list[].desc`,** **`projects.approach.heading`, `projects.timeline.text`,** **`contact.location`,** **`contact.manifesto`,`contact.bigLinkText`. Keep markup out of every other field.

Empty or missing optional values (`about.portrait`,** **`work.items[].cover`, `projects.list[].images`,** **`projects.list[].links`) simply hide the element. Image paths in** **`data.json` are relative (`images/…`) and resolve to `public/images/`.

## FUTURE: Vaulting private content

Even though most this information about ME is public and to be viewed publicly, I as a human being do not feel comfortable living in a world where LLM's can scrape and use anything public on the internet. So, I'm defending myself. For content like my images and resume, I am vaulting and poisoning the files. 

GitHub Pages serves everything in** **`public/` publicly — including a PDF or a phone number sitting in** **`data.json`. Rather than publish those, keep them out of the repository and link to password-protected pages instead:

1. Run** **`pagevault lock resume.pdf` (or** **`lock contact.html`) locally. This produces a self-contained HTML file whose payload is encrypted with AES-256-GCM.
2. Commit only the resulting** **`.html` file — to** **`public/vault/`, for example.
3. Share the password out-of-band, not on the public site.

`Contact.vue` can then render links to** **`/vault/resume.html` and `/vault/contact.html` alongside the public mailto and socials. Anything that should be private can move into those pages and out of** **`data.json`, and a `vault` object in** **`data.json` can hold the paths:

```
"vault": {
  "resumeHref": "/vault/resume.html",
  "contactHref": "/vault/contact.html",
  "note": "Password available on request."
}
```

The trade-off is explicit: the ciphertext is public, but without the password it is not readable by scrapers, crawlers, or someone who clones the repo. Once a legitimate visitor enters the password, decrypted content exists in their browser — this is a stop-crawlers, trust-readers model, which is the right balance for a résumé.

For a folder of files behind one password instead of one page per item, `StaticVault` is the equivalent tool.

```
A couple of small notes on choices:

- **`src/style.css`** — the README assumes the stylesheet lives at `src/style.css` and is imported from `main.js` (`import './style.css'`). If you end up placing it at `src/styles/main.css` instead, only the two lines in *Project structure* and *Themes* need to change; nothing else references the path.
- **`vault` key** — I listed it as optional in the content table so the schema stays honest whether or not you use it. If you haven't added the key yet, `Contact.vue` can keep rendering `contact.resumeHref` exactly as before.
- **`skills`** — the README marks it optional because `Rail.vue` hides the box if the array is missing or empty, so existing `data.json` files won't break.
```
