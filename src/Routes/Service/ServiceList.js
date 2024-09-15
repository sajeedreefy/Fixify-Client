import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import Footer from "../../Components/Footer/Footer";
import ServiceListComponent from "../../Components/ServiceComponent/ServiceListComponent";
import PricingcardComponent from "../../Components/PricingCard/PricingcardComponent";
import TeamComponent from "../../Components/TeamComponent/TeamComponent";
import FormComponent from "../../Components/FormComponents/FormComponent";
import ReviewComponent from "../../Components/ReviewComponent/ReviewComponent";
import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import useDocumentTitle from "../../PageTitle";

const ServiceList = () => {
  useDocumentTitle("Fixify | ServiceList")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <ServiceListComponent />
      <PricingcardComponent />
      <TeamComponent />
      <FormComponent />
      <ReviewComponent />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default ServiceList;
