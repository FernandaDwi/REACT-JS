import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Kontak from './pages/kontak';
import Nav from './pages/Nav';
import Sejarah from './pages/Sejarah';
import Tentang from './pages/Tentang';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Kontak />
    <Sejarah />
    <Tentang />
  </React.StrictMode>
);


reportWebVitals();
