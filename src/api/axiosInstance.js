import axios from 'axios';

// Create an Axios instance with the base URL and default headers
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,  // Use the base URL from the environment variable
    headers: {
        'Authorization': `token ${process.env.REACT_APP_API_TOKEN}`,  // Use the API token from the environment variable
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;
