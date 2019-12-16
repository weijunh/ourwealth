import '../container/Discover/Discover.less';
import Discover from '../container/Discover/Discover.jsx'
import Myself from '../container/Myself/Myself.jsx'
import MyCollect from '../container/Myself/Mycollect/Mycollect.jsx'
import MyLikeShop from '../container/Myself/likeShop/likeShop.jsx'
import MyCoupons from '../container/Myself/MyCoupon/MyCoupon.jsx'
import MyComment from '../container/Myself/MyComment/MyComment.jsx'
import MyVIP from '../container/Myself/VIP/VIP.jsx'
import Shopping from '../container/Shopping/Shopping.jsx'
import ShopCar from '../container/ShopCar/ShopCar.jsx'
import Finance from '../container/Finance/Finance.jsx'

export default [
  {
    exact: true,
    path: '/',
    component: Shopping
  },
  {
    exact: true,
    path: '/shopping',
    component: Shopping
  },
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
    path: '/MyCollect',
    component: MyCollect
  },
  {
    exact: true,
    path: '/MyLikeShop',
    component: MyLikeShop
  },
  {
    exact: true,
    path: '/MyCoupons',
    component: MyCoupons
  },
  {
    exact: true,
    path: '/MyComment',
    component: MyComment
  },
  {
    exact: true,
    path: '/MyVIP',
    component: MyVIP
  },
  {
    exact: true,
    path: '/shopcar',
    component: ShopCar
  },
  {
    exact: true,
    path: '/finance',
    component: Finance
  }
]
