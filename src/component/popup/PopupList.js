import React from "react";
import './css/PopupList.css';
import PopupBox from "./PopupBox";


function PopupList (){
    return(
        <div className="popupList">
            <div>
                <input className="inputBox" placeholder="search for anything"></input>
            </div>
            <PopupBox/>
        </div>
    );
}

export default PopupList;
