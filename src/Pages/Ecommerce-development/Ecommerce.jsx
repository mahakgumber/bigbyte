import React from 'react'
import Navbar3 from '../../components/Navbar3'
import { Helmet } from 'react-helmet-async';
import SeoHelmet from '../../components/Helmet/SeoHelmet'
import Hero from '../../components/Ecommerce/Hero'
import Data from '../../components/Ecommerce/Data'
import Services from '../../components/Ecommerce/Services'
import Solutions from '../../components/Ecommerce/Solutions'
import Footer from '../../components/ui/Footer'

const Ecommerce = () => {
  return (
    <>
      <SeoHelmet 
      title="eCommerce Website Development Agency kurukshetra - Big Byte World"
      description="Looking for a reliable eCommerce website development partner in Kurukshetra? Look no further than BigByteWorld.com. Start increasing online sales today!!"
      keywords="eCommerce Website Development-Big Byte World"
    />
      <Navbar3/>
      <Hero />
      <Data />
      <Services />
      <Solutions/>
      <Footer />
    </>
  )
}

export default Ecommerce
