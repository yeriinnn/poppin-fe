import React from 'react';
import './css/TpBox.css'

const TpBox = ({ imgSrc, productName, popupPeriod }) => {
  return (
    <div className="tpbox">
      <img src={imgSrc} alt="Product" className="tpbox-img" />
      <div className="tpbox-inner">
        <div className="tpbox-name">{productName}</div>
        <div className="tpbox-date">{popupPeriod}</div>
        <button className="tpbox-btn">바로가기</button>
      </div>
    </div>
  );
};

export default TpBox;
