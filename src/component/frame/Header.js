import React from 'react';
import './css/Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <img src="/images/popin.png" alt="Logo" />
        <img src="/images/divider.png" alt="Divider" />
        <div className="header-buttons">
          <button className="header-button">Popup</button>
          <button className="header-button">Map</button>
          <button className="header-button">Live</button>
        </div>
        <div className="header-buttons">
          <button className="header-button special-button">Sign In</button>
          <button className="header-button special-button">Join</button>
        </div>
      </div>
    </header>
  );
};

export default Header;