import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Test from './pages/test'
// 导入 css 样式
import "./css/index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 使用严格模式
  <React.StrictMode>
    {/* 问卷 */}
    <Test></Test>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
