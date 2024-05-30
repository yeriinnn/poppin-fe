import React from "react";
import { getKakaoLoginLink } from "../api/kakaoApi";
import { Link } from "react-router-dom";


const link = getKakaoLoginLink()
function KakaoLoginComponent(props) {
    return (
        <div>
            <Link to={link}>
                <img src={require('../../../assets/images/kakao_login_medium_narrow.png')} alt='kakao_login'/>
            </Link>
        </div>
    );
}

export default KakaoLoginComponent;