import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/clone-5bd7f/us-central1/api',
    baseURL: 'https://amzwebap.onrender.com',
    
});

export default instance; 