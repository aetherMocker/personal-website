<template>
  <div v-if="loading" class="boot-state">
    <p>Loading…</p>
  </div>

  <div v-else-if="error" class="boot-state">
    <h2>Couldn't load content</h2>
    <p>{{ error }}</p>
    <p>Make sure <code>public/data.json</code> exists and is valid JSON, then reload.</p>
  </div>

  <div v-else class="page-shell">
    <Sidebar
      :nav="data.nav"
      :site-name="data.site.name"
      :year="data.site.year"
      :active-id="activeId"
    />

    <main class="main">
      <Hero
        :hero="data.hero"
        :themes="data.themes"
        :active-theme-id="activeThemeId"
        @update:active-theme-id="setTheme"
      />

      <Marquee :items="data.marquee" />

      <hr class="rule" />

      <About :about="data.about" :site-name="data.site.name" />

      <hr class="rule" />

      <Work :work="data.work" />

      <hr class="rule" />

      <Projects :projects="data.projects" />

      <hr class="rule" />

      <Contact :contact="data.contact" :footer="data.footer" />
    </main>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useSiteData } from './composables/useSiteData.js'
import { useTheme } from './composables/useTheme.js'
import { useActiveSection } from './composables/useActiveSection.js'

import Sidebar from './components/Sidebar.vue'
import Hero from './components/Hero.vue'
import Marquee from './components/Marquee.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const { data, error, loading } = useSiteData()

// themes only exist once data has loaded, so mirror them into their own ref
const themesRef = ref([])
watchEffect(() => {
  themesRef.value = data.value ? data.value.themes : []
})
const { activeThemeId, setTheme } = useTheme(themesRef)

// document title
watchEffect(() => {
  if (data.value) document.title = data.value.site.name
})

const { activeId } = useActiveSection()
</script>

<style>
.boot-state {
  padding: 4rem 2rem;
  font-family: monospace;
}
</style>
