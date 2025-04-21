import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='bg-cyan-100 flex flex-row  '>
        <div className='p-24'>
        <div className="logo">
            <img src="public/images/logo/bigbyte-logo.png" alt="" />
        </div>
        <div className='text-cyan-950 p-5'>
            <p className='text-xl font-extrabold'>BigByte World</p>
            <p className='text-xl font-semibold'>Your Vision, Our Innovation.</p>
        </div>
        </div>
        <div className='bg-[#0a243a] text-white right-0 w-full'>
            <div className='flex flex-row ml-16 '>
                <div className='p-10 flex flex-row justify-between gap-72'>
                    <div>
                    <p className='mb-4 text-xl font-semibold'>Follow Us </p>
                    <div className='flex flex-row gap-16'>
                        <FaFacebook className='w-7 h-7 '/>
                        <FaSquareInstagram className='w-7 h-7'/>
                        <FaSquareXTwitter className='w-7 h-7'/>
                    </div>
                    </div>
                    <div className="subscribe">
                        <p className='text-xl font-semibold mb-3'>Subscribe</p>
                        <div className='flex flex-row gap-6'>
                        <input type="text" name="" id="" className='p-1 rounded-md w-60 ' placeholder='E-mail'/>
                        <button className='bg-white text-black px-3 rounded-md font-semibold'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

         <hr />
        <div className='main-container flex flex-row gap-36 p-16 ml-9'>
        <div className='sub-container-1'>
        <p className='font-bold text-2xl mb-3'>IT Services</p>
        <ul className='flex flex-col gap-3 font-medium'>
            <li><a href="">eCommerce Development</a></li>
            <li><a href="">SEO</a></li>
            <li><a href="">Web Development</a></li>
            <li><a href="">Digital Marketing</a></li>
            <li><a href="">Development</a></li>
            <li><a href="">SMO</a></li>
        </ul>
    </div>
    <div className="sub-container-2">
    <p className='font-bold text-2xl mb-3'>Important Links</p>
        <ul className='flex flex-col gap-3 font-medium'>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Refund and Returns Policy</a></li>
            <li><a href="">Terms and Conditions</a></li>
            
        </ul>
    </div>
    <div className="sub-container-3">
    <p className='font-bold text-2xl mb-3'>Get in Touch</p>
        <ul className='flex flex-col gap-3 font-medium' >
            <li ><a href="" className='flex flex-center gap-2'><FaPhoneAlt className='mt-1'/>:+91 94661 94004</a></li>
            <li><a href="" className='flex flex-center gap-2'><MdEmail className='mt-1'/>: info@bigbyteworld.com </a></li>
            <li><a href="" className='flex flex-center gap-2'><FaLocationDot className='mt-1'/>: Plot No. 151,   </a></li>
            <li><a href="" className='ml-7'>Industrial Area,Sector-2,</a></li>
            <li><a href="" className='ml-7'>Kurukshetra – 136118 (Haryana)</a></li>
            
        </ul>
    </div>
 </div>
 <div className='copyright bg-cyan-900 text-center'>© 2022 Big Byte Innovations Pvt. Ltd All Rights Reserved</div>
 </div>

      </div>
    </>
  )
}

export default Footer
