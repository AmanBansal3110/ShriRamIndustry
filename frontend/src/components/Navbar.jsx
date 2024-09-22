// Import React and necessary hooks
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images explicitly in React
import searchIcon from '../assets/search.png';
import heartIcon from '../assets/heart.png';
import cartIcon from '../assets/cart.png';

// Support Bar Component
const SupportBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 text-white text-xs flex flex-wrap justify-between items-center py-1 px-4">
      {/* Left section */}
      <div className="flex-1 flex items-center">
        <span className="support-bar-item">
          <a href="mailto:shriramindustry@gmail.com" className="hover:text-pink-500 transition duration-300">shriramindustry@gmail.com</a>
        </span>
        <span className="support-bar-item hover:text-pink-500 transition duration-300 ml-4">Track My Order</span>
      </div>

      {/* Center section - Discount scrolling text */}
      <div className="flex-1 flex justify-center">
        <div className="relative overflow-hidden h-6 w-80">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-scroll w-full">
            <span className="font-bold">50% Off on All T-Shirts!</span>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex justify-end space-x-4">
        <button onClick={() => navigate('/signin')} className="hover:text-pink-500 transition duration-300 support-bar-item">Log In</button>
        <button onClick={() => navigate('/signup')} className="hover:text-pink-500 transition duration-300 support-bar-item">Sign Up</button>
      </div>
    </div>
  );
};

// Main Navbar Component
const MainNavbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <div className="border-t border-gray-200"></div>
      <nav className="bg-white text-gray-800 py-4 px-8 font-semibold shadow-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-2xl navbar-item text-gray-900">
            <a href="/" className="text-gray-900 hover:text-pink-500 transition duration-300">Lee-Bony</a>
          </div>

          <button onClick={toggleMenu} className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="lg:flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
                <li key={item} className="navbar-item mb-2 lg:mb-0">
                  <button
                    onClick={() => navigate(`/${item.toLowerCase()}`)}
                    className="hover:text-pink-500 transition duration-300 text-[rgb(73,71,72)] w-full text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-4 mt-2 lg:mt-0">
            {[{ icon: searchIcon, label: 'Search' }, { icon: heartIcon, label: 'Wishlist' }].map((item) => (
              <button key={item.label} aria-label={item.label} className="navbar-item hover:text-pink-500 transition duration-300">
                <img src={item.icon} alt={`${item.label} Icon`} className="w-6 h-6" />
              </button>
            ))}
            <button 
              onClick={() => navigate('/cart')} // Navigate to cart page
              aria-label="Cart"
              className="navbar-item hover:text-pink-500 transition duration-300">
              <img src={cartIcon} alt="Cart Icon" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Complete Navbar Component
const Navbar = () => {
  return (
    <>
      <SupportBar />
      <MainNavbar />
    </>
  );
};

export default Navbar;
