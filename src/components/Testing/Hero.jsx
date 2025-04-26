import React from 'react'

const Hero = () => {
  return (
    <>
     {/* Hero Section */}
     <div className='relative '>
        <img src="/images/hero/test1.jpeg" alt="" className='w-[100vw] h-[100vh] xs:w-[100vw]'/>
        <div className='xl:text-7xl absolute xl:top-80 xl:ml-16 xl:w-[40rem] text-[#0a243a] font-bold xs:text-3xl xs:w-48 xs:top-96 xs:ml-6 md:top-[40%] md:text-6xl md:w-[35rem] md:ml-16
        tab:top-[40%] tab:text-7xl  '></div>
      </div>
      {/* Description Section */}
      <div className="bg-white px-6 md:px-16 lg:px-24 py-12 space-y-6 text-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-snug">
        TalentXpert – Testing With Quality & Assurance Endlessly
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
        With over <strong> 18 years </strong> of experience in Software Testing as a Service and Quality Assurance services, TalentXpert consistently delivers 
        high-quality outsourcing services. Moreover, with a strong focus on timely deliveries and user-specific solutions, our QA services effectively 
        help clients and partners manage the quality of their deliverables at lower costs. Additionally, TalentXpert’s QA professionals are always prepared to take on testing projects of any scale and complexity, ensuring seamless execution and optimal results.
        </p>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
        We created excellent and sustainable Software Technology solutions.
        </p>
      </div>
    </>
  )
}

export default Hero