import React, { useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const clients = [
  { name: 'CBS College of Nursing', logo: '/images/logoClient/logo1.jpeg' },
  { name: 'CBS college of Ayurvedic', logo: '/images/logoClient/logo2.jpeg'   },
  { name: 'Gieo Gita', logo: '/images/logoClient/logo3.jpeg'        },
  { name: 'Hindustan Lab ', logo: '/images/logoClient/logo4.jpeg' },
  { name: 'Radha Krishan Hospital', logo: '/images/logoClient/logo5.jpeg' },
  { name: 'CBS ', logo: '/images/logoClient/logo6.jpeg' },
  { name: 'Aspire Education', logo: '/images/logoClient/logo7.jpeg' },
  { name: 'Aggarsain Public School', logo: '/images/logoClient/logo8.jpeg' },
  { name: 'Overseas', logo: '/images/logoClient/logo9.jpeg' },
  { name: 'Daulat', logo: '/images/logoClient/logo10.jpeg' },
  { name: 'Career Guru', logo: '/images/logoClient/logo11.jpeg' },
  { name: 'Katani Sweets', logo: '/images/logoClient/logo12.jpeg' },
  { name: 'Jump & Rise', logo: '/images/logoClient/logo13.jpeg' },
  { name: 'Goel Hospital', logo: '/images/logoClient/logo14.jpeg' },
  { name: 'Nex Gen Royal Enfiled ', logo: '/images/logoClient/logo15.jpeg' },
  { name: 'Global Admissions', logo: '/images/logoClient/logo16.jpeg' },
  { name: 'Sidharth Hospital', logo: '/images/logoClient/logo18.jpeg' },
  { name: 'Anthem International', logo: '/images/logoClient/logo19.jpeg' },
  { name: 'Pratham test prep ', logo: '/images/logoClient/logo20.jpeg' },
  { name: 'Study Pedia', logo: '/images/logoClient/logo21.jpeg' },
  { name: 'VPS Motors', logo: '/images/logoClient/logo22.jpeg' },
  { name: 'Real estate ', logo: '/images/logoClient/logo23.jpeg' },
  { name: 'Cheetanya', logo: '/images/logoClient/logo24.jpeg' },
  { name: 'Genesis', logo: '/images/logoClient/logo25.jpeg' },
  { name: 'Dr. Mittal Path Lab', logo: '/images/logoClient/logo26.png' },
  { name: ' The Heights ', logo: '/images/logoClient/logo27.jpeg' },
  { name: 'Akira Consultancy', logo: '/images/logoClient/logo29.jpeg' },
  { name: ' KS convent public school', logo: '/images/logoClient/logo30.jpeg' },
  { name: ' Aggarwal nursing home ', logo: '/images/logoClient/logo31.jpeg' },
  { name: 'BS Heart care ', logo: '/images/logoClient/logo32.jpeg'  },
  { name: 'BR international ', logo: '/images/logoClient/logo33.jpg'  },
];

const ClientsScroller = () => {
    const scrollRef = useRef();
  
    useEffect(() => {
      const scrollContainer = scrollRef.current;
  
      const interval = setInterval(() => {
        if (scrollContainer) {
          if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth
          ) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
          }
        }
      }, 1500);
  
      return () => clearInterval(interval);
    }, []);
  
    const scrollLeft = () => {
      scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };
  
    return (
        <div className="relative w-full py-10 bg-[#EFF6FF] text-center px-6 sm:px-12">
        <h2 className="text-5xl font-bold text-[#0a243a] mb-12">Our Clients</h2>
      
        <div className="relative flex items-center justify-center w-full">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 z-10 p-3 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <FaChevronLeft size={24} />
          </button>
      
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide mt-6 px-6"
            style={{
              width: '90%', // Adjust width between the buttons
              maxWidth: '100%',
              height: '160px', // Adjust height if needed
            }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-[180px] flex-shrink-0 transition-transform duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-24 object-contain mb-2"
                />
                <p className="text-sm font-medium text-center">{client.name}</p>
              </div>
            ))}
          </div>
      
          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-4 z-10 p-3 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    );  
  };
  
  export default ClientsScroller;
