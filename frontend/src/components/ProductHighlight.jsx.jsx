import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Casual Shirt', price: '$39.99', image: '/assets/shirt1.jpg' },
  { id: 2, name: 'Summer Dress', price: '$49.99', image: '/assets/dress1.jpg' },
  { id: 3, name: 'Jacket', price: '$59.99', image: '/assets/jacket1.jpg' },
];

const ProductHighlight = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-6 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
            <p className="text-blue-600 font-semibold">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductHighlight;
    