import React, { Component } from 'react';
import { WingBlank, Carousel } from 'antd-mobile';
import PropTypes from 'prop-types'

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      imgHeight: '',

    };
  }
  static propTypes = {
    swiperdata: PropTypes.array
  }
  // 加载完调用函数
  componentDidMount = () => {

    setTimeout(() => {
      this.setState({
        data: this.props.swiperdata
      });
    }, 100);
  }
  render () {
    return (
      <div>
        <WingBlank>
          <Carousel className="space-carousel"
            autoplay={true}
            infinite={true}
          // 改变之前与改变之后调用函数
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}

export default Swiper;