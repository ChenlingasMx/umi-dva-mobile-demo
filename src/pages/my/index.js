import React, { Component } from 'react'
import { connect } from 'dva';
import { WhiteSpace } from 'antd-mobile';
import HomeMyCard from '../../components/HomeMyCard/HomeMyCard'
import HomeList from '../../components/HomeList/HomeList'
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
      <div style={{ background: '#F5F5F5', width: '100%', height: '100%' }}>
        <HomeMyCard />
        <WhiteSpace size="xl" />
        <HomeList />
      </div>
    )
  }
}
export default MyIndex;
