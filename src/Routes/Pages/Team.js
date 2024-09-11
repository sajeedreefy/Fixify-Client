import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import Footer from "../../Components/Footer/Footer";
import TeamComponent from "../../Components/TeamComponent/TeamComponent";
import FormComponent from "../../Components/FormComponents/FormComponent";
import ReviewComponent from "../../Components/ReviewComponent/ReviewComponent";
import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import useDocumentTitle from "../../PageTitle";

const Team = () => {
  useDocumentTitle("Handyman | Teams")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <TeamComponent />
      <FormComponent />
      <ReviewComponent />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default Team;
