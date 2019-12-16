import React, { Component } from 'react';
import './MyComment.less'

class MyComment extends Component {
  render() {
    return (
      <div className="myComment">
        <header className="header">
          <svg className="svg-icon" aria-hidden="true" onClick={() => this.props.history.goBack()}>
            <use xlinkHref="#icon-icon-test6" className="back"></use>
          </svg>
          <p className="order_title">我的评价</p>
        </header>
        <div className="content">
          <ul className="comments">
            <li>
              <div className="user_detail">
                <img src={require('../images/userImg.jpeg')} alt="用户头像"/>
                <span>用户名</span>
              </div>
              <p className="comment">用户没有填写评价，默认好评</p>
              <div className="comment_good">
                <img src={require('../images/userImg.jpeg')} alt=""/>
                <div className="good">
                  <p className="good_det">咸鱼一条Note that the development build is not optimized.
  To create a production build, use npm run build.</p>
                  <p className="good_price">￥ 0.23</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MyComment;
