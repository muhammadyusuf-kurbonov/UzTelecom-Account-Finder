import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface User {
  name: string
  id: string
}

export const useDataStore = defineStore('counter', () => {
  const allUsers = ref<User[]>([])
  const loading = ref(false);

  async function loadData() {
    loading.value = true;
    const data = await fetch('/data.csv').then(res => res.text());
    for (const item of data.split('\n')) {
      allUsers.value.push({
        name: item.split(',')[0],
        id: item.split(',')[1],
      })
    }
    loading.value = false;
  }

  return { allUsers, loadData, loading }
})
