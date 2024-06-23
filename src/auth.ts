import axios, {type AxiosInstance } from 'axios';

// Создание экземпляра axios с базовыми настройками
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://zinnatullin969.amocrm.ru/api/v4', // замените на ваш поддомен amoCRM
  headers: {
    'Content-Type': 'application/json'
  }
});

// Функция для установки токена
export function setAuthToken(token: string): void {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

// Пример функции для запроса к amoCRM
export async function getContacts(): Promise<any> {
  try {
    const response = await apiClient.get('/contacts');
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching contacts: ${error}`);
  }
}