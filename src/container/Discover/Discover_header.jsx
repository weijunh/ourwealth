// 引入React
import React, { Component } from 'react';
// 引入组件对应样式文件
import './Discover_header.less'
// 引入路由组件
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom"
// 引入跳转的相关组件
import Discover from "./Discover"
import DiscoverRecommend from "./Discover_recommend"
import DiscoverShow from "./Discover_show"


class Discover_header extends Component {
  componentDidMount(){
  }
  render(){
    return(
      <div>
        {/* 发现模块头部整体 */}
        <div className="header">
          {/* 头部上层 */}
          <div className="header_top">
            <ul>
              <li className="header_nav">
                <NavLink className="header_nav" to="/myself">
                  <a href="###" className="my"></a>
                </NavLink>
              </li>
              <li className="header_nav">
                <a href="###" className="logo"></a>
              </li>
              <li className="header_nav">
                <a href="###" className="search"></a>
              </li>
            </ul>
          </div>
          {/* 头部下层导航栏 */}
          <div className="header_bottom">
            <ul>
              <li>
                <NavLink className="nav" to="/discover">关注</NavLink>
              </li>
              <li>
                <NavLink className="nav" to="/discover/recommend">必备好物</NavLink>
              </li>
              <li>
                <NavLink className="nav" to="/discover/show">晒一晒</NavLink>
              </li>
            </ul>
            <div>
            <Router path="/discover" exact component={Discover} />
            <Router path="/discover/recommend" exact component={DiscoverRecommend} />
            <Router path="/discover/show" exact component={DiscoverShow} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Discover_header