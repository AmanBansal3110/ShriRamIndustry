import React, { useState, useRef, useCallback } from 'react';

const DraggableCarousel = ({ images, title }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="container mx-auto px-4 mb-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>
      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-48 cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 w-48 overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Item ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold mb-1">Item {index + 1}</h3>
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

export default DraggableCarousel;
