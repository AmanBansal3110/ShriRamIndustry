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
    <div className="relative h-[70vh] lg:h-[85vh] bg-center bg-no-repeat overflow-hidden">
      {/* Background image container */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      ></div>

      {/* Text overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-lg">
          <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-wide">
            Welcome to Our Store
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mt-4">
            Discover the latest trends in men's fashion
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)} // Click to navigate to that image
            className={`cursor-pointer w-4 h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'} hover:bg-white transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageFirstSegment;
