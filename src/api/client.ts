import axios from 'axios';
import { BACKEND_URL } from '../config';

const client = axios.create({
  baseURL: BACKEND_URL,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
});

export default client;
