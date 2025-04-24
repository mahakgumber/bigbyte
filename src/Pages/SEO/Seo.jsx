import React from 'react'
import Navbar3 from '../../components/Navbar3'
import Hero from '../../components/Seo/Hero'
import Data from '../../components/Seo/Data'
import Services from '../../components/Seo/Services'
import ServicesOffer from '../../components/Seo/SevicesOffer'
import Footer from '../../components/ui/Footer'

const Seo = () => {
  return (
    <>
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
