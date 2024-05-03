import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './component/frame/Footer'
import './GlobalStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Footer />
    </React.StrictMode>
);

