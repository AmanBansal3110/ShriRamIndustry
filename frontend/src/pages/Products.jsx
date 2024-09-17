// src/pages/Products.jsx
import React, { useState } from 'react';
import CategoryComponent from '../components/Category';

const Products = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div 
        className="relative"
        onMouseEnter={() => setShowCategories(true)}
        onMouseLeave={() => setShowCategories(false)}
      >
        <div className="flex space-x-4">
          <div className="bg-gray-200 p-4 rounded-lg cursor-pointer">
            <h2 className="text-lg font-semibold">Men's Clothing</h2>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg cursor-pointer">
            <h2 className="text-lg font-semibold">Women's Clothing</h2>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg cursor-pointer">
            <h2 className="text-lg font-semibold">New Arrivals</h2>
          </div>
        </div>
        {showCategories && <CategoryComponent />}
      </div>
    </div>
  );
};

export default Products;
