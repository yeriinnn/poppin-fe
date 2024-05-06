import React from 'react';
import './css/Header.css';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '/main'; // 현재 창의 위치를 '/main'으로 변경하여 페이지 이동
  };

  return (
    <header className="main-header">
      <div className="header-content">
        {/* 이미지를 클릭할 때 handleLogoClick 함수 실행 */}
        <img
          src="/images/popin.png"
          alt="Logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }} // 커서 스타일을 포인터로 변경하여 클릭 가능하도록 함
        />
        <img src="/images/divider.png" alt="Divider" />
        <div className="header-buttons">
          {/* 다른 버튼들은 <a> 태그를 사용하여 각각의 경로로 이동 */}
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
