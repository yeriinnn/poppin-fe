import React, { useEffect, useState } from "react";
import "./css/Live.css";
import LiveBox from "./LiveBox.js";
import dbjson from "../popup/popupdb.json";

const Live = () => {
    const [live, setLive] = useState(null);

    const getLive = async () => {
        setLive(dbjson.popup);
    };

    useEffect(() => {
        setLive(dbjson);
    }, []);

    if (live == null) {
        return null;
    }

    return (
        <div className="live-page">
            <div className="live-chat-title">
                <strong style={{ fontSize: '36px' }}>Live Chat</strong>
                <br /><br />
                <strong style={{ fontSize: '24px' }}>관심있는 팝업 스토어의 현장 엿보기 !</strong>
            </div>
            {/* search 창 */}
            <div className="list-top">
                <span>
                    <img src={require("../../assets/images/search.png")} />
                </span>
                <input
                    className="list-search"
                    placeholder="search for anything"
                ></input>
                <button className="searchBtn" type="button">
                    <img src={require("../../assets/images/searchBtn.png")} />
                </button>
            </div>
            {/* search 창 */}

            {/* Live-list */}
            <div className="live-list">
                <div className="list-space">
                    <div className="list-container">
                        {live.map((popup) => (
                            <LiveBox
                                id={popup.id}
                                name={popup.name}
                                start_date={popup.start_date}
                                end_date={popup.start_date}
                                city={popup.city}
                                local={popup.local}
                                location={popup.location}
                                image={popup.image}
                            />
                        ))}
                    </div>
                </div>
                {/* Load more 100+ 버튼 */}
                <div className="list-bottom">
                    <button className="moreBtn">Load more +</button>
                </div>
                {/* Load more 100+ 버튼 */}
                {/* LiveList */}
            </div>
        </div>
    );
};

export default Live;