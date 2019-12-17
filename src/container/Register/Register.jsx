import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './Register.less'
import Basic from "./yan.jsx"
import { connect } from "react-redux"
@connect(state => ({ token: state.UpdateUser.token }))
class Register extends Component {
  componentDidMount () {
    if (this.props.token) {
      this.props.history.replace('/shopping')
    }
  }
  render () {
    return (
      <div className="register">
        <NavLink to='/shopcar' ><i className="iconfont ">&#xe642;</i></NavLink>
        <p className="register_p">欢迎注册财富</p>
        <div className="register_con">
          <Basic></Basic>
          <p className="con-resigter">已有账号？请<NavLink to='/login' >登录</NavLink></p>
        </div>
      </div>
    )
  }
}
export default Register