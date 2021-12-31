import Axios from 'axios'

/**
 * █████▒█      ██  ▄████▄   ██ ▄█▀     ██████╗ ██╗   ██╗ ██████╗
 * ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒      ██╔══██╗██║   ██║██╔════╝
 * ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░      ██████╔╝██║   ██║██║  ███╗
 * ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄      ██╔══██╗██║   ██║██║   ██║
 * ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄     ██████╔╝╚██████╔╝╚██████╔╝
 * ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒     ╚═════╝  ╚═════╝  ╚═════╝
 * ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
 * ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
 * ░     ░ ░      ░  ░
 * Copyright 2021 Clover You.
 * <p>
 *  axios 二次封装
 * </p>
 *
 * @author Clover You
 * @create 2021-12-31 15:23
 */

const axios = Axios.create({
  // 设置默认域名
  baseURL: process.env.AXIOS_BASE_URL,
  // 携带 cookie
  withCredentials: true
});

/**
 * 响应拦截器
 * @author Clover You
 * @date 2021/12/31 15:26
 */
axios.interceptors.response.use((resp) => {
  return Promise.resolve(resp);
}, error => {
  console.log('response 请求发生错误：', error)
  return Promise.reject(error);
})

/**
 * 请求拦截器
 * @author Clover You
 * @date 2021/12/31 15:27
 */
axios.interceptors.request.use((config) => {
  return config;
}, error => {
  console.log('request 请求发生错误：', error)
  return Promise.reject(error);
})
export {axios};
