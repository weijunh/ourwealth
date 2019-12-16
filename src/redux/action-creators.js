import { reqUserOrder, reqUpdateUserOrders } from '../api/index.js'
import { GET_USERORDER, UPDATE_USERORDER } from './action-types'

// 获取带有订单列表的用户信息
const getUserOrderSuccess = (userOrders) => ({type: GET_USERORDER, data: userOrders})
export const getUserOrder = () => {
  return async (dispatch) => {
    const res = await reqUserOrder() // 返回带有订单列表的用户信息
    // console.log(res)
    if(res.code === 0) {
      dispatch(getUserOrderSuccess(res.data)) // 请求成功后分发
    }
  }
}

// 修改用户信息中的订单
const updateUserOrderSuccess = (userName, userOrder ) => ({type: UPDATE_USERORDER, data: userOrder})
export const updateUserOrder = ( userName, userOrder ) => {
  console.log( userOrder)
  return async (dispatch) => {
    const res = await reqUpdateUserOrders( userOrder ) // 用户中的一个订单对象
    console.log(res)
    if(res.code === 0){
      console.log(1111)
      dispatch(updateUserOrderSuccess(res.data))
    }
  }
}
