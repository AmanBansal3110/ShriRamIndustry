import React from 'react';

const MensCollection = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl text-center font-bold mb-6">Men's Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Replace with actual product data */}
        <div className="p-4 border bg-gray-200 shadow-md">Men's Collection 1</div>
        <div className="p-4 border bg-gray-200 shadow-md">Men's Collection 2</div>
        <div className="p-4 border bg-gray-200 shadow-md">Men's Collection 3</div>
      </div>
    </div>
  );
};

export default MensCollection;
