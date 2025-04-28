import Navbar3 from '../../components/Navbar3'
import { FeaturesSectionDemo } from '../../components/ui/FeaturesSectionDemo'
import { BackgroundGradient } from '../../components/ui/BackgroundGradient'
import AboutData from '../../components/ui/AboutData'
import HowWeWork from '../../components/ui/HowWeWork'
import { AnimatedTestimonials } from '../../components/ui/AnimatedTestimonials'
import { testimonials } from '../../components/ui/testimonials'
import { HoverEffect } from '../../components/ui/HoverEffect'
import { items } from '../../components/ui/items'
import ContactUs from '../../components/ui/ContactUs'
import Footer from '../../components/ui/Footer'
import Hero1 from '../../components/ui/Hero1'
import ClientsScroller from '../../components/ui/ClientsScroller'
import VisitUs from '../../components/ui/VisitUs'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function Home() {

  return (
    <>
            <ToastContainer />

    <div className='overflow-auto'>
     <Navbar3/>
     {/* <WavyBackground className="heading text-black  text-7xl font-extrabold ml-28" blur={0} backgroundImage={bgImage} desc="Delivering Quality Software Products and Premium IT Services Since 2013">
      BigByteWorld
     </WavyBackground> */}
     <div className=''>
     <Hero1/>
     </div>
      <FeaturesSectionDemo/>
      <div className='flex justify-center items-center  mt-10 mb-10 rounded-2xl  xl:p-20 xs:p-3 md:p-5 s:p-6 lg:p-7 w-[100vw]'>
      <BackgroundGradient animate={true} containerClassName="rounded-3xl shadow-xl w-[100%] max-w-full"
        className="bg-white text-black p-6 rounded-3xl ">
       <AboutData/>
      </BackgroundGradient>
      </div>
      <HowWeWork/>
      <HoverEffect items={items} className=""/>
      <ContactUs/>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
      <ClientsScroller/>
      <VisitUs/>
      
      <Footer/>
      
      
     </div>
    </>
  );
}

export default Home;
