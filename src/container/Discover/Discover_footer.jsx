// 引入React
import React, { Component } from 'react';
// 引入组件对应样式文件
import './Discover_footer.less'

class Discover_footer extends Component {
  render() {
    return(
      // 共用的底部组件
      <div className="footer">
        <p>兄嘚别整了，已经一滴都没有了！！</p>
        <p>&copy;2019 必备商城 版权所有,翻版必究！</p>
      </div>
    )
  }
}

export default Discover_footer
