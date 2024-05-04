import React, { useState, useEffect } from "react";
import Header from "../frame/Header";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./css/PopupDetail.css";

import dbjson from "./popupdb.json"; //임시 데이터

SwiperCore.use([Navigation, Pagination, Autoplay]);

const PopupDetail = () => {
  // swiper 파라미터
  const params = {
    spaceBetween: 10,
    slidesPerView: "1",
    centerSlides: true,
    loop: true,
    speed: 600,
    navigation: true,
    pagination: {
      clickable: true,
      type: "bullets",
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    watchOverflow: true, //슬라이드 1개 일 때, pager, button 숨김 여부 설정
    autoHeight: false,
    touchRatio: 0, //드래그 막는 기능
    breakpoints: {
      //화면 사이즈에 따라 보여지는 이미지 개수 조절
      "@1.5": {
        slidesPerView: 2,
        spaceBetween: 2,
      },
    },
    style: {
      "--swiper-pagination-color": "#47ABD9",
      "--swiper-navigation-color": "#47ABD9",
    },
  };

  //url에서 id 값 가져오기
  const { id } = useParams();
  const [popup, setPopupDB] = useState(null);

  //JSON 파일에서 해당 데이터 불러오기
  useEffect(() => {
    const data = dbjson.find((item) => item.id === id);
    setPopupDB(data);
  }, [id]);

  //데이터가 없는 경우 처리
  if (!popup) {
    return <div>Loading. . . . . . </div>;
  }

  console.log(id);
  return (
    <div>
      <div className="popupDetail">
        <div>
          <div className="detail-heart">
            <img src={require("../../assets/images/heart.png")} /> 
            {popup.heart > 999 ? (<span>999+</span>) : (<span>{popup.heart}</span>)}
          </div>
          <div className="display-flex">
            <div className="detail-name">{popup.name}</div>
            <div className="detail-live">
              <button>Live chat</button>
            </div>
          </div>
          <div className="detail-date">
            {popup.start_date} - {popup.end_date}
          </div>
          <div className="detail-lo">
            <img src={require("../../assets/images/location.png")} />
            {popup.city} {popup.local} {popup.location}
          </div>
        </div>

        <br />
        {/* 슬라이드 배너 */}
        <div className="swiper-container">
          <Swiper {...params}>
            <SwiperSlide>
              <img
                className="swiper-img"
                src={require("../../assets/images/" + popup.image + ".png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-img"
                src={require("../../assets/images/" + popup.image + ".png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-img"
                src={require("../../assets/images/" + popup.image + ".png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-img"
                src={require("../../assets/images/" + popup.image + ".png")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper-img"
                src={require("../../assets/images/" + popup.image + ".png")}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="detailBox">
          <div className="detail-title">운영시간</div>
          <div className="detail-content">
            월: 11:30 ~ 20:00
            <br />
            화: 11:30 ~ 20:00
            <br />
            수: 11:30 ~ 20:00
            <br />
            목: 11:30 ~ 20:00
            <br />
            금: 11:30 ~ 20:00
            <br />
            토: 11:30 ~ 20:00
            <br />
            일: 11:30 ~ 20:00
          </div>
        </div>

        <div className="detailBox">
          <div className="detail-title">팝업스토어 소개</div>
          <div className="detail-content dbox">{popup.intro}</div>
        </div>

        <div className="detailBox">
          <div className="detail-title">브랜드 페이지 링크</div>
          <div className="detail-content">
            <a href="${popup.page_link}">{popup.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDetail;
