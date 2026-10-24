<script setup>
  import { site } from "../content/site";
</script>

<template>
  <section id="about" class="box profile">
    <div class="box__head">
      <span class="box__title">{{ site.about.label }}</span>
      <span class="box__side">{{ site.about.title }}</span>
    </div>
    <div class="box__body">
      <h1 class="wordmark">{{ site.site.name }}</h1>
      <div class="kicker">{{ site.about.tagline || site.about.title }}</div>

      <div class="profile__lead" :class="{ 'has-portrait': site.about.portrait }">
        <figure v-if="site.about.portrait" class="profile__portrait">
          <img
            :src="site.about.portrait"
            :alt="`Portrait of ${site.site.name}`"
            class="duo"
            loading="lazy"
          />
        </figure>
        <div>
          <p class="profile__text" v-html="site.about.text"></p>
        </div>
      </div>

      <div v-if="site.about.stats && site.about.stats.length" class="stats">
        <div v-for="s in site.about.stats" :key="s.label" class="stat">
          <span class="stat__lbl">{{ s.label }}</span>
          <span class="stat__val">{{ s.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>