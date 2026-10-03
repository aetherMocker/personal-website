<template>
  <div>
    <div class="sticky-label">
      <span>{{ work.label }}</span><span>{{ work.title }}</span>
    </div>
    <section id="work">
      <div class="work__header">
        <h2 class="section-title" v-reveal>{{ work.title }}</h2>
        <span class="section-meta">{{ work.meta }}</span>
      </div>
      <div class="work__grid">
        <div v-for="item in work.items" :key="item.num" class="work__item" v-reveal>
          <span class="work__item-corner">{{ item.corner }}</span>

          <template v-if="item.featured">
            <div class="work__item-content">
              <p class="work__item-num">{{ item.num }}</p>
              <h3 class="work__item-title">{{ item.title }}</h3>
            </div>
            <div class="work__item-aside">
              <figure v-if="item.cover" class="work__item-cover">
                <img :src="item.cover" :alt="`${item.title} — project screenshot`" loading="lazy" />
              </figure>
              <span class="work__item-slug">{{ item.slug }}</span>
              <p class="work__item-desc">{{ item.desc }}</p>
              <span class="work__item-tag">{{ item.tag }}</span>
            </div>
          </template>

          <template v-else>
            <div class="work__item-content">
              <p class="work__item-num">{{ item.num }}</p>
              <h3 class="work__item-title">{{ item.title }}</h3>
              <p class="work__item-desc">{{ item.desc }}</p>
              <figure v-if="item.cover" class="work__item-cover">
                <img :src="item.cover" :alt="`${item.title} — project screenshot`" loading="lazy" />
              </figure>
            </div>
            <span class="work__item-tag">{{ item.tag }}</span>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({
  work: { type: Object, required: true },
})
</script>
