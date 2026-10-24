<script setup>
  import { site } from "../content/site";
</script>

<template>
  <section id="education" class="box">
    <div class="box__head">
      <span class="box__title">Education</span>
      <span class="box__side">{{ site.about.education.length }} Degrees</span>
    </div>
    <div class="box__body">
      <article
        v-for="edu in site.about.education"
        :key="edu.institution"
        class="feed__item feed__item--plain"
      >
        <div>
          <h3 class="feed__title">{{ edu.institution }}</h3>
          <div class="feed__meta">
            <span class="chip">{{ edu.dates }}</span>
            <span>{{ edu.degree }}</span>
          </div>
          <p v-if="edu.note" class="feed__text">{{ edu.note }}</p>
        </div>
      </article>
    </div>
  </section>
</template>