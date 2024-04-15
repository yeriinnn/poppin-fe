import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//페이지
import PopupList from "../popup/PopupList";
import PopupDetail from "../popup/PopupDetail";


const AppRouter = () =>{
    return(
      <Router>
        <Routes>
            <Route path="PopupList" element={<PopupList />} />
            <Route path="PopupDetail" element={<PopupDetail />} />
        </Routes>
      </Router>

    );
}

export default AppRouter;