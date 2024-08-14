/**
 * @file entry of this example.
 * @author fex
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
// import 'amis/lib/themes/default.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import './style.scss';

ReactDOM.render(<App />, document.getElementById('rootAmis'));
