import { ADD_CAR, SUBTRACT_CAR, SELECT_CAR, ALL_CAR, USER, REMOVEUSER, MESSAGE, TOGETHER } from "./action-types"

import { combineReducers } from "redux"


import { setItem, getItem, removeItem } from "../utils/storage.js"

const getUser = {
  user: getItem('user') || {},
  token: getItem('token_key') || ""
}

const cart = [
  {
    title: '蛋糕',
    num: 1,
    price: 20,
    iscount: true
  },
  {
    title: '哈哈',
    num: 5,
    price: 30,
    iscount: true
  },
  {
    title: '哦哦',
    num: 10,
    price: 40,
    iscount: true
  }
]
function carupdate (pre = cart, action) {
  switch (action.type) {
    case ADD_CAR:
      if (!action.data.num) {
        action.data.num = 1
        pre.push(action.data)
      } else {
        action.data.num++
      }
      return [...pre]
    case SUBTRACT_CAR:
      if (action.data.num === 0) {
        pre.splice(pre.indexOf(action.data), 1)
        delete action.data.num
      } else {
        action.data.num--
      }
      return [...pre]
    case SELECT_CAR:
      pre[action.data].iscount = !pre[action.data].iscount
      return [...pre]
    case ALL_CAR:
      pre.forEach(item => item.iscount = action.data)
      return [...pre]

    case TOGETHER:
      pre.push(action.data)
      return [...pre]
    default:
      return pre;
  }
}
function UpdateUser (pre = getUser, action) {
  switch (action.type) {
    case USER:
      setItem('user', action.data)
      setItem('token_key', action.data.token)
      return action.data
    case REMOVEUSER:
      removeItem('user')
      removeItem('token_key')
      return {}
    case MESSAGE:
      pre['user'] = action.data
      return pre
    default:
      return pre
  }
}
export default combineReducers({
  carupdate,
  UpdateUser
})