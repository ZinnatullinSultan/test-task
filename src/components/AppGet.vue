<template>
  <div>
    <button @click="fetchContacts">Get Contacts</button>
    <div v-if="contacts">
      <ul>
        <li v-for="contact in contacts" :key="contact.id">{{ contact.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { setAuthToken, getContacts } from '../auth.ts'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    const contacts = ref<any[]>([]);

    // Установите ваш долгосрочный токен
    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwNjlkYmM4NTc1NjI1OGE4YTQ1MTVmMDQyOTU0YTU3NzNlMjg5MThjYTE1MTg1ODFjNzAzOTI5YjM0MDMyYzhlODg1ZDZiOTY1MTE4MjQxIn0.eyJhdWQiOiJlMTE1NzQ4Ny1hOWMxLTRlMWUtODU0Zi0xYTcxNzEzOTBkNzUiLCJqdGkiOiI3MDY5ZGJjODU3NTYyNThhOGE0NTE1ZjA0Mjk1NGE1NzczZTI4OTE4Y2ExNTE4NTgxYzcwMzkyOWIzNDAzMmM4ZTg4NWQ2Yjk2NTExODI0MSIsImlhdCI6MTcxOTE4MTgyNCwibmJmIjoxNzE5MTgxODI0LCJleHAiOjE3MjU0OTQ0MDAsInN1YiI6IjExMTkxMzk0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODE0Nzc4LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMjMxZDkwMTctYjE5Zi00ODI3LTkxY2ItYzE4NTE1MDU3OTU3In0.NhnViajfr8MB31pNT24f5KVhvUzEwnaMdYwKKA3dIwFhIi3joZGxtoTlZaOp8uzUMlK15ycDmQeK1bTZVLN8TOqMMutG7d_2TQ5FDHxeOh5twztE7csx60zQdHa7ki8xGEMShcTCEnR5mAF9Mjjrrfes2zDe6I_B9VJ4PMgB40KUrPM25A7N8pLo63vxH0cusyq_4vy8xSU0XgU1_Ecbm3ckBzIc0duQEww_52sPOuXqEbEWYGAKI5hDs5uFHMq4QiQj0cn-AREzt9f1qBWoC-bdW38sKiBxZvgerL-7ZFM_R53IqoyGDlaJ7dLpm4Vl8WXDdLAMnyrdjSJs0of8hA';
    setAuthToken(accessToken);

    const fetchContacts = async () => {
      try {
        const response = await getContacts();
        contacts.value = response._embedded.contacts;
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    return {
      contacts,
      fetchContacts
    };
  }
});
</script>

<style scoped>
/* Ваши стили */
</style>
