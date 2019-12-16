// 引入React
import React, { Component } from 'react';
// 引入组件对应样式文件
import './Discover_recommend.less'
// 引入头部组件
import DiscoverHeader from './Discover_header'
// 引入底部组件
import DiscoverFooter from './Discover_footer'

class Discover_recommend extends Component {
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
  render () {
    console.log(this.state.defaultColor)
    let styleObj = {
      backgroundColor:this.state.defaultColor?'red':'#fff'
    }
    return(
      <div className="recommend_outer">
        {/* 头部组件 */}
        <DiscoverHeader />
        {/* 正文数据部分 */}
        <div className="recommend_content">
          <ul>
            <li>
              <img className="video" src={[require("./img/recommend_demo.jpg")]} alt="###"/>
              <div className="top">
                <a className="userImg" href="###" />
                <span className="userName">SZ尚硅谷_0058777</span>
                <p>直播中 <span className="info">95.27</span> 万人</p>
              </div>
              <div className="good">
                <a style={styleObj} onClick={this.changeColor.bind(this)} className="love" href="###"></a>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend_content">
          <ul>
            <li>
              <img className="video" src={[require("./img/recommend_demo.jpg")]} alt="###"/>
              <div className="top">
                <a className="userImg" href="###" />
                <span className="userName">SZ尚硅谷_0058777</span>
                <p>直播中 <span className="info">95.27</span> 万人</p>
              </div>
              <div className="good">
                <a style={styleObj} onClick={this.changeColor.bind(this)} href="###"></a>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend_content">
          <ul>
            <li>
              <img className="video" src={[require("./img/recommend_demo.jpg")]} alt="###"/>
              <div className="top">
                <a className="userImg" href="###" />
                <span className="userName">SZ尚硅谷_0058777</span>
                <p>直播中 <span className="info">95.27</span> 万人</p>
              </div>
              <div className="good">
                <a style={styleObj} onClick={this.changeColor.bind(this)} href="###"></a>
              </div>
            </li>
          </ul>
        </div>
        {/* 底部组件 */}
        <DiscoverFooter />
      </div>
    )
  }
}

export default Discover_recommend