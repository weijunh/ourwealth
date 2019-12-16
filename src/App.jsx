import React, { Component } from 'react';
import "./App.less"
import routes from "./routes/routes.js"
import { BrowserRouter, NavLink, Route } from "react-router-dom"
//import Discover from "./container/Discover/Discover.jsx"
//import DiscoverShow from "./container/Discover/Discover_show"
//import DiscoverRecommend from "./container/Discover/Discover_recommend"

class App extends Component {
  render () {
    return (
      < BrowserRouter>
        {
          routes.map((route, index) => (
            <Route  {...route} key={index}
              path={route.path}
              component={route.component}
            />
          ))
        }
        <div className="container-bottom">
          <NavLink to='/shopping' >购物</NavLink>
          <NavLink to='/discover' >发现</NavLink>
          <NavLink to='/myself' >自己</NavLink>
          <NavLink to='/shopcar' >购物车</NavLink>
          <NavLink to='/finance' >余额</NavLink>
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App;