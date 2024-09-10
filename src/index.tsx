/**
 * @file entry of this example.
 * @author fex
 */
import App from './App';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/v4-shims.css';
// import 'amis/lib/themes/default.css';
import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import './style.scss';
import React from 'react';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement!);

root.render(<App />);
