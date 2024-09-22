import axiosInstance from '../axiosInstance';

export const fetchAppointmentSectionData = async () => {
  try {
    const response = await axiosInstance.get('Appointment Section/Appointment Section');
    // return response.data;
    return response.data.data;
  } catch (error) {
    console.error('Error fetching other data:', error);
    throw error;
  }
};
