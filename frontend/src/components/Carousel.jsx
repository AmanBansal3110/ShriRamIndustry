import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slide1 from '../assets/slides1.jpg';
import slide2 from '../assets/slides2.jpg';
import slide3 from '../assets/slides3.jpg';

const slides = [
  { imageUrl: slide1, title: 'Featured Products', subtitle: 'Discover our latest collection' },
  { imageUrl: slide2, title: 'Quality Guaranteed', subtitle: 'We offer the best quality' },
  { imageUrl: slide3, title: 'Join Our Community', subtitle: 'Connect with us for updates' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-96 overflow-hidden">
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
              <h2 className="text-4xl font-bold">{slides[currentIndex].title}</h2>
              <p className="text-lg">{slides[currentIndex].subtitle}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
