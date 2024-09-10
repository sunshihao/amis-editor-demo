import request from '@/utils/axios';
import { list } from './data'

// 获取全部模板
export const getTemplateList = () => {
  return request.get({url: 'http://111.231.7.32:40001/mock/11/amis/getTemplateList'});
  // return Promise.resolve(list)
};

// TODO 未使用 获取模板详情 
export const getTemplateById = (id: number) => {
  return request.get({url: `http://124.221.211.92:3000/mock/857/ibm/getTemplateById/${id}`});
};
