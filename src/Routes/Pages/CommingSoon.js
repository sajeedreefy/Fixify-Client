import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CommingSoonCompo from "../../Components/CommingSoonCompo/CommingSoonCompo";
import useDocumentTitle from "../../PageTitle";

const CommingSoon = () => {
  useDocumentTitle("Handyman | Comming Soon")
  return (
    <div>
      <Header />
      <CommingSoonCompo/>


      <Footer />
    </div>
  );
};

export default CommingSoon;
