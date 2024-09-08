import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import ReviewComponent2 from '../../Components/ReviewComponent/ReviewComponent2'
import FormComponent from '../../Components/FormComponents/FormComponent'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'

const Testimonial = () => {
  useDocumentTitle("Handyman | Testimonial")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <ReviewComponent2/>
        <FormComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default Testimonial