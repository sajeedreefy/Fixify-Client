import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import FAQComponent2 from '../../Components/FAQComponent/FAQComponent2'
import FormComponent from '../../Components/FormComponents/FormComponent'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'

const FAQs = () => {
  useDocumentTitle("Fixify | FAQs")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <FAQComponent2/>
        <FormComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default FAQs