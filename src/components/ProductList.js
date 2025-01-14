import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { useFetchProducts } from '../customHooks/useFetchProducts';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  
  // Local state for the search query and debounced query
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  // Debouncing the search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500); // Delay of 500ms

    return () => clearTimeout(timer); // Clear the timer on each change
  }, [searchQuery]);

  // Handle change in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on the debounced search query
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
           product.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div className="product-list-container p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="p-2 w-full border rounded-lg"
        />
      </div>

      {/* Display filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
