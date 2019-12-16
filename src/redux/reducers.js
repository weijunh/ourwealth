import { GET_USERORDER, UPDATE_USERORDER } from './action-types'
import { combineReducers } from 'redux'
// import { getUserOrder } from './action-creators'

// 对用户表单信息进行操作
function userOrders(prevState = [], action) {
  switch (action.type) {
    case GET_USERORDER:
      return action.data
    case UPDATE_USERORDER:
      return prevState.map(userOrder => {
        console.log(userOrder.goodId)
        if (userOrder.goodId === action.data.goodId) {
          return action.data
        }
        return userOrder
      })
    default:
      return prevState
  }
}

export default combineReducers({
  userOrders
})
