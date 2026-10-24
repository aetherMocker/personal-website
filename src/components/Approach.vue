<script setup>
  import { site } from "../content/site";
</script>

<template>
  <section id="approach" class="box">
    <div class="box__head">
      <span class="box__title">Approach</span>
      <span class="box__side">{{ site.projects.expect ? site.projects.expect.label : '' }}</span>
    </div>
    <div class="box__body">
      <template v-if="site.projects.approach">
        <h3 class="approach__title" v-html="site.projects.approach.heading"></h3>
        <p class="approach__text">{{ site.projects.approach.text }}</p>
      </template>

      <div v-if="site.projects.expect && site.projects.timeline" class="approach__cols">
        <ul class="bring">
          <li v-for="i in site.projects.expect.items" :key="i">{{ i }}</li>
        </ul>
        <ul class="engage">
          <li>
            <span>{{ site.projects.timeline.label }}</span>
            <strong v-html="site.projects.timeline.text"></strong>
          </li>
        </ul>
      </div>

      <a
        v-if="site.projects.cta"
        :href="site.projects.cta.href"
        class="btn"
        style="margin-top: 12px;"
      >{{ site.projects.cta.text }}</a>
    </div>
  </section>
</template>