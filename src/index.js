import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Axios from 'axios';
import thunk from 'redux-thunk';
import App from './App';
import './css/index.css';
// import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';

Axios.defaults.baseURL = 'https://sleepy-dusk-82973.herokuapp.com/api/';
Axios.defaults.withCredentials = true;

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
