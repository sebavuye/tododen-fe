import axios from 'axios';

const ApiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});

export default ApiClient;
