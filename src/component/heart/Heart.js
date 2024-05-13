import React from "react";

const Heart = (popup) =>{
    // 유저 로그인시 아닐시 차이 있게

    <img src={require("../../assets/images/heart.png")} />
    {popup.heart > 999 ? (<span>999+</span>) : (<span>{popup.heart}</span>)}
};

export default Heart;