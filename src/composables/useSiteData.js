import { ref } from 'vue'

export function useSiteData() {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  fetch('/data.json')
    .then((res) => {
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      return res.json()
    })
    .then((json) => {
      if (json.error) throw new Error(json.error)
      data.value = json
    })
    .catch((err) => {
      error.value = err.message
    })
    .finally(() => {
      loading.value = false
    })

  return { data, error, loading }
}
