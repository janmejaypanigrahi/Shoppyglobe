// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetail;
