<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useDataStore, type User } from './stores/data';

const {allUsers, loadData, loading} = useDataStore();

onMounted(() => loadData());

const selectedUser = ref<User | null>(null);

const options = computed(() => allUsers.map(user => user.name));

function selectHandler(item: string) {
  const user = allUsers.find(user => user.name == item);
  selectedUser.value = user || null;
}
</script>

<template>
  <div class="m-auto">
    <vue3-simple-typeahead
      id="typeahead_id"
      :placeholder="loading ? 'Yuklanmoqda...' : 'Qidiruv ...'"
      :items="options"
      :disabled="loading"
      :minInputLength="1"
      @selectItem="selectHandler"
      class="display-4 form-control form-control-lg w-100"
    ></vue3-simple-typeahead>

    <transition>
      <div v-if="selectedUser != null" class="display-4 mt-8">
        <div> Ismi: <span class="font-bold">{{ selectedUser.name }}</span></div>
        <div>Hisob raqami: <span class="font-bold text-primary">{{ selectedUser.id }}</span></div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
</style>
