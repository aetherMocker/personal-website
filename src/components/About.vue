<template>
  <div>
    <div class="sticky-label">
      <span>{{ about.label }}</span><span>{{ about.title }}</span>
    </div>
    <section id="about">
      <span class="about__bg-num" aria-hidden="true">{{ about.bgNum }}</span>
      <span class="about__label">{{ about.label }}</span>
      <div class="about__content">

        <div class="about__intro">
          <figure v-if="about.portrait" class="about__portrait">
            <img :src="about.portrait" :alt="`Portrait of ${siteName}`" loading="lazy" />
          </figure>
          <div class="about__intro-text">
            <p class="about__text" v-reveal v-html="about.text"></p>
            <div class="about__stats" v-reveal>
              <div v-for="s in about.stats" :key="s.label" class="stat">
                <span class="stat__value">{{ s.value }}</span>
                <span class="stat__label">{{ s.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="about.education && about.education.length" class="about__education">
          <div class="about__education-header">
            <span class="about__education-label">Education</span>
            <hr class="about__education-rule" />
          </div>
          <ul class="about__education-list">
            <li v-for="edu in about.education" :key="edu.institution" class="edu-entry">
              <div class="edu-entry__head">
                <span class="edu-entry__dates">{{ edu.dates }}</span>
                <span class="edu-entry__institution">{{ edu.institution }}</span>
              </div>
              <span class="edu-entry__degree">{{ edu.degree }}</span>
              <p v-if="edu.note" class="edu-entry__note">{{ edu.note }}</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  about: { type: Object, required: true },
  siteName: { type: String, required: true },
})
</script>
