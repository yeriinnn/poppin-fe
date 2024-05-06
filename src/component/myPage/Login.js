import './css/Login.css';
import LoginComponent from "./LoginComponent"

export default function Login() {
    return (
        <div className="container">
            <div className="left-half">
                <div className="centered-image">
                    <img src={require('../../assets/images/bigLogo.png')} alt='logo'/>
                    <div className="title1">Welcome to Pop'in!</div>
                    <div className="title2">팝업의 세계에 들어올 준비가 되셨나요?</div>
                </div>
            </div>
            <div className="right-half">
                <LoginComponent/>
                {/* <div className="loginContainer">
                    <div className="loginTitle">로그인</div>
                    <div className="loginDescription">pop`in을 즐길 준비가 되셨냐요?</div>
                    <div className="loginLabel">이메일</div>
                    <input
                        className="loginInput"
                        name="email"
                        type={'text'}
                        placeholder="이메일"
                    />
                    <div className="loginLabel">비밀번호</div>
                    <input
                        className="loginInput"
                        name="pw"
                        type={'password'}
                        placeholder="비밀번호"
                    />
                    <div className="guideText">비밀번호를 잊으셨냐요?</div>
                    <div>
                        <button className="loginButton">로그인</button>
                    </div>
                    <div className='signupPrompt'>다른 계정을 이용하시려면</div>
                    <div className="signupPrompt">
                        <div>아직 계정이 없으신가요? <a className="signupLink" href='#!'>회원가입</a></div>
                    </div>
                </div> */}
            </div>
        </div>  
    )
}
