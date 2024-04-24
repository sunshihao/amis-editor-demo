// TODO 改动为接口请求 本地性调试,已弃用
const _headers = {
  Authorization: 'Bearer ddd2eb5c6b2d4870a297857535da0bc8'
};

const props = window?.$wujie?.props; // 接收headers

console.log('接收headers', props?.headers)

export const headers = {
    ..._headers,
    ...props?.headers || {}
};

export const base_path = 'apiAmis';

