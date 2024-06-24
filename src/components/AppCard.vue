<script setup lang="ts">
import AppTable from './AppTable.vue'

import { ref } from 'vue'
import { useLeadsStore } from '@/stores/leads'
import type { ILead } from '@/interfaces'

const leadsStore = useLeadsStore()

const searchQuery = ref<string>('')

const filteredLeads = ref<ILead[]>(leadsStore.leads)

const isLoading = ref<boolean>(false)
const searching = () => {
  isLoading.value = true
  if (searchQuery.value) {
    filteredLeads.value = leadsStore.leads.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  } else {
    filteredLeads.value = leadsStore.leads
  }

  isLoading.value = false
}
</script>

<template>
  <section class="transactions">
    <a-card class="transactions__card" title="Тестовое задание" :bordered="false">
      <template #extra>
        <a-space direction="vertical">
          <a-input-search
            v-model:value="searchQuery"
            placeholder="Найти..."
            class="transactions__search"
            @input="searching"
          />
        </a-space>
      </template>
      <a-spin :spinning="isLoading">
        <AppTable :filteredLeads="filteredLeads" />
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
