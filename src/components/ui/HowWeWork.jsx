import React from 'react'

const HowWeWork = () => {
  return (
    <>
    <div className=' p-14 bg-blue-50 '>
    <div className='headings text-center '>
      <h2 className='text-4xl font-semibold'>HOW WE WORK</h2>
      <h1 className='text-6xl font-bold'>How Assist your <span className='text-blue-950 font-sans'>Business</span></h1>
      </div>
      <div className="containers flex justify-center mt-16  ">
        <div className='bg-blue-200 h-[300px] w-[20rem] text-center rounded-tl-3xl relative shadow-xl'>
        <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28" />
        <div className='absolute bg-white top-[6rem] left-1/2 transform -translate-x-1 w-10 h-10 rounded-full text-center p-2 font-bold border-blue-950 border-l-2'>1</div>
        <p className='mt-20 text-3xl font-semibold text-blue-950'> Ideas and Concepts</p>
        {/* <a href="" className=' text-xl font-semibold text-blue-800'>Learn More ...</a> */}
        </div>
        <div className='bg-blue-300 h-[300px] w-[20rem] text-center relative shadow-xl'>
        <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28 " />
        <div className='absolute bg-white top-[6rem] left-1/2 transform -translate-x-1 w-10 h-10 rounded-full text-center p-2 font-bold border-blue-950 border-l-2'>2</div>
        <p className='mt-20 text-3xl font-semibold text-blue-950'>Discussion</p>
        {/* <a href="" className=' text-xl font-semibold text-blue-800'>Learn More ...</a> */}
        </div>
        <div className='bg-blue-400 h-[300px] w-[20rem] text-center relative shadow-xl'>
        <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28 " />
        <div className='absolute bg-white top-[6rem] left-1/2 transform -translate-x-1 w-10 h-10 rounded-full text-center p-2 font-bold border-blue-950 border-l-2'>2</div>
        <p className='mt-20 text-3xl font-semibold text-blue-950'>Development</p>
        {/* <a href="" className=' text-xl font-semibold text-blue-800'>Learn More ...</a> */}
        </div>
        <div className='bg-blue-500 h-[300px] w-[20rem] text-center relative shadow-xl'>
        <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28 " />
        <div className='absolute bg-white top-[6rem] left-1/2 transform -translate-x-1 w-10 h-10 rounded-full text-center p-2 font-bold border-blue-950 border-l-2'>3</div>
        <p className='mt-20 text-3xl font-semibold text-blue-950'> Testing and Trying</p>
        {/* <a href="" className=' text-xl font-semibold text-blue-800'>Learn More ...</a> */}
        </div>
        <div className='bg-blue-600 h-[300px] w-[20rem] text-center rounded-br-3xl relative shadow-xl'>
        <hr className="border-t-2 border-blue-950 w-full mx-auto mt-28 " />
        <div className='absolute bg-white top-[6rem] left-1/2 transform -translate-x-1 w-10 h-10 rounded-full text-center p-2 font-bold border-blue-950 border-l-2'>4</div>
        <p className='mt-20  text-3xl font-semibold text-blue-950'>Execute and Install</p>
        {/* <a href="" className=' text-xl font-semibold text-blue-800'>Learn More ...</a> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default HowWeWork
