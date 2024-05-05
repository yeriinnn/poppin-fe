import React from "react";
import "./css/Live.css";

const Live = () => {
    return (
        <div>
            <div className="LiveList">
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

                {/* LiveList */}
            </div>
        </div>
    );
};
export default Live;