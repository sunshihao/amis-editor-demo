// TODO 改动为接口请求 本地性调试,已弃用
import { headers as _headers } from '@/utils/params'

const props = window?.$wujie?.props; // 接收headers

console.log('接收headers', props?.headers)

export const headers = _headers;

export const base_path = '';

