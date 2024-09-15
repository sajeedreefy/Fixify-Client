import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BannerGlobal from '../../Components/Banner/BannerGlobal'
import BlogDetailsComponent from '../../Components/BlogComponent/BlogDetailsComponent'
import BlogComponent3 from '../../Components/BlogComponent/BlogComponent3'
import BrandLogo from '../../Components/BrandLogo/BrandLogo'
import useDocumentTitle from '../../PageTitle'



const BlogDetails = () => {
  useDocumentTitle("Fixify | Blog Details")

  return (
    <div>
        <Header/>
        <BannerGlobal/>
        <BlogDetailsComponent/>
        <BlogComponent3/>
        <BrandLogo/>
        <Footer/>
    </div>
  )
}

export default BlogDetails