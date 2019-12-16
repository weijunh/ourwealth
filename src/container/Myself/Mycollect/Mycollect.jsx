import React, { Component } from 'react';
import './Mycollect.less'

class Mycollect extends Component {
  render() {
    return (
      <div className="muCollects">
        <header className="header">
          <svg className="svg-icon" aria-hidden="true" onClick={() => this.props.history.goBack()}>
            <use xlinkHref="#icon-icon-test6" className="back"></use>
          </svg>
          <p className="order_title">我的收藏</p>
        </header>
        <div className="content">
          <ul>
            <li className="collect_good">
              <img src={require('../images/userImg.jpeg')} alt=""/>
              <div className="good">
                <p className="good_det">咸鱼一条Note that the development build is not optimized.
To create a production build, use npm run build.</p>
                <p className="good_price">￥ 0.23</p>
              </div>
            </li>
            <li className="collect_good">
              <img src={require('../images/userImg.jpeg')} alt=""/>
              <div className="good">
                <p className="good_det">咸鱼一条Note that the development build is not optimized.
To create a production build, use npm run build.</p>
                <p className="good_price">￥ 0.23</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mycollect;
