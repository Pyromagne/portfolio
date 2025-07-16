import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import './scroll.css';
import './animations.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);