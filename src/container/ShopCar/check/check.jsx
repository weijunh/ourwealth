import React, { Component } from 'react'

export default class Check extends Component {

  render () {
    const { count, click } = this.props
    return (
      <span className={count ? "" : "active"} onClick={click}  > </span>
    )
  }
}
