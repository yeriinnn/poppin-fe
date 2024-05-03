import './css/Signup.css';

export default function Signup() {
    return (
        <div className="container">
            <div className="left-half">
                <div className="centered-image">
                    <img src={require('../../assets/images/bigLogo.png')} alt='logo'/>
                    <div className="title1">Welcome to Pop'in!</div>
                    <div className="title2">팝업의 세계에 들어올 준비가 되셨냐요?</div>
                </div>
            </div>
            <div className="right-half">
                <div className="signupContainer">
                    <div className="signupTitle">회원가입</div>
                    <div className="signupDescription">pop`in의 회원이 되기 위해 정보를 입력해주세요.</div>
                    <div className="signupLabel">이름</div>
                    <input
                        className="signupInput"
                        name="name"
                        type={'text'}
                        placeholder="이름"
                    />
                    <div className="signupLabel">이메일</div>
                    <div className="inputWithButton">
                        <input
                            className="emailInput"
                            name="email"
                            type={'text'}
                            placeholder="이메일"
                        />
                        <button className="checkButton">중복 확인</button>
                    </div>
                    <div className="signupLabel">비밀번호</div>
                    <input
                        className="signupInput"
                        name="pw"
                        type={'password'}
                        placeholder="비밀번호"
                    />
                    <div className="signupLabel">비밀번호 확인</div>
                    <input
                        className="signupInput"
                        name="pwCheck"
                        type={'password'}
                        placeholder="비밀번호"
                    />
                    <div className="guideText">8자리 이상 입력해주세요.</div>
                    <div className="signupLabel">닉네임</div>
                    <div className="inputWithButton">
                        <input
                            className="nicknameInput"
                            name="nickname"
                            type={'text'}
                            placeholder="닉네임"
                        />
                        <button className="checkButton">중복 확인</button>
                    </div>
                    <div>
                        <button className="signupButton">회원가입</button>
                    </div>
                    <div className="loginPrompt">
                        <div>이미 계정이 있으신가요? <a className="loginLink">로그인</a></div>
                    </div>
                </div>
            </div>
        </div>  
    )
}
