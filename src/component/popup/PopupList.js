import React, {useState, useEffect} from "react";
import './css/PopupList.css';
import PopupBox from "./PopupBox";

import dbjson from "./popupdb.json";  //임시 데이터
import PopupFilter from "./PopupFilter";


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
            <div className="list-top">
                <span><img src={require('../../assets/images/search.png')}/></span>
                <input className="list-search" placeholder="search for anything"></input>
                <button className="searchBtn" type="button"><img src={require('../../assets/images/searchBtn.png')}/></button>
            </div>
            <div className="list-container-wrapper">
                
                <div className="list-container">
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
                <div className="list-right">
                    <PopupFilter/>
                </div>
            </div>
        </div>
    );
}

export default PopupList;
