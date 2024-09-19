import { createCustomer, createQuotation } from './quotation/quotationAPI';
import { fetchAllServiceData } from './services/allServicesAPI';
import { fetchTeamMembers } from './team_member/teamMemberAPI'
import { fetchCustomerReviewData } from './customerReview/customerReviewsAPI';
import { fetchTopMenuData } from './topMenu/topMenuAPI';
import { fetchNavItems } from './NavigationItems/navigationItemsAPI';
import { fetchSingleServiceData } from './services/singleServiceAPI';

import fetchPreferenceAPI from './preference/preferenceAPI';

class ApiFacade {
  //Fetch preference data
  static fetchPreferenceData(){
    return fetchPreferenceAPI();
  }

  static fetchTopmenuData(){
    return fetchTopMenuData();
  }
  static fetchNavItemsData(){
    return fetchNavItems();
  }

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
  
  static fetchSingleService(serviceId){
    return fetchSingleServiceData(serviceId);
  }

  //Static method for fetching team members
  static fetchTeamMembers() {
    return fetchTeamMembers();
  }

  static fetchCustomerReviews() {
    return fetchCustomerReviewData();
  }
  
}

export default ApiFacade;
