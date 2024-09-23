import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Categories from './Categories'; // Import the Categories component

const MainNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [currentCategories, setCurrentCategories] = useState([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  const menCategories = [
    {
      name: "Men's Clothing",
      subcategories: ['T-Shirts', 'Jeans', 'Jackets'],
    },
    {
      name: "Men's Accessories",
      subcategories: ['Watches', 'Belts', 'Hats'],
    },
  ];

  const womenCategories = [
    {
      name: "Women's Clothing",
      subcategories: ['Dresses', 'Tops', 'Skirts'],
    },
    {
      name: "Women's Accessories",
      subcategories: ['Handbags', 'Jewelry', 'Scarves'],
    },
  ];

  const handleDropdownClick = (gender) => {
    setCurrentCategories(gender === 'men' ? menCategories : womenCategories);
    setShowCategories(true);
  };

  return (
    <nav className="bg-white text-gray-800 py-4 px-8 font-semibold shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl navbar-item text-gray-900">
          <button onClick={() => navigate('/home')} className="text-gray-900 hover:text-pink-500 transition duration-300">Lee-Bony</button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}>
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
            <Categories title="Men's Fashion" onClick={() => handleDropdownClick('men')} />
            <Categories title="Women's Fashion" onClick={() => handleDropdownClick('women')} />
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
      </div>
    </nav>
  );
};


export default MainNavbar;
