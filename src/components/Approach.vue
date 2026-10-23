<template>
  <section id="approach" class="box">
    <div class="box__head">
      <span class="box__title">Approach</span>
      <span class="box__side">{{ projects.expect ? projects.expect.label : '' }}</span>
    </div>
    <div class="box__body">
      <template v-if="projects.approach">
        <h3 class="approach__title" v-html="projects.approach.heading"></h3>
        <p class="approach__text">{{ projects.approach.text }}</p>
      </template>

      <div v-if="projects.expect && projects.timeline" class="approach__cols">
        <ul class="bring">
          <li v-for="i in projects.expect.items" :key="i">{{ i }}</li>
        </ul>
        <ul class="engage">
          <li>
            <span>{{ projects.timeline.label }}</span>
            <strong v-html="projects.timeline.text"></strong>
          </li>
        </ul>
      </div>

      <a
        v-if="projects.cta"
        :href="projects.cta.href"
        class="btn"
        style="margin-top: 12px;"
      >{{ projects.cta.text }}</a>
    </div>
  </section>
</template>

<script setup>
defineProps({ projects: { type: Object, required: true } })
</script>