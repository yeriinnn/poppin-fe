import React, { useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper"; // Navigation 모듈 제거
import "swiper/swiper-bundle.css";
import "./css/Main.css"; 
import TpBox from "./TpBox";
import popup1 from "../main/dump1.png"; 
import popup2 from "../main/dump2.png"; 
import popup3 from "../main/dump1.png"; 
import popup4 from "../main/dump2.png"; 
import popup5 from "../main/dump1.png"; 

SwiperCore.use([Autoplay]); // Navigation 모듈 대신 Autoplay 모듈 사용

const Main = () => {
  useEffect(() => {
    const swiper = new SwiperCore(".image-slider", {
      loop: true,
      autoplay: {
        delay: 5000, // 5초마다 자동 슬라이드
        disableOnInteraction: false,
      },
      spaceBetween: 0,
      touch: true, // 좌우 터치로 슬라이드 제어
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="main-container">
      {/* 이미지 슬라이더 영역 */}
      <div className="image-slider swiper-container" style={{ width: '100%', height: '594px', flexShrink: 0 }}>
        <div className="swiper-wrapper">
          <div className="image-slide">
            <img src={popup1} alt="Slide 1" />
          </div>
          <div className="swiper-slide">
            <img src={popup2} alt="Slide 2" />
          </div>
          <div className="swiper-slide">
            <img src={popup3} alt="Slide 3" />
          </div>
          <div className="swiper-slide">
            <img src={popup4} alt="Slide 4" />
          </div>
          <div className="swiper-slide">
            <img src={popup5} alt="Slide 5" />
          </div>
        </div>
      </div>

      {/* 진행중인 팝업 영역 */}
      <div className="popup-text">
        <strong>진행중인 팝업 TOP3</strong>
      </div>
      <div className="popup-text">
        사람들에게 인기 있는 팝업
      </div>
      <div className="popup-section" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '30px' }}>
        {/* TpBox 컴포넌트 사용 */}
        <TpBox
          imgSrc={popup1}
          productName="눙눙일"
          popupPeriod="2024.09.02 - 2024.09.10"
          style={{ marginRight: '32px' }}
        />
        <TpBox
          imgSrc={popup2}
          productName="눙눙이"
          popupPeriod="2024.09.02 - 2024.09.10"
          style={{ marginRight: '32px' }}
        />
        <TpBox
          imgSrc={popup3}
          productName="눙눙삼"
          popupPeriod="2024.09.02 - 2024.09.10"
        />
      </div>
      
      {/* 진행중인 전국 팝업 정보 */}
      <div className="continue-text" style={{ marginTop: '186px', marginLeft: '56px', textAlign: 'left' }}>
        <strong>진행중인 전국 팝업 정보</strong>
        <div>진행중인 전국 팝업을 둘러보세요.</div>
      </div>
    </div>
  );
};

export default Main;
