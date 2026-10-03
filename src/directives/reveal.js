// v-reveal: adds the .visible class once an element scrolls into view,
// staggering siblings that intersect in the same batch — a direct port
// of initReveal() from the original app.js.

let obs = null
let order = 0

function getObserver() {
  if (obs) return obs
  obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = (entry.target.dataset.revealOrder % 6) * 70
          setTimeout(() => entry.target.classList.add('visible'), delay)
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  return obs
}

export default {
  mounted(el) {
    el.dataset.revealOrder = order++
    getObserver().observe(el)
  },
  unmounted(el) {
    if (obs) obs.unobserve(el)
  },
}
