import React from 'react'
import Navbar3 from '../../components/Navbar3'
import { Helmet } from 'react-helmet-async';
import SeoHelmet from '../../components/Helmet/SeoHelmet'
import Hero from '../../components/Digital/Hero'
import Services from '../../components/Digital/Services'
import About from '../../components/Digital/About'
import Footer from '../../components/ui/Footer'

const Digital = () => {
  return (
    <>
       <SeoHelmet 
      title="Digital Marketing-Big Byte World"
      description="Stand out with BigByteWorld.com! Get top digital marketing in Kurukshetra. Boost engagement, reach new customers, and achieve your business goals today!!"
      keywords="Digital markting -Big Byte world"
    />
      <Navbar3/>
      <Hero/>
      <Services/>
      <About/>
      <Footer/>
    </>
  )
}

export default Digital
