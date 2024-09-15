import axiosInstance from '../axiosInstance';

export const fetchTeamMembers = async () => {
  try {
    const response = await axiosInstance.get('Employee?fields=[ "employee_name", "image", "designation"]&filters=[["custom_is_technician", "=", " 1"]]');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching other data:', error);
    throw error;
  }
};
