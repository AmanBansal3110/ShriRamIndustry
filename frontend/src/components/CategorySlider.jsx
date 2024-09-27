import React from 'react';
import { Link } from 'react-router-dom';
import NewArrivalsSection from './NewArrivalsSection';
import MensCollectionSection from './MensCollectionSection';
import WomensCollectionSection from './WomensCollectionSection';

const CategorySlider = ({ categories = [] }) => {
  return (
    <div className="my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{category.name}</h3>
            </Link>
          ))}
        </div>
        {/* Other sections like New Arrivals, Men's, and Women's Collections */}
        <NewArrivalsSection />
        <MensCollectionSection />
        <WomensCollectionSection />
      </div>
    </div>
  );
};

export default CategorySlider;
