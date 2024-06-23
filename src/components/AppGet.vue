<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Сумма</th>
          <!-- Добавьте другие поля сделок по необходимости -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="lead in leads" :key="lead.id">
          <td>{{ lead.id }}</td>
          <td>{{ lead.name }}</td>
          <td>{{ lead.price }}</td>
          <!-- Добавьте другие поля сделок по необходимости -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const leads = ref([]);

const fetchLeads = async (token: string) => {
  try {
    const apiUrl = 'https://zinnatullin969.amocrm.ru/api/v4/leads';
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch leads');
    }
    const data = await response.json();
    return data._embedded.leads;
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
};

onMounted(async () => {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwNjlkYmM4NTc1NjI1OGE4YTQ1MTVmMDQyOTU0YTU3NzNlMjg5MThjYTE1MTg1ODFjNzAzOTI5YjM0MDMyYzhlODg1ZDZiOTY1MTE4MjQxIn0.eyJhdWQiOiJlMTE1NzQ4Ny1hOWMxLTRlMWUtODU0Zi0xYTcxNzEzOTBkNzUiLCJqdGkiOiI3MDY5ZGJjODU3NTYyNThhOGE0NTE1ZjA0Mjk1NGE1NzczZTI4OTE4Y2ExNTE4NTgxYzcwMzkyOWIzNDAzMmM4ZTg4NWQ2Yjk2NTExODI0MSIsImlhdCI6MTcxOTE4MTgyNCwibmJmIjoxNzE5MTgxODI0LCJleHAiOjE3MjU0OTQ0MDAsInN1YiI6IjExMTkxMzk0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODE0Nzc4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMjMxZDkwMTctYjE5Zi00ODI3LTkxY2ItYzE4NTE1MDU3OTU3In0.NhnViajfr8MB31pNT24f5KVhvUzEwnaMdYwKKA3dIwFhIi3joZGxtoTlZaOp8uzUMlK15ycDmQeK1bTZVLN8TOqMMutG7d_2TQ5FDHxeOh5twztE7csx60zQdHa7ki8xGEMShcTCEnR5mAF9Mjjrrfes2zDe6I_B9VJ4PMgB40KUrPM25A7N8pLo63vxH0cusyq_4vy8xSU0XgU1_Ecbm3ckBzIc0duQEww_52sPOuXqEbEWYGAKI5hDs5uFHMq4QiQj0cn-AREzt9f1qBWoC-bdW38sKiBxZvgerL-7ZFM_R53IqoyGDlaJ7dLpm4Vl8WXDdLAMnyrdjSJs0of8hA'; // Замените на ваш долгосрочный токен
  leads.value = await fetchLeads(token);
});
</script>