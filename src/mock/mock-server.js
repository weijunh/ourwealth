// 引入Mock
import Mock from 'mockjs'
// 引入data数据
// import data from './data.json'

import data from './shopping.json'

// 拦截地址,产生数据

//接口地址:  '/goods'   '/ratings'   '/info'

// Mock.mock('/goods', { code: 0, data: data.goods })
// Mock.mock('/ratings', { code: 0, data: data.ratings })
// Mock.mock('/info', { code: 0, data: data.info })
Mock.mock("/classShop", { code: 0, data: data.classshop })

Mock.mock('/homepage', { code: 0, data: data })
// Mock.mock('/foods', { code: 0, data: data.foods })

