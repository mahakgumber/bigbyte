import React from 'react'
import Navbar4 from '../../components/Navbar4'
import Hero from '../../components/About/Hero'
import AboutCompany from '../../components/About/AboutCompany'
import Life from '../../components/About/Life'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'

const About = () => {
  return (
    <>
    <title>hellow world</title>
    <SeoHelmet 
      title="About Us - Big Byte World"
      description="Big Byte Innovations Pvt Ltd - Leading IT &amp; Software company in India, specializing in software solutions, IT services, digital marketing &amp; web technologies."
      keywords="about-us,bigbyteworld"
    />
      <Navbar4/>
      <Hero/>
      <AboutCompany/>
      <Life/>
      <Footer />
    </>
  )
}

export default About
