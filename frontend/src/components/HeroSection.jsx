import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import videoFile from '/assets/video4.mp4'; // Ensure the path to the video is correct

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Video as Background */}
      <video
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark Overlay */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl font-bold">Welcome to Our Store</h1>
          <p className="text-lg md:text-xl mt-4 mb-8">
            Discover a wide range of products tailored for you.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-transparent text-white border border-white rounded-none transition-all duration-300 text-sm uppercase"
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
