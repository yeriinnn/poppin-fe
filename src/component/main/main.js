import React, { useEffect } from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper"; // Pagination 제거
import "swiper/swiper-bundle.css";
import "./css/Main.css"; 
import TpBox from "./TpBox";
import popup1 from "../main/dump1.png"; 
import popup2 from "../main/dump2.png"; 
import popup3 from "../main/dump1.png"; 
import popup4 from "../main/dump2.png"; 
import popup5 from "../main/dump1.png"; 

SwiperCore.use([Navigation, Autoplay]); // Pagination 제거

const Main = () => {
  useEffect(() => {
    SwiperCore.use([Navigation, Autoplay]);

    const swiper = new SwiperCore(".image-slider", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000, // 5초마다 자동 슬라이드
      },
      spaceBetween: 0,
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
        {/* 네비게이션 버튼 추가 */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>

      {/* 진행중인 팝업 영역 */}
      <div className="popup-section">
        <div className="popup-text">
          <strong>진행중인 팝업 TOP3</strong>
        </div>
        <div className="popup-text">
          사람들에게 인기 있는 팝업
        </div>
       {/* TpBox 컴포넌트 사용 */}
       <TpBox
          imgSrc={popup1}
          productName="눙눙일"
          popupPeriod="2024.09.02 - 2024.09.10"
        />
        <TpBox
          imgSrc={popup2}
          productName="눙눙이"
          popupPeriod="2024.09.02 - 2024.09.10"
        />
        <TpBox
          imgSrc={popup3}
          productName="눙눙삼"
          popupPeriod="2024.09.02 - 2024.09.10"
        />
      </div>
    </div>
  );
};

export default Main;