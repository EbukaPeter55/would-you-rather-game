import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';
import reportWebVitals from './reportWebVitals';
import middleware from './middleware';





const store = createStore(reducer, middleware);


ReactDOM.render(

  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,  
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
