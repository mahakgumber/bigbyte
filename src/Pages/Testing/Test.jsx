import React from 'react'
import Navbar4 from '../../components/Navbar4'
import Hero from '../../components/Testing/Hero'
import Services from '../../components/Testing/Services'
import About from '../../components/Testing/About'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'
const Test = () => {
  return (
    <>
     <SeoHelmet 
      title="Testing Agency Kurukshetra-big byte world"
      description="With 18+ years of experience in Software Testing As Service and Quality Assurance, TalentXpert delivers high quality outsourcing services"
      keywords="Testing-BigByteWorld"
    />
    <Navbar4/>
    <Hero/>
    <Services/>
    <About/>
    <Footer/>
    </>
  )
}

export default Test