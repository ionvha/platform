import axios from 'axios';
import { Tosat } from 'vant';

const instance = axios.create({
    baseURL: 'http://api.w0824.com/api/',
    timeout: 10000,
});

// 请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Toast.loading({
        message: "加载中",
        forbidClick: true
    });
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
    Toast.clear()
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    Toast.clear()
    return Promise.reject(error);

});

// 导出实例
export default instance