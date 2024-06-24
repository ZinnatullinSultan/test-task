<script setup lang="ts">
import AppTable from './AppTable.vue'

import { ref, computed } from 'vue'
import { useLeadsStore } from '@/stores/leads';

const leadsStore = useLeadsStore()
const searchQuery = ref<string>('')

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
          />
        </a-space>
      </template>
      <AppTable />
    </a-card>
  </section>
</template>
<style scoped>
.transactions__card {
  margin: 0 auto;
  max-width: 1420px;
}
.transactions__search {
  max-width: 200px;
}
</style>
