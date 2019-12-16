import ajax from './ajax.js'
// 获取用户信息的接口
export const reqUserOrder = () => ajax({
  method: 'GET',
  url:  '/userorder/get'
})

export const reqUpdateUserOrders = ( userOrders ) => ajax({
  method: 'POST', 
  url: '/userorder/update',
  data: {
    userOrders
  }
})

// export const delUserOrder = ()
