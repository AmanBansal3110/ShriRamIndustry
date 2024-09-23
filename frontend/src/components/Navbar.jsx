import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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

const MainNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <div className="border-t border-gray-200"></div>
      <nav className="bg-white text-gray-800 py-4 px-8 font-semibold shadow-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-2xl navbar-item text-gray-900">
            <button onClick={() => navigate('/home')} className="text-gray-900 hover:text-pink-500 transition duration-300">Lee-Bony</button>
          </div>

          <button onClick={toggleMenu} className="lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <li className="navbar-item mb-2 lg:mb-0 relative group">
                <button
                  className={`hover:text-pink-500 transition duration-300 text-[rgb(73,71,72)] w-full text-left flex items-center`}
                >
                  Men's Fashion
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 hidden group-hover:block">
                  {['New Arrivals', 'Festive Wears', 'Men\'s Clothing'].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => navigate(`/men/${category.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="navbar-item mb-2 lg:mb-0 relative group">
                <button
                  className={`hover:text-pink-500 transition duration-300 text-[rgb(73,71,72)] w-full text-left flex items-center`}
                >
                  Women's Fashion
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 hidden group-hover:block">
                  {['New Arrivals', 'Festive Wears', 'Women\'s Clothing'].map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => navigate(`/women/${category.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
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
            <button 
              onClick={() => navigate('/search')} 
              aria-label="Search" 
              className={`navbar-item hover:text-pink-500 transition duration-300 ${isActive('/search') ? 'text-pink-500' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/wishlist')} 
              aria-label="Wishlist" 
              className={`navbar-item hover:text-pink-500 transition duration-300 ${isActive('/wishlist') ? 'text-pink-500' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/cart')} 
              aria-label="Cart"
              className={`navbar-item hover:text-pink-500 transition duration-300 ${isActive('/cart') ? 'text-pink-500' : ''}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};


const Navbar = () => {
  return (
    <>
      <SupportBar />
      <MainNavbar />
    </>
  );
};

export default Navbar;
