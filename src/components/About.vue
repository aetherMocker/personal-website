<template>
  <section id="about" class="box profile">
    <div class="box__head">
      <span class="box__title">{{ about.label }}</span>
      <span class="box__side">{{ about.title }}</span>
    </div>
    <div class="box__body">
      <h1 class="wordmark">{{ siteName }}</h1>
      <div class="kicker">{{ about.tagline || about.title }}</div>

      <div class="profile__lead" :class="{ 'has-portrait': about.portrait }">
        <figure v-if="about.portrait" class="profile__portrait">
          <img
            :src="about.portrait"
            :alt="`Portrait of ${siteName}`"
            class="duo"
            loading="lazy"
          />
        </figure>
        <div>
          <p class="profile__text" v-html="about.text"></p>
        </div>
      </div>

      <div v-if="about.stats && about.stats.length" class="stats">
        <div v-for="s in about.stats" :key="s.label" class="stat">
          <span class="stat__lbl">{{ s.label }}</span>
          <span class="stat__val">{{ s.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: { type: Object, required: true },
  siteName: { type: String, required: true },
})
</script>