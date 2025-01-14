import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import AddToCartPopup from './AddToCartPopup';

const ProductItem = ({ product }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="product-item border p-4 rounded-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-xl font-bold text-blue-500">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add to Cart
      </button>

      {isPopupVisible && (
        <AddToCartPopup product={product} onClose={closePopup} />
      )}
    </div>
  );
};

export default ProductItem;
