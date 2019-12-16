import React, { Component } from 'react';
import './likeShop.less'

class likeShop extends Component {
  render() {
    return (
      <div className="myLikeShop">
        <header className="header">
          <svg className="svg-icon" aria-hidden="true" onClick={() => this.props.history.goBack()}>
            <use xlinkHref="#icon-icon-test6" className="back"></use>
          </svg>
          <p className="order_title">我的关注</p>
        </header>
        <div className="content">
          <ul>
            <li className="like_shop">
              <img src={require('../images/userImg.jpeg')} alt=""/>
              <div className="shop">
                <p className="shop_name">栖凰</p>
                <p className="shop_synopsis">辉映着深堂，风月入酒一觞 有人已经与我饮畅 却还要我当，纵马白衣少年郎</p>
              </div>
            </li>
            <li className="like_shop">
              <img src={require('../images/userImg.jpeg')} alt=""/>
              <div className="shop">
                <p className="shop_name">栖凰</p>
                <p className="shop_synopsis">辉映着深堂，风月入酒一觞 有人已经与我饮畅 却还要我当，纵马白衣少年郎</p>
              </div>
            </li>
            <li className="like_shop">
              <img src={require('../images/userImg.jpeg')} alt=""/>
              <div className="shop">
                <p className="shop_name">栖凰</p>
                <p className="shop_synopsis">辉映着深堂，风月入酒一觞 有人已经与我饮畅 却还要我当，纵马白衣少年郎</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default likeShop;
