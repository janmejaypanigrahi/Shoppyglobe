import React from 'react';

const ProductCard = ({ title, imageUrl, description }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Buy Now</a>
      </div>
    </div>
  );
};

export default ProductCard;
