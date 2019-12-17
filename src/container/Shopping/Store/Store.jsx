import React, { Component } from 'react';
import './Store.less'
import { NavLink } from "react-router-dom"
class Store extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }
  render () {
    return (
      <div className="store">
        <div className="store-header">
          <div className="header">
            <div className="header-top">
              <img className="header-img" src={require("./images/5.jpg")} width="61px" height="61px" alt="" />
              <ul className="header-con">
                <li className="con-left">
                  <span>良品铺子旗舰店</span>
                </li>
                <li className="con-right">
                  <span className="right-top"><img className="right-top-img" src={require("./images/1.png")} alt="" width="17" height="17" />收藏</span>
                  <i className="right-btm">862万人收藏</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-con2">
            <ul className="btn">
              <li className="btn-left"><img className="right-top-img" src={require("./images/3.png")} alt="" width="17px" height="17px" />搜索商品</li>
              <li className="btn-right-li">精选</li>
              <li className="btn-right-li">商品</li>
              <li className="btn-right-li">新品</li>
              <li className="btn-right-li">买家秀</li>
              <li className="btn-right-li">动态</li>
            </ul>
          </div>
          <div className="header-btm">
            <p>新用户特权</p>
            <span className="btm-span">成为会员立享特权 ></span>
          </div>
        </div>
        <div className="store-con">
          <img src={require("./images/1.jpg")} alt="" width="375px" height="590px" />
          <div className="store-con-w">
            <NavLink to='/shopping' >
              <img className="store-con-img1" src={require("./images/02.jpg")} alt="" width="107px" height="137px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-con-img2" src={require("./images/03.jpg")} alt="" width="107px" height="137px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-con-img3" src={require("./images/04.jpg")} alt="" width="109px" height="138px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-con-img4" src={require("./images/05.jpg")} alt="" width="109px" height="138px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-con-img5" src={require("./images/06.jpg")} alt="" width="109px" height="138px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-con-img6" src={require("./images/07.jpg")} alt="" width="109px" height="138px" />
            </NavLink>
          </div>
        </div>
        <div className="store-btm">
          <div className="store-btm-con">
            <NavLink to='/shopping' >
              <img className="store-btm-1" src={require("./images/w1.jpg")} alt="" width="355px" height="350px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-btm-1" src={require("./images/w2.jpg")} alt="" width="355px" height="350px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-btm-1" src={require("./images/w3.jpg")} alt="" width="355px" height="350px" />
            </NavLink>
            <NavLink to='/shopping' >
              <img className="store-btm-1" src={require("./images/w4.jpg")} alt="" width="355px" height="350px" />
            </NavLink>
          </div>
        </div>
        <div className="store-btm2">
          <div className="store-btm2-1">
            <NavLink to='/shopping' >
              <img className="store-con-img6" src={require("./images/w5.jpg")} alt="" width="355" height="470px" />
            </NavLink>
          </div>
          <NavLink to='/shopping' >
            <img className="store-con-img6" src={require("./images/w7.jpg")} alt="" width="100%" height="100%" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Store;