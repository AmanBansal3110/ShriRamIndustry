import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CheckoutButton from '../components/CheckoutButton';
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/products/cart', {
        credentials: 'include',
      });
      const data = await response.json();
      setCartItems(data.cartItems || []);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (productId, action) => {
    const endpoint = action === 'increase' 
      ? `http://localhost:3001/products/cart/increase/${productId}`
      : `http://localhost:3001/products/cart/decrease/${productId}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setCartItems(prevItems => 
          prevItems.map(item => {
            if (item.product._id === productId) {
              const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
              return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
          }).filter(Boolean)
        );
        
        if (action === 'decrease') {
          const updatedItem = cartItems.find(item => item.product._id === productId);
          if (updatedItem && updatedItem.quantity === 1) {
            removeItem(productId);
            toast.success('Item removed from cart');
          } else {
            toast.success('Item quantity decreased');
          }
        } else {
          toast.success('Item quantity increased');
        }
      } else {
        throw new Error(`Failed to ${action} item quantity`);
      }
    } catch (error) {
      console.error(`Error ${action}ing quantity:`, error);
      toast.error(`Failed to ${action === 'increase' ? 'increase' : 'decrease'} item quantity. Please try again.`);
    }
  };

  const removeItem = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3001/products/cart/${productId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setCartItems(prevItems => prevItems.filter(item => item.product._id !== productId));
        toast.success('Item removed from cart');
      } else {
        throw new Error('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item:', error);
      toast.error('Failed to remove item from cart. Please try again.');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Cart
        </motion.h1>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : cartItems.length === 0 ? (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 mb-6">Your cart is empty</p>
            <a href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-800">
              Continue Shopping
            </a>
          </motion.div>
        ) : (
          <div className="lg:flex lg:gap-8">
            <div className="lg:w-2/3">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <motion.li
                    key={item.product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CartItem
                      item={item}
                      updateQuantity={updateQuantity}
                      removeItem={removeItem}
                    />
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <motion.div 
                className="bg-gray-50 rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-lg font-semibold text-black mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-base font-semibold text-black">
                    <span>Total</span>
                    <span className="text-pink-500">${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <CheckoutButton />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;