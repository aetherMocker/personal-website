<template>
  <div class="rail">
    <div class="box">
      <div class="box__head">
        <span class="box__title">Site Functions</span>
        <span class="box__side">{{ nav.length }}</span>
      </div>
      <div class="box__body">
        <nav class="nav-list">
          <a
            v-for="item in nav"
            :key="item.href"
            :href="item.href"
            :class="{ active: activeId === item.href.slice(1) }"
          >
            <span
              class="nav-list__mk"
              :class="{ 'nav-list__mk--out': isExternal(item.href) }"
            >
              <template v-if="isExternal(item.href)">↗</template>
            </span>
            <span>{{ item.label }}</span>
          </a>
        </nav>
      </div>
    </div>

    <div v-if="skills.length" class="box">
      <div class="box__head">
        <span class="box__title">Skills</span>
        <span class="box__side">{{ skills.length }}</span>
      </div>
      <div class="box__body">
        <ul class="skills">
          <li v-for="(s, i) in skills" :key="s">
            <span class="skills__n">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ s }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="box box--colours">
      <div class="box__head">
        <span class="box__title">Colours</span>
        <span class="box__side">Schemes</span>
      </div>
      <div class="box__body">
        <div class="swatches">
          <button
            v-for="t in themes"
            :key="t.name"
            type="button"
            class="swatch"
            :style="swatchStyle(t)"
            :aria-pressed="t.name === activeThemeId"
            :aria-label="t.name"
            :title="t.name"
            @click="$emit('select-theme', t.name)"
          >Aa</button>
        </div>
        <div class="swatch-name">{{ activeName }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  nav: { type: Array, required: true },
  skills: { type: Array, default: () => [] },
  themes: { type: Array, required: true },
  activeId: { type: String, default: '' },
  activeThemeId: { type: String, default: '' },
})
defineEmits(['select-theme'])

const activeName = computed(
  () => (props.themes.find(t => t.name === props.activeThemeId) || {}).name || ''
)

function isExternal(href) {
  return typeof href === 'string' && !href.startsWith('#')
}

// Themes may describe themselves as a pair (`bg`/`fg`) or a single swatch.
function swatchStyle(t) {
  if (t.bg && t.fg) {
    return { '--sw-bg': t.bg, '--sw-fg': t.fg }
  }
  return {
    '--sw-bg': t.swatch || t.bg || 'var(--fg)',
    '--sw-fg': t.fg || 'var(--bg)',
  }
}
</script>