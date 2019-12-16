import React, { Component } from 'react'
import { Icon, List, Checkbox, Flex, Stepper, Button } from 'antd-mobile'
import { connect } from "react-redux"
import { updateAdd, updateSUB, updateSelect, updateAll } from "../../../redux/action-creators.js"
import "./IsLogin.less"
import Icons from "../../../assets/icon-font/icon.jsx"
import Check from "../check/check.jsx"
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
@connect(state => ({ carupdate: state.carupdate }), { updateAdd, updateSUB, updateSelect, updateAll })
class IsLogin extends Component {
  state = {

    money: 0,
    //是否全选
    isAll: true,

  }
  // 多选
  click = (index) => {
    console.log(11)
    this.props.updateSelect(index)
    this.moneySum()
    const isAll = this.props.carupdate.every((item) => {
      return item.iscount
    })
    this.setState({
      isAll
    })
  }
  // 加减
  // onSelect = (val) => {
  //   //设置对于的对象
  //   //  this.updateAdd(this.props.carupdate[index])
  //   console.log(val)
  // }
  add = (i) => {
    this.props.updateAdd(i)
    this.moneySum()
  }
  subtract = (i) => {
    this.props.updateSUB(i)
    this.moneySum()
  }
  moneySum = () => {

    const arr = this.props.carupdate.filter((item) => {
      return item.iscount
    })
    const money = arr.reduce((pre, cru) => {
      return cru.price * cru.num + pre
    }, 0)
    this.setState({
      money
    })
  }

  isAll = () => {

    const isAll = !this.state.isAll

    this.setState({
      isAll,

    })
    this.props.updateAll(isAll)
    this.moneySum()
  }
  componentDidMount () {
    this.moneySum()

  }
  render () {
    const { carupdate } = this.props
    return (
      <div>
        <List renderHeader={() => "别买了,再买钱包要哭了"} className="checkbox-list" >
          {/* {carupdate.map((i, index) => (
            <CheckboxItem key={index} onChange={() => this.onChange(index)} className="checkbox-item" defaultChecked={true}
              checked={this.state.ischec}
            > */}
          {carupdate.map((i, index) => (
            <div className="checkbox-container" key={index}>
              <div className="checkbox-input"> <Check count={i.iscount} click={() => { this.click(index) }}   ></Check>    </div>
              <img src="https://yanxuan-item.nosdn.127.net/a4aa937602c5ad5bd50fbc4fe825875f.png?type=webp&imageView&thumbnail=160x0&quality=75" alt="" />
              <div className="checkbox-collect">
                <p className="checkbox-title">{i.title}</p>
                <p className="checkbox-price">Y{i.price}</p>
              </div>
              <div className="cartcontrol">
                <div onClick={() => { this.add(i) }}>< Icons type="icon-jia"  ></Icons>
                </div>

                <div className="cart-count">{i.num}</div>

                <div onClick={() => { this.subtract(i) }}> < Icons type="icon-jian" ></Icons></div>
              </div>
            </div>
          ))}
          {/* 加减 */}

          {/* </CheckboxItem> */}

        </List>
        <Flex className="check-all">
          <Flex.Item>
            <AgreeItem data-seed="logId" onChange={this.isAll} checked={this.state.isAll}    >
              全选
              <div className="check-money "> 合计:Y{this.state.money}


              </div>
              <div className="check-right">
                下单
              </div>
            </AgreeItem>
          </Flex.Item>
        </Flex>
      </div>
    )
  }
}
export default IsLogin