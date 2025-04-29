import React from 'react'
import Navbar3 from '../../components/Navbar3'
import ContactUs from '../../components/ui/ContactUs'
import { Helmet } from 'react-helmet-async';
import SeoHelmet from '../../components/Helmet/SeoHelmet'
import Footer from '../../components/ui/Footer'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  return (
    <>
      <SeoHelmet 
      title="Contactus-Big Byte World"
      description="Contact us at Big Byte World , the best IT company in India, a leader in IT industry offering best Business IT Services and Solutions for your business automation and marketing needs "
      keywords="Contact-Big Byte World"
    />
     <ToastContainer />
    <div className='fixed z-20'>
    <Navbar3/>
    </div>
    <div className='pt-32 mb-36'>
<ContactUs/>
</div>
    <Footer/>
    </>
  )
}

export default Contact