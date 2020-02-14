import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'

const store = createStore(
  manageBand,
  window._REDUX_DEVTOOLS_EXTENSION_&&
  window._REDUX_DEVTOOLS_EXTENSION_()
  )


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
