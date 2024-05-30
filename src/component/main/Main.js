import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import "swiper/swiper-bundle.css";
import "./css/Main.css";
import TpBox from "./TpBox";
import WpBox from "./WpBox";

SwiperCore.use([Autoplay]);

const Main = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/popup/random-images");
        console.log("API response:", response.data); // 디버깅을 위해 응답을 출력합니다.
        // 올바른 데이터 설정
        if (response.data && response.data.data && Array.isArray(response.data.data.popupImgUrls)) {
          setImages(response.data.data.popupImgUrls);
        } else {
          console.error('Invalid data format:', response.data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const swiper = new SwiperCore(".image-slider", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        spaceBetween: 0,
        touch: true,
      });

      return () => {
        swiper.destroy();
      };
    }
  }, [images]);

  return (
    <div className="main-container">
      {/* 이미지 슬라이더 영역 */}
      <div className="image-slider swiper-container" style={{ width: "100%", height: "594px", flexShrink: 0 }}>
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div key={index} className="swiper-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* 진행중인 팝업 영역 */}
      <div className="popup-text">
        <strong>진행중인 팝업 TOP3</strong>
      </div>
      <div className="popup-text">
        사람들에게 인기 있는 팝업
      </div>
      <div className="popup-section" style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        {/* TpBox 컴포넌트 사용 */}
        <TpBox imgSrc={images[0]} productName="눙눙일" popupPeriod="2024.09.02 - 2024.09.10" style={{ marginRight: "32px" }} />
        <TpBox imgSrc={images[1]} productName="눙눙이" popupPeriod="2024.09.02 - 2024.09.10" style={{ marginRight: "32px" }} />
        <TpBox imgSrc={images[2]} productName="눙눙삼" popupPeriod="2024.09.02 - 2024.09.10" />
      </div>
      
      {/* 진행중인 전국 팝업 정보 */}
      <div className="continue-text" style={{ marginTop: "30px", marginLeft: "56px", textAlign: "left" }}>
        <strong>진행중인 전국 팝업 정보</strong>
        <div>진행중인 전국 팝업을 둘러보세요.</div>
      </div>
      <div className="whbox-section" style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "30px" }}>
        {/* WholeBox 컴포넌트 사용 */}
        <WpBox imgSrc={images[0]} productName="진행중" popupPeriod="2024.09.02 - 2024.09.10" style={{ marginRight: "111px" }} />
        <WpBox imgSrc={images[1]} productName="전국" popupPeriod="2024.09.02 - 2024.09.10" style={{ marginRight: "111px" }} />
        <WpBox imgSrc={images[2]} productName="팝업" popupPeriod="2024.09.02 - 2024.09.10" style={{ marginRight: "111px" }} />
        <WpBox imgSrc={images[3]} productName="리스트" popupPeriod="2024.09.02 - 2024.09.10" style={{ marginRight: "111px" }} />
        <WpBox imgSrc={images[4]} productName="5개" popupPeriod="2024.09.02 - 2024.09.10"  />
      </div>
      <div className="main-bottom">
        <button className="mainBtn">Load more</button>
      </div>
    </div>
  );
};

export default Main;
