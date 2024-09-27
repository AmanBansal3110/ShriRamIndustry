import React from 'react';

const NewArrivals = () => {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-4xl text-center font-bold mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Replace with actual product data */}
        <div className="p-4 border bg-gray-200 shadow-md">New Arrival 1</div>
        <div className="p-4 border bg-gray-200 shadow-md">New Arrival 2</div>
        <div className="p-4 border bg-gray-200 shadow-md">New Arrival 3</div>
      </div>
    </div>
  );
};

export default NewArrivals;
