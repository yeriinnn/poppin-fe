import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './component/frame/Footer'
import Header from './component/frame/Header'
import './GlobalStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);

