import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const AddToCartPopup = ({ product, onClose }) => {
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Close the popup after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [onClose]);

  const handleViewCart = () => {
    // Navigate to the Cart page
    navigate('/cart');
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg max-w-xs mx-auto">
        <h2 className="text-xl font-semibold text-green-500">Added to Cart</h2>
        <p className="text-lg">{product.title}</p>
        <p className="text-sm text-gray-500">Price: ${product.price}</p>
        
        <div className="mt-4 flex justify-between gap-4"> {/* Added gap-4 here */}
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleViewCart}
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartPopup;
