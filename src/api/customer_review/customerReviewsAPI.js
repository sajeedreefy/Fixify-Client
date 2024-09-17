import axiosInstance from '../axiosInstance';

export const fetchCustomerReviewData = async () => {
  try {
    const response = await axiosInstance.get('Customer Review?fields=["*"]&filters=[["highlight", "=", "1"]]');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};
