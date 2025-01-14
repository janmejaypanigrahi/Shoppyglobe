// Cart.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../redux/actions/cartActions';
import { useNavigate,Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity(productId, quantity));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="cart-container bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>Your cart is empty.</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={() => navigate("/")}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg shadow-sm mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <span className="font-semibold text-gray-800">{item.title}</span>
                    <div className="text-gray-500 text-sm">Price: ${item.price}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))}
                    className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition duration-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, Math.max(parseInt(e.target.value, 10), 1))
                    }
                    className="w-12 text-center bg-gray-100 rounded-lg border border-gray-300"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition duration-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Total Price Section */}
            <div className="flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg shadow-sm mt-6">
              <span className="font-semibold text-lg text-gray-800">Total:</span>
              <span className="font-semibold text-xl text-gray-800">${calculateTotal()}</span>
            </div>

            {/* Checkout and Clear Cart Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => dispatch(clearCart())} // Dispatch the clearCart action
              >
                Clear Cart
              </button>
              <Link to="/checkout">
                <button
                  className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-300"
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
