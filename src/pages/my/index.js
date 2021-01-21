import React, { Component } from 'react'
import { connect } from 'dva';
import router from 'umi/router';
import HomeMyCard from '../../components/HomeMyCard/HomeMyCard'

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
      <div>
       <HomeMyCard />
      </div>
    )
  }
}
export default MyIndex;
