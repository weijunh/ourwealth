import React from 'react'
import ReactDom from 'react-dom'
import store from './redux/store.js'
import {Provider} from 'react-redux'
import './mock/mock-server.js'
import 'lib-flexible'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
// 引入重置样式
import './assets/css/reset.css'

ReactDom.render(<BrowserRouter> <Provider store={store}><App /></Provider> </BrowserRouter>, document.getElementById('root'))
// ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
