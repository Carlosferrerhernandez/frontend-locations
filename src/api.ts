import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Usaremos variables de entorno
    headers: {
        'X-API-KEY': process.env.REACT_APP_API_KEY || '', // API Key
    },
});

export default api;
