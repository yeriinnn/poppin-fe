// 컴포넌트는 아님
import {createSlice} from "@reduxjs/toolkit";

const initState = {
    email: ''
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initState,
    reducers: {
        login: (state, action) => {
            console.log('.........login', action)
            console.log(action.payload)
            // email을 입력된 값으로 변경
            return {email: action.payload.email}
        },
        logout: () => {
            console.log('.........logout')

            return {...initState}
        }
    }
})

// 외부에서 login, logout 호출 가능
export const {login, logout} = loginSlice.actions
export default loginSlice.reducer