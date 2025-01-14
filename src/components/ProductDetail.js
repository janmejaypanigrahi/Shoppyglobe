// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching product details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-detail">
      <img src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>Rating: {product.rating}</p>
      <p>{product.warrantyInformation}</p>
      <p>{product.shippingInformation}</p>

      <div>
        <h3>Reviews:</h3>
        {product.reviews.map((review, index) => (
          <div key={index}>
            <p>{review.reviewerName}: {review.comment} (Rating: {review.rating})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
