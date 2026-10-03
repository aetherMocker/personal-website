# Aether Mocker

A personal portfolio site with swappable visual themes.

It began as a **prototype in plain HTML** (static markup, CSS and a little vanilla JavaScript, built on the Tooplate 2161 *Vora Bold* template). Once the structure settled, it was **converted to Vue 3 + Vite** to allow more in-depth development and customization: componentized sections, content driven by a single JSON file, and a theme system that swaps whole stylesheets at runtime.

## Run it

```bash
npm install
npm run dev
```

Open the printed `localhost` URL (the dev server is configured for port `8000`).

`npm run build` produces a static `dist/` folder; `npm run preview` serves it.

## Project structure

```
index.html                 Entry HTML + Google Fonts link for every theme
vite.config.js
public/                    Served as-is by Vite
├── data.json              All site copy and the theme list
├── themes/                One stylesheet per theme (see Themes)
└── images/                Referenced from data.json (e.g. images/portrait.jpg)
src/
├── main.js                Creates the app, registers the v-reveal directive
├── App.vue                Loads data, owns theme + active-section state, lays out the page
├── components/
│   ├── Sidebar.vue        Fixed nav rail
│   ├── Hero.vue           Headline, tagline, CTA, theme toggle
│   ├── Marquee.vue        Scrolling strip
│   ├── About.vue          Bio, stats, education
│   ├── Work.vue           Experience grid
│   ├── Projects.vue       Accordion list + side panel
│   ├── Contact.vue        Contact info + footer bar
│   └── ThemeToggle.vue    Swatch buttons, one per theme
├── composables/
│   ├── useSiteData.js     Fetches /data.json
│   ├── useTheme.js        Swaps the theme <link> and remembers the choice
│   └── useActiveSection.js  Highlights the current section in the sidebar
└── directives/
    └── reveal.js          v-reveal: fade-in on scroll
```

## From prototype to Vue

| Prototype (HTML) | Vue |
|---|---|
| Hand-written sections in one HTML file | One component per section under `src/components/` |
| Copy written directly into the markup | Loaded from `public/data.json` at runtime |
| Theme switching with a script | `useTheme.js` updates a `<link id="theme-link">` in `<head>` and saves the choice to `localStorage` |
| `data-reveal` + IntersectionObserver | `v-reveal` custom directive |
| Active-nav IntersectionObserver | `useActiveSection.js` |
| Project accordion script | Local `ref` in `Projects.vue` |

## Themes

Each theme is a complete stylesheet in `public/themes/`. They all target the same class names, so components contain no theme-specific markup. Themes are chosen from the `themes` list in `data.json`; the first entry is the default, and the visitor's last choice is restored from `localStorage`.

| Stylesheet | Theme in `data.json` | Origin |
|---|---|---|
| `style.css` | Mid-Century (default) | Derived from Tooplate 2161 Vora Bold |
| `tooplate-minimal-white-style.css` | Minimal White | Tooplate 2141 Minimal White |
| `tooplate-exhibit-style.css` | Exhibit Studio | Tooplate 2160 Exhibit Studio |
| `tooplate-vora-bold-style.css` | Vora Bold | Tooplate 2161 Vora Bold |
| `templatemo-hyprluv-style.css` | not registered yet | TemplateMo TM-627 HYPRLUV Slideshow |
| `tooplate-parallax-depth-style.css` | not registered yet | Tooplate 2144 Parallax Depth |
| `windows95-style.css` | not registered yet | Custom Windows 95 desktop chrome |

See each file's header comment for details on where it came from.

**Adding a theme:** drop the stylesheet in `public/themes/`, add `{ "id", "name", "href", "swatch" }` to the `themes` array in `data.json` (`href` is relative to the site root, e.g. `"themes/windows95-style.css"`), and make sure any web fonts it needs are in the Google Fonts link in `index.html`. The three "not registered yet" stylesheets are already in `public/themes/` and their fonts are already loaded, so they only need a `data.json` entry.

## Content (`public/data.json`)

| Key | Used by |
|---|---|
| `site` (`name`, `year`) | Sidebar, document title |
| `nav` | Sidebar. Each `href` must match a section id (`#hero`, `#about`, …) |
| `themes` | ThemeToggle, `useTheme` |
| `hero` | Hero |
| `marquee` | Marquee |
| `about` (`text`, `stats`, `education`, `portrait`, …) | About |
| `work` (`items`) | Work. Items with `featured: true` get the two-column layout; `cover` is optional |
| `projects` (`list`, `approach`, `expect`, `timeline`, `cta`) | Projects |
| `contact`, `footer` | Contact |

A handful of fields are rendered with `v-html` because they intentionally contain markup (`<br>`, `<strong>`, `<em>`): `hero.topbarRight`, `hero.tagline`, `about.text`, `projects.list[].desc`, `projects.approach.heading`, `projects.timeline.text`, `contact.location`, `contact.manifesto`, `contact.bigLinkText`. Keep markup out of every other field.

Empty or missing optional values (`about.portrait`, `work.items[].cover`, `projects.list[].images`, `contact.resumeHref`) simply hide the element.

**Assets:** image paths in `data.json` are relative (`images/…`) and are served from `public/images/`, which currently holds placeholder images. A path with no matching file shows a broken image until the file is added, and `contact.resumeHref` expects a `resume.pdf` in `public/`.

## Work in progress: merging Hero and About

Hero and About are being merged into a single **Intro** section (`#intro`). The seven stylesheets already contain the merged rules (`.intro__hero`, `.intro__about`, and the `#intro` wrapper), and the old `#hero` / `#about` rules have been removed from them.

The Intro component itself is not in the app yet. Until it lands, `Hero.vue` and `About.vue` each carry a temporary class (`intro__hero`, `intro__about`) so the merged stylesheets still style them. Both are marked `TEMP` in the source.

When Intro replaces Hero and About:

1. Add `Intro.vue` to `src/components/` and use it in `App.vue` in place of `<Hero>` and `<About>`. `<Marquee>` currently sits between them, so decide where it goes once they're one block.
2. Delete `Hero.vue` and `About.vue` (and their TEMP classes with them).
3. Nav links to `#hero` / `#about` need to point at `#intro` (or the Intro markup needs to keep those ids), and `useActiveSection.js` only observes `main section[id]`, so check the sidebar highlight.
