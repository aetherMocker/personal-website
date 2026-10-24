<template>
  <section id="work" class="box">
    <div class="box__head">
      <span class="box__title">{{ work.label }}</span>
      <span class="box__side">{{ work.items.length }} Roles</span>
    </div>
    <div class="box__body">
      <article
        v-for="item in work.items"
        :key="item.num"
        class="feed__item"
        :class="{ 'feed__item--plain': !item.cover }"
      >
        <figure v-if="item.cover" class="feed__thumb">
          <img
            :src="item.cover"
            :alt="`${item.title} — screenshot`"
            class="duo"
            loading="lazy"
          />
        </figure>
        <div>
          <h3 class="feed__title">{{ item.title }}</h3>
          <div class="feed__meta">
            <span class="chip">{{ item.num }}</span>
            <span v-if="item.tag">{{ item.tag }}</span>
            <span v-if="item.slug">{{ item.slug }}</span>
          </div>
          <p class="feed__text">{{ item.desc }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
defineProps({ work: { type: Object, required: true } })
</script>