<template>
  <div class="marquee-strip">
    <div class="marquee-inner">
      <template v-for="n in 2" :key="n">
        <template v-for="item in items" :key="`${n}-${item}`">
          <span>{{ item }}</span><span>·</span>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>
