import * as React from 'react';
import {AlertComponent, ToastComponent, ContextMenu} from 'amis';
// @ts-ignore
import AMisSchemaEditor from './Editor';
import {Icon} from './icons/index';

export default class App extends React.PureComponent {
  isString(v: any) {
    return Object.prototype.toString.call(v) === '[object String]';
  }

  postMsg(msg: any) {
    const str = this.isString(msg) ? msg : JSON.stringify(msg);
    window.parent?.postMessage(str, '*');
  }

  // 触发返回
  onBack = () => {
    const res = {
      type: 'back'
    };

    this.postMsg(res);
  };

  render() {
    // 备注: 如果需要改用antd主题，还需要将index.html换成index-antd.html
    const curTheme = 'cxd'; // 默认使用cxd主题
    return (
      <div className="Editor-Demo">
        <div id="headerBar" style={{height: '40px'}} className="Editor-header">
          <div
            className="Editor-title cursor-pointer"
            style={{fontWeight: 'bold', fontSize: '14px'}}
          >
            <Icon
              icon="back"
              title="返回"
              style={{height: '26px', width: '26px'}}
              onClick={() => {
                window?.$wujie?.bus.$emit(`routerBack`);
              }}
            />
            <span style={{marginLeft: '6px'}} onClick={this.onBack}>
              返回
            </span>
          </div>
        </div>
        <AMisSchemaEditor theme={curTheme} />
        <ToastComponent theme={curTheme} />
        <AlertComponent theme={curTheme} />
        <ContextMenu theme={curTheme} />
      </div>
    );
  }
}
