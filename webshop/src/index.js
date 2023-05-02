import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { CartSumContextProvider } from './store/CartSumContext';
import { AuthContextProvider } from './store/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartSumContextProvider>
      <AuthContextProvider>
        <App />
        </AuthContextProvider>
      </CartSumContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


