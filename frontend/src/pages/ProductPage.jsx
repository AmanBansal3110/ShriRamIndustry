import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import tshirt1 from '../assets/tshirt1.jpg';
import tshirt2 from '../assets/tshirt2.jpg';
import tshirt3 from '../assets/tshirt3.jpg';
import ProductsCard from '../components/ProductsCard';

const ProductPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const sampleProducts = [
        { id: 1, name: 'T-shirt 1', price: 19.99, imageUrl: tshirt1 },
        { id: 2, name: 'T-shirt 2', price: 21.99, imageUrl: tshirt2 },
        { id: 3, name: 'T-shirt 3', price: 24.99, imageUrl: tshirt3 },
      ];

      setProducts(sampleProducts);
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="container mx-auto py-10 px-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">{categoryName} Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="flex justify-center"
            >
              <div
                className="relative bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 w-full max-w-xs m-4" // Added m-4 for margin
              >
                <div className="relative p-4">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-56 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                  />
                  {/* Wishlist Icon */}
                  <div className="absolute top-3 right-3 text-gray-500 hover:text-red-600 cursor-pointer transition-colors duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">${product.price}</p>
                  <button className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
