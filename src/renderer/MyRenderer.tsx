import {Renderer} from 'amis';
import {RendererProps} from 'amis';
import React from 'react';

export interface MyRendererProps extends RendererProps {
  target?: string;
}

@Renderer({
  type: 'my-renderer',
  autoVar: true // amis 1.8 之后新增的功能，自动解析出参数里的变量
})
export default class MyRenderer extends React.Component<MyRendererProps> {
  static defaultProps = {
    target: 'world'
  };

  render() {
    const {target} = this.props;
    return <p>Hello {target}! @amis-editor</p>;
  }
}
