import React from 'react'
import Navbar3  from '../../components/Navbar3'
import Hero from '../../components/ServicesSection/Hero'
import List from '../../components/ServicesSection/List'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'

const Services = () => {
  return (
    <>
     <SeoHelmet 
      title="IT Services Kurukshetra-Big Byte World"
      description="Big Byte World provides comprehensive IT solutions for businesses in Kurukshetra. Get reliable IT support, managed services, and more. Contact us today!"
      keywords="Services-BigByteWorld"
    />
      <Navbar3/>
      <Hero/>
      <List/>
      <Footer/>
    </>
  )
}

export default Services
