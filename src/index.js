import React from 'react'
import ReactDom from 'react-dom'
import './mock/mock-server.js'
import 'lib-flexible'
import App from './App.jsx'
// 引入重置样式
import './assets/css/reset.css'
import "./utils/rem.js"
import { Provider } from "react-redux"
import store from "./redux/store.js"
ReactDom.render(
  (
    <Provider store={store} ><App /></Provider>
  )
  , document.getElementById('root'))

