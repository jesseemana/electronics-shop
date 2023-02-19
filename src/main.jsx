import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter as Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <App />
      </Provider>
    </Route>
  </React.StrictMode>
);
