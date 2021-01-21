import React from 'react'
import { connect } from 'dva';
import { List } from 'antd-mobile';
const HomeList = ({
  my: { homeList }
}) => {
  return (
    <List className="my-list">
      {homeList.map(itm => (
        <List.Item
          key={itm.id}
          arrow="horizontal"
          thumb={<img src={itm.img} alt="" />}
          multipleLine
          onClick={() => { }}
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          {itm.title}
        </List.Item>
      ))}
    </List>
  )
}
export default connect(state => ({
  my: state.my,
}))(HomeList)