import React, { Component } from 'react';
import './Search.less'
import { SearchBar } from 'antd-mobile';
import { Icon } from 'antd-mobile';
class Search extends Component {
  state = {
    value: '',
  };
  componentDidMount () {
  }
  onChange = (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
  }
  gotoBack = () => {
    this.props.history.goBack()
  }
  render () {
    return (
      <div>
        <span style={{ height: "44px", lineHeight: "44px", float: "left", }} onClick={this.gotoBack}>
          <Icon style={{ size: "lg", position: "relative", top: "50%", transform: "translateY(-50%)" }} type="left" />
        </span>
        <SearchBar
          // value={this.state.value}
          placeholder="搜索商品"
          onSubmit={value => console.log(value, 'onSubmit')}
          // onClear={value => console.log(value, 'onClear')}
          // onFocus={() => console.log('onFocus')}
          // onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          showCancelButton
          onChange={this.onChange}
        />
        <div className="search_container">
          <p className="text">热门搜索</p>
          <div >
            <div className="button active" >爱奇艺会员</div>
            <div className="button">9.9包邮</div>
            <div className="button">瑞幸咖啡5折</div>
            <div className="button">笔笔95折</div>
          </div>
          <div>
            <p className="text">历史搜索</p>
            <div >
              <div className="button">茶π</div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Search;