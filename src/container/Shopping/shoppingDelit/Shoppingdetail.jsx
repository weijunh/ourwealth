import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import './Shoppingdetail.less'
import BScroll from 'better-scroll'
import { Icon, Tag } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import PubSub from "pubsub-js"
import Icons from "../../../assets/icon-font/icon.jsx"
import { connect } from "react-redux"
import { updateTogether } from "../../../redux/action-creators.js"
@connect(null, { updateTogether })
class Shoppingdetail extends Component {



  state = {
    imgUrl: ["//m.360buyimg.com/mobilecms/s750x750_jfs/t1/79596/30/11549/676613/5d901c88Ec7a97d29/d189e56d89d975b6.jpg!q80.dpg.webp", '//m.360buyimg.com/mobilecms/s720x720_jfs/t1/81012/28/13665/159765/5dafcdf7Eb247ff7f/c516fc4de783079c.jpg!q70.dpg.webp', '//m.360buyimg.com/mobilecms/s720x720_jfs/t1/85862/1/558/120277/5dafcdf8E2d92f14a/f0a5f500c3188252.jpg!q70.dpg.webp', '//m.360buyimg.com/mobilecms/s720x720_jfs/t1/82711/35/13501/72539/5dafcdf8E363fdc49/104401675b1a72fd.jpg!q70.dpg.webp', '//m.360buyimg.com/mobilecms/s720x720_jfs/t1/93368/9/566/37337/5dafcdf9Edf98d7b3/d4c64e4b437abd56.jpg!q70.dpg.webp'],
    imgHeight: 750,
    isshow: false,
    num: 1,
    data: {}
  }
  isshow = () => {
    const isshow = !this.state.isshow
    this.refs.masking.className = isshow ? "shop-masking  active" : "shop-masking"
    this.setState({
      isshow
    })
    console.log(this.refs.masking)
  }
  componentDidMount () {

    PubSub.publishSync('isrouter', false);
    new BScroll('.shop', {
      click: true
    })
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
    console.log(this.props.location.state)
    const { subject } = this.props.history.location.state
    subject.num = 1
    this.setState({
      data: subject
    })

  }

  add = () => {

    this.setState((state) => ({ num: ++state.num }))


  }
  subtract = () => {
    if (this.state.num !== 0) {
      this.setState((state) => ({ num: --state.num }))
    }
  }



  notarize = () => {
    console.log(11)
    const { data, num } = this.state
    data.num = num
    this.setState((state) => ({ data }))
    this.props.updateTogether(this.state.data)
    this.props.history.replace('/shopcar')
  }
  render () {

    const { num, data } = this.state
    return (
      <div className="shop">
        <div className="shop-container">
          {/* 头部 */}
          <div className="header">
            <div className="header-commodity">
              <NavLink to='/discover' >
                <span className="header-commodity-span1"><i className="iconfont ">&#xe642;</i> 关闭 </span>
              </NavLink>
              <span className="header-commodity-span2">必备优选</span>
            </div>
            <WingBlank>
              <Carousel className="space-carousel"
                frameOverflow="visible"
                cellSpacing={10}
                slideWidth={0.8}
                autoplay
                infinite
                beforeChange={(from, to) => { }}
                afterChange={index => this.setState({ slideIndex: index })}
              >
                {this.state.imgUrl.map((val, index) => (
                  <a
                    key={index}
                    href="http://www.alipay.com"
                    style={{
                      display: 'block',
                      position: 'relative',
                      top: this.state.slideIndex === index ? -10 : 0,
                      height: this.state.imgHeight,
                      boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img
                      src={val}
                      alt=""
                      style={{ width: '100%', verticalAlign: 'top' }}
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                      }}
                    />
                  </a>
                ))}
              </Carousel>
            </WingBlank>
            <p className="header-p">￥<span className="header-pir">{data.price}</span>  <span className="header-i">￥{data.oldPice}</span><span className="header-title">天猫优选</span> </p>
            <p className="header-shop">{data.introduce}</p>
            <p className="header-li1">
              <span>包邮</span>
              <i>月售量73627</i>
            </p>
            <ul className="header-ul">
              <li className="header-li2">
                <span>老川东 <i>品牌</i></span>

              </li>
              <li className="header-li2">
                <span>100g*3 <i>系列</i></span>

              </li>
              <li className="header-li2">
                <span>香辣*3 <i>口味</i></span>

              </li>
            </ul>
          </div>
          {/* 中间的文字 */}
          <div className="shop-con">
            <div className="con-list">
              <ul className="con-list-ul">
                <li className="con-list-li1" onClick={this.isshow}>
                  <span className="con-list-li1-1">规格</span>
                  <span className="con-list-li1-2">选择规则</span>
                  <span className="con-list-li1-3">></span>
                </li>
                <li className="con-list-li1">
                  <span className="con-list-li1-1">物流</span>
                  <span className="con-list-li1-2">请选择货地址</span>
                  <span className="con-list-li1-3">></span>
                </li>
              </ul>
              <ul className="con-list-ul">
                <li className="con-list-li1">

                  <span className="con-list-li1-1">参数</span>
                  <span className="con-list-li1-2">产地：[中国大陆],品牌:[老川东]</span>
                  <span className="con-list-li1-3">></span>
                </li>
                <li className="con-list-li1">
                  <span className="con-list-li1-1">服务</span>
                  <span className="con-list-li1-2">破损包退</span>
                  <span className="con-list-li1-3">></span>
                </li>
              </ul>

            </div>
            <ul className="con-ul">
              <li className="con-li1">宝贝详情</li>
              <li className="con-li2">
                <span className="con-li2-header">宝贝需知</span>
                <p className="con-li2-p">
                  <span className="con-li2-p-left">【生成日期】:2019年8月1日</span>
                  <span className="con-li2-p-right">【有效日期】:2020年7月31日</span>
                </p>
              </li>
            </ul>
          </div>
          {/* 底部图片 */}
          <div className="shop-footer">
            <p className="footer-commitment">我们的承诺</p>
            <ul className="footer-commitment-ul">
              <li className="footer-ul1-img" ><img src={require("./images/1.jpg")} alt="" width="100%" height="160" /></li>
              <li className="footer-ul1-img" ><img src={require("./images/2.jpg")} alt="" width="100%" height="160" /></li>
              <li className="footer-ul1-img" ><img src={require("./images/3.jpg")} alt="" width="100%" height="160" /></li>
              <li className="footer-ul1-img" ><img src={require("./images/5.jpg")} alt="" width="100%" height="160" /></li>
            </ul>
            <ul>
              <li className="footer-ul2-img" ><img src={require("./images/1.jpg")} alt="" width="100%" height="250px" /></li>
              <li className="footer-ul2-img" ><img src={require("./images/1.jpg")} alt="" width="100%" height="250px" /></li>
              <li className="footer-ul2-img" ><img src={require("./images/1.jpg")} alt="" width="100%" height="250px" /></li>
              <li className="footer-ul2-img" ><img src={require("./images/1.jpg")} alt="" width="100%" height="250px" /></li>
            </ul>
          </div>

        </div>

        <div className="shop-masking" ref="masking" onClick={this.isshow}>
          <div className="shop-select" onClick={(event) => event.stopPropagation()}   >
            <div className="shop-particulars">
              <img src="//m.360buyimg.com/mobilecms/s750x750_jfs/t1/88529/15/4307/279476/5de6564dE8243cca7/f4130deb2a05d1cf.jpg!q80.dpg.webp" alt="" />
              <div className="shop-props">
                <p>价格</p>
                <p>介绍</p>
              </div>
              <Icon type="cross" className="shop-quit" onClick={this.isshow}></Icon>
            </div>
            <p className="sku_kind">颜色</p>
            <div className="sku_choose">
              <Tag data-seed="logId">黑色</Tag>
              <Tag data-seed="logId">红色</Tag>
              <Tag data-seed="logId">蓝色</Tag>
              <Tag data-seed="logId">紫色</Tag>
              <Tag data-seed="logId">白色</Tag>

            </div>
            <p className="sku_kind active">版本</p>
            <Tag data-seed="logId">黑色</Tag>
            <Tag data-seed="logId">红色</Tag>
            <Tag data-seed="logId">蓝色</Tag>
            <Tag data-seed="logId">紫色</Tag>
            <div className="cartcontrol">

              <div onClick={() => { this.add() }}>< Icons type="icon-jia"  ></Icons>
              </div>

              <div className="cart-count">{num}</div>



              <div onClick={() => { this.subtract() }}    > < Icons type="icon-jian" ></Icons></div>
            </div>
          </div>



          <div className="masking-bottom" onClick={this.notarize}>
            确认
        </div>
        </div>

      </div >
    );
  }
}

export default Shoppingdetail;



