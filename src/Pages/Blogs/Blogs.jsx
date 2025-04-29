import React from 'react'
import { Helmet } from 'react-helmet-async';
import SeoHelmet from '../../components/Helmet/SeoHelmet'
import Navbar3 from '../../components/Navbar3'
import BlogSection from '../../components/BlogSection/BlogSection'
import Footer from '../../components/ui/Footer'

const Blogs = () => {
  return (
    <div>
       <SeoHelmet 
      title="Blogs-BigByteWorld"
      description="Need a trusted digital marketing agency in Kurukshetra? Big Byte World offers cost-effective solutions to help you reach your audience and goals!"
      keywords="Blogs-BigByteWorld"
    />

    <Navbar3/>
    <BlogSection/>
    <Footer/>
    </div>
  )
}

export default Blogs
