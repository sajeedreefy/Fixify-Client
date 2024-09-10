import React from "react";
import Header from "../Components/Header/Header";
import BannerGlobal from "../Components/Banner/BannerGlobal";
import Footer from "../Components/Footer/Footer";
import Appointment from "../Components/ContactComponent/Appointment";
import FAQComponenent from "../Components/FAQComponent/FAQComponenent";
import BrandLogo from "../Components/BrandLogo/BrandLogo";
import useDocumentTitle from "../PageTitle";

const Quotes = () => {
  useDocumentTitle("Fixify | Quotes")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <Appointment />
      <FAQComponenent/>
      <BrandLogo/>
      <Footer />
    </div>
  );
};

export default Quotes;
