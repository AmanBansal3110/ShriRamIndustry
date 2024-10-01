import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

const CategoryName = ({id, image, name }) => {
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate(); // Add this line

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div
      className={`relative w-full h-screen bg-cover bg-center ${imageError ? 'bg-gray-300' : ''}`} // Set height to full screen
      style={{ backgroundImage: imageError ? 'none' : `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-6xl md:text-7xl font-extrabold drop-shadow-lg mb-4 text-center">{name}</h2> {/* Richer look for category name */}
        <button
            onClick={() => navigate(`/category/${id}/products`)}
            className="px-6 py-3 bg-transparent text-white border border-white rounded-none transition-all duration-300 text-sm uppercase"
          >
            EXPLORE
          </button>{/* EXPLORE button */}
      </div>
    </div>
  );
};

export default CategoryName;
