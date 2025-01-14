import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>${item.price * item.quantity}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
