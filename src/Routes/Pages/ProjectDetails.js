import React from 'react'
import Header from '../../Components/Header/Header'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import Footer from '../../Components/Footer/Footer'
import ProjectDetailsComponent from '../../Components/ProjectComponent/ProjectDetailsComponent'
import FormComponent from '../../Components/FormComponents/FormComponent'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'

const ProjectDetails = () => {
  useDocumentTitle("Handyman | Project Details")
  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <ProjectDetailsComponent/>
        <FormComponent/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default ProjectDetails