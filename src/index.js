import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { populateProduce } from './store/produce'
import { addToCart } from './store/cart';

import './index.css';
import App from './App';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  console.log(window.store)
  window.populateProduce = populateProduce;
  window.addToCart = addToCart;
}
//When we're not in production environment, we can access the store via window

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
