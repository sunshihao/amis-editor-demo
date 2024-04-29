const _headers = {
  Authorization: 'Bearer 32ab6cf48da54ae8bedad3c367f301c8'
};

const props = window?.$wujie?.props; // 接收headers

// 传递Header
export const headers = {
  ..._headers,
  ...(props?.headers || {})
};
