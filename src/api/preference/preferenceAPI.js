
import axiosInstance from "../axiosInstance";

async function fetchPreferenceAPI() {
  try {
    const prefereceCall = await axiosInstance.get(`/Preference/Preferece`);

    const preferenceData = prefereceCall.data.data;
    return preferenceData;
  } catch (error) {
    console.error("Error fetching other data:", error);
    throw error;
  }
}

export default fetchPreferenceAPI;
