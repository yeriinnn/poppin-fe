import './css/Login.css';
import LoginComponent from "./module/LoginComponent"

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
            </div>
        </div>  
    )
}
