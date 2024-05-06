import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//페이지
import PopupList from "../popup/PopupList";
import PopupDetail from "../popup/PopupDetail";
import Signup from "../myPage/Signup";
import Map from "../map/Map"
import KakaoMap from "../map/KakaoMap";
import Map from "../map/Map"
import KakaoMap from "../map/KakaoMap";
import Live from "../live/Live";

const AppRouter = () =>{
    return(
      <Router>
        <Routes>
            <Route path="popup" element={<PopupList />} />
            <Route path="popupdetail/:id" element={<PopupDetail />} />
            <Route path="Signup" element={<Signup/>} />
            <Route path="Map" element={<Map/>} />
            <Route path="KaKaoMap" element={<KakaoMap/>} />
            <Route path="Live" element={<Live/>} />
        </Routes>
      </Router>
    );
}

export default AppRouter;