
import React, { Component } from 'react';
import "./App.less"
import routes from "./routes/routes.js"
import { BrowserRouter, HashRouter, Switch, NavLink, Link, Route, Redirect } from "react-router-dom"
import { Router } from 'react-router';

import Icon from "./assets/icon-font/icon.jsx"
import PubSub from 'pubsub-js'
import history from './utils/history'
import { reqauto } from "./redux/action-creators.js"
import { connect } from "react-redux"
//import WithCheckLogin from "./utils/with-check-login"
// @WithCheckLogin
@connect(state => ({ token: state.UpdateUser.token }), { reqauto })
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRouter: true
    }

    PubSub.subscribe('isrouter', (msg, isRouter) => {
      this.setState({
        isRouter
      })
    })

  }
  componentDidMount () {
    if (this.props.token) {
      this.props.reqauto()
    }

  }
  render () {

    return (
      <Router history={history}>
        <Switch>
          {
            routes.map((route, index) => (
              <Route  {...route} key={index}></Route>
            ))
          }
        </Switch>
        {
          this.state.isRouter ? (
            <div className="container-bottom">
              <NavLink to='/shopping' activeClassName="selected"  >
                <Icon type="icon-lvsefenkaicankaoxianban-"></Icon>
                <span>首页</span>
              </NavLink>
              <NavLink to='/discover' activeClassName="selected" >
                <Icon type="icon-tubiaozhizuomoban-"></Icon>
                <span>发现</span>

              </NavLink>
              <NavLink to='/myself' activeClassName="selected">
                <Icon type="icon-personal">

                </Icon>
                <span>自己</span>


              </NavLink>
              <NavLink to='/shopcar' activeClassName="selected" >
                <Icon type="icon-gouwuche_">

                </Icon>
                <span> 购物车</span>
              </NavLink>
              <NavLink to='/finance' activeClassName="selected" >
                <Icon type="icon-qianbao"></Icon>
                <span>  余额</span>
              </NavLink>
            </div>
          ) : ""
        }

      </Router>

    );
  }
}

export default App;