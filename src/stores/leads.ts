import type { ILead } from '@/interfaces'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLeadsStore = defineStore('leads', ()=>{
  const leads = ref<ILead[]>([
    {
      key: 1,
      title: 'Первая сделка',
      budget: 1000,
      status: ['Принимают решение'],
      name: 'Андрей Соколов',
      date: '20.01.1970 15:32',
      contacts: ['Тест контактов', '+7-999-999-99-99', 'dCkOQ@example.com']
    },
    {
      key: 2,
      title: 'Сделка #31738737',
      budget: 0,
      status: ['Закрыто и не реализовано'],
      name: 'Андрей Тулев',
      date: '20.01.1970 19:54'
    },
    {
      key: 3,
      title: 'Вторая сделка',
      budget: 0,
      status: ['Принимают решение'],
      name: 'Андрей Тулев',
      date: '20.01.1970 15:32',
      contacts: ['Тест контактов', '+7-988-999-99-99', 'dtrOQ@example.com']
    },
    {
      key: 4,
      title: 'Сделка #31943981',
      budget: 8888,
      status: ['Переговоры'],
      name: 'Андрей Тулев',
      date: '20.01.1970 22:37'
    }
  ])

  const setItems = (newItems: ILead[]) => {
    leads.value = newItems;
  };

  const fetchLeads = () => {
    const newLeads: ILead[] = [
      {
        key: 1,
        title: 'Первая сделка',
        budget: 1000,
        status: ['Принимают решение'],
        name: 'Андрей Соколов',
        date: '20.01.1970 15:32',
        contacts: ['Тест контактов', '+7-999-999-99-99', 'dCkOQ@example.com']
      },
      {
        key: 2,
        title: 'Сделка #31738737',
        budget: 0,
        status: ['Закрыто и не реализовано'],
        name: 'Андрей Тулев',
        date: '20.01.1970 19:54'
      },
      {
        key: 3,
        title: 'Вторая сделка',
        budget: 0,
        status: ['Принимают решение'],
        name: 'Андрей Тулев',
        date: '20.01.1970 15:32',
        contacts: ['Тест контактов', '+7-988-999-99-99', 'dtrOQ@example.com']
      },
      {
        key: 4,
        title: 'Сделка #31943981',
        budget: 8888,
        status: ['Переговоры'],
        name: 'Андрей Тулев',
        date: '20.01.1970 22:37'
      }
    ]
    setItems(newLeads);
  };

  const getLeadByName = (name: string) => {
    return computed(() => leads.value.filter(item => item.title.includes(name)));
  };

  return { leads, setItems, fetchLeads, getLeadByName };

})
