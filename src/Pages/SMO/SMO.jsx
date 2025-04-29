import React from 'react'
import Navbar3 from '../../components/Navbar3'
import Hero from '../../components/Smo/Hero'
import Data from '../../components/Smo/Data'
import Services from '../../components/Smo/Services'
import About from '../../components/Smo/About'
import Footer from '../../components/ui/Footer'
import SeoHelmet from '../../components/Helmet/SeoHelmet'

const SMO = () => {
  return (
    <>
     <SeoHelmet 
      title="Lead Generation Agency in Kurukshetra-Big-Byte"
      description="&quot;BigByteWorld.com: Revolutionizing Kurukshetra&#039;s tech landscape with advanced IT services, software development, Lead Generation solutions.&quot;"
      keywords="SMO-BigByteWorld,SocialMediaOptimization"
    />
      <Navbar3/>
      <Hero/>
      <Data/>
      <Services/>
      <About/>
      <Footer/>
    </>
  )
}

export default SMO
