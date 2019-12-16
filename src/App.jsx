import React, { Component } from 'react';
import "./App.less"
import routes from "./routes/routes.js"
import UserOrder from "./container/myOrders/myOrders"
// import { BrowserRouter, HashRouter, Switch, NavLink, Link, Route, Redirect } from "react-router-dom"
import { BrowserRouter, NavLink, Route, withRouter  } from "react-router-dom"

@withRouter
class App extends Component {
  componentDidMount(){
    // console.log(this.props);
  }

  render () {
    const url = this.props.location.pathname
    let isShowFooter = false
    switch (url){
      case "/":
        isShowFooter = true;
        break;
      case "/shopping":
        isShowFooter = true;
        break;
      case "/myself":
        isShowFooter = true
        break
      case "/shopcar":
        isShowFooter = true
        break
      case "/finance":
        isShowFooter = true
        break
      default: 
        isShowFooter = false
    }
    return (
      <BrowserRouter>
        <Route path="/userorder" component={UserOrder}/>
        {
          routes.map((route, index) => (
            <Route  {...route} key={index}
              path={route.path}
              // exact={route.exact}
              component={route.component}
            />
          ))
        }
        {isShowFooter? 
        <div className="container-bottom" >
            <NavLink to='/shopping' >购物</NavLink>
            <NavLink to='/discover' >发现</NavLink>
            <NavLink to='/myself' >自己</NavLink>
            <NavLink to='/shopcar' >购物车</NavLink>
            <NavLink to='/finance' >余额</NavLink>
          </div>:''
        }
          
      </BrowserRouter>
    );
  }
}

// export default App;
export default App;
