import React, { useState, useEffect } from 'react';
import background1 from '../assets/background_home.jpg';
import background2 from '../assets/background_home1.jpg'; 
import background3 from '../assets/background_home2.jpg'; 

// Home Page: First Segment with Image Carousel and Smooth Transition
const HomePageFirstSegment = () => {
  const images = [background1, background2, background3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-[70vh] bg-center bg-no-repeat overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      ></div>
      
      <div className="flex items-center justify-center h-full">
        {/* You can add a welcome text here if you like */}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)} // Click to navigate to that image
            className={`cursor-pointer w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageFirstSegment;
