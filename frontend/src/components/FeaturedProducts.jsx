import React from 'react';
import image1 from '../assets/tshirt1.jpg';
import image2 from '../assets/tshirt2.jpg';
import image3 from '../assets/tshirt3.jpg';
import image4 from '../assets/tshirt4.jpg';

const featuredProducts = [
  { id: 1, name: 'Product 1', price: 29.99, image: image1 },
  { id: 2, name: 'Product 2', price: 39.99, image: image2 },
  { id: 3, name: 'Product 3', price: 19.99, image: image3 },
  { id: 4, name: 'Product 4', price: 49.99, image: image4 },
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl text-center text-gray-900 font-bold mb-8">Featured Products</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={image1} alt="aman bansal" className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-pink-500 font-bold">${product.price.toFixed(2)}</p>
              <button className="mt-4 w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
