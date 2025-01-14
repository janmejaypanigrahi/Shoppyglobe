// src/pages/Home.js
import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductItem from '../components/ProductItem';

const Home = () => {
  const { data: products, loading, error } = useFetch('https://dummyjson.com/products');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
