import axiosInstance from "../axiosInstance";

export const fetchHighlightData = async () => {
    try{
        const response = await axiosInstance.get('Why People Choose Us?fields=["*"]');
        const childDataResponse = await axiosInstance.get(`Why People Choose Us/${response.data.data[0].name}`);
        return {
            section_title:response.data.data[0].section_title,
            title: response.data.data[0].title,
            subtitle: response.data.data[0].subtitle,
            features: childDataResponse.data.data.our_features,
            cards: childDataResponse.data.data.cards
        }
    }catch(error){
        console.error("Error fetching Highlighs Data",error)
        throw error;
    }
}