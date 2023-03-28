import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


//navigeerimiseks - URL vahetuseks
// 1. np install react-router-dom
// 2. BrowserRouter App ümber
// 3. App.js failis <Routes> mille sees ükshaaval </Route>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

