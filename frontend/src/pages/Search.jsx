import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = () => {
    // Simulate a search function
    const simulatedResults = [
      { id: 1, name: 'Product 1', price: 3999 },
      { id: 2, name: 'Product 2', price: 5999 },

      // Add more simulated products here
    ].filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

    setResults(simulatedResults);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Search Products</h1>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg py-2 px-4 w-1/2"
          placeholder="Search for products..."
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-black transition-colors duration-300"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.length > 0 ? (
          results.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-lg font-semibold text-gray-800">Rs.{product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
