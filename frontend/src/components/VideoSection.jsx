import React from 'react';
import { motion } from 'framer-motion';
import videoFile from '/assets/video3.mp4'; // Ensure this path is correct

const VideoSection = () => {
  return (
    <motion.div
      className="relative w-full h-screen bg-cover bg-center"
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

      <div className="absolute inset-0 flex flex-col items-center justify-between">
        <div className="flex-grow"></div>
        <div className="text-center text-white px-6 md:px-12 mb-16">
          <button
            className="px-6 py-3 bg-transparent text-white border border-white rounded-none transition-all duration-300 text-sm uppercase hover:bg-white hover:text-black"
          >
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection;
