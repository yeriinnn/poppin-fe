import React, { useState } from "react";
import "./css/PopupFilter.css";

const PopupFilter = () => {
  //여러 개의 체크 박스 상태 저장 useState hook 사용
  const [checkboxStates, setCheckBoxStates] = useState({
    fashion: false,
    beauty: false,
    food: false,
    celeb: false,
    digital: false,
    character: false,
    living: false,
    game: false
  });

  //한국어 번역
  const category = {
    fashion: '패션',
    beauty: '뷰티',
    food: '음식',
    celeb: '연예',
    digital: '가전/디지털',
    character: '캐릭터',
    living: '리빙',
    game: '게임'
  }
  
  //체크 박스 변경 이벤트 핸들러
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;   //이벤트 발생한 요소에 접근
    setCheckBoxStates(prevState => ({       //prevState: 이전 상태 (React Hook에서 제공하는 기능)
      ...prevState,
      [name]: checked

    }));
  };

  //체크박스 렌더링 함수
  const renderCheckBox = () => {
    return Object.keys(checkboxStates).map((key) => (
      <div className="filter-check">
        <input type="checkbox" id={key} name={key} checked={checkboxStates[key]} onChange={handleCheckboxChange}/>
        <label for={key}>{category[key]}</label>
      </div>
    ));
  };


  return (
    <div className="filter-container">
      <div className="filter-location">
        <img
          className="filter-img"
          src={require("../../assets/images/spot.png")}
        />
        <span>서울, 대한민국</span>
        <img
          className="filter-img right"
          src={require("../../assets/images/arrow.png")}
        />
      </div>
      <hr />

      <div>
        <fieldset>
          <legend>Category</legend>
          {renderCheckBox()}
        </fieldset>
        <hr />
      </div>
      <div>
      <fieldset>
          <legend>Period</legend>
        </fieldset>
      </div>
    </div>
  );
};

export default PopupFilter;
