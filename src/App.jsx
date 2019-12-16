import React, { Component } from 'react';
import "./App.less"
import routes from "./routes/routes.js"
// import { BrowserRouter, HashRouter, Switch, NavLink, Link, Route, Redirect } from "react-router-dom"
import { BrowserRouter, NavLink, Route } from "react-router-dom"

import { reqHomepage } from './api/index.js'


class App extends Component {
  state = {
    shopping_data: {}
  }
  componentDidMount = async () => {
    const data = await reqHomepage()
    // console.log(data.data);
    if (data.data.code === 0) {
      this.setState({
        shopping_data: data.data.data
      })
    }
  }
  render () {
    const { shopping_data } = this.state
    return (
      < BrowserRouter>
        {
          routes.map((route, index) => (
            <Route  {...route} key={index}
              path={route.path}
              // exact={route.exact}
              component={route.component}
            />
          ))
        }
        <div className="container-bottom">
          <NavLink to={
            {
              pathname: "/shopping",
              state: { data: JSON.stringify(shopping_data) }
            }

          } >购物</NavLink>
          <NavLink to='/discover' >发现</NavLink>
          <NavLink to='/myself' >自己</NavLink>
          <NavLink to='/shopcar' >购物车</NavLink>
          <NavLink to='/finance' >余额</NavLink>
        </div>
      </BrowserRouter >

    );
  }
}

export default App;
