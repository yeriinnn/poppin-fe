// 컴포넌트는 아님
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { loginPost } from "../api/userApi";

const initState = {
    email: ''
}

export const loginPostAsync = createAsyncThunk('loginPostAsync', (param) => loginPost(param))

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
    },
    extraReducers: (builder) => {
        builder.addCase(loginPostAsync.fulfilled, (state, action) => {
            console.log("fulfiled")
        })
                .addCase(loginPostAsync.pending, (state, action) => {
                    console.log("pending")
                })
                .addCase(loginPostAsync.rejected, (state, action) => {
                    console.log("rejected")
                })
    }
})

// 외부에서 login, logout 호출 가능
export const {login, logout} = loginSlice.actions
export default loginSlice.reducer