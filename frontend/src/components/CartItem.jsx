import React from "react";
import { motion } from 'framer-motion';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  
  <motion.div 
    className="flex items-center space-x-4 py-4 border-b border-gray-200 last:border-b-0"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <img src={item.product.image} alt={item.product.name} className="w-24 h-24 object-cover rounded-md" />
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-gray-800">{item.product.name}</h3>
      <p className="text-sm text-gray-600">${item.product.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => updateQuantity(item.product._id, 'decrease')}
        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
      >
        -
      </button>
      <span className="w-8 text-center">{item.quantity}</span>
      <button 
        onClick={() => updateQuantity(item.product._id, 'increase')}
        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors"
      >
        +
      </button>
    </div>
    <button 
      onClick={() => removeItem(item.product._id)}
      className="text-gray-500 hover:text-red-500 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </motion.div>
);

export default CartItem;
