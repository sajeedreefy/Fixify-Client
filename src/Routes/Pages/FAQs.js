import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import FormComponent from '../../Components/FormComponents/FormComponent'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'
import FAQComponenent from '../../Components/FAQComponent/FAQComponenent'

const FAQs = () => {
  useDocumentTitle("Fixify | FAQs")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        {/* <FAQComponent2/> */}
        <FAQComponenent expand={true}/>
        <FormComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default FAQs