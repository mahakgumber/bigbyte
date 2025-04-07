import React from 'react';
import { IoMdMenu } from "react-icons/io";


const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Services', link: '/' },
  { id: 3, title: 'About us', link: '/' },
  { id: 4, title: 'Blogs', link: '/' },
  { id: 5, title: 'Contact Us', link: '/' },
];

const Navbar3 = () => {
  return (
    <>
    <nav className="bg-white border-blue-200 border-2 shadow-2xl sticky top-0 z-50 transition-all mt-10 mx-20 rounded-xl  duration-500 ease-in-out transform hover:shadow-2xl animate-fadeIn">
      <div className=" mx-auto flex justify-between items-center py-4 md:py-4 px-6"> 
        {/* Logo Section */}
        <div className="flex items-center h-3 w-auto">
          <img 
            src="public/images/logo/bigbyte-logo.png" 
            alt="Bigbyte logo" 
            className=" bg-white h-6 w-auto md:h-14 transition-transform duration-500 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-lg " 
          />
        </div>
        
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-black ">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="transition-transform duration-500 hover:scale-110 hover:text-cyan-500 hover:translate-y-1">
                <a 
                  href={menu.link} 
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-bold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Buttons */}
        <div className="flex space-x-4 ">
          <button className="px-4 py-2  bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transform hover:scale-125 transition-transform duration-500 ease-in-out shadow-md hover:shadow-xl">
            Login
          </button>
          <button className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transform hover:scale-125 transition-transform duration-500 ease-in-out shadow-md hover:shadow-xl">
            Sign Up
          </button>
        </div>
        {/* mobile menu section  */}
        <div className="md:hidden">
        <IoMdMenu  className="text-4xl"/>
        </div>
       
      </div>
    </nav>
    {/* mobile menu section  */}
   

</>

  );
};

export default Navbar3;