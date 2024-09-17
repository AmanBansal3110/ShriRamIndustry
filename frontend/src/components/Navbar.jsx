import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

// Import images explicitly in React
import searchIcon from '../assets/search.png';
import heartIcon from '../assets/heart.png';
import cartIcon from '../assets/cart.png';

// First Segment: Support Bar
const SupportBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[rgb(73,71,72)] text-white text-xs flex flex-wrap justify-around items-center py-1 px-2">
      <div className="flex flex-wrap space-x-4 items-center">
        <span className="support-bar-item">
          <a href="mailto:shriramindustry@gmail.com" className="hover:underline">shriramindustry@gmail.com</a>
        </span>
        <span className="support-bar-item">Track My Order</span>

        {/* Discount scrolling text */}
        <div className="relative overflow-hidden h-6 w-80">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-scroll w-full">
            <span className="font-bold">50% Off on All T-Shirts!</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap space-x-4 mt-2">
        <button onClick={()=>{
          navigate('/signin')
        }} className="hover:underline support-bar-item">Log In</button>
        <button onClick={()=>{
          navigate('/signup')
        }} className="hover:underline support-bar-item">Sign Up</button>
      </div>
    </div>
  );
};

// Second Segment: Main Navbar
const MainNavbar = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div>
      {/* Dividing Line */}
      <div className="separator-line"></div>

      {/* Navbar */}
      <div className="bg-snow text-black flex flex-wrap justify-around items-center py-4 px-8 font-bold">
        {/* Logo */}
        <div className="text-2xl navbar-item text-[rgb(73,71,72)]">
          <a href="/" className="text-[rgb(73,71,72)]">Lee-Bony</a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap space-x-6">
          <li className="navbar-item">
            <button
              onClick={() => navigate('/')}
              className="hover:underline text-[rgb(73,71,72)]"
            >
              Home
            </button>
          </li>
          <li className="navbar-item">
            <button
              onClick={() => navigate('/about')}
              className="hover:underline text-[rgb(73,71,72)]"
            >
              About
            </button>
          </li>
          <li className="navbar-item">
            <button
              onClick={() => navigate('/products')}
              className="hover:underline text-[rgb(73,71,72)]"
            >
              Products
            </button>
          </li>
          <li className="navbar-item">
            <button
              onClick={() => navigate('/contact')}
              className="hover:underline text-[rgb(73,71,72)]"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex flex-wrap space-x-4 mt-2">
          <button aria-label="Search" className="navbar-item">
            <img src={searchIcon} alt="Search Icon" className="w-6 h-6" /> {/* Set size with outline */}
          </button>
          <button aria-label="Wishlist" className="navbar-item">
            <img src={heartIcon} alt="Wishlist Icon" className="w-6 h-6" /> {/* Set size with outline */}
          </button>
          <button aria-label="Cart" className="navbar-item">
            <img src={cartIcon} alt="Cart Icon" className="w-6 h-6" /> 
          </button>
        </div>
      </div>
    </div>
  );
};

// Complete Navbar
const Navbar = () => {
  return (
    <>
      <SupportBar />
      <MainNavbar />
    </>
  );
};

export default Navbar;
