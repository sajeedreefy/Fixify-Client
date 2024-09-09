// src/api/otherAPI.js
import axiosInstance from '../axiosInstance';

// Function to fetch some other data
export const fetchTopMenuData = async () => {
  try {
    const response = await axiosInstance.get('/Topbar Menu?fields=[ "*"]&filters=[["enable", "=", " 1"]]');zz
    const singleResponse = await axiosInstance.get(`/Topbar Menu/${response.data.data[0].name}`);
    // return response.data;
    return singleResponse.data.data;
  } catch (error) {
    console.error('Error fetching other data:', error);
    throw error;
  }
};
