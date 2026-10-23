<template>
  <section id="projects" class="box">
    <div class="box__head">
      <span class="box__title">{{ projects.label }}</span>
      <span class="box__side">{{ projects.meta }}</span>
    </div>

    <div class="box__body">
      <div class="toolbar">
        <label class="toolbar__field">
          <span>Find</span>
          <input v-model="query" type="search" placeholder="Filter projects" />
        </label>
        <span class="toolbar__count">{{ filtered.length }} / {{ projects.list.length }}</span>
      </div>

      <article
        v-for="proj in filtered"
        :key="proj.num"
        class="entry"
        :class="{ open: openNum === proj.num }"
      >
        <header class="entry__head">
          <button
            type="button"
            class="entry__toggle"
            :aria-expanded="openNum === proj.num"
            @click="toggle(proj.num)"
          >
            <span class="entry__mark" aria-hidden="true">
              {{ openNum === proj.num ? '−' : '+' }}
            </span>
            <span class="entry__num">{{ proj.num }}</span>
            <span class="entry__name">{{ proj.name }}</span>
            <span class="entry__desc" v-html="proj.desc"></span>
          </button>
        </header>

        <div class="entry__panel">
          <div class="entry__inner">
            <div class="entry__body">
              <div v-if="proj.images && proj.images.length" class="entry__images">
                <a
                  v-for="(src, i) in proj.images"
                  :key="src"
                  class="entry__image"
                  :href="src"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    :src="src"
                    :alt="`${proj.name} — image ${i + 1}`"
                    class="duo"
                    loading="lazy"
                  />
                </a>
              </div>

              <dl v-if="proj.blocks && proj.blocks.length">
                <div
                  v-for="block in proj.blocks"
                  :key="block.label"
                  class="entry__block"
                >
                  <dt>{{ block.label }}</dt>
                  <dd>
                    <strong>{{ block.title }}</strong>
                    <span>{{ block.text }}</span>
                  </dd>
                </div>
              </dl>

              <div v-if="proj.links && proj.links.length" class="entry__links">
                <a
                  v-for="link in proj.links"
                  :key="link.href"
                  :href="link.href"
                  class="btn"
                  target="_blank"
                  rel="noopener"
                >{{ link.label }}</a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <p v-if="!filtered.length" class="empty">No projects match “{{ query }}”.</p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  projects: { type: Object, required: true },
})

const openNum = ref(null)
const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return props.projects.list
  return props.projects.list.filter(p => {
    const hay = `${p.num} ${p.name} ${stripHtml(p.desc)}`.toLowerCase()
    return hay.includes(q)
  })
})

function stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, ' ')
}

function toggle(num) {
  openNum.value = openNum.value === num ? null : num
}
</script>