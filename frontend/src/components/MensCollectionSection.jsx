import React, { useState, useEffect, useRef } from 'react';
import mensItem1 from '../assets/tshirt1.jpg';
import mensItem2 from '../assets/tshirt2.jpg';
import mensItem3 from '../assets/tshirt3.jpg';
import mensItem4 from '../assets/tshirt4.jpg';
import mensItem5 from '../assets/tshirt2.jpg';
import mensItem6 from '../assets/tshirt2.jpg';

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
      <h2 className="text-3xl font-semibold mb-8 text-center">Men's Collection</h2>
      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
        >
          {images.concat(images[0]).map((image, index) => (
            <div key={index} className="w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 px-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={image} alt={`Men's Item ${index + 1}`} className="w-full h-32 object-cover" />
                <div className="p-2">
                  <h3 className="text-sm font-semibold mb-1">Men's Item</h3>
                  <p className="text-xs text-gray-600">$79.99</p>
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
