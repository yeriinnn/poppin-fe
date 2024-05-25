import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './component/frame/Footer'
import Header from './component/frame/Header'
import './GlobalStyle.css';
import {Provider} from 'react-redux';
import Store from './Store';
import AppRouter from './component/frame/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <AppRouter>
    <Header/>
    <App />
    <Footer />
    </AppRouter>
    </Provider>
  </React.StrictMode>
  
);
