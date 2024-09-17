// src/components/CategoryComponent.jsx
import React, { useState } from 'react';

const categories = [
  { 
    name: 'Men\'s Clothing', 
    subcategories: ['Kurta', 'Lehenga', 'Suit', 'Co-ords', 'Dress']
  },
  { 
    name: 'Women\'s Clothing', 
    subcategories: ['Kurta', 'Lehenga', 'Suit', 'Western Wear', 'Co-ords', 'Dress']
  },
  { 
    name: 'New Arrivals', 
    subcategories: ['Kurta', 'Lehenga', 'Suit', 'Co-ords', 'Dress', 'Indian & Fusion Wear'] 
  },
];

const Category = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-4">
      {categories.map((category, index) => (
        <div key={index} className="relative group">
          <div className="flex-1 min-w-[150px] max-w-[300px] border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="p-4 text-center bg-gray-100">
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
          </div>
          <div className="absolute top-full left-0 hidden group-hover:block bg-white border rounded-lg shadow-lg mt-2">
            <div className="p-4">
              {category.subcategories.map((subcategory, subindex) => (
                <div key={subindex} className="p-2 hover:bg-gray-200">
                  {subcategory}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
