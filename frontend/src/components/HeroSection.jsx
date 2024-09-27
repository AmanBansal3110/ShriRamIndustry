import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/slides2.jpg'; // Ensure this path is correct

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Remove the gradient overlay div */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg md:text-xl mt-4 mb-8">Discover a wide range of products tailored for you.</p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600 transition-all"
          >
            Shop Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
