import React, { Component } from 'react'
import BaseLayout from './baseLayout';
import { TabBarData } from "inconf/layoutMenu";


//以下数组表示在当前页面展示的路由，使标签栏始终显示，
//如果在数组中去掉'/my'，BaseLayout有一个标签跳转到'/my',点击标签跳转时，会重定向到'/my'
//const ULR_NO_LAYOUT = ['/', '/home', '/class', '/my'];

class Index extends Component {
  initPath = () =>{
    const ULR_NO_LAYOUT=['/'];
    TabBarData.map((item) => {
      return ULR_NO_LAYOUT.push(item.url);
    });
    return ULR_NO_LAYOUT;
  }


  componentDidMount() {
  }
  renderBody = () => {
    const {location: {pathname}, children } = this.props;
    if (this.initPath().includes(pathname)) {
      return  (<BaseLayout {...this.props} />);
    }
    return (
	//<React.Fragment>等价于<></>
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}

export default Index;
