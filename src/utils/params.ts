const _headers = {
  Authorization: 'Bearer e0a301492c424367a6be48d2467ff1f2'
};

const props = window?.$wujie?.props; // 接收headers

// 传递Header
export const headers = {
  ..._headers,
  ...(props?.headers || {})
};
