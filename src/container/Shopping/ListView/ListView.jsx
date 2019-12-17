import React, { Component } from 'react';
import { ListView } from 'antd-mobile';
import PropTypes from 'prop-types'

// 数据
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: 'McDonald\'s invites you',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: 'Eat the week',
    des: '不是所有的兼职汪都需要风吹日晒',
  },
];
// 行数
const NUM_ROWS = 20;
let pageIndex = 0;

// 设置数据
function genData (pIndex = 0) {
  // 数据总线
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      listviewdata: []
    };
  }

  static propTypes = {
    listviewdata: PropTypes.array
  }

  componentDidMount () {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
        listviewdata: this.props.listviewdata
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    // console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
        listviewdata: this.props.listviewdata
      });
    }, 1000);
  }

  render () {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.state.listviewdata.length - 1;
    //  每一行渲染的样式
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.listviewdata.length - 1;
      }
      const obj = this.state.listviewdata[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '10px 0' }}>
            <img style={{ height: '70px', marginRight: '15px', flex: 2 }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1, position: "relative", flex: 8 }}>
              {/* 商品详情 */}
              <div style={{ fontSize: '12px', marginBottom: '8px', fontWeight: '200' }}>{obj.des}</div>
              {/* 价格 */}
              <div><span style={{ position: "absolute", top: "45px", fontSize: '15px', color: '#FF6E27' }}>{obj.price}¥</span></div>
              {/* 旧的价格 */}
              <div><span style={{ position: "absolute", top: "50px", left: "50px", fontSize: '10px', color: '#B0C4DE' }}><s>{obj.oldPrice}¥</s></span></div>
              {/* 月销量 */}
              <div><span style={{ position: "absolute", top: "50px", right: "10px", fontSize: '10px', color: '#778899' }}>月销量{obj.sales}件</span></div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span style={{ fontSize: '15px', marginBottom: '8px', fontWeight: 'bold', color: "#000000" }}>优惠专区</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        // onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default Demo;