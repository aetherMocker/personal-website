<script setup>
  import { site } from "../content/site";
</script>

<template>
  <section id="work" class="box">
    <div class="box__head">
      <span class="box__title">{{ site.work.label }}</span>
      <span class="box__side">{{ site.work.items.length }} Roles</span>
    </div>
    <div class="box__body">
      <article
        v-for="item in site.work.items"
        :key="item.num"
        class="feed__item"
      >
        <h3 class="feed__title">{{ item.title }}</h3>
        <div class="feed__meta">
          <span class="chip">{{ item.num }}</span>
          <span v-if="item.tag">{{ item.tag }}</span>
          <span v-if="item.slug">{{ item.slug }}</span>
        </div>
        <div class="feed__body" :class="{ 'feed__body--plain': !item.cover }">
          <p class="feed__text">{{ item.desc }}</p>
          <figure v-if="item.cover" class="feed__thumb">
            <img
              :src="item.cover"
              :alt="`${item.title} — screenshot`"
              class="duo"
              loading="lazy"
            />
          </figure>
        </div>
      </article>
    </div>
  </section>
</template>