import axios from 'axios';
import { BASE_URL } from '../config/axios';

export const axiosInstance = axios.create({ baseURL: `${BASE_URL}/api/weather` });
