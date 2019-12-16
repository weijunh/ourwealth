import { ADD_CAR, SUBTRACT_CAR, SELECT_CAR, ALL_CAR, USER, REMOVEUSER, MESSAGE, TOGETHER } from "./action-types"

import { req_auto } from "../api"


export const updateAdd = (value) => ({ type: ADD_CAR, data: value })
export const updateSUB = (value) => ({ type: SUBTRACT_CAR, data: value })
export const updateSelect = (index) => ({ type: SELECT_CAR, data: index })
export const updateAll = (flg) => ({ type: ALL_CAR, data: flg })
export const updateTogether = (value) => ({ type: TOGETHER, data: value })



// 登入
export const saveUser = (user) => ({ type: USER, data: user })
//export const removeUser = () => ({ type: REMOVEUSER })
export const savemessage = (user) => ({ type: MESSAGE, data: user })




//
export const reqauto = () => {
  return async (dispatch) => {
    const result = await req_auto()
    if (result.code === 0) {

      dispatch(savemessage(result.data))
    }

  }
}