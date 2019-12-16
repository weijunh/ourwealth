import React, { Component } from 'react';
// 引入图片
import discount from '../../../assets/img/ani.png'
import fuhui from '../../../assets/img/fuhui.png'
// 引入组件
import ListView from '../ListView/ListView.jsx'
import Grid from '../Grid/Grid.jsx'
import Swiper from '../Swiper/Swiper.jsx'
import GoodsSwiper from '../GoodsSwiper/GoodsSwiper.jsx'
import Dianpu from '../Dianpu/Dianpu.jsx'

import PropTypes from 'prop-types'

class First extends Component {

  // 设置tab的类型及是否是必须的
  static propTypes = {
    data: PropTypes.object
  }

  render () {
    // console.log("first:", this.props.data);
    const { swiperdata, griddata, goodsswiper, dianpu, listviewdata } = this.props.data
    if (griddata) {
      // console.log(listviewdata)
    }
    return (
      <div style={{ overflow: 'hidden', }}>
        <div>{swiperdata ? <Swiper swiperdata={swiperdata} /> : null}</div>
        <div>{griddata ? <Grid griddata={griddata} /> : null}</div>
        <img style={{ width: '100%', height: '90px', marginTop: "10px" }} src={fuhui} alt="福汇" />
        <div>{goodsswiper ? <GoodsSwiper goodsswiper={goodsswiper} /> : null}</div>
        <div>{dianpu ? <Dianpu dianpu={dianpu} /> : null}</div>
        <img style={{ width: '100%', height: '90px', marginTop: "10px" }} src={discount} alt="优惠宣传" />
        <div>{listviewdata ? <ListView listviewdata={listviewdata} /> : null}</div>

      </div>
    );
  }
}

export default First;
