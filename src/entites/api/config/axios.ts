import axios from 'axios';

export const BASE_URL = `${process.env.API_URL}`;

axios.defaults.withCredentials = true;
