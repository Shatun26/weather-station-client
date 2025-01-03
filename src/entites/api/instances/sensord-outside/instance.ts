import axios from 'axios';
import { BASE_URL } from '../../config/axios';

export const sensorsOutsideInstance = axios.create({ baseURL: `${BASE_URL}/api/sensors_outside` });
