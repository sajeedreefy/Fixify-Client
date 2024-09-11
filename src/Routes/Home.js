import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import AboutHighlight from '../Components/AboutComponent/AboutHighlight'
import ServiceComponent from '../Components/ServiceComponent/ServiceComponent'
import Highlight from '../Components/Highlight/Highlight'
import PricingcardComponent from '../Components/PricingCard/PricingcardComponent'
import FAQComponenent from '../Components/FAQComponent/FAQComponenent'
import TeamComponent from '../Components/TeamComponent/TeamComponent'
import FormComponent from '../Components/FormComponents/FormComponent'
import ReviewComponent from '../Components/ReviewComponent/ReviewComponent'
import BlogComponent from '../Components/BlogComponent/BlogComponent'
import BrandLogo from '../Components/BrandLogo/BrandLogo'

const Home = () => {

  return (
    <div>
        <Header/>
        <Banner/>
        <AboutComponent/>
        <AboutHighlight/>
        <ServiceComponent/>
        <Highlight/>
        <PricingcardComponent/>
        <FAQComponenent expand={false}/>
        <TeamComponent/>
        <FormComponent/>
        <ReviewComponent/>
        <BlogComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default Home