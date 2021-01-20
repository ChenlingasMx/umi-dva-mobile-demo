import React, { Component } from 'react';
import { connect } from 'dva';
import { SearchBar, Modal, Flex } from 'antd-mobile';
import Link from 'umi/link';
import router from 'umi/router';

@connect(({ home }) => ({ home }))
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
     <div>我是首页</div>
    )
  }
}


export default Home;
