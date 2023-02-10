import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter as Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Route>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Route>
);
