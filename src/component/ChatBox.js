import React from "react";
import './css/ChatBox.css';

const ChatBox = () => {
    return (
        <div className="chat-message-list">
            <div className="chat-message-box">
                <div className="blue-rectangle">
                    <div className="white-inner-rectangle">
                        <img className="message-image" src={require('../../assets/images/ic_message.png')}
                            alt="message-image" />
                        <div className="user-popup-title">
                            해리포터 팝업스토어
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-new-box">
                <div className="blue-rectangle">
                    <div className="white-inner-rectangle">
                        <img className="new-message-image" src={require('../../assets/images/ic_new_message.png')}
                            alt="new-message-image" />
                        <div className="user-popup-title">
                            눈사람 눙눙이 팝업스토어
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
