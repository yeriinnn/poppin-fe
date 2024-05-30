import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getMemberWithAccessToken } from "./api/kakaoApi";
import { useDispatch } from "react-redux";
import { login } from "./slices/loginSlice";
import useCustomLogin from "./module/useCustomLogin";

function KakaoRedirect(props) {
    const [searchParams] = useSearchParams();
    const { moveToPath } = useCustomLogin();
    const authCode = searchParams.get('code');
    const dispatch = useDispatch();

    useEffect(() => {
        if (authCode) {
            getAccessToken(authCode).then(accessToken => {
                getMemberWithAccessToken(accessToken).then(result => {
                    console.log("-------------");
                    console.log(result);
                    dispatch(login(result));

                    // if (result && result.social) {
                    //     moveToPath("/Mypage");
                    // } else {
                    //     moveToPath("/Main");
                    // }

                    moveToPath("/Main");
                });
            });
        }
    }, [authCode]); // <-- dispatch와 moveToPath를 종속성 배열에 포함시킴

    return (
        <div>
            <div>Kakao Login Redirect</div>
            <div>{authCode}</div>
        </div>
    );
}

export default KakaoRedirect;
