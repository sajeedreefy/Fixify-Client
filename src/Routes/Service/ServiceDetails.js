import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import ServiceDetailsComponent from '../../Components/ServiceComponent/ServiceDetailsComponent'
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import FormComponent from '../../Components/FormComponents/FormComponent'
import ReviewComponent from '../../Components/ReviewComponent/ReviewComponent'
import BlogComponent from '../../Components/BlogComponent/BlogComponent'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'


const ServiceDetails = () => {
  useDocumentTitle("Handyman | Service Details")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <ServiceDetailsComponent/>
        <TeamComponent/>
        <FormComponent/>
        <ReviewComponent/>
        <BlogComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default ServiceDetails