// src/pages/Cart.jsx
import React from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

const Cart = () => {
  // Example data, replace with actual data
  const products = [
    {
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 49.99
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 79.99
    },
    // Add more products as needed
  ];

  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const shipping = 5.00; // Example shipping cost
  const total = subtotal + shipping;

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout');
  };

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row">
      <div className="lg:w-3/4 space-y-4">
        {products.map((product, index) => (
          <CartItem
            key={index}
            imageUrl={product.imageUrl}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
      <div className="lg:w-1/4 mt-8 lg:mt-0 lg:ml-8">
        <CartSummary subtotal={subtotal} shipping={shipping} total={total} onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default Cart;
