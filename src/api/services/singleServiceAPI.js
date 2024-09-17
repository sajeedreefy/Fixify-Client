import axiosInstance from '../axiosInstance';

// Function to fetch some other data
export const fetchSingleServiceData = async (serviceId) => {
  try {
    const response = await axiosInstance.get(`Item/${serviceId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};
