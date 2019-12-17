import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace, List } from 'antd-mobile';
import './Myself.less'
import 'antd-mobile/dist/antd-mobile.css';

const Item = List.Item;
class Myself extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <img src={require('./images/userImg.jpeg')} className="user_img" alt="头像" />
          <span className="user_Name">昵称</span>
        </header>
        <main className="main">
          <WingBlank size="lg" className="my_order">
            {/* <WhiteSpace size="lg" /> */}
            <Card>
              <Card.Header
                title="我的订单"
                thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              />
              <Card.Body>
                <div>
                  <ul className="myOrder_list">
                    <li>
                      <div className="order_icon"></div>
                      <span>待付款</span>
                    </li>
                    <li>
                      <div className="order_icon"></div>
                      <span>待发货</span>
                    </li>
                    <li>
                      <div className="order_icon"></div>
                      <span>待收货</span>
                    </li>
                    <li>
                      <div className="order_icon"></div>
                      <span>待评价</span>
                    </li>
                    <li>
                      <div className="order_icon"></div>
                      <span>全部订单</span>
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
            <WhiteSpace size="lg" />
          </WingBlank>
          <WingBlank>
            <List className="my-list">
              <Item arrow="horizontal">会员中心</Item>
              <WhiteSpace size="lg"/>
              <List>
              <Item arrow="horizontal">会员中心</Item>
              </List>
              <List></List>
              <Item arrow="horizontal">会员中心</Item>
              <Item arrow="horizontal">会员中心</Item>
            </List>
          </WingBlank>
        </main>
      </div>
    );
  }
}

export default Myself;
