import React, { useEffect } from 'react';
import './Main.css';
import Header from './Header'; // 헤더 컴포넌트 import
import Swiper from 'swiper'; // Swiper 라이브러리 import
import 'swiper/css/swiper.min.css'; // Swiper CSS 파일 import

const Main = () => {
  useEffect(() => {
    // Swiper 초기화
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000, // 5초마다 자동 넘김
      },
      slidesPerView: 5,
      spaceBetween: 30,
    });
  }, []);

  return (
    <div>
      <Header /> {/* 헤더 컴포넌트 추가 */}
      
      <div className="image-slider">
        {/* Swiper 컨테이너 */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* 슬라이드 아이템 예시 */}
            <div className="swiper-slide">./assets/images/popup1.png</div>
            <div className="swiper-slide">./assets/images/popup1.png</div>
            <div className="swiper-slide">./assets/images/popup1.png</div>
            <div className="swiper-slide">./assets/images/popup1.png</div>
            <div className="swiper-slide">./assets/images/popup1.png</div>
          </div>
        </div>
      </div>

      <div className="popup-section">
        진행중인 팝업 TOP 3
      </div>
    </div>
  );
};

export default Main;
