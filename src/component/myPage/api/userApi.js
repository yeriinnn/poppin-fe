import axios from "axios"

const API_SERVER_HOST = 'http://localhost:8080'

export const loginPost = async (loginParam) => {
    const header = {headers: {"Content-Type": "x-www-form-urlencoded"}}

    const form = new FormData()
    form.append('username', loginParam.email)
    form.append('password', loginParam.password)

    const res = await axios.post(`${API_SERVER_HOST}/user/login`, form, header)

    return res.data
}

// import axios from "axios";

// export const loginPost = async (loginParam) => {
//     const headers = { headers: { "Content-Type": "application/x-www-form-urlencoded" } };

//     const params = new URLSearchParams();
//     params.append('username', loginParam.email);
//     params.append('password', loginParam.password);

//     try {
//         const res = await axios.post("http://localhost:8080/user/login", params, headers);
//         return res.data;
//     } catch (error) {
//         console.error('Login failed:', error);
//         throw error;
//     }
// };
