import React, { useState, useEffect, useRef } from 'react';
import mensItem1 from '../assets/tshirt1.jpg';
import mensItem2 from '../assets/tshirt2.jpg';
import mensItem3 from '../assets/tshirt3.jpg';
import mensItem4 from '../assets/tshirt4.jpg';
import mensItem5 from '../assets/tshirt2.jpg';
import mensItem6 from '../assets/tshirt1.jpg';
// 
const MensCollectionSection = () => {
  const images = [
    mensItem1,
    mensItem2,
    mensItem3,
    mensItem4,
    mensItem5,
    mensItem6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        container.style.transition = 'none';
        setCurrentIndex(-1);
        setTimeout(() => {
          container.style.transition = 'transform 500ms ease-in-out';
          setCurrentIndex(0);
        }, 50);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-black">Men's Collection</h2>
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {images.concat(images[0]).map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 p-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <img src={image} alt={`Men's Item ${index + 1}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Stylish T-Shirt</h3>
                  <p className="text-gray-500 mb-2">A stylish T-shirt for casual outings.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-pink-500">$29.99</span>
                    <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MensCollectionSection;
