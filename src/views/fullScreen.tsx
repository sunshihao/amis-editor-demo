import * as React from 'react';
import {beFull, exitFull} from 'be-full';
import {Icon} from '@/icons/index';
// import {TooltipWrapper} from 'amis-ui';

export default class FullScreen extends React.Component<any, any> {
  state: any = {
    isFullScreen: false // 是否全屏
  };

  constructor(props: any) {
    super(props);
  }

  exitFullscreen = () => {
    const ele = document;
    const efs = ele.exitFullscreen || ele.webkitExitFullscreen || ele.mozCancelFullScreen;

    // 如果不是全屏，返回
    if (!this.state.isFullScreen) return;

    if (efs) {
      efs.call(ele);
    } else if (typeof window.ActiveXObject !== 'undefined') {
      const wscript = new ActiveXObject('WScript.Shell');
      if (wscript) {
        wscript.SendKeys('{F11}');
      }
    }
  };

  onFull = () => {
    const {isFullScreen} = this.state;
    if (isFullScreen) {
      // exitFull(); 在微前端环境下不生效
      this.exitFullscreen();
    } else {
      beFull();
    }
    this.setState({
      isFullScreen: !isFullScreen
    });
  };

  render() {
    const {isFullScreen} = this.state;
    return (
      //   <TooltipWrapper title='是否全屏' trigger='hover'>
      <Icon
        icon={isFullScreen ? 'cannelscreen' : 'fullscreen'}
        style={{marginRight: '8px', cursor: 'pointer'}}
        onClick={this.onFull}
      />
      //   </TooltipWrapper>
    );
  }
}
