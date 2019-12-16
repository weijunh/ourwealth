import React, { Component } from 'react'
import "./Shop.less"
import BScroll from "better-scroll"
import { withRouter } from "react-router-dom"
@withRouter
class Shop extends Component {
  state = {

    current: 0,
    indexItem: this.props.item.class[0]  //传入的是一个对象  里面有标题和里面详情class数组
  }
  async  componentDidMount () {

    this.refs.ulside.style.width = this.props.item.title.length * 92 + "px"
    this.scrollside = new BScroll('.ulcontainer', {
      scrollX: true,
      click: true
    })


  }
  // 点击时更新状态数据current
  iscurrentside = (index) => {
    this.setState({
      current: index,
      indexItem: this.props.item.class[index]    //现在点击的index的class数组中对象
    })
    const li = this.refs.ulside.children[index]

    this.scrollside.scrollToElement(li, 300, true)
  }
  // 点击li时  跳转到详情
  toShop = (list) => {
    console.log(this.props)
    this.props.history.replace("/shopcar/shoppingdelit", { subject: list })
  }
  render () {
    const { current, indexItem } = this.state

    const { item } = this.props
    return (
      <div className="class-container">
        <div className="class-banana"><img src={item.img} alt="" /></div>
        <div className="container-silde">
          <div className="container-silde-big">
            <div className="ulcontainer">
              <ul ref="ulside">
                {
                  item.title.map((title, index) => (
                    <li key={index} className={current === index ? "active" : ""} onClick={() => { this.iscurrentside(index) }}    >{title}</li>
                  ))
                }
              </ul>
            </div>
            <div className="exchange">
              换一批
    </div>
          </div>
        </div>

        <div className="shopShow"    >
          <ul className="shopShowList">
            {
              indexItem.map((list, index) => (
                <li className="shopShowItem" key={index} onClick={() => { this.toShop(list) }} >
                  <div className="Item-img"> <img src={list.imgLinl} alt="" />
                    <div className="Item-tag"><span>8折</span></div>
                    <div className="Item-time">
                      <div className="Item-time1">
                        <p>好货内部价</p>
                        <p>Y{list.price}</p>
                      </div>
                      <p className="Item-time2">仅剩10小时</p>
                    </div>
                    <p></p>
                  </div>
                  <p className="shop-js">{list.introduce}</p>
                  <p className="shop-jq">Y{list.price} <span>Y{list.oldPice}</span>  </p>
                  <p className="shop-interior"><span>好货内部价</span></p>
                  <span className="shopcar"></span>
                </li>

              ))
            }


          </ul>

        </div>

      </div>



    )

  }
}
export default Shop
