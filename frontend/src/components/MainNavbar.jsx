// MainNavbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Categories from './Categories';

const MainNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white text-gray-800 py-4 px-8 font-semibold shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center relative">
        <div className="text-2xl navbar-item text-gray-900">
          <button onClick={() => navigate('/home')} className="text-gray-900 hover:text-pink-500 transition duration-300">Lee-Bony</button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className=" lg:flex lg:items-center lg:w-auto w-full">
          <ul className="lg:flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            {['Home', 'About'].map((item) => (
              <li key={item} className="navbar-item mb-2 lg:mb-0">
                <button
                  onClick={() => navigate(`/${item.toLowerCase()}`)}
                  className={`hover:text-pink-500 transition duration-300 text-[rgb(73,71,72)] w-full text-left ${isActive(`/${item.toLowerCase()}`) ? 'text-pink-500' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
            {/* Men's Fashion Dropdown */}
            <Categories title="Men's Fashion" categories={['New Arrivals', 'Festive Wears', "Men's Clothing"]} basePath="/men" />
            {/* Women's Fashion Dropdown */}
            <Categories title="Women's Fashion" categories={['New Arrivals', 'Festive Wears', "Women's Clothing"]} basePath="/women" />
            <li className="navbar-item mb-2 lg:mb-0">
              <button
                onClick={() => navigate('/contact')}
                className={`hover:text-pink-500 transition duration-300 text-[rgb(73,71,72)] w-full text-left ${isActive('/contact') ? 'text-pink-500' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4 mt-2 lg:mt-0">
          <IconButton 
            iconPath="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" 
            onClick={() => navigate('/search')} 
            isActive={isActive('/search')}
          />
          <IconButton 
            iconPath="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
            onClick={() => navigate('/wishlist')} 
            isActive={isActive('/wishlist')}
          />
          <IconButton 
            iconPath="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" 
            onClick={() => navigate('/cart')} 
            isActive={isActive('/cart')}
          />
        </div>
      </div>
    </nav>
  );
};



const IconButton = ({ iconPath, onClick, isActive }) => (
  <button 
    onClick={onClick} 
    aria-label="Icon Button" 
    className={`navbar-item hover:text-pink-500 transition duration-300 ${isActive ? 'text-pink-500' : ''}`}>
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
    </svg>
  </button>
);

export default MainNavbar;
