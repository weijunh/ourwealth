import React, { Component } from 'react';
import "./App.less"
import routes from "./routes/routes.js"
import { BrowserRouter, HashRouter, Switch, NavLink, Link, Route, Redirect } from "react-router-dom"
class App extends Component {
  render () {
    return (
      < BrowserRouter>
        {
          routes.map((route, index) => (
            <Route  {...route} key={index}> </Route>
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

    );
  }
}

export default App;