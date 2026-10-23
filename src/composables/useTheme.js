import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

/* ---------------- storage ---------------- */

function readSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed === 'object' && typeof parsed.name === 'string') {
      return parsed // { name, bg, fg }
    }
    // legacy versions stored a bare theme id string; keep the name for matching
    return { name: raw }
  } catch {
    return null
  }
}

function writeSaved(theme) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ name: theme.name, bg: theme.bg, fg: theme.fg })
    )
  } catch {
    /* ignore (private mode, quota) */
  }
}

/* ---------------- palette ---------------- */

function applyPalette(theme) {
  const root = document.documentElement
  if (theme.bg) root.style.setProperty('--bg', theme.bg)
  if (theme.fg) root.style.setProperty('--fg', theme.fg)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta && theme.bg) meta.setAttribute('content', theme.bg)
}

// Paint the saved palette before the app mounts so there is no flash of the
// default colours while data.json loads. useTheme is imported by App.vue, so
// this runs early enough.
if (typeof document !== 'undefined') {
  const saved = readSaved()
  if (saved && saved.bg && saved.fg) applyPalette(saved)
}

/* ---------------- composable ---------------- */

export function useTheme(themes) {
  // holds the active theme *name* (kept as `activeThemeId` so callers don't change)
  const activeThemeId = ref(null)

  function setTheme(name) {
    const list = themes.value || []
    const theme = list.find((t) => t.name === name) || list[0]
    if (!theme) return
    activeThemeId.value = theme.name
    applyPalette(theme)
    writeSaved(theme)
  }

  watch(
    themes,
    (list) => {
      if (!list || !list.length) return
      const saved = readSaved()
      const wanted = activeThemeId.value || (saved && saved.name)
      const match = list.find((t) => t.name === wanted) || list[0]
      activeThemeId.value = match.name
      applyPalette(match)
      writeSaved(match)
    },
    { immediate: true }
  )

  return { activeThemeId, setTheme }
}