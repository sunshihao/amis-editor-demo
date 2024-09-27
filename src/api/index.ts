import request from '@/utils/axios';
import {list} from './data';

const remoteUrl = 'http://122.51.179.83:9000';

// 获取全部模板
export const getTemplateList = () => {
  return request.get({url: 'http://111.231.7.32:40001/mock/11/amis/getTemplateList'});
  // return Promise.resolve(list)
};

// TODO 未使用 获取模板详情
export const getTemplateById = (id: number) => {
  return request.get({url: `http://124.221.211.92:3000/mock/857/ibm/getTemplateById/${id}`});
};

// 远程保存
export const saveRemote = (data: any) => {
  return request.put({url: `${remoteUrl}/infra/model/page-config/update`, data});
};

// 远程刷新
export const reflaseRemote = (id: number) => {
  return request.get({url: `${remoteUrl}/infra/model/page-config/get/${id}`});
};
