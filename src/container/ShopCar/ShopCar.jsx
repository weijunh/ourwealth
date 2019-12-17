import React, { Component } from 'react';
import './ShopCar.less'
import { Icon } from 'antd-mobile'
import IsLogin from "./isLogin/IsLogin.jsx"
import PubSub from 'pubsub-js'
import { connect } from "react-redux"
@connect(state => ({ token: state.UpdateUser.token }))
class ShopCar extends Component {

  state = {
    style: { display: "none" },

  }


  isshow = () => {
    if (this.state.style.display === "block") {
      this.setState({
        style: { display: "none" }
      })
    } else {
      this.setState({
        style: { display: "block" }
      })
    }
  }

  componentDidMount () {

    PubSub.publish('isrouter', true);
  }
  render () {

    console.log(this.props.token)
    return (
      <div className="ShopCar">
        <div className="header"  >
          <div className="header-left"><Icon size='sm' type="left" /></div>
          <div className="header-text"> 购物车</div>
          <div className="header-right" onClick={this.isshow}  >
          </div>
          <div>
            <ul className="masking" style={this.state.style}>
              <li>首页</li>
              <li>分类搜索</li>
              <li>购物车</li>
              <li>我的京东</li>
              <li>浏览记录</li>
            </ul>
          </div>
        </div>
        {
          this.props.token ?
            (<IsLogin></IsLogin>) :
            (< div className="none-login">
              <div className="none-login-heder">
                登录后可同步账户购物车中的商品 <div className="login-btn" onClick={() => { this.props.history.replace("/login") }}>登录</div>
              </div>
              <div className="none-login-img">
                <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="" />
                <p>登录后可同步购物车中商品</p>
              </div>
            </div>)


        }



      </div>
    );
  }
}

export default ShopCar;