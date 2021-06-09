import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import store from './app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from './store'
import { createStore } from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer)




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

