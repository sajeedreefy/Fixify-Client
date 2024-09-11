import { createCustomer, createQuotation } from './quotation/quotationAPI';
import { fetchAllServiceData } from './services/allServicesAPI';
import { fetchTeamMembers } from './team_member/teamMemberAPI'

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

  //Static method for fetching team members

  static fetchTeamMembers() {
    return fetchTeamMembers();
  }
  
}

export default ApiFacade;
