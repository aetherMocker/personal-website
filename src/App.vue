<template>
  <div v-if="loading" class="boot">Loading…</div>

  <div v-else-if="error" class="boot">
    <h2>Couldn't load content</h2>
    <p>{{ error }}</p>
    <p>Make sure <code>public/data.json</code> exists and is valid JSON, then reload.</p>
  </div>

  <div v-else class="page">
    <a href="#about" class="logo" aria-label="Back to top">
      <span class="logo__name">{{ data.site.name }}</span>
      <span class="logo__sub">Interactive résumé</span>
    </a>

    <Rail
      :nav="data.nav"
      :skills="data.skills || []"
      :themes="data.themes"
      :active-id="activeId"
      :active-theme-id="activeThemeId"
      @select-theme="setTheme"
    />

    <div class="col">
      <About :about="data.about" :site-name="data.site.name" />
      <Work :work="data.work" />
      <Education
        v-if="data.about.education && data.about.education.length"
        :education="data.about.education"
      />
    </div>

    <div class="col">
      <Projects :projects="data.projects" />
      <Approach :projects="data.projects" />
      <Contact :contact="data.contact" :footer="data.footer" />
    </div>

    <footer class="foot">
      <span>{{ data.footer.logo }} — {{ data.footer.tagline }}</span>
      <span>{{ data.footer.copyright }}</span>
      <a :href="data.footer.attributionHref" target="_blank" rel="nofollow">
        {{ data.footer.attributionText }}
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useSiteData } from './composables/useSiteData.js'
import { useTheme } from './composables/useTheme.js'
import { useActiveSection } from './composables/useActiveSection.js'

import Rail from './components/Rail.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Approach from './components/Approach.vue'
import Contact from './components/Contact.vue'

const { data, error, loading } = useSiteData()

const themesRef = ref([])
watchEffect(() => {
  themesRef.value = data.value ? data.value.themes : []
})
const { activeThemeId, setTheme } = useTheme(themesRef)

watchEffect(() => {
  if (data.value) document.title = data.value.site.name
})

const { activeId } = useActiveSection()
</script>