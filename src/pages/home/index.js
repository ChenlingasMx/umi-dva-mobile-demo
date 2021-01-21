import React, { Component } from 'react';
import { connect } from 'dva';
@connect(({ home, login }) => ({ home, login }))
class Home extends Component {
  render() {
    return (
      <div>我是首页</div>
    )
  }
}


export default Home;
