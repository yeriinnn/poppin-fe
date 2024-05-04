import React, { useState } from "react";
import "./css/Map.css";

const Map = () => {
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
                            className={"date-button " + (selectedCategory === null ? "selected" : "")}
                            onClick={() => handleCategorySelection(null)}
                        >
                            오늘
                        </button>
                        <button
                            className={"date-button " + (selectedCategory === 7 ? "selected" : "")}
                            onClick={() => handleCategorySelection(7)}
                        >
                            +7일
                        </button>
                        <button
                            className={"date-button " + (selectedCategory === 14 ? "selected" : "")}
                            onClick={() => handleCategorySelection(14)}
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
                            className={"category-button " + (selectedCategory === fasihion ? "selected" : "")}
                            onClick={() => handleCategorySelection(fashion)}
                        >
                            패션
                        </button>
                        <button
                            className={"category-button " + (selectedCategory === music ? "selected" : "")}
                            onClick={() => handleCategorySelection(music)}
                        >
                            음악
                        </button>
                        {/* 다른 카테고리 버튼들을 추가 */}
                    </div>
                </div>
            </div>
        </map>
    );
};

export default Map;
