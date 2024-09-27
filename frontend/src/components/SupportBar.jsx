import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SupportBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = async () => {
    const response = await fetch('http://localhost:3001/auth/isLoggedIn', {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    console.log(data);
    setIsLoggedIn(data.isLoggedIn);
  };

  useEffect(() => {
    checkAuth();
  }, [location]);

  const handleLogout = async () => {
    const response = await fetch('http://localhost:3001/auth/logout', {
      method: 'GET',
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    setIsLoggedIn(false);
    alert('Logged out');
    navigate('/home');
  };


  return (
    <div className="bg-black text-white text-xs flex flex-wrap justify-between items-center py-1 px-4">
      <div className="flex-1 flex items-center">
        <span className="support-bar-item">
          <a href="mailto:shriramindustry@gmail.com" className="hover:text-pink-500 transition duration-300">
            shriramindustry@gmail.com
          </a>
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
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-pink-500 transition duration-300 support-bar-item">
            Log Out
          </button>
        ) : (
          <>
            <button onClick={() => navigate('/signin')} className="hover:text-pink-500 transition duration-300 support-bar-item">
              Log In
            </button>
            <button onClick={()=>navigate('/signup')} className="hover:text-pink-500 transition duration-300 support-bar-item">
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SupportBar;
