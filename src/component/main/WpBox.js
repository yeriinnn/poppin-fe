import React from 'react';
import './css/WholeBox.css'

const WpBox = ({ imgSrc, productName, popupPeriod }) => {
  return (
    <div className="wpbox">
      <img src={imgSrc} alt="Product" className="wpbox-img" />
      <div className="wpbox-inner">
        <div className="wpbox-name">{productName}</div>
        <div className="wpbox-date">{popupPeriod}</div>
      </div>
    </div>
  );
};

export default WpBox;
