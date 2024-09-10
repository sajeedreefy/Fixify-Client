import axiosInstance from '../axiosInstance';

// Function to fetch some other data
export const fetchAllServiceData = async () => {
  try {
    const response = await axiosInstance.get('/Item?fields=["*"]&filters=[["disabled", "=", "0"]]');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};
