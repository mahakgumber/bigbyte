import React from 'react'
import Navbar4 from '../../components/Navbar4'
import Hero from '../../components/Privacy-Policy/Hero'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'

const Privacy = () => {
  return (
    <>
     <SeoHelmet 
      title="Privacy Policy - Techkit - Technology &amp; IT Solutions WordPress Theme"
      description="Who we are Suggested text: Our website address is: https://bigbyteworld.com. Comments Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a"
      keywords="privacy-and-policy-BigByteWorld"
    />
      <Navbar4/>
     <Hero/>
      <Footer/>
    </>
  )
}

export default Privacy
