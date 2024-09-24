import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import background1 from '../assets/bg.jpg';
import background2 from '../assets/bg2.jpg';
import background3 from '../assets/bg.jpg';
import NewArrivalsSection from '../components/NewArrivalsSection';
import MensCollectionSection from '../components/MensCollectionSection';
import WomensCollectionSection from '../components/WomensCollectionSection';
import '../index.css'; 


const HomePage = () => {
  const navigate = useNavigate();
  const images = [background1, background2, background3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative h-[70vh] lg:h-[85vh] bg-center bg-no-repeat overflow-hidden">
        {/* Image Carousel */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}

        {/* Text overlay */}
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 animate-fade-in">
            <h1 className="text-pink-200 text-3xl md:text-5xl font-semibold tracking-wide">Welcome to Our Store</h1>
            <p className="text-gray-200 text-lg md:text-xl mt-4">Discover the latest trends in fashion</p>
            <button
              onClick={() => navigate('/productpage')}
              className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-pink-400 transition-colors duration-300 inline-block transform transition-transform duration-300 hover:scale-105"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              } hover:bg-white transition-all duration-300`}
            />
          ))}
        </div>
      </div>

      {/* Gap between carousel and collection segments */}
      <div className="h-16 bg-gray-100"></div>

      {/* Collection segments wrapper */}
      <div className="bg-gray-100 flex-grow">
        {/* New Arrivals Section */}
        <div className="py-12 bg-white">
          <NewArrivalsSection />
        </div>

        {/* Men's Collection Section */}
        <div className="py-12 bg-gray-100">
          <MensCollectionSection />
        </div>

        {/* Women's Collection Section */}
        <div className="py-12 bg-white">
          <WomensCollectionSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
