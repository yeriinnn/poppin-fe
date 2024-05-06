import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; // Swiper의 기본 CSS
import "swiper/css/navigation"; // Swiper의 Navigation 버튼 CSS
import "swiper/css/pagination"; // Swiper의 Pagination CSS
import "./css/Main.css"; // main 컴포넌트의 CSS 파일

SwiperCore.use([Navigation, Pagination, Autoplay]); // Swiper에서 사용할 Navigation, Pagination, Autoplay 기능 활성화

const Main = () => {
  const params = {
    spaceBetween: 10,
    slidesPerView: "1",
    loop: true,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="main-container">
      {/* Swiper를 사용하여 이미지 슬라이드 구현 */}
      <div className="swiper-container">
        <Swiper {...params}>
          <SwiperSlide>
            <img src="/src/assets/images/popup1.png" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/images/popup2.jpg" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/assets/images/popup2.jpg" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
