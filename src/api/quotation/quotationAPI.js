import axiosInstance from '../axiosInstance';

// Function to create a new customer
export const createCustomer = async (customerData) => {
  try {
    const response = await axiosInstance.post('/Customer', {
      data: {
        customer_name: customerData.customer_name,
        customer_group: "All Customer Groups", // This could be dynamic or a fixed value based on your ERPNext setup
        territory: "All Territories",         // Adjust this based on your needs
        email_id: customerData.customer_email,
        mobile_no: customerData.customer_phone,
        city: customerData.city,
        // Add more fields as needed from your ERPNext Customer DocType
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

// Function to create a new quotation
export const createQuotation = async (quotationData) => {
  try {
    const response = await axiosInstance.post('/Quotation', {
      data: {
        customer: quotationData.customer,
        party_name: quotationData.customer,
        transaction_date: new Date().toISOString().slice(0, 10), // Set the current date for the quotation
        custom_appointment_date: quotationData.appointment_date,
        items: quotationData.items.map((item) => ({
          item_code: item.service,
          qty: 1,  // Default quantity can be set to 1 or dynamic based on your input
          schedule_date: item.appointment_date,  // Custom field for appointment date
          rate: 0  // You can fetch or calculate the rate for the service here
        })),
        custom_remarks: quotationData.additional_info,  // Add other fields as needed from your ERPNext Quotation DocType
        // Add more fields as needed from your ERPNext Quotation DocType
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating quotation:', error);
    throw error;
  }
};
