import React, { useState } from "react";
import "./css/PopupFilter.css";

const PopupFilter = () => {
  //-----------------checkBox(카테고리) 처리---------------------
  const category = {
    fashion: "패션",
    beauty: "뷰티",
    food: "음식",
    celeb: "연예",
    digital: "가전/디지털",
    character: "캐릭터",
    living: "리빙",
    game: "게임",
  };

  //여러 개의 체크 박스 상태 저장 useState hook 사용
  const [checkboxStates, setCheckBoxStates] = useState({
    fashion: false,
    beauty: false,
    food: false,
    celeb: false,
    digital: false,
    character: false,
    living: false,
    game: false,
  });

  //체크 박스 변경 이벤트 핸들러
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target; //이벤트 발생한 요소에 접근

    // checkboxStates상태 변경
    setCheckBoxStates((prevState) => ({
      //prevState: 이전 상태 (React Hook에서 제공하는 기능)
      ...prevState,
      [name]: checked,
    }));
    console.log(name, ": ", checked);
  };

  //체크박스 렌더링 함수
  const renderCheckBox = () => {
    return Object.keys(checkboxStates).map((key) => (
      <div className={`filter-check ${checkboxStates[key] ? "on" : ""}`}>
        <input
          type="checkbox"
          id={key}
          name={key}
          checked={checkboxStates[key]}
          onChange={handleCheckboxChange}
        />
        <label for={key}>{category[key]}</label>
      </div>
    ));
  };

  //--------------------라디오 버튼(기간) 처리 -------------------
  //선택된 라디오 버튼 상태
  const period = [
    { id: 0, name: "all", label: "모든 팝업" },
    { id: 1, name: "open", label: "현재 진행 중인 팝업" },
    { id: 2, name: "close", label: "종료된 팝업" },
  ];

  const [selectedRadio, setSelectedRadio] = useState("open");
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
    console.log(event.target.id, ": ", event.target.value);
  };

  const renderRadioButton = () => {
    return period.map((period) => (
      <div
        className={`filter-check ${selectedRadio === period.name ? "on" : ""}`}
        key={period.id}
      >
        <input
          type="radio"
          name="period"
          id={period.name}
          checked={selectedRadio === period.name}
          onChange={handleRadioChange}
        />
        <label for={period.name}>{period.label}</label>
      </div>
    ));
  };

  //-----------------렌더링------------------
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
        <div className="filter-inner">
          <div className="filter-location bold">Category
            <img
              className="filter-img right"
              src={require("../../assets/images/up.png")}
            />
          </div>
          {renderCheckBox()}
        </div>
        <div className="filter-inner">
          <div className="filter-location bold">Period
            <img
              className="filter-img right"
              src={require("../../assets/images/up.png")}
            />
          </div>
          {renderRadioButton()}
        </div>
        
      </div>
    </div>
  );
};

export default PopupFilter;
