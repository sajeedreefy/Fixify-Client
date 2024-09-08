import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Error404Component from '../../Components/Error404Comp/Error404Component'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'

const Error404 = () => {
  useDocumentTitle("Handyman | Error 404")
  return (
    <div>
        <Header/>
        <Error404Component/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default Error404