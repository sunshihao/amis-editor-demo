import request from '@/utils/axios';

// 获取全部模板
export const getTemplateList = () => {
  return request.get({url: 'http://124.221.211.92:3000/mock/857/ibm/getTemplateList'});
};

// 获取模板详情
export const getTemplateById = (id: number) => {
  return request.get({url: `http://124.221.211.92:3000/mock/857/ibm/getTemplateById/${id}`});
};
