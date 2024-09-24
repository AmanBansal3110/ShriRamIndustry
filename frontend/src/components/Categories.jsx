  import React from 'react';
  import { useNavigate } from 'react-router-dom';

  const Categories = ({ title, categories }) => {
    const navigate = useNavigate();

    return (
      <li className="navbar-item mb-2 lg:mb-0 group">
        <button className="hover:text-pink-500 transition duration-300 text-[rgb(73,71,72)] w-full text-left flex items-center">
          {title}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>  
        </button>
        <ul className="hover:flex hidden absolute left-0 right-0 lg:left-20 lg:right-20 mt-2 justify-start bg-white shadow-lg rounded-md z-10 group-hover:flex flex-col lg:flex-row">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => navigate(`${basePath}/${category.toLowerCase().replace(/\s+/g, '-')}`)}
                className="block px-4 py-2 text-sm hover:bg-gray-200"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  export default Categories;
