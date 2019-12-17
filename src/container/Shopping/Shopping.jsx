import React, { Component } from 'react';
import './Shopping.less'
// 引入组件
import First from './First/First.jsx'
import { SearchBar, WhiteSpace, Tabs } from 'antd-mobile';
import { reqHomepage } from '../../api/index.js'
import BScroll from 'better-scroll'

class Shopping extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tabs: [],
      shopping_data: {}
    };
  }
  // componentDidMount () {
  //   this.scroll = new BScroll('.tarBar', {
  //     scrollY: true,
  //     click: true
  //   })
  //   this.scroll.refresh()
  // }

  // 加载完调用函数
  componentWillMount = async () => {
    // 接收App路由传过来的参数
    // console.log(this.props.location.state);
    // 发送ajax请求服务器购物界面所有数据
    const data = await reqHomepage()
    console.log(data);
    if (data.code === 0) {
      this.setState({
        shopping_data: data.data
      })
    }
  }
  // 下面几个预留的方法
  onChange = (value) => {
    this.setState({ value });
  };
  onSubmit = () => {

  }
  onFocus = () => {
    // console.log('获取焦点');
    this.props.history.push('/shopping/search')
  }
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    // this.manualFocusInst.focus();
  }


  // tab下面展示的界面
  renderContent = tab => (<div style={{ overflow: 'hidden', }}>
    <div>{tab.data ? <First data={tab.data ? tab.data : null} /> : null}</div>
  </div>);

  render () {
    // 首页tabs标签内容
    const { shopping_data } = this.state
    if (shopping_data) {
      // console.log('shopping_data.homepage', shopping_data.homepage);
    }
    const tabs = [
      { title: '首页', data: shopping_data.homepage, },
      { title: '品牌馆', data: {} },
      { title: '食品', data: shopping_data.foods },
      { title: '洗护', data: {} },
      { title: '家具', data: {} },
      { title: '手机', data: shopping_data.phone },
      { title: '家电', data: {} },
      { title: '美妆护肤', data: {} },
      { title: '生鲜', data: shopping_data.fresh },
    ];

    return (
      <div id="shopping_container" >
        <SearchBar
          value={this.state.value}
          placeholder="搜你想要的"
          maxLength={20}
          style={{ backgroundColor: "#FF4245" }}
          onClear={value => console.log(value, 'onClear')}
          onSubmit={value => console.log(value, 'onSubmit')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
          onFocus={this.onFocus}
        />

        <div className='tarBar'>
          <WhiteSpace />
          <Tabs
            tabs={tabs}
            tabBarInactiveTextColor={'black'}
            tabBarActiveTextColor={'red'}
            swipeable={false}
            tabBarUnderlineStyle={React.CSSProperties = {
              // borderBottomWidth: '1px',
              // borderBottomColor: 'red'
              borderColor: 'red',
              backgroundColor: 'red'
            }}
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}
          >
            {this.renderContent}
          </Tabs>
          <WhiteSpace />
        </div>
      </div >
    );
  }
}

export default Shopping;