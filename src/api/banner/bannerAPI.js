// src/api/otherAPI.js
import axiosInstance from "../axiosInstance";

// Function to fetch some other data
export const fetchBannerItems = async () => {
  try {
    const HeroSection = await axiosInstance.get('Hero Section?filters=[["enable","=","1"]]&fields=["*"]');
    // console.log(test);

    const HeroItems = HeroSection.data.data[0];
    
    return HeroItems;
  } catch (error) {
    console.error("Error fetching other data:", error);
    throw error;
  }
};
