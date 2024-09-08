import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import BannerGlobal from '../Components/Banner/BannerGlobal'
import AboutComponent from '../Components/AboutComponent/AboutComponent'
import AboutHighlight from '../Components/AboutComponent/AboutHighlight'
import Highlight from '../Components/Highlight/Highlight'
import TeamComponent from '../Components/TeamComponent/TeamComponent'
import FormComponent from '../Components/FormComponents/FormComponent'
import ReviewComponent from '../Components/ReviewComponent/ReviewComponent'
import BrandLogo from '../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../PageTitle'

const About = () => {
  useDocumentTitle("Handyman | About")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <AboutComponent/>
        <AboutHighlight/>
        <Highlight/>
        <TeamComponent/>
        <FormComponent/>
        <ReviewComponent/>
        <BrandLogo/>

        <Footer/>
    </div>
  )
}

export default About