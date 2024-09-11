import axiosInstance from "../axiosInstance";

export const fetchPricingPlanData = async () => {
    try {
        const response = await axiosInstance.get('Our Pricing Plan?fields=["*"]');
        const planName = response.data.data[0].name;

        const childDataResponse = await axiosInstance.get(`Our Pricing Plan/${planName}`);

        const pricingTable = childDataResponse.data.data.pricing_table;

        const planDataPromises = pricingTable.map(each => 
            axiosInstance.get(`Pricing Table/${each.link}`).then(res => res.data.data)
        );
        const planData = await Promise.all(planDataPromises);

        const data = {
            section_data: childDataResponse.data.data,
            plan_data: planData
        };

        return data;
        
    } catch (error) {
        console.error("Error fetching Pricing Plan Data", error);
        throw error;
    }
};
