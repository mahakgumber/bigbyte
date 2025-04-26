import React from 'react'
import Navbar4 from '../../components/Navbar4'
import Hero from '../../components/Web-Development/Hero'
// import Features from '../../components/Web-Development/Features'
import Features1 from '../../components/Web-Development/Features1'
import Technologies from '../../components/Web-Development/Technologies'
import Services from '../../components/Web-Development/Services'
import About from '../../components/Web-Development/About'
import Footer from '../../components/ui/Footer'

const Web = () => {
  return (
    <>
      <Navbar4/>
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
