<template>
  <div>
    <div class="sticky-label">
      <span>{{ projects.label }}</span><span>{{ projects.title }}</span>
    </div>
    <section id="projects">
      <div class="projects__body">

        <div class="projects__left">
          <div class="projects__header">
            <h2 class="section-title" v-reveal>{{ projects.title }}</h2>
            <span class="section-meta">{{ projects.meta }}</span>
          </div>

          <div class="projects__list">
            <template v-for="proj in projects.list" :key="proj.num">
              <div
                class="project-row"
                v-reveal
                :class="{ open: openNum === proj.num }"
                @click="toggle(proj.num)"
              >
                <span class="project-row__num">{{ proj.num }}</span>
                <span class="project-row__name">{{ proj.name }}</span>
                <span class="project-row__desc" v-html="proj.desc"></span>
                <span class="project-row__arrow">→</span>
              </div>
              <div class="project-panel" :class="{ open: openNum === proj.num }">
                <div class="project-panel__inner">
                  <div v-if="proj.images && proj.images.length" class="project-panel__images">
                    <a
                      v-for="(src, i) in proj.images"
                      :key="src"
                      class="project-panel__image"
                      :href="src"
                      target="_blank"
                      rel="noopener"
                    >
                      <img :src="src" :alt="`${proj.name} — image ${i + 1}`" loading="lazy" />
                    </a>
                  </div>
                  <div v-for="block in proj.blocks" :key="block.label" class="sp-block">
                    <span class="sp-block__label">{{ block.label }}</span>
                    <div class="sp-block__body">
                      <span class="sp-block__title">{{ block.title }}</span>
                      <p class="sp-block__text">{{ block.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <div class="projects__right" v-reveal>
          <div class="srv-panel__block">
            <span class="srv-panel__label">{{ projects.approach.label }}</span>
            <h3 class="srv-panel__heading" v-html="projects.approach.heading"></h3>
            <hr class="srv-panel__divider" style="margin-top:1rem;" />
            <p class="srv-panel__text" style="margin-top:1rem;">{{ projects.approach.text }}</p>
          </div>
          <hr class="srv-panel__divider" />
          <div class="srv-panel__block">
            <span class="srv-panel__label">{{ projects.expect.label }}</span>
            <ul class="srv-panel__list">
              <li v-for="i in projects.expect.items" :key="i">{{ i }}</li>
            </ul>
          </div>
          <hr class="srv-panel__divider" />
          <div class="srv-panel__block">
            <span class="srv-panel__label">{{ projects.timeline.label }}</span>
            <p class="srv-panel__text" v-html="projects.timeline.text"></p>
          </div>
          <a :href="projects.cta.href" class="srv-panel__cta">{{ projects.cta.text }}</a>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  projects: { type: Object, required: true },
})

const openNum = ref(null)

function toggle(num) {
  openNum.value = openNum.value === num ? null : num
}
</script>
