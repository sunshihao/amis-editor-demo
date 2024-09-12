import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

// import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import qs from 'qs';
import {config} from './config';
const {result_code, base_url, request_timeout} = config;

// 需要忽略的提示。忽略后，自动 Promise.reject('error')
const ignoreMsgs = [
  '无效的刷新令牌', // 刷新令牌被删除时，不用提示
  '刷新令牌已过期' // 使用刷新令牌，刷新获取新的访问令牌时，结果因为过期失败，此时需要忽略。否则，会导致继续 401，无法跳转到登出界面
];
// 是否显示重新登录
export const isRelogin = {show: false};
// Axios 无感知刷新令牌，参考 https://www.dashingdog.cn/article/11 与 https://segmentfault.com/a/1190000020210980 实现
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: base_url, // api 的 base_url
  timeout: request_timeout, // 请求超时时间
  withCredentials: false // 禁用 Cookie 等信息
});

// request拦截器
service.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const params = config.params || {};
    // get参数编码
    if (config.method?.toUpperCase() === 'GET' && params) {
      config.params = {};
      const paramsStr = qs.stringify(params, {allowDots: true});
      if (paramsStr) {
        config.url = config.url + '?' + paramsStr;
      }
    }
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    // console.log('response---------', response);
    let {data} = response;

    const code = data.code || result_code;
    // 获取错误信息
    // if (code !== 200) {
    //   return Promise.reject('error');
    // } else {
    //   // console.log('data-----', data);
    //   // 暂时不对此处进行处理
    //   return JSON.parse(JSON.stringify(data));
    // }

    return JSON.parse(JSON.stringify(data));
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export {service};
