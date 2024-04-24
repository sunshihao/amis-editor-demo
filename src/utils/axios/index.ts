import {service} from './service';

import {config} from './config';

const _headers = {
  Authorization: 'Bearer ddd2eb5c6b2d4870a297857535da0bc8'
};

const {default_headers} = config;

const props = window?.$wujie?.props; // 接收headers

const request = (option: any) => {
  const {url, method, params, data, headersType, responseType, ...config} = option;
  return service({
    url: url,
    method,
    params,
    data,
    ...config,
    responseType: responseType,
    headers: {
      'Content-Type': headersType || default_headers,
      ..._headers,
      ...(props?.headers || {})
    }
  });
};
export default {
  get: async <T = any>(option: any) => {
    const res = await request({method: 'GET', ...option});
    return res as unknown as T;
  },
  post: async <T = any>(option: any) => {
    const res = await request({method: 'POST', ...option});
    return res as unknown as T;
  },
  delete: async <T = any>(option: any) => {
    const res = await request({method: 'DELETE', ...option});
    return res as unknown as T;
  },
  put: async <T = any>(option: any) => {
    const res = await request({method: 'PUT', ...option});
    return res as unknown as T;
  }
};
