import axiosInstance from "../axiosInstance";

export const fetchFAQData = async () => {
    try{
        const response = await axiosInstance.get('FAQ?fields=["*"]');
        const childDataResponse = await axiosInstance.get(`FAQ/${response.data.data[0].name}`);
        return childDataResponse.data.data
    }catch(error){
        console.error("Error fetching Highlighs Data",error)
        throw error;
    }
}