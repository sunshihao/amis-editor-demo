const _headers = {
  Authorization: 'Bearer 2b6c0dd1831842a18ec8bdc16d2b793c'
};

const props = window?.$wujie?.props; // 接收headers

console.log('接收headers', props.headers)

const pro_url = 'http://122.51.179.83:9000'

export const headers = {
    ..._headers,
    ...props.headers
};

export const base_path = 'apiAmis';

