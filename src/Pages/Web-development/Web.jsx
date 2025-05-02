import React from 'react'
import Navbar3 from '../../components/Navbar3'
import Hero from '../../components/Web-Development/Hero'
// import Features from '../../components/Web-Development/Features'
import Features1 from '../../components/Web-Development/Features1'
import Technologies from '../../components/Web-Development/Technologies'
import Services from '../../components/Web-Development/Services'
import About from '../../components/Web-Development/About'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'

const Web = () => {
  return (
    <>
    <SeoHelmet 
      title="Website Development Agency Kurukshetra-big byte world"
      description="BigByteWorld.com, Kurukshetra&#039;s top website development agency, creates stunning, user-friendly sites to help businesses grow. Get a free quote!"
      keywords="Web-Development-BigByteWorld"
    />
      <Navbar3/>
      <Hero/>
      {/* <Features/> */}
      <Features1/>
      <Technologies/>
      <Services/>
      <About/>
      <Footer/>
    </>
  )
}

export default Web
