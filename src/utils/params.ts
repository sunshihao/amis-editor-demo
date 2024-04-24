const _headers = {
  Authorization: 'Bearer f8594e384be147229cc8eb145d0c7e59'
};

const props = window?.$wujie?.props; // 接收headers

// 传递Header
export const headers = {
  ..._headers,
  ...(props?.headers || {})
};
