import axios from "axios";

export const TOKEN = "Bearer 1/1202625368326187:cd34e9f62a04d9ffc788f4d1b33af631"

export const instanceAxios = axios.create({
    baseURL: 'https://app.asana.com/api/1.0',
    headers: {
        accept: 'application/json',
        authorization: TOKEN
    }
});
