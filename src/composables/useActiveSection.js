import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

export function useActiveSection() {
  const activeId = ref('')
  let observer = null

  onMounted(async () => {
    // Wait for the data-driven sections to actually render before observing.
    await nextTick()
    const sections = document.querySelectorAll('main section[id]')
    if (!sections.length) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) activeId.value = entry.target.id
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((s) => observer.observe(s))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return { activeId }
}
