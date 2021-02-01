import React from 'react'
import { connect } from 'dva';
import router from 'umi/router';
import { List , WhiteSpace } from 'antd-mobile';
import moments from '../../assets/朋友圈 (1).png'
import styles from './index.less'
import headImage from '../../assets/WechatIMG34.jpeg'
import movie from '../../assets/视频 (2).png'
import yao from '../../assets/摇一摇.png'
import sao from '../../assets/扫一扫.png'
import look from '../../assets/看一看.png'
import search from '../../assets/搜一搜.png'
import zhibo from '../../assets/直播.png'
import buy from '../../assets/购物.png'
import youxi from '../../assets/游戏.png'
import wepy from '../../assets/小程序.png'
const Search = () => {

  return (
    <div style={{ flex: 1, height: "100%", width: "100%", background: "#F5F5F5" }}>
      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={moments} alt="" />}
          arrow="horizontal"
          onClick={() =>  router.push('/moments') }
          extra={<img src={headImage} alt="" style={{ borderRadius: 5 }} />}
        >
          朋友圈
        </List.Item>
      </List>
      <WhiteSpace />
      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={movie} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
          extra={
            <div>
              <img src={headImage} alt="" style={{ borderRadius: 5 }} />
              <span style={{textAlign:"center",fontSize:12,fontWeight:400,marginLeft:5}}>赞过</span>
            </div>
          }
        >
          视频号
        </List.Item>
      </List>
      <WhiteSpace />

      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={sao} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          扫一扫
        </List.Item>
        <List.Item
          thumb={<img src={yao} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          摇一摇
        </List.Item>
      </List>
      <WhiteSpace />

      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={look} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          看一看
        </List.Item>
        <List.Item
          thumb={<img src={search} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          搜一搜
        </List.Item>
      </List>
      <WhiteSpace />

      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={zhibo} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          直播和附近
        </List.Item>
      </List>
     <WhiteSpace />

      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={buy} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          购物
        </List.Item>
        <List.Item
          thumb={<img src={youxi} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          游戏
        </List.Item>
      </List>
      <WhiteSpace />

      <List className={styles.list_item}>
        <List.Item
          thumb={<img src={wepy} alt="" />}
          arrow="horizontal"
          onClick={() => { }}
        >
          小程序
        </List.Item>
      </List>
    </div>
  )
}
export default connect(({ search }) => ({ search }))(Search);
