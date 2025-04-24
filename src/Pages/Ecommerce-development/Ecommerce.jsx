import React from 'react'
import Navbar3 from '../../components/Navbar3'
import Hero from '../../components/Ecommerce/Hero'
import Data from '../../components/Ecommerce/Data'
import Services from '../../components/Ecommerce/Services'
import Solutions from '../../components/Ecommerce/Solutions'
import Footer from '../../components/ui/Footer'

const Ecommerce = () => {
  return (
    <>
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
