<template>
  <div class="page">
    <a href="#about" class="logo" aria-label="Back to top">
      <span class="logo__name">{{ site.site.name }}</span>
      <span class="logo__sub">Interactive résumé</span>
    </a>

    <Rail
      :active-id="activeId"
      :active-theme-id="activeThemeId"
      @select-theme="setTheme"
    />

    <div class="col">
      <About />
      <Work />
      <Education v-if="site.about.education && site.about.education.length" />
    </div>

    <div class="col">
      <Projects />
      <Approach />
      <Contact />
    </div>

    <footer class="foot">
      <span>{{ site.footer.logo }} — {{ site.footer.tagline }}</span>
      <span>{{ site.footer.copyright }}</span>
      <a :href="site.footer.attributionHref" target="_blank" rel="nofollow">
        {{ site.footer.attributionText }}
      </a>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { site } from './content/site'
import { useTheme } from './composables/useTheme.js'
import { useActiveSection } from './composables/useActiveSection.js'

import Rail from './components/Rail.vue'
import About from './components/About.vue'
import Work from './components/Work.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Approach from './components/Approach.vue'
import Contact from './components/Contact.vue'

document.title = site.site.name

const { activeThemeId, setTheme } = useTheme(ref(site.themes))
const { activeId } = useActiveSection()
</script>