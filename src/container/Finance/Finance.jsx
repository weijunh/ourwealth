import React, { Component } from 'react';
import './Finance.less'
class Finance extends Component {
  render () {
    return (
      <div className="treasure">
        {/*  <svg className="svg-icon" aria-hidden="true">
          <use xlinkHref="icon-quanbu">icon-quanbu</use>
        </svg> */}
        <div className="header">
          <p className="header-p">
            <i className="iconfont">&#xe658;</i>
            <span>理财</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe78c;</i>
            <span>基金</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe626;</i>
            <span>黄金</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe61e;</i>
            <span>保险</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe69c;</i>
            <span>理财顾问</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe60d;</i>
            <span>活期富</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe611;</i>
            <span>外汇</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe61f;</i>
            <span>定期存款</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe64d;</i>
            <span>攒钱计划</span>
          </p>
          <p className="header-p">
            <i className="iconfont">&#xe628;</i>
            <span>全部</span>
          </p>
        </div>
        <div className="con">
          <div className="con-header">
            <h3 className="header-p">主力推荐</h3>
            <ul className="header-ul1">
              <li className="header-ul1-1">
                <span className="header-ul1-li1">活期</span>
                <span className="header-ul1-li2">支持实时提现</span>
              </li>
              <li className="header-ul1-1">
                <span className="header-ul1-li1">理财神器</span>
                <span className="header-ul1-li2">速配最优理财</span>
              </li>
              <li className="header-ul1-1">
                <span className="header-ul1-li1">美元存款</span>
                <span className="header-ul1-li2">年利率最高3%</span>
              </li>
            </ul>
          </div>
          <div className="con-con">
            <h3 className="con-p2">
              <span>现金管理</span>
              <i>></i>
            </h3>
            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">2.85%</p>
                <span className="con-ul2-li-2">近7日年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">随时转出0手续费</span>
                <span className="con-ul2-li2-2">活期富</span>
                <span className="con-ul2-li2-3">基金</span>
              </li>
            </ul>

            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">3.06%</p>
                <span className="con-ul2-li-2">最新年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">最快T+0到账，热销</span>
                <span className="con-ul2-li2-2">现金添利</span>
                <span className="con-ul2-li2-3">理财</span>
              </li>
            </ul>
            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">2.20%</p>
                <span className="con-ul2-li-2">年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">1万起</span>
                <span className="con-ul2-li2-2">天添息步步盈结构性存款</span>
                <span className="con-ul2-li2-3">理财</span>
              </li>
            </ul>
          </div>
          <div className="con-con">
            <h3 className="con-p2">
              <span>稳健投资</span>
              <i>></i>
            </h3>
            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">2.85%</p>
                <span className="con-ul2-li-2">近7日年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">随时转出0手续费</span>
                <span className="con-ul2-li2-2">活期富</span>
                <span className="con-ul2-li2-3">基金</span>
              </li>
            </ul>

            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">3.06%</p>
                <span className="con-ul2-li-2">最新年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">最快T+0到账，热销</span>
                <span className="con-ul2-li2-2">现金添利</span>
                <span className="con-ul2-li2-3">理财</span>
              </li>
            </ul>
            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">2.20%</p>
                <span className="con-ul2-li-2">年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">1万起</span>
                <span className="con-ul2-li2-2">天添息步步盈结构性存款</span>
                <span className="con-ul2-li2-3">理财</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="con">
          <div className="con-header">
            <h3 className="header-p">特色专区</h3>
            <ul className="header-ul1">
              <li className="header-ul1-1">
                <span className="header-ul1-li1">活期</span>
                <span className="header-ul1-li2">支持实时提现</span>
              </li>
              <li className="header-ul1-1">
                <span className="header-ul1-li1">理财神器</span>
                <span className="header-ul1-li2">速配最优理财</span>
              </li>
              <li className="header-ul1-1">
                <span className="header-ul1-li1">美元存款</span>
                <span className="header-ul1-li2">年利率最高3%</span>
              </li>
            </ul>
          </div>
          <div className="con-con">
            <h3 className="con-p2">
              <span>进取投资</span>
              <i>></i>
            </h3>
            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">2.85%</p>
                <span className="con-ul2-li-2">近7日年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">随时转出0手续费</span>
                <span className="con-ul2-li2-2">活期富</span>
                <span className="con-ul2-li2-3">基金</span>
              </li>
            </ul>

            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">3.06%</p>
                <span className="con-ul2-li-2">最新年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">最快T+0到账，热销</span>
                <span className="con-ul2-li2-2">现金添利</span>
                <span className="con-ul2-li2-3">理财</span>
              </li>
            </ul>
            <ul className="con-ul2">
              <li className="con-ul2-li">
                <p className="con-ul2-li-1">2.20%</p>
                <span className="con-ul2-li-2">年化收益率</span>
              </li>
              <li className="con-ul2-li2">
                <span className="con-ul2-li2-1">1万起</span>
                <span className="con-ul2-li2-2">天添息步步盈结构性存款</span>
                <span className="con-ul2-li2-3">理财</span>
              </li>
            </ul>
          </div>
          <div className="footer-con">
            <h3 className="footer-p2">风险保障</h3>
            <ul className="footer-ul2">
              <li className="footer-ul2-li2">
                <p className="footer-ul2-li-1">百万医疗保障...</p>
                <span className="footer-ul2-li-2">保险</span>
                <p className="footer-ul2-li-3">￥<span >0.65</span></p>
                <span className="footer-ul2-li-4">起投金额</span>
                <span className="footer-ul2-li-5">安嘉保 百万住院医疗</span>
              </li>
              <li className="footer-ul2-li2">
                <p className="footer-ul2-li-1">百万医疗保障...</p>
                <span className="footer-ul2-li-2">保险</span>
                <p className="footer-ul2-li-3">￥<span >0.65</span></p>
                <span className="footer-ul2-li-4">起投金额</span>
                <span className="footer-ul2-li-5">安嘉保 百万住院医疗</span>
              </li>

            </ul>
          </div>
        </div>

      </div>

    );
  }
}

export default Finance;