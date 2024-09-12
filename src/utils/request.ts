/**
 * 参数接收
 * '@fn:onAppActions'
 * 'url'
 */
import request from '@/utils/axios';
import { adapter } from '@/adapter';

type HTTPMethod = 'get' | 'post' | 'put' | 'delete';

interface RequestContext {
  [key: string]: any;
}

function buildFunction(fnName: string, data: RequestContext) {
  return adapter[fnName](data, null);
}

function processValue(url: string, method: HTTPMethod, context: RequestContext) {
  const [type, path] = splitPrefixUrl(url) || [];
  if (type == 'fn') {
    return Promise.resolve({
      code: 0,
      msg: '',
      toJson: () => buildFunction(path, context)
    });
  } else {
    // 進行正常請求
    return request[method]({
      url: url.replace('/admin-api', ''), // TODO 减少一层
      data: context
    }).then((res: any) => {
      // 1.执行js的方法 @fn:方法名
      return {
        status: 0,
        data: {
          data: res, // 固定格式,切勿修改
          rows: res
        },
        msg: ''
      };
    });
  }
}

function splitPrefixUrl(url: string) {
  if (url.startsWith('@')) {
    let pos2 = url.indexOf(':');
    if (pos2 < 0) {
      return;
    }
    return [url.substring(1, pos2), url.substring(pos2 + 1).trim()];
  }
  let pos = url.indexOf('://');
  if (pos < 0) return;
  return [url.substring(0, pos), url.substring(pos + 3)];
}

export default function ({
  url,
  method,
  context
}: {
  url: string;
  method: HTTPMethod;
  context: RequestContext;
}) {
  return processValue(url, method, context);
}
