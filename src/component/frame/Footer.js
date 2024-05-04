import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <img className="logo" src="/images/popin.png" alt="Logo" />
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
                    <button className="footer-button"><strong>Popup</strong></button>
                    <button className="footer-button"><strong>Map</strong></button>
                    <button className="footer-button"><strong>Live</strong></button>
                    <div className="mypage-buttons">
                        <button className="footer-button"><strong>Mypage</strong></button>
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