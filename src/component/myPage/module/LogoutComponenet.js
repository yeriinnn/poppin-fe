import React from "react";
import {useDispatch} from "react-redux";
import {logout} from "../slices/loginSlice"

function LogoutComponent(props) {
    const dispatch = useDispatch()

    const handleClickLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <button className="header-button special-button"
                    onClick={handleClickLogout}><strong>Logout</strong></button>
        </div>
    );
}

export default LogoutComponent;