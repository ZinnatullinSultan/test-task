<script setup lang="ts">
import AppTable from './AppTable.vue'

import { ref } from 'vue'
const value = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', value.value)
}
</script>

<template>
  <section class="transactions">
    <a-card class="transactions__card" title="Тестовое задание" :bordered="false">
      <template #extra>
        <a-space direction="vertical">
          <a-input-search
            v-model:value="value"
            placeholder="Найти..."
            class="transactions__search"
            @search="onSearch"
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
