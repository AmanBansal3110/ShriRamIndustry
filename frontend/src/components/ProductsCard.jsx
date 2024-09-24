import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import relatedImg1 from '../assets/tshirt1.jpg';
import relatedImg2 from '../assets/tshirt2.jpg';
import relatedImg3 from '../assets/tshirt3.jpg';
import productImg from '../assets/tshirt4.jpg';

const ProductCard = () => {
  const [selectedImage, setSelectedImage] = useState(productImg);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Blue'];

  const originalPrice = 1299;
  const discountPrice = 999;
  const discountPercentage = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);

  const relatedProducts = [
    { id: 1, name: 'Related Product 1', price: 19.99, imageUrl: relatedImg1 },
    { id: 2, name: 'Related Product 2', price: 21.99, imageUrl: relatedImg2 },
    { id: 3, name: 'Related Product 3', price: 24.99, imageUrl: relatedImg3 },
  ];

  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center ">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <span key={index}>
              {ratingValue <= rating ? (
                <FaStar className="text-yellow-500" />
              ) : ratingValue === Math.ceil(rating) && !Number.isInteger(rating) ? (
                <FaStarHalfAlt className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-yellow-500" />
              )}
            </span>
          );
        })}
        <p className="ml-2 text-sm text-gray-600">({rating})</p>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 container mx-auto py-10 px-4">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Main Image & Thumbnails */}
          <div className="flex-1 flex flex-col">
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Product"
                className="w-full h-96 object-cover rounded-md transition-transform duration-300 transform"
              />
            </div>
            <div className="flex space-x-4">
              {[productImg, relatedImg1, relatedImg2].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-24 h-24 object-cover rounded-md cursor-pointer transition-transform duration-300 ${
                    selectedImage === img ? 'scale-110' : 'scale-100 opacity-75 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedImage(img)}
                  style={{
                    filter: selectedImage !== img ? 'blur(2px)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Premium T-Shirt</h1>

              {/* Star Rating */}
              {renderStarRating(4.5)}

              <p className="text-lg text-gray-700 mt-4 mb-4">
                Experience the luxury of premium quality with our 100% pure fabric t-shirt. Designed for ultimate comfort and style, this product is perfect for every occasion.
              </p>

              {/* Pricing Section */}
              <div className="flex items-center mb-6">
                <p className="text-xl font-semibold text-gray-600 mr-2">
                  Rs.{discountPrice}
                </p>
                <p className="text-xl font-bold text-pink-600">
                  <span className="line-through ">{originalPrice}</span>
                </p>
                <p className="ml-4 text-lg text-green-600">({discountPercentage}% OFF)</p>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
                <div className="flex space-x-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 rounded-md border transition-colors duration-300 ${
                        selectedSize === size
                          ? 'bg-pink-600 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-pink-600 hover:text-white'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Select Color:</h3>
                <div className="flex space-x-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                        selectedColor === color
                          ? 'w-10 h-10 border-pink-600'
                          : 'border-gray-200 hover:border-pink-600'
                      }`}
                      onClick={() => setSelectedColor(color)}
                      style={{
                        backgroundColor:
                          color === 'Black' ? '#000000' :
                          color === 'White' ? '#FFFFFF' :
                          '#0000FF', // Blue
                      }}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-500 mb-4">Sold by: Shri Ram Industries</p>
              <p className="text-gray-500 mb-6">Category: T-Shirts</p>
            </div>

            <div>
              <button className="w-full bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition-colors duration-300 mb-4">
                Buy Now
              </button>
              <button className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-black transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              {renderStarRating(4.0)}
              <p className="text-gray-700 mt-2">
                "Great quality t-shirt, very comfortable to wear. Will definitely buy again!"
              </p>
              <p className="text-sm text-gray-500 mt-1">- John Doe</p>
            </div>
            <div className="mb-4">
              {renderStarRating(4.5)}
              <p className="text-gray-700 mt-2">
                "The fabric is so soft and premium. Absolutely love it!"
              </p>
              <p className="text-sm text-gray-500 mt-1">- Jane Smith</p>
            </div>
            <div className="mb-4">
              {renderStarRating(5.0)}
              <p className="text-gray-700 mt-2">
                "Perfect fit and the quality is top-notch. Highly recommended!"
              </p>
              <p className="text-sm text-gray-500 mt-1">- Michael Lee</p>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-4"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">Rs.{product.price}</p>
                <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors duration-300">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
