import React from 'react'
import ReactDom from 'react-dom'
import './mock/mock-server.js'
import 'lib-flexible'
import App from './App.jsx'
// 引入重置样式
import './assets/css/reset.css'


ReactDom.render(<App />, document.getElementById('root'))