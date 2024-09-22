// src/components/CartSummary.jsx
import React from 'react';

const CartSummary = ({ subtotal, shipping, total, onCheckout }) => {
  return (
    <div className="w-1/3 p-4 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>${shipping}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button
        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
