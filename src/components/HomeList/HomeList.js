import React from 'react'
import { connect } from 'dva';
import { List } from 'antd-mobile';
import router from 'umi/router';
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
          onClick={() => { 
            if(itm.title==='支付'){
              router.push('/pay')
            }
          }}
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