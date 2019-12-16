import React, { Component } from 'react'
import "./ClassShop.less"
import BScroll from "better-scroll"
import { req_class_shop } from "../../api"
import Shop from "./Shop/Shop.jsx"
import PubSub from "pubsub-js"
export default class ClassShop extends Component {
  state = {
    arrtitle: ["爆款清单", "疯狂清单", "暖冬必备", "大额直降", "美食酒水", "智能电器", "居家好物", "个户用品", "箱包配饰"],
    current: 0,
    // 总的子容器数据数组
    classShop: [],
    // 子容器高度数组
    containerTop: []
  }
  async  componentDidMount () {
    // 隐藏底部栏
    PubSub.publish('isrouter', false);
    // 获取数据
    const result = await req_class_shop()
    console.log(result.data)
    if (result.code === 0) {
      this.setState({
        classShop: result.data
      }, () => {
        // 生成子容器滚动
        this.scrollWin = new BScroll('.scroll-area', {
          scrollY: true,
          click: true,
          probeType: 3
        })
      })
    }



    // 获取到所有的每个标题的数据加宽度  等到总宽,给外部容器  不然父级元素宽度不会被子元素陈开
    this.refs.ul.style.width = this.state.arrtitle.length * 70 + "px"

    this.scrollTop = new BScroll('.header-right', {
      scrollX: true,
      click: true
    })


    const containerTop = []
    containerTop.push(0)
    Array.from(this.refs.container.children).reduce((pre, cur) => {
      pre += cur.offsetHeight
      containerTop.push(pre)
      return pre
    }, 0)
    this.setState({
      containerTop
    })


    //  滑动子容器时间
    this.scrollWin.on("scroll", ({ x, y }) => {

      const { containerTop } = this.state
      // 获取到容器高度数组  判断当前的容器滑动
      this.current = containerTop.findIndex((item, index) => {
        // 滚动到   ----      和下面 this.scrollWin.scrollTo(0, -containerTop[index], 300)  对应  就是滚动到  传入的0px等  如果下面不等于0的话  会2个冲突
        return item <= -y && containerTop[index + 1] > -y
      })
      // 如果筛选到的current 不等于  现在的current  那么重新赋值
      if (this.current !== this.state.current) {
        this.setState({
          current: this.current
        })
      }
    })
  }
  //  点击时 重新赋值  current
  isCurrent = (index) => {
    this.setState({
      current: index
    })
    // 获取到当前点击是哪个li标签
    const li = this.refs.ul.children[index]
    // 让标签点击时处于中间位置     --- true
    this.scrollTop.scrollToElement(li, 300, true)
    // 拿到传入的子容器高度数组
    const { containerTop } = this.state
    // 让子容器调转
    this.scrollWin.scrollTo(0, -containerTop[index], 300)

  }
  render () {
    const { arrtitle, current, classShop } = this.state
    return (
      <div className="container-class-parcel">
        <div className="container-class">
          <div className="class-header">
            <div className="header-left">
              <img src="https://yanxuan.nosdn.127.net/3cee524fd5c148fd87ca96af2d4fc93a.png?_width=105&_height=70" alt="" />
            </div>
            <div className="header-right">
              <ul ref="ul" >
                {
                  arrtitle.map((title, index) => (
                    <li key={index} onClick={() => { this.isCurrent(index) }} ><span className={current === index ? "active" : ""}  > {title}</span></li>
                  ))
                }

              </ul>
            </div>
          </div>
          <div className="scroll-area">
            <div className="scroll-area-item" ref="container" >
              {
                classShop.map((item, index) => (
                  <Shop item={item} key={index}   ></Shop>
                ))
              }
            </div>
          </div>





        </div>
      </div>
    )
  }
}
