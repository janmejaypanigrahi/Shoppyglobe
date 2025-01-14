import React, { useEffect } from 'react';

const ThankYouPopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Close the popup after 3 seconds
    }, 10000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-xs mx-auto text-center">
        <h2 className="text-xl font-semibold text-green-500">Thanks for Shopping!</h2>
        <p className="text-lg text-gray-600">Your order has been placed successfully.</p>
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ThankYouPopup;
