import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kontak from './pages/kontak';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Kontak />
  </React.StrictMode>
);


reportWebVitals();
