import { ref, watch } from 'vue'

const STORAGE_KEY = 'theme'

function getSavedThemeId() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function ensureLinkEl() {
  let link = document.getElementById('theme-link')
  if (!link) {
    link = document.createElement('link')
    link.id = 'theme-link'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
  return link
}

export function useTheme(themes) {
  const activeThemeId = ref(null)
  const linkEl = ensureLinkEl()

  function setTheme(themeId) {
    const theme = themes.value.find((t) => t.id === themeId) || themes.value[0]
    if (!theme) return
    activeThemeId.value = theme.id
    linkEl.href = theme.href
    try {
      localStorage.setItem(STORAGE_KEY, theme.id)
    } catch {
      /* ignore */
    }
  }

  // Pick the initial theme as soon as the theme list arrives.
  watch(
    themes,
    (list) => {
      if (list && list.length && !activeThemeId.value) {
        setTheme(getSavedThemeId() || list[0].id)
      }
    },
    { immediate: true }
  )

  return { activeThemeId, setTheme }
}
