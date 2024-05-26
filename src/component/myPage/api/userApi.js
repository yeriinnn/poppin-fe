// import axios from "axios"

// const API_SERVER_HOST = 'http://localhost:8080'

// export const loginPost = async (loginParam) => {
//     const header = {headers: {"Content-Type": "x-www-form-urlencoded"}}

//     const form = new FormData()
//     form.append('username', loginParam.email)
//     form.append('password', loginParam.password)

//     const res = await axios.post(`${API_SERVER_HOST}/user/login`, form, header)

//     return res.data
// }

import axios from "axios";

const API_SERVER_HOST = 'http://localhost:8080';

export const loginPost = async (loginParam) => {
    const header = {headers: {"Content-Type": "application/x-www-form-urlencoded"}};

    const form = new URLSearchParams();
    form.append('username', loginParam.email);
    form.append('password', loginParam.password);

    const res = await axios.post(`${API_SERVER_HOST}/user/login`, form, header);

    return res.data;
}


