import React from 'react'
import Navbar3 from '../../components/Navbar3'
import Hero from '../../components/Seo/Hero'
import Data from '../../components/Seo/Data'
import Services from '../../components/Seo/Services'
import ServicesOffer from '../../components/Seo/SevicesOffer'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'

const Seo = () => {
  return (
    <>
     <SeoHelmet 
      title="Search Engine Optimization agency in Kurukshetra"
      description="Big Byte World, a top Search Engine Optimization agency in Kurukshetra, offers strategies to boost online visibility, increase traffic, and drive growth."
      keywords="SocialMediaOptimization-BigByteWorld,SEO-BigByteWorld"
    />
      <Navbar3/>
      <Hero/>
      <Data/>
      <Services/>
      <ServicesOffer/>
      <Footer/>
    </>
  )
}

export default Seo
