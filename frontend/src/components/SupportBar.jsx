// SupportBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SupportBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white text-xs flex flex-wrap justify-between items-center py-1 px-4">
      <div className="flex-1 flex items-center">
        <span className="support-bar-item">
          <a href="mailto:shriramindustry@gmail.com" className="hover:text-pink-500 transition duration-300">shriramindustry@gmail.com</a>
        </span>
        <span className="support-bar-item hover:text-pink-500 transition duration-300 ml-4">Track My Order</span>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative overflow-hidden h-6 w-80">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-scroll w-full">
            <span className="font-bold">50% Off on All T-Shirts!</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end space-x-4">
        <button onClick={() => navigate('/signin')} className="hover:text-pink-500 transition duration-300 support-bar-item">Log In</button>
        <button onClick={() => navigate('/signup')} className="hover:text-pink-500 transition duration-300 support-bar-item">Sign Up</button>
      </div>
    </div>
  );
};

export default SupportBar;
