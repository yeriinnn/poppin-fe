import React, { useState } from "react";
import "./css/Map.css";

const Map = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateSelection = (date) => {
        setSelectedDate(date);
    };

    const [selectedRegion, setSelectedRegion] = useState(null);

    const handleRegionSelection = (region) => {
        setSelectedRegion(region);
    };

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    return (
        <map className="map-page">
            <div className="standards">
                <div className="date">
                    <div className="date-text" style={{ fontSize: "32px" }}>
                        <strong>날짜</strong>
                    </div>
                    <div className="date-buttons">
                        <button
                            className={"date-button " + (selectedDate === null ? "selected" : "")}
                            onClick={() => handleDateSelection(null)}
                        >
                            오늘
                        </button>
                        <button
                            className={"date-button " + (selectedDate === 7 ? "selected" : "")}
                            onClick={() => handleDateSelection(7)}
                        >
                            +7일
                        </button>
                        <button
                            className={"date-button " + (selectedDate === 14 ? "selected" : "")}
                            onClick={() => handleDateSelection(14)}
                        >
                            +14일
                        </button>
                    </div>
                </div>
                <div className="region">
                    <div className="region-text" style={{ fontSize: "32px" }}>
                        <strong>지역</strong>
                    </div>
                    <div className="region-buttons">
                        <button
                            className={"region-button " + (selectedRegion === null ? "selected" : "")}
                            onClick={() => handleRegionSelection(null)}
                        >
                            서울
                        </button>
                        <button
                            className={"region-button " + (selectedCategory === 1 ? "selected" : "")}
                            onClick={() => handleRegionSelection(1)}
                        >
                            부산
                        </button>
                        <button
                            className={"region-button " + (selectedCategory === 2 ? "selected" : "")}
                            onClick={() => handleRegionSelection(2)}
                        >
                            대구
                        </button>
                    </div>
                </div>
                <div className="category">
                    <div className="category-text" style={{ fontSize: "32px" }}>
                        <strong>카테고리</strong>
                    </div>
                    <div className="category-buttons">
                        <button
                            className={"category-button " + (selectedCategory === null ? "selected" : "")}
                            onClick={() => handleCategorySelection(null)}
                        >
                            전체
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "fashion" ? "selected" : "")}
                            onClick={() => handleCategorySelection("fashion")}
                        >
                            패션
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "beauty" ? "selected" : "")}
                            onClick={() => handleCategorySelection("beauty")}
                        >
                            뷰티
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "music" ? "selected" : "")}
                            onClick={() => handleCategorySelection("music")}
                        >
                            음악
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "food" ? "selected" : "")}
                            onClick={() => handleCategorySelection("food")}
                        >
                            음식
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "celeb" ? "selected" : "")}
                            onClick={() => handleCategorySelection("celeb")}
                        >
                            연예
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "character" ? "selected" : "")}
                            onClick={() => handleCategorySelection("character")}
                        >
                            캐릭터
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "digital" ? "selected" : "")}
                            onClick={() => handleCategorySelection("digital")}
                        >
                            가전/디지털
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "living" ? "selected" : "")}
                            onClick={() => handleCategorySelection("living")}
                        >
                            리빙
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === "game" ? "selected" : "")}
                            onClick={() => handleCategorySelection("game")}
                        >
                            게임
                        </button>
                    </div>
                </div>

            </div>
        </map>
    );
};

export default Map;
