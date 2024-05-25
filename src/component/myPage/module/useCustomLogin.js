import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginPostAsync, logout } from "../slices/loginSlice"

const useCustomLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginState = useSelector(state => state.loginSlice)
    
    // 로그인 여부 확인
    const isLogin = loginState.email ? true : false
    
    // 로그인 함수
    const doLogin = async (loginParam) => {
        const action = await dispatch(loginPostAsync(loginParam))
        return action.payload
    }

    const doLogout = () => {
        dispatch(logout())
    }

    // 페이지 이동
    const moveToPath = (path) => {
        navigate({pathname: path}, {replace: true})
    }

    // 로그인 페이지로 이동
    const moveToLogin = () => {
        navigate({pathname: '/Login'}, {replace: true})
    }

    return {loginState, isLogin, doLogin, doLogout, moveToPath, moveToLogin}
}

export default useCustomLogin