import React from "react";
import './css/PopupBox.css';
import { useNavigate } from "react-router-dom";

const PopupBox = (props) =>{
    const navigate = useNavigate();
 
    const clickPopupButton = () => {
        navigate("/PopupDetail");
    };

    return(
        <div className="pbox">
            <img className="box-img" src={require('../../assets/images/'+props.image+'.png')}/>
            <div className="box-heart"><img src={require('../../assets/images/heart.png')}/>999+</div>
            <div className="box-inner">
                <div className="box-name">{props.name}</div>
                <div className="box-date">팝업 기간 {props.start_date}-{props.end_date}</div>
                <button className="box-btn" onClick={clickPopupButton}>상세보기</button>
            </div>
        </div>
    );
}

export default PopupBox;