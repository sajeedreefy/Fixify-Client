// import { createCustomer, createQuotation } from './quotation/quotationAPI';
// import { fetchAllServiceData } from './services/allServicesAPI';

// const ApiFacade = {
//   // Customer-related API calls
//   createCustomer: (customerData) => createCustomer(customerData),

//   // Quotation-related API calls
//   createQuotation: (quotationData) => createQuotation(quotationData),

//   // Service-related API calls
//   fetchAllServices: () => fetchAllServiceData(),
// };

// export default ApiFacade;



import { createCustomer, createQuotation } from './quotation/quotationAPI';
import { fetchAllServiceData } from './services/allServicesAPI';

class ApiFacade {
  // Static method for creating a customer
  static createCustomer(customerData) {
    return createCustomer(customerData);
  }

  // Static method for creating a quotation
  static createQuotation(quotationData) {
    return createQuotation(quotationData);
  }

  // Static method for fetching all services
  static fetchAllServices() {
    return fetchAllServiceData();
  }

  //Static method for fetching single service
  
}

export default ApiFacade;
