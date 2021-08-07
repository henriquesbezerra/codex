import axios from 'axios';

// Rotas disponíveis do github: https://api.github.com/
const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
