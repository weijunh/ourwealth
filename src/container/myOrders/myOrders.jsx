import React, { Component } from 'react';
import { connect } from 'react-redux'
import './myOrders.less'
import { getUserOrder, updateUserOrder} from '../../redux/action-creators'
import 'antd-mobile/dist/antd-mobile.css';
import BScroll from 'better-scroll'
import { Modal } from 'antd-mobile'

const alert = Modal.alert;

@connect(state => ({ userOrders: state.userOrders[0] }), {getUserOrder, updateUserOrder})
class myOrders extends Component {
  async UNSAFE_componentWillMount() {
    await this.props.getUserOrder() // 不获取刷新报错
    const orders = this.props.userOrders.userOrders.filter(item => this.state.currIndex === 0 ? true : item.orderState === this.state.currIndex )
    this.setState({ orders })
    console.log(this.props.userOrders.userOrders);
  }

  componentDidMount() {
    const content = document.querySelector('.content')
    const bScroll = new BScroll(content, {
      // scrollX: true,  // 开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, // 开启竖向滚动
    })
    const num = this.props.location.search.slice(1) || 0 // 获取地址传入的参数若无设置默认值 0
    this.setState({currIndex: +num, BScroll: bScroll})
  }

  componentDidUpdate() {
    this.state.BScroll.refresh() // orders 加载完成后重新计算滚动条高度
  }

  state = {
    // BScroll: 
    currIndex: 0,
    nav: ["全部", "待付款", "代发货", "待收货", "待评价"],
    orderList: [
      {
        btns: ["联系商家", "取消订单", "付款"], // 待付款
        shopState: "等待卖家付款"
      },
      {
        btns: ["联系商家", "取消订单", "查看物流"], // 代发货
        shopState: "等待卖家发货"
      },
      {
        btns: ["联系商家", "退款", "确认收货"], // 待收货
        shopState: "卖家已发货"
      },
      {
        btns: ["联系商家", "评价"], // 待评价
        shopState: "已收货"
      }
    ],
    orders: [] // 存储页面显示的数据
  }

  // 鼠标点击切换数据并还原滚动条
  changeShopState = async (index) => {
    this.state.BScroll.scrollTo(0, 0)
    await this.setState({currIndex: index})
    // 根据state中存储的 currIndex 筛选出数据中的订单并存储在 state 中
    const orders = this.props.userOrders.userOrders.filter(item => this.state.currIndex === 0 ? true : item.orderState === this.state.currIndex )
    this.props.history.replace('/userorder?'+index)
    this.setState({ orders })
  }

  // 点击订单下的按钮完成对应操作
  changeMyOrder = (btn, item) => {
    switch (btn) {
      case '取消订单': console.log('删除订单');
        break;
      case '付款': console.log('跳转到购物车');
        break
      case '确认收货':
        const alertInstance = alert('Delete', 'Are you sure???', [
          { text: 'Cancel', onPress: () => console.log('cancel') },
          { text: 'Ok', onPress: () => {
            item.orderState = 4
            updateUserOrder(this.props.userOrders.userName, item)
          }}
        ])
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 5000)
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className="myOrders">
        <header className="header">
          <svg className="svg-icon" aria-hidden="true" onClick={() => this.props.history.goBack()}>
            <use xlinkHref="#icon-icon-test6" className="back"></use>
          </svg>
          <p className="order_title">我的订单</p>
        </header>
          <ul className="orders_nav">
            {
              this.state.nav.map((item, index) => {
                let sty = this.state.currIndex === index ? 'active' : ''
                return (
                  <li onClick={() => this.changeShopState(index)} className={sty} key={index}>
                    <span>{item}</span>
                    <div className="nav_bottom"></div>
                  </li>
                )
              })
            }
          </ul>
        <main className="content">
          {/* 待付款列表 */}
          <ul className="pay_list">
            {
              this.state.orders.map((item, index) => {
                this.goodItem = item
                // this.goodIndex = index
                return (
                  <li className="pay_item" key={index}>
                    <div className="pay_header">
                      <span className="pay_shopTitle">{item.goodTitle}</span>
                      <span className="waiting_pay">{this.state.orderList[item.orderState -1].shopState}</span>
                    </div>
                    <div className="good_detail">
                      <div className="good_con">
                        <img src={item.goodImg || require('../Myself/images/userImg.jpeg')} alt="店铺图片"/>
                        <div className="good_det">
                          <p className="good_title">{item.goodCon}</p>
                          <p className="good_specification">不想翻身的咸鱼</p>
                          <p className="good_back">七天无理由退换</p>
                        </div>
                      </div>
                      <div className="good_price">
                        <p>共{item.goodNum}件商品，合计：￥{item.goodTotalPrices}</p>
                      </div>
                      <div className="pay_btns">
                      {
                        this.state.orderList[item.orderState -1].btns.map((btn, index) => {
                          return <div key={index} onClick={() => this.changeMyOrder(btn, this.goodItem)}>{btn}</div>
                        })
                      }
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </main>
      </div>
    );
  }
}

export default myOrders;
