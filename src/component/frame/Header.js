import React from 'react';
import './css/Header.css';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '/main'; 
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <img
          src="/images/popin.png"
          alt="Logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} 
        />
        <img src="/images/divider.png" alt="Divider" />
        <div className="header-buttons">
          <a href="/popup" className="header-button">Popup</a>
          <a href="/map" className="header-button">Map</a>
          <a href="/live" className="header-button">Live</a>
        </div>
        <div className="header-buttons">
          <button className="header-button special-button"><strong>Sign In</strong></button>
          <button className="header-button special-button"><strong>Join</strong></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
