// src/redux/reducers/rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Make sure the path is correct

const rootReducer = combineReducers({
  cart: cartReducer, // Add your cartReducer here
});

export default rootReducer;
