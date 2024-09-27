import React, { useState, useEffect } from 'react';
import SupportBar from './SupportBar';
import MainNavbar from './MainNavbar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on the height of your SupportBar
      const supportBarHeight = 40; // Example height, adjust as needed
      if (window.scrollY > supportBarHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <SupportBar />
      <div className={`${
        isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md' : ''
      }`}>
        <MainNavbar />
      </div>
    </div>
  );
};

export default Navbar;
