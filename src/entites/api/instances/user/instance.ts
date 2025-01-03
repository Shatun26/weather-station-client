import axios from 'axios';
import { BASE_URL } from '../../config/axios';

export const userInstance = axios.create({ baseURL: `${BASE_URL}/api/user` });
