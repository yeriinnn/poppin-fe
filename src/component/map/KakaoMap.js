import React, { useEffect } from "react";

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=744f339bbcbfcf5e57970eef6e98d373&libraries=services";
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780),
          level: 3
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "70%", height: "400px" }}></div>
    </div>
  );
};

export default KakaoMap;
