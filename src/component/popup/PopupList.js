import React, {useState, useEffect} from "react";
import axios from 'axios';
import './css/PopupList.css';
import PopupBox from "./PopupBox";

import dbjson from "./popupdb.json";  //임시 데이터


const PopupList = () => {
    const [popup, setPopup] = useState(null);

    const getPopup = async () =>{
        setPopup(dbjson.popup);
    }

    useEffect(()=> {
       setPopup(dbjson);
    }, []); //종속성 배열

    if(popup ==null){
        return null;
    }

    return(
        <div className="popupList">
            <div>
                <input className="inputBox" placeholder="search for anything"></input>
            </div>
            <div>
                {popup.map(popup => (
                    <PopupBox
                        key ={popup.id}
                        name = {popup.name}
                        start_date = {popup.start_date}
                        end_date = {popup.start_date}
                        image={popup.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default PopupList;
