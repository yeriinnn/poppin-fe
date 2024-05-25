import React from "react";
import useCustomLogin from "./useCustomLogin";

function LogoutComponent(props) {
    const {doLogout, moveToPath} = useCustomLogin()

    const handleClickLogout = () => {
        doLogout()
        moveToPath("/Main")
    }

    return (
        <div>
            <button className="header-button special-button"
                    onClick={handleClickLogout}><strong>Logout</strong></button>
        </div>
    );
}

export default LogoutComponent;