import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, SearchBar } from 'antd-mobile'
import styles from './index.less'
import head from '../../assets/WechatIMG34.jpeg'
import head2 from '../../assets/headImage/WechatIMG37.jpeg'
import sex from '../../assets/女.png'
import chat from '../../assets/聊天 (1).png'
@connect(({ home, login }) => ({ home, login }))
class Home extends Component {
  state = {
    imgList: [head, head2]
  }
  CardBody = () => {
    return (
      <>
        <div>
          <span style={{ paddingRight: 10 }} className={styles.en_name} >备 注</span>
          <span className={styles.font_color}>Sweetheart❤恋人</span>
        </div>
        <div style={{ paddingTop: 10 }}>
          <span style={{ paddingRight: 10 }} className={styles.en_name} >地 区</span>
          <span className={styles.font_color}>江苏 南京</span>
        </div>
        <div style={{ paddingTop: 10 }}>
          <span style={{ paddingRight: 10 }} className={styles.en_name} >来 源</span>
          <span className={styles.font_color}>通过名片分享添加</span>
        </div>
      </>
    )
  }

  render() {
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#F5F5F5", paddingLeft: 20, paddingRight: 20 }}>
        {/* 搜索栏 */}
        <SearchBar placeholder="" maxLength={8} />
        {/* 卡片 */}
        {this.state.imgList.map((itm, index) => (
          <Card style={{ marginBottom: 20 }} key={index}>
            <Card.Header
              style={{ padding: 20 }}
              title={
                <div>
                  <span style={{ fontSize: 20 }}>ღ<img src={sex} alt="" className={styles.sex_icon} /></span>
                  <div className={styles.en_name}>微信号: micomxx</div>
                </div>
              }
              thumb={<img src={itm} alt="" className={styles.headImage} />}
            />
            <Card.Body style={{ padding: 20 }}>
              {this.CardBody()}
            </Card.Body>
            <Card.Footer extra={
              <div>
                <span><img src={chat} alt="" className={styles.sex_icon} /></span>
              </div>
            } />
          </Card>
        ))}
      </div>
    )
  }
}


export default Home;
