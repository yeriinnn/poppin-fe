import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "./slices/loginSlice";

const initState = {
    email: '',
    pw: ''
}

function LoginComponent(props) {
    const [loginParam, setLoginParam] = useState({...initState})

    const dispatch = useDispatch()

    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value
        setLoginParam({...loginParam})
    }

    const handleClickLogin = (e) => {
        dispatch(login(loginParam))
    }

    return (
        <div className="loginContainer">
            <div className="loginTitle">로그인</div>
            <div className="loginDescription">pop`in을 즐길 준비가 되셨냐요?</div>
            <div className="loginLabel">이메일</div>
            <input
                className="loginInput"
                name="email"
                type={'text'}
                value={loginParam.email}
                onChange={handleChange}
                placeholder="이메일"
            />
            <div className="loginLabel">비밀번호</div>
            <input
                className="loginInput"
                name="pw"
                type={'password'}
                value={loginParam.pw}
                onChange={handleChange}
                placeholder="비밀번호"
            />
            <div className="guideText">비밀번호를 잊으셨냐요?</div>
            <div>
                <button className="loginButton"
                        onClick={handleClickLogin}>로그인</button>
            </div>
            <div className='signupPrompt'>다른 계정을 이용하시려면</div>
            <div className="signupPrompt">
                <div>아직 계정이 없으신가요? <a className="signupLink" href='#!'>회원가입</a></div>
            </div> 
        </div>
    );
} 

export default LoginComponent;