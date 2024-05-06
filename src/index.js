import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './component/frame/Footer'
import Header from './component/frame/Header'
import './GlobalStyle.css';
import {Provider} from 'react-redux';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <Header/>
    <App />
    <Footer />
    </Provider>
  </React.StrictMode>
  
);
