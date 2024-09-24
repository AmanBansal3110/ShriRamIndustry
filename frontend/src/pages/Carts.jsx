import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
// Import images
import tshirt1 from '../assets/tshirt1.jpg';
import tshirt2 from '../assets/tshirt2.jpg';

const Cart = () => {
  const [products, setProducts] = useState([
    {
      imageUrl: tshirt1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 49.99
    },
    {
      imageUrl: tshirt2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 79.99
    },

  ]);

  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log('Proceeding to checkout');
  };

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row">
      <div className="lg:w-2/3 space-y-4">
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
      <div className="lg:w-1/3 flex flex-col justify-center items-center lg:mt-0 lg:mx-8">
        <CartSummary subtotal={subtotal} shipping={shipping} total={total} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}

export default Cart;
