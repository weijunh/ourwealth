import '../container/Discover/Discover.less';
import Discover from '../container/Discover/Discover.jsx'
import Myself from '../container/Myself/Myself.jsx'

import ShopCar from '../container/ShopCar/ShopCar.jsx'
import Finance from '../container/Finance/Finance.jsx'
import Login from "../container/Login/Login.jsx"
import Register from "../container/Register/Register.jsx"
import ClassShop from "../container/classshop/ClassShop.jsx"
import ShoppingDelit from "../container/Shopping/shoppingDelit/Shoppingdetail.jsx"
export default [


  {
    exact: true,
    path: '/discover',
    component: Discover
  },
  {
    exact: true,
    path: '/myself',
    component: Myself
  },
  {
    exact: true,
    path: '/shopcar',
    component: ShopCar
  },
  {
    exact: true,
    path: '/shopcar/shoppingdelit',
    component: ShoppingDelit
  },
  {
    exact: true,
    path: '/finance',
    component: Finance
  },
  {
    exact: true,
    path: '/login',
    component: Login
  },
  {
    exact: true,
    path: '/register',
    component: Register
  },
  {
    exact: true,
    path: '/class',
    component: ClassShop

  }
]