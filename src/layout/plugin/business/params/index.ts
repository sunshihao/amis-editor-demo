const _headers = {
  Authorization: 'Bearer cba6ef0908844fecb24b024de9a105f1'
};

const props = window?.$wujie?.props; // 接收headers

console.log('接收headers', props?.headers)

export const headers = {
    ..._headers,
    ...props?.headers || {}
};

export const base_path = 'apiAmis';

