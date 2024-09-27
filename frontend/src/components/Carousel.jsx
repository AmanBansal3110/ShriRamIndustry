import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Icons for arrows
import slide1 from "/assets/slide6.jpeg";
import slide2 from "/assets/slide10.jpeg";
import slide3 from "/assets/slides3.jpg";

const slides = [
  { imageUrl: slide1, title: 'Featured Products', subtitle: 'Discover our latest collection' },
  { imageUrl: slide2, title: 'Quality Guaranteed', subtitle: 'We offer the best quality' },
  { imageUrl: slide3, title: 'Join Our Community', subtitle: 'Connect with us for updates' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative h-[500px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} 
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">{slides[currentIndex].title}</h2>
              <p className="text-lg md:text-xl">{slides[currentIndex].subtitle}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/80 transition duration-300"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/80 transition duration-300"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
