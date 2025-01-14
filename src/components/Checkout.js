import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThankYouPopup from './ThankYouPopup'; // Import the ThankYouPopup component

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); // Get cart items from Redux
  const navigate = useNavigate();

  // State for shipping details
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  // State to track validation errors
  const [errors, setErrors] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  // State for showing the Thank You Popup
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);

  // Calculate total price
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle shipping details input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Validate shipping details
  const validateFields = () => {
    const newErrors = {};
    let isValid = true;

    if (!shippingDetails.name) {
      newErrors.name = 'Full name is required.';
      isValid = false;
    }

    if (!shippingDetails.address) {
      newErrors.address = 'Address is required.';
      isValid = false;
    }

    if (!shippingDetails.city) {
      newErrors.city = 'City is required.';
      isValid = false;
    }

    if (!shippingDetails.postalCode) {
      newErrors.postalCode = 'Postal code is required.';
      isValid = false;
    }

    if (!shippingDetails.country) {
      newErrors.country = 'Country is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle the checkout process
  const handleCheckout = () => {
    // Validate the fields before proceeding
    if (!validateFields()) {
      return;
    }

    // Simulate successful checkout and show the popup
    setShowThankYouPopup(true);

    // Optionally clear cart (if needed)
    // dispatch(clearCart()); // Uncomment if you need to clear cart after checkout

    // After 3 seconds, redirect to the homepage
    setTimeout(() => {
      setShowThankYouPopup(false); // Close the popup
      navigate('/'); // Redirect to homepage
    }, 3000);
  };

  return (
    <div className="checkout-container p-6">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

      {/* Cart Items */}
      <div className="cart-items mb-6">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item flex justify-between items-center py-4 border-b">
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16" />
                <div className="flex flex-col ml-4">
                  <span className="font-semibold">{item.title}</span>
                  <span>
                    ${item.price} x {item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Shipping Details Form */}
      <div className="shipping-details mb-6">
        <h2 className="text-xl font-semibold">Shipping Information</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              value={shippingDetails.name}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Address</label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : ''}`}
              placeholder="Enter your address"
            />
            {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">City</label>
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : ''}`}
              placeholder="Enter your city"
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.postalCode ? 'border-red-500' : ''}`}
              placeholder="Enter your postal code"
            />
            {errors.postalCode && <span className="text-red-500 text-sm">{errors.postalCode}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Country</label>
            <input
              type="text"
              name="country"
              value={shippingDetails.country}
              onChange={handleInputChange}
              className={`w-full p-2 border rounded-md ${errors.country ? 'border-red-500' : ''}`}
              placeholder="Enter your country"
            />
            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
          </div>
        </form>
      </div>

      {/* Total Amount */}
      <div className="total-amount mb-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <div className="flex justify-between items-center py-2">
          <span>Total Amount:</span>
          <span className="font-bold">${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Place Order
      </button>

      {/* Thank You Popup */}
      {showThankYouPopup && <ThankYouPopup onClose={() => setShowThankYouPopup(false)} />}
    </div>
  );
};

export default Checkout;
