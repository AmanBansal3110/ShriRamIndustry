import React from "react";
import bin from "/assets/bin.svg";

const CartItem = ({ imageUrl, name, description, price, onRemove }) => {
  return (
    <div className="w-full p-4">
      <div className="shadow-lg rounded-lg flex relative">
        <img 
          src={imageUrl} 
          alt="Product" 
          className="w-1/3 h-32 object-cover rounded-l-lg" 
        />
        <div className="p-4 w-2/3 relative flex flex-col justify-center">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">{description}</p>
          <p className="text-lg font-semibold mt-2">Rs.{price}</p>
          <button 
            onClick={onRemove} 
            className="absolute top-2 right-2 text-gray-500 py-1 px-3 rounded flex items-center"
          >
            <img 
              src={bin}
              className="h-4 w-4 mr-1"  // Adjusted size to be smaller
              alt="Remove"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
