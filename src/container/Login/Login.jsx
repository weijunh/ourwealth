import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import './Login.less'
import PubSub from "pubsub-js"
import { Toast } from 'antd-mobile';
import Basic from "./yan.jsx"
import { connect } from "react-redux"
@connect(state => ({ token: state.UpdateUser.token }))
class Login extends Component {
  state = {
    hasError: false,
    value: '',
    bigimg: "http://localhost:5000/captcha"
  }
  componentDidMount () {
    PubSub.publish('isrouter', false);

    if (this.props.token) {
      this.props.history.replace('/shopping')
    }
  }

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('你还未输入手机号');
    }
  }

  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      }
      );

    } else {
      this.setState({
        hasError: false,
      });
      console.log(1111)
    }
    this.setState({
      value,
    });
  }

  isimg = () => {
    this.setState({
      bigimg: "http://localhost:5000/captcha?tiem=" + Date.now()

    })
  }


  render () {
    return (
      <div className="login">
        <NavLink to='/shopcar' ><i className="iconfont ">&#xe642;</i></NavLink>
        <div className="longin-header">
          <img className="header-img" src={require("./images/2.jpg")} alt="" width="130" height="130" />
        </div>
        <p className="login_p">欢迎来到财富，请登录</p>
        <div className="login_con">

          <div>
            < Basic history={this.props.history} ></Basic>
            <div className="yzm" onClick={this.isimg}>
              <img src={this.state.bigimg} alt="" />
            </div>
            <p className="con-resigter">没有账号？请<NavLink to='/register' >注册</NavLink></p>
          </div>
        </div>

      </div>
    )
  }
}
export default Login