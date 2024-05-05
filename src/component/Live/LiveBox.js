import React from "react";
import '../Live/css';
import { useNavigate } from "react-router-dom";

const LiveBox = (props) =>{
    const navigate = useNavigate();
 
    const clickPopupButton = (item) => {
        navigate("/PopupDetail/${item.id}");
    };

    return(
        <div className="pbox">
            <img className="box-img" src={require('../../assets/images/'+props.image+'.png')}/>
            <div className="box-heart"><img src={require('../../assets/images/heart.png')}/>999+</div>
            <div className="box-inner">
                <div className="box-name">{props.name}</div>
                <div className="box-date">팝업 기간 {props.start_date}-{props.end_date}</div>
                <button className="box-btn" onClick={() => clickPopupButton(props)}>상세보기</button>
            </div>
        </div>
    );
}

export default LiveBox;