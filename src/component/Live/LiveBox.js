import React from "react";
import './css/LiveBox.css';
import { useNavigate } from "react-router-dom";

const LiveBox = (props) => {
    const navigate = useNavigate();

    const clickPopupButton = (item) => {
        navigate("/PopupDetail/${item.id}");
    };

    return (
        <div className="list-box">
            <img className="box-img" src={require('../../assets/images/' + props.image + '.png')} />
            <div className="box-content">
                <div className="box-name">{props.name}</div>
                <div className="box-date"> {props.start_date}-{props.end_date}</div>
                <div className="box-address">{props.city} {props.local} {props.location}</div>
                <div className="box-join-info">
                    <div className="box-liked">100명이 와글와글</div>
                    <div className="box-point">100포인트</div>
                    <button className = "join-button">join</button>
                </div>
            </div>
        </div>
    );
}

export default LiveBox;