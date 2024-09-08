import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import Footer from "../../Components/Footer/Footer";
import TeamComponent2 from "../../Components/TeamComponent/TeamComponent2";
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
      <TeamComponent2 />
      <FormComponent />
      <ReviewComponent />
      <BrandLogo />
      <Footer />
    </div>
  );
};

export default Team;
