<template>
  <section id="hero" class="intro__hero">
    <!-- TEMP: "intro__hero" lets the merged stylesheets style this section now that
         their #hero rule is gone. Remove it when Hero is replaced by Intro. -->
    <span class="hero__ghost-year" aria-hidden="true">{{ hero.ghostYear }}</span>
    <div class="hero__topbar">
      <span>{{ hero.topbarLeft }}</span>
      <span v-html="hero.topbarRight"></span>
    </div>
    <h1 class="hero__headline" v-reveal><span>{{ hero.headline }}</span></h1>

    <ThemeToggle
      :themes="themes"
      :model-value="activeThemeId"
      @update:model-value="$emit('update:activeThemeId', $event)"
    />

    <div class="hero__sub">
      <p class="hero__tagline" v-reveal v-html="hero.tagline"></p>
      <div class="hero__cta-wrap" v-reveal>
        <span class="hero__scroll">{{ hero.scrollText }}</span>
        <a :href="hero.ctaHref" class="btn">{{ hero.ctaText }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'

defineProps({
  hero: { type: Object, required: true },
  themes: { type: Array, required: true },
  activeThemeId: { type: String, default: '' },
})
defineEmits(['update:activeThemeId'])
</script>
