import React from 'react'

const AboutData = () => {
  return (
    <>
    <div className='flex gap-1 '>
    <div className='p-3 w-[100rem]'>
      <h2 className='text-black font-bold text-3xl underline p-1  decoration-blue-950'>Our Company:</h2>
      <h1 className='font-bold text-4xl p-1'>One of the Best <span className='text-blue-950 font-extrabold'>Website Development</span> Company in India</h1>
      <h3 className='font-semibold text-2xl p-1'>A company's website is the first impression to its customers and it tells them all about that company.</h3>
      <p className='font-medium text-xl p-2'>To get a functional, updated and competitive business website, you need a business partner that can provide you with the same and has understanding of the industry. BigByte is your one-stop centre for all your needs. We specialize in the development of multifunctional, dynamic and robust business websites using the most advanced technologies.</p>
    </div>
    <div className=' w-[40rem]'>
      <img src="/images/about/globe2.png" alt="globe-bigbyteworld" className="" />
    </div>
    </div>
    </>
  )
}

export default AboutData
