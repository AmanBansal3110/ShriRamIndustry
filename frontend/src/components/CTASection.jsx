import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-teal-0 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Elevate Your Style?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Check out our latest collections and find something you love.
        </p>
        <button className="mt-6 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-all">
          Explore Collections
        </button>
      </div>
    </div>
  );
};

export default CTASection;
