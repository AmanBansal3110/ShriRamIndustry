import React, { useState } from "react";
import image1 from "/assets/tshirt1.jpg";
import image2 from "/assets/tshirt2.jpg";
import binIcon from "/assets/bin.svg"; // Make sure to import your bin icon

const WishlistItem = ({ imageUrl, name, price, onAddToCart, onRemove }) => {
  return (
    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-2 transform transition-transform hover:scale-105"> 
      <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col p-4 hover:shadow-2xl transition-shadow duration-300"> 
        <div className="relative group w-full h-48 mb-4 rounded-xl overflow-hidden"> 
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-pink-500 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex justify-center items-center z-10">
            <button
              className="opacity-0 group-hover:opacity-100 bg-white text-pink-600 py-1 px-3 rounded-lg font-semibold shadow-lg transition-opacity duration-300"
              onClick={onAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex flex-col">
        <div className="absolute bottom-4 right-4 cursor-pointer" onClick={onRemove}>
            <img 
              src={binIcon} 
              alt="Remove" 
              className="w-6 h-6 bg-white rounded-full shadow-md p-1 hover:opacity-80"
            />
          </div> 
          <h2 className="text-xl font-bold text-gray-800">{name}</h2> 
          <p className="text-md font-semibold text-gray-800 mt-1">Rs.{price}</p> 
        </div>
      </div>
    </div>
  );
};

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      imageUrl: image1,
      name: 'Wishlist Product 1',
      price: 3999,
    },
    {
      imageUrl: image2,
      name: 'Wishlist Product 2',
      price: 5999,
    },
    {
      imageUrl: image1,
      name: 'Wishlist Product 1',
      price: 3999,
    },
    {
      imageUrl: image2,
      name: 'Wishlist Product 2',
      price: 5999,
    },
  ]);

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
  };

  const handleRemove = (itemToRemove) => {
    setWishlistItems(wishlistItems.filter(item => item !== itemToRemove));
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-row space-x-4 overflow-hidden">
        {wishlistItems.map((item, index) => (
          <WishlistItem
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            onAddToCart={() => handleAddToCart(item)}
            onRemove={() => handleRemove(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
