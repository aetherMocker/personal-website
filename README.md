# Aether Mocker — Vue port

A Vue 3 + Vite rebuild of the original vanilla-JS site. Same markup, same
four theme stylesheets, same content-from-`data.json` approach — just
componentized.

## Run it

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL (defaults to `:8000`).

`npm run build` produces a static `dist/` folder; `npm run preview` serves it.

## How it maps to the original

| Original | Vue equivalent |
|---|---|
| `server.js` (custom http server + `/api/data`) | Not needed — Vite serves `public/data.json` directly as a static file, and `public/images` / theme CSS the same way. |
| `app.js` render functions | One `.vue` component per section: `Sidebar`, `Hero`, `Marquee`, `About`, `Work`, `Projects`, `Contact`, plus `ThemeToggle`. |
| `app.js` theme-swap logic | `src/composables/useTheme.js` — injects/updates a `<link id="theme-link">` in `<head>` and persists the choice to `localStorage`, exactly like before. |
| `data-reveal` + IntersectionObserver | `v-reveal` custom directive (`src/directives/reveal.js`), registered globally in `main.js`. |
| Active-nav IntersectionObserver | `src/composables/useActiveSection.js`. |
| Project accordion | Local `ref` in `Projects.vue`. |

## Content & assets

- `public/data.json` is the same file you uploaded — edit it and reload,
  same as before.
- `public/images/` only contains the images you actually uploaded
  (`portrait.jpg`, plus the two Tooplate stock photos and the thumbnail,
  reused as stand-ins for `work-ugr-1.jpg`, `work-intern.jpg`, and
  `proj-pilot-1.jpg`). Every other image path in `data.json`
  (`proj-cisgo-1.jpg`, `proj-ds-1/2.jpg`, etc.) doesn't have a matching
  file yet — drop images at those paths under `public/images/` whenever
  you have them, no code changes needed.
- `windows95.css` wasn't wired into this app — its own comments identify
  it as the skin for a separate "plant log" project, not one of the four
  themes in `data.json`. Let me know if you want it added as a fifth
  theme option.

## Notes

- Theme stylesheets are untouched from what you uploaded — they already
  targeted the exact class names this markup uses, so no CSS changes
  were needed at all.
- `v-html` is used only for the small set of fields in `data.json` that
  intentionally contain markup (`<br>`, `<strong>`, `<em>`) — same as the
  original's use of `.innerHTML`.
