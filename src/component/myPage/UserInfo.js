import React, { useState, useEffect } from 'react';
import './css/Userinfo.css';

export default function UserInfo() {
    const [point, setPoint] = useState(0); // 포인트 값을 상태로 관리합니다.

    // useEffect를 사용하여 컴포넌트가 마운트될 때 포인트 값을 받아옵니다.
    useEffect(() => {
        // 여기서는 예시로 정적인 값을 설정했습니다. 실제로는 포인트 값을 받아와야 합니다.
        // 예를 들어 API 호출 등의 작업을 수행하여 포인트 값을 받아올 수 있습니다.
        const fetchedPoint = 1234567; // 예시 포인트 값
        setPoint(fetchedPoint); // 받아온 포인트 값을 상태에 설정합니다.
    }, []);

    return (
        <div className="userinfo-container">
            <div className="userinfo-content">
                <img src={require('../../assets/images/ic_bigPerson.png')} alt='person icon' className="userinfo-image" />
                <span className="userinfo-nickname">닉네임</span>
            </div>
            <div className="point-info">
                <div style={{ color: '#B1B5C3', fontSize: '12px', marginBottom: '10px' }}>나의 포인트</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="point" style={{ color: '#000000', fontSize: '16px' }}>{point.toLocaleString()}</span>
                    <button className="charge-btn">충전하기</button>
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%'}}>
                <span style={{ flex: 4 }}>
                    <div className="infoLabel">이메일</div>
                    <input
                        className="infoInput"
                        name="email"
                        type={'text'}
                        placeholder="이메일"
                    />
                </span>
                <span style={{ flex: 1 }}></span>
                <span style={{ flex: 4 }}>
                    <div className="infoLabel">이름</div>
                    <input
                        className="infoInput"
                        name="name"
                        type={'text'}
                        placeholder="이름"
                    />
                </span>
            </div>
            <div className="infoLabel">닉네임</div>
            <div className="inputWithButton">
                <input
                    className="infoInput"
                    name="nickname"
                    type={'text'}
                    placeholder="닉네임"
                />
                <button className="changeButton" style={{ display: 'inline-block', marginLeft: '30px' }}>닉네임 변경</button>
            </div>
            <div className="infoLabel">비밀번호</div>
            <button className="changeButton">비밀번호 변경</button>
        </div>
    );
}
