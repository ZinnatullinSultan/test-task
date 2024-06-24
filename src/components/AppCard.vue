<script setup lang="ts">
import AppTable from './AppTable.vue'

import { ref, computed } from 'vue'
import { useLeadsStore } from '@/stores/leads';

const leadsStore = useLeadsStore()
const searchQuery = ref<string>('')
const isLoading = ref<boolean>(false)
const searching = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
const filteredLeads = computed(() => {
  return leadsStore.getLeadByName(searchQuery.value).value;
});
</script>

<template>
  <section class="transactions">
    <a-card class="transactions__card" title="Тестовое задание" :bordered="false">
      <template #extra>
        <a-space direction="vertical">
          <a-input-search
            v-model="searchQuery"
            placeholder="Найти..."
            class="transactions__search"
            @input="searching"
          />
        </a-space>
      </template>
      <a-spin :spinning="isLoading">
        <AppTable />
      </a-spin>
    </a-card>
  </section>
</template>
<style scoped>
.spin-state {
  margin-top: 16px;
}
.transactions__card {
  margin: 0 auto;
  max-width: 1420px;
}
.transactions__search {
  max-width: 200px;
}
</style>
