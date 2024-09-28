import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SupportBar from './SupportBar';
import MainNavbar from './MainNavbar';
import { HamburgerIcon, CloseIcon } from './Icons';
import useScrollPosition from '../hooks/useScrollPosition';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition(40);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  const IconButton = ({ iconPath, onClick, isActive, label }) => (
    <button 
      onClick={onClick} 
      aria-label={label} 
      className={`navbar-item hover:text-pink-500 transition duration-300 ${isActive ? 'text-pink-500' : ''}`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
      </svg>
    </button>
  );

  return (
    <div>
      <SupportBar />
      <div className={`${
        isScrolled
          ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md'
          : 'bg-transparent'
      } transition duration-300 hover:bg-white`}>
        <div className="hidden lg:block">
          <MainNavbar />
        </div>
        
        <button
          className="lg:hidden fixed top-4 right-4 z-[60] p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <HamburgerIcon />
        </button>

        <div className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-[55]`}>
          <button
            className="absolute top-4 right-4 p-2"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
          <div className="p-4">
            <MainNavbar hideIcons={true} />
            <div className="mt-4 space-y-2">
              <IconButton 
                iconPath="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" 
                onClick={() => { navigate('/search'); toggleMenu(); }} 
                isActive={isActive('/search')}
                label="Search"
              />
              <IconButton 
                iconPath="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                onClick={() => { navigate('/wishlist'); toggleMenu(); }} 
                isActive={isActive('/wishlist')}
                label="Wishlist"
              />
              <IconButton 
                iconPath="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" 
                onClick={() => { navigate('/cart'); toggleMenu(); }} 
                isActive={isActive('/cart')}
                label="Cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
