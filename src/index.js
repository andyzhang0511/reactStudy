import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 同层的App.js文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**
 * App是根组件，可以理解为是整个项目里的根组件
 * index.js是跟index.html相关联的唯一接口
 **/

// ReactDOM.render(
//     <h1>hello react</h1>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
