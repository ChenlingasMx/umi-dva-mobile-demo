import React, { Component } from 'react'
import { connect } from 'dva';
import router from 'umi/router';
import HeadCard from '../../components/HeaderCard/index'
import sexIcon from '../../assets/女.png'
import headImage from '../../assets/WechatIMG34.jpeg'
import friends from '../../assets/headImage/WechatIMG37.jpeg'
import friends2 from '../../assets/headImage/WechatIMG47.jpeg'
import friends3 from '../../assets/headImage/WechatIMG48.jpeg'
import video from '../../assets/视频 (1).png'
import message from '../../assets/聊天 (1).png'
import { List, Card, Button, WhiteSpace, NavBar, Icon } from 'antd-mobile'
import styles from './index.less'
@connect(({ detail }) => ({ detail }))
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    const props = {
      headImage: headImage,
      sexIcon: sexIcon,
      nickName: "Sweetheart❤恋人",
      name: "ღ",
      wxName: "micomxx",
      address: "江苏 南京"
    }
    return (
      <div style={{ flex: 1, height: '100%', width: "100%", background: "#F5F5F5" }}>
        {/* 导航栏 */}
        <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}
          rightContent={[
            <Icon key="1" type="ellipsis" onClick={() => { }} />,
          ]}
          style={{ background: "#F5F5F5", color: "black" }}
        />
        {/* 个人信息卡片 */}
        <HeadCard {...props} />
        {/* 列表 */}
        <List>
          <List.Item arrow="horizontal" onClick={() => { }}>备注和标签</List.Item>
          <List.Item arrow="horizontal" onClick={() => { }}>朋友圈权限</List.Item>
        </List>
        <WhiteSpace size="lg" />
        <Card>
          <Card.Body style={{ paddingTop: 20, paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onClick={() => router.push("/detailMoments")} >
              <div className={styles.real_name}>朋友圈</div>
              <img className={styles.head_logo} src={headImage} alt="" />
              <img className={styles.head_logo} src={friends} alt="" />
              <img className={styles.head_logo} src={friends2} alt="" />
              <img className={styles.head_logo} src={friends3} alt="" />
            </div>
          </Card.Body>
        </Card>
        <List>
          <List.Item arrow="horizontal" onClick={() => { }}>更多信息</List.Item>
        </List>
        <WhiteSpace size="lg" />
        {/* 按钮 */}
        <Button icon={<img src={message} alt="" />} className={styles.button_font} >发送消息</Button>
        <Button icon={<img src={video} alt="" />} className={styles.button_font} >音视频通话</Button>
      </div>
    )
  }
}
export default Detail;
