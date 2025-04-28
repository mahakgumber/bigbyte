import React from 'react'
import Navbar3 from '../../components/Navbar3'
import ContactUs from '../../components/ui/ContactUs'
import Footer from '../../components/ui/Footer'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  return (
    <>
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