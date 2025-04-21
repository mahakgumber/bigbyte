import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const ContactUs = () => {
  return (
    <>
      <div className='container relative mb-24'>
        <div className='bg-[#0a243a] w-[85%] h-[28rem] rounded-r-3xl shadow-2xl '>
         <div className='text-center '>
        <div className='p-7 '>
         <p className='text-2xl font-medium text-white'>We are here to answer your <span className='text-[#ff9908]'>Questions</span> 24/7</p>
         <p className='text-4xl font-bold text-white'>We run all Kinds of IT Services that vow your Success</p>
         </div>
         <div className='contact-form flex gap-16 mt-2 border-2 border-white rounded-r-3xl border-l-0 left-0 text-center mr-96 bg-blue-50 shadow-2xl '>
            <div className='flex flex-col gap-14 p-10 ml-44 '>
                <input type="text" placeholder='Full Name' className='border-b-2 border-black bg-cyan-50 font-bold w-80 text-cyan-700' />
                <input type="text" placeholder='Email' className='border-b-2 border-black bg-cyan-50 font-bold text-cyan-700' />
                <input type="text" placeholder='Message' className='border-b-2 border-black bg-cyan-50 font-bold text-cyan-700' />
                <button className='bg-[#0a243a] rounded-2xl h-12 text-white font-bold mt-6 '>Contact Us</button>
                </div>
                <div className='flex flex-col gap-10 mt-12'>
                    <div className=''>
                    <p className='font-bold text-2xl text-[#0a243a]'>Contact</p>
                    <p className='font-semibold'>info@bigbyteworld.com</p>
                    <p className='font-semibold'>Pankaj@bigbyteworld.com</p>
                    </div>
                    {/* <div className=''>
                        <p className='font-bold text-xl'>Based in</p>
                        <p className='font-semibold'>Kurukshetra
                            <p>Plot No. 151, Industrial Area,</p>
                            <p>Sector. 2,</p>
                            <p>Kurukshetra – 136118 (Haryana)</p>
                          </p>
                    </div> */}
                    <div className=''>
                        <p className='font-bold text-2xl text-[#0a243a]'>Call us</p>
                        <p className='font-semibold'>+91 94661 94004</p>
                        <p className='font-semibold'>+91 87080 42248</p>
                    </div>
                    <div className=' flex flex-row gap-14 ml-2 mt-8  '>
                    <FaFacebook className='w-7 h-7 '/>
                    <FaSquareInstagram className='w-7 h-7'/>
                    <FaSquareXTwitter className='w-7 h-7'/>
                    </div>
                </div>
         </div>
         </div>
        </div>
        <div className='bg-blue-50 w-[20%] h-[13rem] right-20  top-40 rounded-3xl absolute border-2 border-white shadow-2xl'>

        </div>
      
      <div className=''>

      </div>
      </div>
    </>
  )
}

export default ContactUs
