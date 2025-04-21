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
    <nav className="bg-white fixed w-[90vw] border-blue-950 border-4 shadow-2xl  top-0 transition-all z-30 mt-5 mx-20 rounded-xl  duration-500 ease-in-out transform hover:shadow-2xl animate-fadeIn">
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
              <li key={menu.id} className="transition-transform duration-500 hover:scale-110 hover:text-blue-950 hover:translate-y-1">
                <a 
                  href={menu.link} 
                  className="inline-block py-1 px-3 hover:text-primary  font-bold"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Buttons */}
        <div className="flex space-x-4 items-center">
            <button className="text-gray-700 font-medium hover:text-yellow-500  transition-all duration-300 ease-in-out transform hover:scale-105">
              Apply as a Freelancer
            </button>

            <button className="px-4 py-2 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
              Hire Top Talent
            </button>

            <button className="text-gray-700 font-medium hover:text-yellow-500  transition-all duration-300 ease-in-out transform hover:scale-105">
              Log In
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