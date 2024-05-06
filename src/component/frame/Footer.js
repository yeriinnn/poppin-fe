import React from 'react';
import './css/Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {

    const handleFooterLogoClick = () => {
        window.location.href = '/main'; 
      };

    return (
        <footer className="main-footer">
            <img className="footer-logo" src="/images/popin.png"
                alt="footer-Logo"
                onClick={handleFooterLogoClick}
                style={{ cursor: 'pointer' }}
            />
            <div className="footer-content">
                <div className="footer-contact" style={{ fontSize: "17px", color: "#3B5266" }}>
                    <strong>Contact us</strong>
                    <br />
                    popin@gmail.com
                    <br /><br />
                    +1-2345-6789
                    <br /><br />
                    (주)Flick
                    <br />
                    서울특별시 동작구 상도로 369
                    <div className='language-containter'>
                        <img className="ic-language" src="/images/ic_language.svg" alt="ic-language" />
                        <select className="language-dropdown">
                            <option value="en">English</option>
                            <option value="ko">한국어</option>
                            <option value="jp">日本語</option>
                        </select>
                    </div>
                </div>
                <div className="footer-buttons">
                    <a href="/popup" className="footer-button" style={{ textDecoration: 'none' }}><strong>Popup</strong></a>
                    <a href="/Map" className="footer-button" style={{ textDecoration: 'none' }}><strong>Map</strong></a>
                    <a href="/Live" className="footer-button" style={{ textDecoration: 'none' }}><strong>Live</strong></a>
                    <div className="mypage-buttons">
                        <a href="/mypage" className="footer-button" style={{ textDecoration: 'none' }}><strong>Mypage</strong></a>
                        {/* 추후에 링크 주소 보고 추가할 예정 */}
                        <button className="footer-button">정보 수정</button>
                        <button className="footer-button">찜 목록</button>
                        <button className="footer-button">My payments</button>
                        <button className="footer-button">나의 채팅</button>
                    </div>
                </div>

            </div>
            <div className="footer-copyright" style={{ color: "#95A1BB" }}>
                <br />
                Copyright © 2024. Plick
            </div>
        </footer>
    );
};

export default Footer;