import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import store from './redux/store'; // Your redux store
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}> {/* Wrap your app with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
