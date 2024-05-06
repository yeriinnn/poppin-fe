// 앱 상태 유지 (로그인 / 로그아웃)
import { configureStore } from "@reduxjs/toolkit"
import loginSlice from "./component/myPage/slices/loginSlice"

export default configureStore({
    reducer: {
        "loginSlice": loginSlice
    }
})