import '../container/Discover/Discover.less';
import Discover from '../container/Discover/Discover.jsx'
import Myself from '../container/Myself/Myself.jsx'
import Shopping from '../container/Shopping/Shopping.jsx'
import ShopCar from '../container/ShopCar/ShopCar.jsx'
import Finance from '../container/Finance/Finance.jsx'
import Search from '../container/Shopping/Search/Search.jsx'
import Store from '../container/Shopping/Store/Store.jsx'


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
    path: '/shopping/search',
    component: Search
  },
  {
    exact: true,
    path: '/shopping/store',
    component: Store
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
    path: '/shopcar',
    component: ShopCar
  },
  {
    exact: true,
    path: '/finance',
    component: Finance
  },
]