<template>
  <div class="theme-toggle" role="group" aria-label="Choose theme">
    <button
      v-for="t in themes"
      :key="t.id"
      type="button"
      class="theme-toggle__btn"
      :class="{ 'is-active': t.id === modelValue }"
      :aria-pressed="t.id === modelValue"
      :title="t.name"
      @click="$emit('update:modelValue', t.id)"
    >
      <span class="theme-toggle__swatch" :style="{ background: t.swatch }"></span>
      <span class="theme-toggle__name">{{ t.name }}</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  themes: { type: Array, required: true },
  modelValue: { type: String, default: '' },
})
defineEmits(['update:modelValue'])
</script>
