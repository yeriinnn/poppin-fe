import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <img src="/public/images/popin.png" alt="Logo" />
        <img src="/src/assets/images/divider.png" alt="Divider" />
        <div className="header-buttons">
          <button className="header-button">Popup</button>
          <button className="header-button">Map</button>
          <button className="header-button">Live</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
