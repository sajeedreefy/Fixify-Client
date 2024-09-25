import axiosInstance from '../axiosInstance';

async function postNewsletterAPI(emailGroupMember) {
  try {
    const response = await axiosInstance.post('Email Group Member', {
      data: {
        email_group: "Fixify-Newsletter",
        email: emailGroupMember.newsLetter_email
        // Add more fields as needed from your ERPNext Customer DocType
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
}

export default postNewsletterAPI