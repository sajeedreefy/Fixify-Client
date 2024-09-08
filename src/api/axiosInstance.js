// src/api/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with the base URL and default headers
const axiosInstance = axios.create({
    baseURL: 'https://admin-fixify.glascutr.com/api/resource/',  // Replace <base-url> with actual backend URL
    headers: {
        'Authorization': 'token ce0e5f8b7c2a581:0148ab4187066ff',  // Your fixed API key and secret
        'Content-Type': 'application/json',  // Default content type
    }
});

export default axiosInstance;
