import React, {useState} from "react";
import useCustomLogin from "./useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";

// 초기 설정
const initState = {
    email: '',
    password: ''
}

function LoginComponent(props) {
    // 로그인 상태를 관리하는 state
    const [loginParam, setLoginParam] = useState({...initState})
    const {doLogin, moveToPath} = useCustomLogin()

    // 입력값이 변경될 때 호출되는 함수
    const handleChange = (e) => {
        // 입력값을 loginParam 상태에 업데이트
        loginParam[e.target.name] = e.target.value
        // 변경된 loginParam으로 state를 업데이트
        setLoginParam({...loginParam})
    }

    // 로그인 버튼 클릭 시 호출되는 함수
    const handleClickLogin = (e) => {
        // Redux의 login 액션을 dispatch하여 로그인 요청
        // dispatch(login(loginParam))
        console.log('Login attempt with:', loginParam);


        doLogin(loginParam).then(data => {
            if(data.error) {
                alert("이메일과 패스워드를 확인해 주세요")
            }else {
                moveToPath("/Main")
            }
        })
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
                name="password"
                type={'password'}
                value={loginParam.password}
                onChange={handleChange}
                placeholder="비밀번호"
            />
            <div className="guideText">비밀번호를 잊으셨냐요?</div>
            <div>
                <button className="loginButton"
                        onClick={handleClickLogin}>로그인</button>
            </div>
            <div className='signupPromptSmall'>다른 계정을 이용하시려면</div>
            <div className="kakaoContainer">
                <KakaoLoginComponent/>
            </div>
            <div className="signupPrompt">
                <div>아직 계정이 없으신가요? <a className="signupLink" href='../Signup'>회원가입</a></div>
            </div> 
        </div>
    );
} 

export default LoginComponent;