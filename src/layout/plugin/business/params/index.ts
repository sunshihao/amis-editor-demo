const _headers = {
  Authorization: 'Bearer 2b6c0dd1831842a18ec8bdc16d2b793c'
};

export const headers = import.meta.env.DEV ? _headers : {};

export const base_path = import.meta.env.DEV ? 'apiAmis' : '';
