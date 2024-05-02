import React from "react";
import "./css/PopupFilter.css";

const PopupFilter = () => {
  return (
    <div className="filter-container">
      <div className="filter-location">
        <img className="filter-img" src={require("../../assets/images/spot.png")}/>
        <span>서울, 대한민국</span>
        <img className="filter-img" src={require("../../assets/images/arrow.png")} />
      </div>
      <hr />
      <div>
        <fieldset>
            <legend>Filter</legend>
            <div className="filter-check">
                <input type="checkbox" id="fashion" name="fashion"/>
                <label for="fashion">패션</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="beauty" name="beauty"/>
                <label for="beauty">뷰티</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="food" name="food"/>
                <label for="food">음식</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="celeb" name="celeb"/>
                <label for="celeb">연예</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="digital" name="digital"/>
                <label for="digital">가전/디지털</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="character" name="character"/>
                <label for="character">캐릭터</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="living" name="living"/>
                <label for="living">리빙</label>
            </div>
            <div className="filter-check">
                <input type="checkbox" id="game" name="game"/>
                <label for="game">게임</label>
            </div>
        </fieldset>

        <hr />
        


      </div>
    </div>
  );
};

export default PopupFilter;
