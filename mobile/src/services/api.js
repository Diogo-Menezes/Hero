import axios from 'axios';

const BASE_URL = 'http://192.168.0.102:3333/';

const api = axios.create({
  timeout:2000,
  baseURL: BASE_URL,
  setTimeout:2000,
});

export default api;
