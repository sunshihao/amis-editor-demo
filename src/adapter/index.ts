/**
 * 参考:　https://gitee.com/canonical-entropy/nop-chaos/blob/master/packages/nop-core/lib/nop-core.js
 */
export interface AdapterType {
  [key: string]: (data: any, page: any) => any;
}

export const globalConfig = {
  globalVersion: 'v3'
};
export const adapter: AdapterType = {
  compileFunction: (code: any, page: any) => {
    return new Function('page', 'return ' + code).call(null, page);
  },
  showTip: (tips: string) => {
    return {
      code: 0,
      msg: 'success'
    }
  }
};
