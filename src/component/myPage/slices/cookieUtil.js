import { Cookies } from "react-cookie";


const cookies = new Cookies()

export const setCookies = (name, value, days = 1) => {
    const expires = new Date()
    expires.setUTCDate(expires.getUTCDate() + days) // 쿠키 보관 기간

    return cookies.set(name, value, {expires:expires, path:'/'})
}

export const getCookie = (name) => {
    return cookies.get(name);
}

export const removeCookie = (name, path='/') => {
    cookies.remove(name, {path:path})
}