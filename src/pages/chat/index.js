import React from 'react'
import { connect } from 'dva';
import styles from './index.less'
import head1 from '../../assets/WechatIMG34.jpeg'
import head2 from '../../assets/headImage/WechatIMG1.jpeg'
import yuyin from '../../assets/语音.png'
import smile from '../../assets/笑脸.png'
import { NavBar, Icon } from 'antd-mobile'
import router from 'umi/router';
const Chat = () => {
  const data = [
    { position: 0, content: '二货，你看你傻样！', time: "10:13" },
    { position: 1, content: '你才傻' },
    { position: 0, content: '二货，你看你傻样！' },
    { position: 1, content: '你才傻' },
    { position: 0, content: '二货，你看你傻样！' },
    { position: 1, content: '你才傻' },
    { position: 0, content: '二货，你看你傻样！' },
    { position: 1, content: '你才傻' },
    { position: 0, content: '二货，你看你傻样！' },
    { position: 1, content: '你才傻' },
  ]
  return (
    <div style={{ flex: 1, height: "100%", width: "100%", background: "#F5F5F5", paddingTop: 10 }}>
      {/* 导航栏 */}
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}
        rightContent={[
          <Icon key="1" type="ellipsis" onClick={() => { }} />,
        ]}
        style={{ background: "#F5F5F5", color: "black" }}
      >
        {`Sweetheart❤️恋人`}
      </NavBar>
      {data.map((itm, idx) => (
        <div key={idx}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{itm.time}</div>
          <div className={itm.position === 0 ? styles.leftd : styles._righted}>
            <img alt="" src={itm.position === 0 ? head1 : head2} className={styles.headImage} />
            <div className={styles._speech}>{itm.content}</div>
          </div>
        </div>
      ))}
      <div className={styles.bottom_container}>
        <div style={{ display: 'flex', height: '100%', justifyContent: "center", alignItems: "center" }}>
          <img alt="" src={yuyin} className={styles.bootom_icon} />
          <input className={styles.bootom_input} />
          <img alt="" src={smile} className={styles.bootom_icon} />
        </div>
      </div>
    </div>
  )
}
export default connect(({ chat }) => ({ chat }))(Chat);
