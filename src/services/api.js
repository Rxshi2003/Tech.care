import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fedskillstest.coalitiontechnologies.workers.dev',
  headers: {
    Authorization: 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
  }
});

export const fetchPatients = async () => {
  try {
    const response = await api.get('');
    return response.data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};
