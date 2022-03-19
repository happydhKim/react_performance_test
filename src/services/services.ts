import axios from 'axios';

const apiService = axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiService;
