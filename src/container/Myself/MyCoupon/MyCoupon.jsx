import React, { Component } from 'react';
import './MyCoupon.less'

class MyCoupon extends Component {
  render() {
    return (
      <div className="myCoupons">
        <header className="header">
          <svg className="svg-icon" aria-hidden="true" onClick={() => this.props.history.goBack()}>
            <use xlinkHref="#icon-icon-test6" className="back"></use>
          </svg>
          <p className="order_title">我的优惠券</p>
        </header>
        <div className="content">
          <ul className="coupons"></ul>
          <div className="no_coupon">
            <div className="noCoupon_con">
              <svg className="svg-icon" aria-hidden="true">
                <use xlinkHref="#icon-youhuiquan1" className="back"></use>
              </svg>
              <p>暂无优惠券</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyCoupon;
