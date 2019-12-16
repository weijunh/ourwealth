// 引入React
import React, { Component } from 'react';
// 引入组件对应样式文件
import './Discover.less'
// 引入BetterScroll插件
import BScroll from 'better-scroll'
// 引入头部组件
import DiscoverHeader from './Discover_header'
// 引入底部组件
import DiscoverFooter from './Discover_footer'

class Discover extends Component {
  componentDidMount() {
    const wrapper = document.querySelector('.wrapper')
    //选中DOM中定义的 .wrapper 进行初始化
    const scroll = new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
  }
  constructor() {
    super()
    this.state = {
      defaultColor: false
    }
  }
  
  changeColor () {
    this.setState({
      defaultColor: !this.state.defaultColor
    })
  }
  // 点击图标刷新页面
  refresh() {
    window.location.reload([true])
  }
  render() {
    let styleObj = {
      background:this.state.defaultColor?'#ccc':'#FF1493'
    }
    return (
      // 发现模块整体最外层
      <div className="outer">
        {/* 头部组件 */}
        <DiscoverHeader />
        {/* 关注的店铺动态 */}
        <div className="shops_focus">  
          {/* 用户关注的店铺动态标题 */}
          <div className="focus_header">
            <span className="focus_tips">你关注的店铺有新动态</span>
            <i onClick={this.refresh.bind(this)} className="focus_icon"></i>
          </div>        
          {/* 最外层的容器（下层必须先为content），每个容器为一个整体块 */}
          {/* wrapper--ul内可放其他组合，需注意层级关系,需取消其他组件上滑动影响横滑 */}
          <div className="wrapper">
            {/* 宽度设置为最多6条 */}
            <ul className="content">
              <li>
                <img className="category_img" src={[require("./img/info.png")]} alt="###"></img>
                <p className="category_name">尚大-李沛华 阶段课程(H4,CSS3,JS基础)</p>
                <p className="now_price">￥<span>998</span></p>
                <p className="old_price">￥<span>9.98</span></p>
                <span className="cheap">365天最低价</span>
              </li>
              <li>
                <img className="category_img" src={[require("./img/info.png")]} alt="###"></img>
                <p className="category_name">尚大-李沛华 阶段课程(H4,CSS3,JS基础)</p>
                <p className="now_price">￥<span>998</span></p>
                <p className="old_price">￥<span>9.98</span></p>
                <span className="cheap">365天最低价</span>
              </li>
            </ul>
            <div className="model">
              <div className="recommend_shopTitle">
                <img src={[require("./img/message.png")]} alt="###"></img>
                <span>后端课程京东自营旗舰店</span>
                <span style={styleObj} onClick={this.changeColor.bind(this)} className="love">{this.state.defaultColor?'已关注':'关注Ta'}</span>
              </div> 
              <div className="recommend_shopInfo">
                <div className="left">
                  <img src={[require("./img/info.png")]} alt="###"/>
                  <span>365天最低价</span>
                </div>
                <div className="right">
                <p className="recommend_catergoryName">尚硅谷19年年终聚惠：沛华老司机 65Kg / 个</p>
                <p className="now_price">￥<span>19800</span> </p>
                <p className="old_price">￥<span>1.98</span> </p>
              </div>
              </div>
            </div>
            <div className="shops_info">
              <img src={[require("./img/message.png")]} alt="###"></img>
              <span>前端课程京东自营旗舰店</span>
              <span style={styleObj} onClick={this.changeColor.bind(this)} className="love">{this.state.defaultColor?'已关注':'关注Ta'}</span>
            </div> 
          </div>
        </div>
        {/* 单独作为一个栏目模块 */}
        <div className="tips">
          <p>猜你喜欢</p>
        </div> 
        {/* 猜你喜欢 */}
        <div className="shops_recommend">
          <div className="model">
            <div className="recommend_shopTitle">
              <img src={[require("./img/message.png")]} alt="###"></img>
              <span>后端课程京东自营旗舰店</span>
              <span style={styleObj} onClick={this.changeColor.bind(this)} className="love">{this.state.defaultColor?'已关注':'关注Ta'}</span>
            </div> 
            <div className="recommend_shopInfo">
              <div className="left">
                <img src={[require("./img/info.png")]} alt="###"/>
                <span>365天最低价</span>
              </div>
              <div className="right">
              <p className="recommend_catergoryName">尚硅谷19年年终聚惠：沛华老司机 65Kg / 个</p>
              <p className="now_price">￥<span>19800</span> </p>
              <p className="old_price">￥<span>1.98</span> </p>
            </div>
            </div>
          </div>
          <div className="model">
            <div className="recommend_shopTitle">
              <img src={[require("./img/message.png")]} alt="###"></img>
              <span>后端课程京东自营旗舰店</span>
              <span style={styleObj} onClick={this.changeColor.bind(this)} className="love">{this.state.defaultColor?'已关注':'关注Ta'}</span>
            </div> 
            <div className="recommend_shopInfo">
              <div className="left">
                <img src={[require("./img/info.png")]} alt=""/>
                <span>365天最低价</span>
              </div>
              <div className="right">
              <p className="recommend_catergoryName">尚硅谷19年年终聚惠：沛华老司机 65Kg / 个</p>
              <p className="now_price">￥<span>19800</span> </p>
              <p className="old_price">￥<span>1.98</span> </p>
            </div>
            </div>
          </div>
        </div>
        {/* 底部组件 */}
        <DiscoverFooter />
      </div>
    )
  }
}

export default Discover