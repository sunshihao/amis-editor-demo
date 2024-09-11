import request from '@/utils/axios';

type HTTPMethod = 'get' | 'post' | 'put' | 'delete';

interface RequestContext {
  [key: string]: any;
}

function buildFunction(fn: Function) {
  return fn();
}

function processValue(v: any) {
  const [type, path] = splitPrefixUrl(v) || [];
  if (!type) return v;
  if (['query', 'mutation', 'graphql', 'dict', 'page'].includes(type)) {
    return type + '://' + path;
  } else if (type == 'action') {
    // const fnName = path.split('-')[0];
    // const action = findAction(fnName, fnStack, stackIndex, page);
    // for (let i = 0; i < 1e3; i++) {
    //   const actionName = i == 0 ? fnName : fnName + '-' + i;
    //   const existed = page.getAction(actionName);
    //   if (!existed) {
    //     page.registerAction(actionName, action);
    //     return 'action://' + actionName;
    //   } else if (existed == action) {
    //     return 'action://' + actionName;
    //   }
    // }
    // throw new Error('nop.err.action-name-conflict:' + v);
  } else if (type == 'fn') {
    console.log('path-------------', path)
    return window[path!]();
  }
  return v;
}

// TODO 截取URL
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
  console.log('url++++', url);

  url = '@fn:onAppActions'

  processValue(url)
  //
  const arr = splitPrefixUrl(url)

  console.log('arr-----------', arr)

  // return request[method]({
  //   url: url.replace('/admin-api', ''), // TODO 减少一层
  //   data: context
  // }).then((res: any) => {
  //   console.log('res----s', res);

  //   // 1.执行js的方法 @fn:方法名
  //   return {
  //     status: 0,
  //     data: {
  //       data: res, // 固定格式,切勿修改
  //       rows: res
  //     },
  //     msg: ''
  //   };
  // });
}
