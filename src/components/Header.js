import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <button
          onClick={() => navigate('/')} // Redirect to Home
          className="text-2xl font-semibold hover:text-gray-200 transition duration-300 focus:outline-none"
        >
          ShoppyGlobe
        </button>

        {/* Navigation Buttons */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate('/')} // Redirect to Home
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 focus:outline-none"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/cart')} // Redirect to Cart
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 focus:outline-none"
              >
                Cart
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
