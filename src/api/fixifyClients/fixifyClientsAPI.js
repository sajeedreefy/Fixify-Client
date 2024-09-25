import axiosInstance from '../axiosInstance'

async function fetchFixifyClientsAPI() {
  try{
    const clients = await axiosInstance.get(`Fixify Clients?fields=["*"]`)
    const clientList = clients.data.data

    return clientList

  }
  catch(error){
    console.error('Error getting clients', error);
    throw error;
  }
}

export default fetchFixifyClientsAPI