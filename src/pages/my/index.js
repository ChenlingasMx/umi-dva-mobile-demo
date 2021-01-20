import React, { Component } from 'react'
import { connect } from 'dva';
import router from 'umi/router';

@connect(({ my }) => ({ my }))
class MyIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div onClick={()=>router.push('/login')} >
        登陆/注册
      </div>
    )
  }
}
export default MyIndex;
