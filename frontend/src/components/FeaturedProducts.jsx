import React, { useState, useEffect } from 'react';

const FeaturedProducts = ({ products }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    if (products && products.length > 0) {
      const interval = setInterval(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000); // Change the image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [products]);

  const currentProduct = products && products[currentProductIndex];

  const handleImageError = (e) => {
    console.error('Error loading image:', e);
    // Optionally set a fallback image
    // e.target.src = 'path/to/fallback-image.jpg';
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl text-center font-bold mb-6">Featured Products</h2>
      <div className="relative w-full h-96 flex items-center justify-center">
        {currentProduct ? (
          <div className="relative w-full h-full">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
              key={currentProduct.id}
              onError={handleImageError}
            />
          </div>
        ) : (
          <p>No featured products available</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
