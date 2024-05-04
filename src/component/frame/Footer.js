import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <img className="logo" src="/images/popin.png" alt="Logo" />
            <div className="footer-content">
                <div className="footer-contact">
                    Contact us
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
                    <button className="footer-button">Popup</button>
                    <button className="footer-button">Map</button>
                    <button className="footer-button">Live</button>
                    <button className="footer-button">Mypage</button>
                    <div className="mypage-buttons">
                        <button className="footer-button">Settings</button>
                        <button className="footer-button">Logout</button>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright © 2024. Plick
            </div>
        </footer>
    );
};

export default Footer;