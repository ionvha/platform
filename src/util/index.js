import Vue from "vue"
import axios from "axios"
Vue.prototype.$httpGet = function (url) {
    return axios.get(url);
}
Vue.prototype.$httpPost = function (url, data) {
    return axios.post(url, data)
}