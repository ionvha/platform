import axios from "./request.js"

export function fetchLunbo() {
    return axios.get('/getlunbo')
}