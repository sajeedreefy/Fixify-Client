import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import FormComponent from '../../Components/FormComponents/FormComponent'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import ProjectCompoenent from '../../Components/ProjectComponent/ProjectCompoenent'
import useDocumentTitle from '../../PageTitle'

const Projects = () => {
  useDocumentTitle("Handyman | Projects")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <ProjectCompoenent/>
        <FormComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default Projects