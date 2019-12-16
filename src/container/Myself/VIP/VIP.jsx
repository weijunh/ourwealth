import React, { Component } from 'react';
import './VIP.less'

class VIP extends Component {
  render() {
    return (
      <div className="VIP">
        <header className="header">
          <svg className="svg-icon" aria-hidden="true" onClick={() => this.props.history.goBack()}>
            <use xlinkHref="#icon-icon-test6" className="back"></use>
          </svg>
          <p className="order_title">会员中心</p>
        </header>
        <img src={require('../images/VIPbg.png')} alt=""/>
      </div>
    );
  }
}

export default VIP;
