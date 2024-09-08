import React from "react";
import Header from "../../Components/Header/Header";
import BannerGlobal from "../../Components/Banner/BannerGlobal";
import Footer from "../../Components/Footer/Footer";
import BlogComponent2 from "../../Components/BlogComponent/BlogComponent2";
import BrandLogo from "../../Components/BrandLogo/BrandLogo";
import useDocumentTitle from "../../PageTitle";

const Blogs = () => {
  useDocumentTitle("Handyman | Blogs")
  return (
    <div>
      <Header />
      <BannerGlobal />
      <BlogComponent2 />
      <BrandLogo/>
      <Footer />
    </div>
  );
};

export default Blogs;
