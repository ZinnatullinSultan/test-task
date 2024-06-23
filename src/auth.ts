async function fetchLeads(token: string) {
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
  console.log(data);
  return data._embedded.leads; // Assuming data structure matches amoCRM API response
}