import axiosInstance from "../axiosInstance";

export const fetchAboutComponent = async () => {
  try {
    const aboutSection = await axiosInstance.get(
      `About Us?fields=["*"]&filters=[["enable","=","1"]]`
    );
    // console.log(test);

    const aboutComponentItems = aboutSection.data.data[0];

    return aboutComponentItems;
  } catch (error) {
    console.error("Error fetching other data:", error);
    throw error;
  }
};
