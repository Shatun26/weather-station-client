import axios from 'axios';
import { BASE_URL } from '../../config/axios';

export const authInstance = axios.create({ baseURL: `${BASE_URL}/api/auth` });
export const authProtectedInstance = axios.create({ baseURL: `${BASE_URL}/api/auth` });
