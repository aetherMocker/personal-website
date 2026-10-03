<template>
  <aside class="sidebar">
    <a href="#hero" class="sidebar__logo">{{ siteName }}</a>
    <nav class="sidebar__nav">
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        :class="{ active: activeId === item.href.slice(1) }"
      >{{ item.label }}</a>
    </nav>
    <span class="sidebar__index">{{ year }}</span>
  </aside>
</template>

<script setup>
defineProps({
  nav: { type: Array, required: true },
  siteName: { type: String, required: true },
  year: { type: String, required: true },
  activeId: { type: String, default: '' },
})
</script>
