import React from "react";
import "./css/PopupBox.css";
import { useNavigate } from "react-router-dom";

const PopupBox = (popup) => {
  const navigate = useNavigate();

  const clickPopupButton = (item) => {
    navigate("/popupdetail/" + item.id);
  };

  return (
    <div className="pbox">
      <img
        className="box-img"
        src={require("../../assets/images/" + popup.image + ".png")}
      />
      <div className="box-heart">
        <img src={require("../../assets/images/heart.png")} />
        {popup.heart > 999 ? (<span>999+</span>) : (<span>{popup.heart}</span>)}
      </div>
      <div className="box-inner">
        <div className="box-name">{popup.name}</div>
        <div className="box-date">
          팝업 기간 {popup.start_date}-{popup.end_date}
        </div>
        <button className="box-btn" onClick={() => clickPopupButton(popup)}>
          상세보기
        </button>
      </div>
    </div>
  );
};

export default PopupBox;
