import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
    <>
    <div className="mx-auto max-w-full px-10 py-20 font-sans md:px-8 lg:px-12  ">
        <h1 className="text-center text-5xl mb-14 font-bold text-[#0a243a] ">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Image Section */}
        <div className="relative h-96 w-80 ml-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[active].src}
              initial={{ opacity: 0, rotateY: 90, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -90, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={testimonials[active].src}
                alt={testimonials[active].name}
                className="h-full w-full rounded-3xl object-cover shadow-lg shadow-[#0a243a]"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4  p-5 rounded-3xl ">
          <motion.div
            key={active}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-gray-900">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500 font-medium">
              {testimonials[active].designation}
            </p>

            <motion.p className="mt-6 text-lg text-gray-700 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.02 * index,
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              onClick={handlePrev}
              className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 shadow-md transition-transform hover:scale-110"
            >
              <FaArrowLeft className="text-xl text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-gray-100 p-3 hover:bg-gray-200 shadow-md transition-transform hover:scale-110"
            >
              <FaArrowRight className="text-xl text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      
    </div>

  </>
  );
};