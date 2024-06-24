<script setup lang="ts">
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons-vue'
import type { IColumn, ILead } from '@/interfaces';

const props = defineProps<{
  filteredLeads: ILead[];
}>();

const columns: IColumn[] = [
  { title: 'Название', dataIndex: 'title', key: 'title', fixed: true },
  { title: 'Бюджет', dataIndex: 'budget', key: 'budget' },
  { title: 'Статус', dataIndex: 'status', key: 'status' },
  { title: 'Ответственный', dataIndex: 'name', key: 'name' },
  { title: 'Дата создания', dataIndex: 'date', key: 'date' }
]
</script>
<template>
  <a-table :scroll="{ x: 1150 }" :columns="columns" :data-source="props.filteredLeads" :pagination="false">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <user-outlined class="user-icon" /> {{ record.name }}
      </template>
      <template v-else-if="column.key === 'status'">
        <span>
          <a-tag
            v-for="tag in record.status"
            :key="tag"
            class="status-tag"
            :class="
              tag === 'Принимают решение'
                ? 'status-tag--access'
                : tag === 'Закрыто и не реализовано'
                  ? 'status-tag--closed'
                  : 'status-tag--conservation'
            "
          >
            {{ tag }}
          </a-tag>
        </span>
      </template>
    </template>
    <template #expandedRowRender="{ record }">
      <p class="expanded-row">
        <template v-if="record.contacts">
          <user-outlined class="user-icon user-icon--gray" />
          {{ record.contacts[0] }}
          <a :href="`tel:${record.contacts[1]}`">
            <PhoneOutlined class="icon phone-icon" />
          </a>
          <span class="line">|</span>
          <a :href="`mailto:${record.contacts[2]}`">
            <MailOutlined class="icon" />
          </a>
        </template>
        <template v-else>
          <p class="expanded-row">Без контакта</p>
        </template>
      </p>
    </template>
  </a-table>
</template>
<style scoped>
.status-tag {
  border-radius: 5px;
  border: none;
  font-size: 14px;
  padding: 2px 10px;
  color: rgb(68, 68, 68);
}
.status-tag--access {
  background-color: rgba(255, 166, 0, 0.582);
}
.status-tag--closed {
  background-color: rgba(94, 94, 94, 0.247);
}
.status-tag--conservation {
  background-color: rgba(247, 244, 43, 0.534);
}
.icon {
  color: dodgerblue;
}
.phone-icon {
  margin: 0 10px;
}
.user-icon {
  border-radius: 50%;
  background-color: dodgerblue;
  color: white;
  padding: 5px;
  margin-right: 5px;
}
.user-icon--gray {
  background-color: rgba(128, 128, 128, 0.479);
}
.line {
  opacity: 0.1;
  margin-right: 10px;
}
.expanded-row {
  margin: 0 0 0 30px
}
</style>
