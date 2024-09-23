import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = ({ title, categories }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-md shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="border p-4 rounded-md hover:bg-gray-100 transition duration-300">
            <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
            <ul className="mt-2">
              {category.subcategories.map((subcategory) => (
                <li key={subcategory}>
                  <button
                    onClick={() => navigate(`/${title.toLowerCase().replace(' ', '-')}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="text-gray-600 hover:text-pink-500 transition duration-300"
                  >
                    {subcategory}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
