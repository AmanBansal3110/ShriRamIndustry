import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SignUp from '../pages/SignUp'; 
import SignIn from '../pages/SignIn'; 

const SupportBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpVisible, setIsSignUpVisible] = useState(false); 
  const [isSignInVisible, setIsSignInVisible] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = async () => {
    const response = await fetch('http://localhost:3001/auth/isLoggedIn', {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
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

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
    setIsSignInVisible(false); // Close SignIn if it's open
  };

  const handleSignInClick = () => {
    setIsSignInVisible(true);
    setIsSignUpVisible(false); // Close SignUp if it's open
  };

  const handleClosePopup = () => {
    setIsSignUpVisible(false);
    setIsSignInVisible(false);
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
            <button onClick={handleSignInClick} className="hover:text-pink-500 transition duration-300 support-bar-item">
              Log In
            </button>
            <button onClick={handleSignUpClick} className="hover:text-pink-500 transition duration-300 support-bar-item">
              Sign Up
            </button>
          </>
        )}
      </div>

      {/* Modal for SignUp Component */}
      {isSignUpVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-150"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <SignUp onClose={handleClosePopup} onSignInClick={handleSignInClick} />
          </div>
        </div>
      )}

      {/* Modal for SignIn Component */}
      {isSignInVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-150"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <SignIn onClose={handleClosePopup} onSignUpClick={handleSignUpClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportBar;
