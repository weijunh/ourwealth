// 引入redux
import { createStore, applyMiddleware } from 'redux'
// 引入thunk,异步加载
import thunk from 'redux-thunk'
// 引入redux-devtools-extension，redux调试工具
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers.js'
// 暴露
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))