import axios from "axios";
import { ElMessage } from "element-plus";
import { GET_TOKEN } from "@/utils/token";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  const token = GET_TOKEN();
  if (token) {
    config.headers["token"] = token;
  }
  NProgress.start();
  return config;
});
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data;
  },
  (error) => {
    //处理网络错误
    let msg = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "无网络";
    }
    ElMessage({
      type: "error",
      message: msg,
    });
    return Promise.reject(error);
  }
);
export default service;
