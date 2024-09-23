// src/components/CartSummary.jsx
import React from 'react';

const CartSummary = ({ subtotal, shipping, total, onCheckout }) => {
  return (
    <div className="w-full h-4/5 p-4 flex flex-col justify-center bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2 bg-gray-100 p-2 ">
        <span className=''>Subtotal:</span>
        <span>Rs.{subtotal}</span>
      </div>
      <div className="flex justify-between mb-2 p-2 rounded-md">
        <span>Shipping:</span>
        <span>Free Shipping</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-4 bg-gray-100 p-2">
        <span>Total:</span>
        <span>Rs.{total}</span>
      </div>
      <button
        className="w-full bg-pink-500 hover:bg-orange-500 text-white py-2 rounded-lg transition duration-300"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
