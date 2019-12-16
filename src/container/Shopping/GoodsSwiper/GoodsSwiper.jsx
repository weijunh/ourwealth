import React, { Component } from 'react';
import BScroll from 'better-scroll'

import './GoodsSwiper.less'
import PropTypes from 'prop-types'

class GoodSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imgHeight: '',
    };
  }
  static propTypes = {
    goodsswiper: PropTypes.array
  }
  componentWillMount = () => {
    // console.log(this.props.goodsswiper);
    if (this.props.goodsswiper) {
      this.setState({
        data: this.props.goodsswiper
      })
    }
  }
  // 加载完调用函数
  componentDidMount = () => {
    this.scroll = new BScroll('.scrollWrapper', {
      scrollX: true,
      click: true
    })
  }
  gotoDetail (item) {
    // 跳转到对应的商品详情页面
    // this.props.history.push('', item)
    console.log(item);
  }

  render () {
    const { data } = this.state
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', position: "relative" }}>
          <span style={{ fontSize: '18px', fontWeight: '700', margin: '10px 10px' }}>必备专享</span>
          <a
            style={{ position: 'absolute', right: '20px' }}
          >更多&gt;</a>
        </div>
        <div className='scrollWrapper'>
          <ul className='scrollUl'>
            {
              data.map(function (item, index) {
                return (
                  <li key={index} className='scrollLi' onClick={() => { console.log(item) }}>
                    <img src={item.imgurl} alt="" />
                    <p className="text">{item.text}</p>
                    <p className="price">{item.price}¥</p>
                  </li>
                )
              })
            }
            {/*  */}
          </ul>
        </div>
      </div >
    );
  }
}

export default GoodSwiper;