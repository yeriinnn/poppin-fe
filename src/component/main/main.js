import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 
import "./css/Main.css";

SwiperCore.use([Navigation, Pagination, Autoplay]); 

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
