import {Renderer} from 'amis';
import {RendererProps} from 'amis';
import React from 'react';

export interface MyRendererProps extends RendererProps {
  target?: string;
}

export default class MyRenderer extends React.Component<MyRendererProps> {
  static defaultProps = {
    target: 'world'
  };

  render() {
    const {target} = this.props;
    return <p>Hello {target}! @amis-editor</p>;
  }
}

Renderer({
  type: 'my-renderer1',
  autoVar: true
})(MyRenderer);