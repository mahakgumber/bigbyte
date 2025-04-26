import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

export const AnimatedTestimonials = ({ testimonials, autoplay }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 md:px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-[#0a243a] mb-8 md:mb-12 text-center">
        What Our Clients Say
      </h1>

      <div className="relative w-full max-w-lg sm:max-w-2xl bg-white shadow-2xl rounded-2xl p-6 sm:p-10 md:p-14 text-center space-y-4 sm:space-y-6">
        <div className="text-3xl sm:text-4xl text-[#0a243a] mb-2 sm:mb-4 flex justify-center">
          <FaQuoteLeft />
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed italic">
          "{testimonials[active].quote}"
        </p>
        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-2xl font-bold text-[#0a243a]">{testimonials[active].name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm">{testimonials[active].designation}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10">
        <button
          onClick={handlePrev}
          className="px-6 py-2 rounded-full bg-[#0a243a] text-white hover:bg-[#122f4b] transition duration-300 w-full sm:w-auto"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-full bg-[#0a243a] text-white hover:bg-[#122f4b] transition duration-300 w-full sm:w-auto"
        >
          Next
        </button>
      </div>
    </div>
  );
};
