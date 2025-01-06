import axios from 'axios';

export const BASE_URL = `${process.env.REACT_APP_API_URL}`;

axios.defaults.withCredentials = true;
