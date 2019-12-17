import React, { Component } from 'react';
import { Grid } from 'antd-mobile';
import PropTypes from 'prop-types'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  static propTypes = {
    griddata: PropTypes.array
  }
  componentWillMount = () => {
    if (this.props.griddata) {
      this.setState({
        data: this.props.griddata
      })
    }
  }

  // grid点击的回调函数
  clickGrid = (value) => {
    // window.console.log(value)
  }
  render () {
    const { data } = this.state
    return (
      <div>
        {/* <Grid data={Array.from(new Array(6)).map((_val, i) => ({
          icon: '//img20.360buyimg.com/jdphoto/jfs/t29203/199/995851527/8298/1acf8613/5cdbf3bdn9dece84f.png.webp',
          text: `name${i}`,
        }))} columnNum={3} onClick={() => { this.clickGrid('gggg') }} /> */}
        <Grid data={data.map((_val, i) => ({
          icon: _val.icon,
          text: _val.text,
          url: _val.url,
        }))}
          hasLine={false}
          columnNum={3}
          onClick={(el, index) => { window.console.log(el.url) }}
          itemStyle={{ width: "100px", height: "80px" }}
        />

      </div>
    );
  }
}

export default Demo
  ;