// src/redux/reducers/cartReducer.js

const initialState = {
    cartItems: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const product = action.payload;
        // Check if the product is already in the cart
        const existingProductIndex = state.cartItems.findIndex(
          (item) => item.id === product.id
        );
        if (existingProductIndex !== -1) {
          // If the product is already in the cart, update its quantity
          const updatedCart = [...state.cartItems];
          updatedCart[existingProductIndex].quantity += 1;
          return { ...state, cartItems: updatedCart };
        } else {
          // If it's a new product, add it to the cart with quantity 1
          return {
            ...state,
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }
  
      case 'REMOVE_FROM_CART':
        // Remove the product from the cart
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        };
  
      case 'UPDATE_QUANTITY':
        // Update the quantity of the product
        const { productId, quantity } = action.payload;
        const updatedCart = state.cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );
        return {
          ...state,
          cartItems: updatedCart,
        };

      case 'CLEAR_CART':
        return {
          ...state,
          cartItems: [], // Empty the cart
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  