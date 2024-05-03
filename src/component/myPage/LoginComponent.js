// import React, {useState} from "react";

// const initState = {
//     email: '',
//     pw: ''
// }

// function LoginComponent(props) {
//     const [loginParam, setLoginParam] = useState({...initState})

//     const dispatch = useDispatch()

//     const handleChange(e) => {
//         loginParam[e.target.name] = e.target.value
//         setLoginParam({...loginParam})
//     }

//     return (
//         <div className="loginContainer">
//             <div className="loginTitle">회원가입</div>
//             <div className="loginDescription">pop`pin의 회원이 되기 위해 정보를 입력해주세요.</div>
//             <div className="loginLabel">이메일</div>
//             <input
//                 className="loginInput"
//                 name="email"
//                 type={'text'}
//                 value={loginParam.email}
//                 onChange={handleChange}
//             />
//             <div className="loginLabel">비밀번호</div>
//             <input
//                 className="loginInput"
//                 name="pw"
//                 type={'password'}
//                 value={loginParam.pw}
//                 onChange={handleChange}
//             />
//             <button className="loginButton">로그인</button>
//         </div>
//     );
// } 