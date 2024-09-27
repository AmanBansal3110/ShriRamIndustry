import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-4">Subscribe to get the latest updates and special offers!</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg w-64 border border-gray-300 focus:outline-none"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
