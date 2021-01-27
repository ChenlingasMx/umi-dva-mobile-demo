import React, { Component } from 'react'
import { connect } from 'dva';
@connect(({ demo }) => ({ demo }))
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
          我是demo页面
      </div>
    )
  }
}
export default Demo;
