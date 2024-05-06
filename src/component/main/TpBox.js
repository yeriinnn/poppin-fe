import React from 'react';
import './css/TpBox.css'

const TpBox = ({ imgSrc, productName, popupPeriod }) => {
  return (
    <div className="tpbox">
      <img src={imgSrc} alt="Product" className="tpbox-img" />
      <div className="tpbox-heart">
        <img src={require("../../assets/images/mainboxheart.png")} />
        <span>999+</span>
      </div>
      <div className="tpbox-inner">
        <div className="tpbox-name">{productName}</div>
        <div className="tpbox-date">{popupPeriod}</div>
        <button className="tpbox-btn">상세보기</button>
      </div>
    </div>
  );
};

export default TpBox;
