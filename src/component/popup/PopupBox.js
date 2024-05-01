import React from "react";
import './css/PopupBox.css';
import { useNavigate } from "react-router-dom";

const PopupBox = () =>{
    const navigate = useNavigate();
 
    const clickPopupButton = () => {
        navigate("/PopupDetail");
    };


    return(
        <div className="pbox">
            <img className="box-img" src={require('../../assets/images/popup1.png')}/>
            <div className="box-heart"><img src={require('../../assets/images/heart.png')}/>999+</div>
            <div className="box-inner">
                <div className="box-name">눈사람 눙눙이 팝업스토어</div>
                <div className="box-date">팝업 기간 23.09.02 - 24.09.02</div>
                <button className="box-btn" onClick={clickPopupButton}>상세보기</button>
            </div>
        </div>
    );
}

export default PopupBox;