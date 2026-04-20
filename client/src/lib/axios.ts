import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://172.16.10.10:3000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});
