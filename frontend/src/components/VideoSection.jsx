import React from 'react';

const VideoSection = ({ videoUrl }) => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
        <div className="relative w-full lg:w-3/4 mx-auto">
          <video 
            className="w-full h-auto rounded-lg shadow-lg"
            src={videoUrl}
            autoPlay
            loop
            muted
            style={{ borderRadius: '0.5rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
