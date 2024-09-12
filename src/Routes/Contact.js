import React from "react";
import Header from "../Components/Header/Header";
import BannerGlobal from "../Components/Banner/BannerGlobal";
import Footer from "../Components/Footer/Footer";
import ContactCompoent from "../Components/ContactComponent/ContactCompoent";
import FAQComponenent from "../Components/FAQComponent/FAQComponenent";
import BrandLogo from "../Components/BrandLogo/BrandLogo";
import useDocumentTitle from "../PageTitle";

const Contact = () => {
  useDocumentTitle("Fixify | Contacts")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <ContactCompoent />
      <FAQComponenent/>
      <BrandLogo/>
      <Footer />
    </div>
  );
};

export default Contact;
