// src/components/CartSummary.jsx
import React from 'react';

const CartSummary = ({ subtotal, shipping, total, onCheckout, itemCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Items ({itemCount}):</span>
        <span className="font-semibold">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">Shipping:</span>
        <span className="font-semibold">${shipping.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 my-4"></div>
      <div className="flex justify-between mb-6">
        <span className="text-lg font-bold text-gray-800">Total:</span>
        <span className="text-lg font-bold text-gray-800">${total.toFixed(2)}</span>
      </div>
      <button 
        onClick={onCheckout}
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
