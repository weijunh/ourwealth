import React, { Component } from 'react';
import './Myself.less'
import 'antd-mobile/dist/antd-mobile.css';
import { connect } from 'react-redux'
import { getUserOrder } from '../../redux/action-creators'
import BScroll from 'better-scroll'
import { Toast } from 'antd-mobile'


@connect(state => ({ userOrders: state.userOrders[0] }), {getUserOrder})
class Myself extends Component {
  async UNSAFE_componentWillMount() {
    await this.props.getUserOrder()
    this.setState({ userPhotoUrl: this.props.userOrders.userPhoto})
  }

  componentDidMount (){
    const wrapper = document.querySelector('.wrapper')
    //选中DOM中定义的 .wrapper 进行初始化
    new BScroll(wrapper, {
      // scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: true, //关闭竖向滚动
    })
    console.log(this.props);
  }

  state = {
    userPhotoUrl: '', // 存储图片地址
    filePhoto: {}, // 存储对象？？
    files: this.data,
    multiple: false,
  }

  changeUserPhoto = () => {
    var reads = new FileReader();
    const f = document.getElementById('file').files[0];
    reads.readAsDataURL(f);
    reads.onload = function(e) {
    localStorage.setItem("user_img", this.result)
    Toast.info('上传成功', 1);
    document.getElementById('user_img').src = localStorage.getItem("user_img");
 };
  }

  linkToMyCollect = () => {
    this.props.history.push('/MyCollect');
  }
  
  linkToMyLikeShop = () => {
    this.props.history.push('/MyLikeShop');
  }
  
  linkToMyCoupon = () => {
    this.props.history.push('/MyCoupons');
  }

  linkToMyCommenet = () => {
    this.props.history.push('/MyComment');
  }

  linkToMyVIP = () => {
    this.props.history.push('/MyVIP');
  }
  
  // 跳转到订单页并传递参数用于判断订单页显示数据
  linkToOrder = (id) => {
    this.props.history.push('/userorder?'+id);
  }
  render() {
    let photoUrl
    if( this.props.userOrders && this.props.userOrders.userPhoto ){
      photoUrl =  this.props.userOrders.userPhoto
    }
    else{
      photoUrl = require('./images/userImg.jpeg')
    }
    return (
      <div className="wrapper">
        <div className="mySelf">
          <header className="header">
            <img src={localStorage.getItem("user_img") || photoUrl} 
              className="user_img"
              id="user_img"
              alt="头像"
            />
            <input type="file" id="file" className="filepath" onChange={this.changeUserPhoto} accept="image/jpg,image/jpeg,image/png,image/PNG"/>
            <span className="user_Name">{this.props.userOrders ? this.props.userOrders.userName : "用户名"}</span>
          </header>
          <main className="main">
            <div className="my_order">
              <h3 className="order_title">我的订单</h3>
              <ul className="order_state">
                <li onClick={() => this.linkToOrder(1)}>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-fukuan"></use>
                  </svg>
                  <span>待付款</span>
                </li>
                <li onClick={() => this.linkToOrder(2)}>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-fahuozhong"></use>
                  </svg>
                  <span>代发货</span>
                  </li>
                <li onClick={() => this.linkToOrder(3)}>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-leiyunshugongjux"></use>
                  </svg>
                  <span>代收货</span>
                </li>
                <li onClick={() => this.linkToOrder(4)}>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-pingjia1"></use>
                  </svg>
                  <span>待评价</span>
                  </li>
                <li onClick={() => this.linkToOrder(0)}>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-6"></use>
                  </svg>
                  <span>全部订单</span>
                </li>
              </ul>
            </div>
            <ul className="my_option">
              <li className="options">
                <div className="option_item" onClick={this.linkToMyVIP}>
                  <div className="option">
                    <svg className="svg-icon" aria-hidden="true">
                      <use xlinkHref="#icon-huiyuan-"></use>
                    </svg>
                    <span>会员中心</span>
                  </div>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon-test7"></use>
                  </svg>
                </div>
              </li>
              <li className="options">
                <div className="option_item" onClick={this.linkToMyCommenet}>
                  <div className="option">
                    <svg className="svg-icon" aria-hidden="true">
                      <use xlinkHref="#icon-pingjia"></use>
                    </svg>
                    <span>我的评价</span>
                  </div>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon-test7"></use>
                  </svg>
                </div>
              </li>
              <li className="options">
                <div className="option_item" onClick={this.linkToMyCollect}>
                  <div className="option">
                    <svg className="svg-icon" aria-hidden="true">
                      <use xlinkHref="#icon-icon-test5"></use>
                    </svg>
                    <span>我的收藏</span>
                  </div>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon-test7"></use>
                  </svg>
                </div>
                <div className="option_item" onClick={this.linkToMyLikeShop}>
                  <div className="option">
                    <svg className="svg-icon" aria-hidden="true">
                      <use xlinkHref="#icon-icon-test3"></use>
                    </svg>
                    <span>关注店铺</span>
                  </div>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon-test7"></use>
                  </svg>
                </div>
              </li>
              <li className="options">
                <div className="option_item" onClick={this.linkToMyCoupon}>
                  <div className="option">
                    <svg className="svg-icon" aria-hidden="true">
                      <use xlinkHref="#icon-youhuiquan"></use>
                    </svg>
                    <span>我的优惠券</span>
                  </div>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon-test7"></use>
                  </svg>
                </div>
                {/* <div className="option_item">
                  <div className="option">
                    <svg className="svg-icon" aria-hidden="true">
                      <use xlinkHref="#icon-icon-test"></use>
                    </svg>
                    <span>我的钱包</span>
                  </div>
                  <svg className="svg-icon" aria-hidden="true">
                    <use xlinkHref="#icon-icon-test7"></use>
                  </svg>
                </div> */}
              </li>
            </ul>
          </main>
        </div>
      </div>
    );
  }
}

export default Myself;
