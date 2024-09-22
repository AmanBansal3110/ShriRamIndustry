import React, { useState, useEffect, useRef } from 'react';
import newArrival1 from '../assets/tshirt1.jpg';
import newArrival2 from '../assets/tshirt2.jpg';
import newArrival3 from '../assets/tshirt3.jpg';
import newArrival4 from '../assets/tshirt4.jpg';
import newArrival5 from '../assets/tshirt2.jpg';
import newArrival6 from '../assets/tshirt4.jpg';

const NewArrivalsSection = () => {
  // Duplicate the images array to have more items
  const images = [
    newArrival1, newArrival2, newArrival3, newArrival4, newArrival5, newArrival6,
    newArrival1, newArrival2, newArrival3, newArrival4, newArrival5, newArrival6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">New Arrivals</h2>
      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out cursor-grab"
          style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)` }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {images.concat(images[0]).map((image, index) => (
            <div key={index} className="w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 px-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={image} alt={`New Arrival ${index + 1}`} className="w-full h-32 object-cover" />
                <div className="p-2">
                  <h3 className="text-sm font-semibold mb-1">New Item</h3>
                  <p className="text-xs text-gray-600">$99.99</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
