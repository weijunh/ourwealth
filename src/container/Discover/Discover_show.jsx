// 引入React
import React, { Component } from 'react';
// 引入组件对应样式文件
import './Discover_show.less'
// 引入头部组件
import DiscoverHeader from './Discover_header'
// 引入底部组件
import DiscoverFooter from './Discover_footer'

class Discover_show extends Component {
  onAdd() {
      this.setState({
        count:this.state.count +1,
        defaultColor: !this.state.defaultColor
      })
    }
  constructor() {
    super()
    this.state = {
      defaultColor: false,
      count:99
    }
  }
  render() {
    let styleObj = {
      backgroundColor:this.state.defaultColor?'red':'#fff'
    }
    return(
      // 晒一晒组件最外层
      <div className="show_outer">
        {/* 头部组件 */}
        <DiscoverHeader />
        {/* 晒一晒主体内容 */}
        <div className="show_content">
          <ul>
            <li className="show_info">
              <img src={[require("./img/show_demo.png")]} alt="###"/>
              <p>冬季肌肤保水补湿，这一套很完美！</p>
              <div className="user_info">
                <img src={[require("./img/show_demo.png")]} alt="###"/>
                <span>我是一个特别长的用户名</span>
                <a style={styleObj}  onClick={this.onAdd.bind(this)} href="###"></a>
                <span className="loveNum">{this.state.count}</span>
              </div>
            </li>
            <li className="show_info">
              <img src={[require("./img/show_demo.png")]} alt="###"/>
              <p>冬季肌肤保水补湿，这一套很完美！</p>
              <div className="user_info">
                <img src={[require("./img/show_demo.png")]} alt="###"/>
                <span>我是一个特别长的用户名</span>
                <a style={styleObj}  onClick={this.onAdd.bind(this)} href="###"></a>
                <span className="loveNum">{this.state.count}</span>
              </div>
            </li>
            <li className="show_info">
              <img src={[require("./img/show_demo.png")]} alt="###"/>
              <p>冬季肌肤保水补湿，这一套很完美！</p>
              <div className="user_info">
                <img src={[require("./img/show_demo.png")]} alt="###"/>
                <span>我是一个特别长的用户名</span>
                <a style={styleObj}  onClick={this.onAdd.bind(this)} href="###"></a>
                <span className="loveNum">{this.state.count}</span>
              </div>
            </li>
            <li className="show_info">
              <img src={[require("./img/show_demo.png")]} alt="###"/>
              <p>冬季肌肤保水补湿，这一套很完美！</p>
              <div className="user_info">
                <img src={[require("./img/show_demo.png")]} alt="###"/>
                <span>我是一个特别长的用户名</span>
                <a style={styleObj}  onClick={this.onAdd.bind(this)} href="###"></a>
                <span className="loveNum">{this.state.count}</span>
              </div>
            </li>
          </ul>
          <a className="write" href="###"></a>
        </div>
        {/* 底部组件 */}
        <DiscoverFooter />
      </div>
    )
  } 
}

export default Discover_show