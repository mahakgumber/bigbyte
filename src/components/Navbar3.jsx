import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io"; // for close icon

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'Services', link: '/' },
  { id: 3, title: 'About us', link: '/' },
  { id: 4, title: 'Blogs', link: '/' },
  { id: 5, title: 'Contact Us', link: '/' },
];

const Navbar3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white fixed w-[90vw] border-blue-950 border-4 shadow-2xl top-0 z-30 mt-5 mx-20 rounded-xl duration-500 ease-in-out transform animate-fadeIn
        xs:ml-4 xs:h-20 sm:mx-1 sm:w-[90vw] tab:mx-10 tab:h-[17vw] md:mx-9 lg:mx-10 xl:mx-5 xl:w-[95vw]   ">
        <div className="mx-auto flex justify-between items-center py-4 px-6">

          {/* Logo Section */}
          <div className="flex items-center h-3 w-auto">
            <img 
              src="public/images/logo/bigbyte-logo.png" 
              alt="Bigbyte logo" 
              className="bg-white h-6 w-auto transition-transform 
              duration-500 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.6)] rounded-lg 
              xs:h-12 tab:h-20 tab:w-[16vw] md:h-30 md:mt-8 lg:h-16 xl:h-12" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md: ">
            <ul className="flex items-center gap-6 text-black lg:mx-3 lg:gap-4 lg:w-[45vw] tab:ml-1 tab:mx-0">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="transition-transform duration-500 hover:scale-110 hover:text-blue-950 hover:translate-y-1">
                  <a 
                    href={menu.link} 
                    className="inline-block py-1 px-3 hover:text-primary font-bold lg:text-sm tab:text-[18px]"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden  space-x-4 items-center tab:w-[50vw] tab:ml-[30%]">
            <button className="text-gray-700 font-medium hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 lg:text-sm lg:font-bold">
              Apply as a Freelancer
            </button>
            <button className="px-4 py-2 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 lg:text-sm">
              Hire Top Talent
            </button>
            <button className="text-gray-700 font-medium hover:text-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 lg:text-sm lg:font-bold lg:p-2 lg:w-20">
              Log In
            </button>
          </div>

          {/* Hamburger Icon (mobile only) */}
          <div className="">
            <button onClick={toggleMenu}>
              {isOpen ? <IoMdClose className="text-4xl" /> : <IoMdMenu className="text-4xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" fixed top-28 left-0 w-full bg-white shadow-lg z-20 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out">
          {NavbarMenu.map((menu) => (
            <a 
              key={menu.id} 
              href={menu.link}
              className="block text-lg font-semibold text-gray-800 hover:text-blue-900 transition"
              onClick={() => setIsOpen(false)} // close menu on link click
            >
              {menu.title}
            </a>
          ))}
          <hr />
          <button className="block w-full text-left text-gray-700 font-medium hover:text-yellow-500">Apply as a Freelancer</button>
          <button className="block w-full text-left text-gray-700 font-medium hover:text-yellow-500">Hire Top Talent</button>
          <button className="block w-full text-left text-gray-700 font-medium hover:text-yellow-500">Log In</button>
        </div>
      )}
    </>
  );
};

export default Navbar3;
