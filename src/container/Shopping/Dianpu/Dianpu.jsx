import React, { Component } from 'react';
import dianpu from '../../../assets/img/dianpu.jpg'

import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
class Dianpu extends Component {

  static propTypes = {
    dianpu: PropTypes.array
  }
  gotoPuzi (value) {
    // 跳转到对应的店铺界面
    this.props.history.push('/shopping/store')
  }
  render () {
    const dianpudata = this.props.dianpu
    return (
      <div style={{ width: '100%', margin: '10px 5px' }}>
        <ul>
          {
            dianpudata.map((item, index) => {
              return (
                <li key={index}>
                  <p style={{ fontSize: '18px', fontWeight: '700', margin: '10px 10px' }}>{item.name}</p>
                  <div style={{ width: '100%', height: '330px', overflow: 'hidden', }}>
                    <img style={{ width: '375px', height: '330px' }} src={dianpu} alt="" onClick={() => { this.gotoPuzi(item.url) }} />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Dianpu);
