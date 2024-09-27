import React from 'react';
import newItem1 from '../assets/tshirt1.jpg';
import newItem2 from '../assets/tshirt2.jpg';
import newItem3 from '../assets/tshirt3.jpg';

const NewArrivalsSection = () => {
  const newImages = [newItem1, newItem2, newItem3];

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newImages.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
            <img src={image} alt={`New Arrival ${index + 1}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">New Arrival T-Shirt</h3>
              <p className="text-gray-500 mb-2">Be the first to wear our latest collection!</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-pink-500">$24.99</span>
                <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSection;
