import React, { Component } from 'react'
import { connect } from 'dva';
import { WhiteSpace, Grid, NavBar, Icon } from 'antd-mobile'
import router from 'umi/router';
import styles from './index.less'
import card from '../../assets/卡包 (1).png'
import bankCard from '../../assets/svg/card.png'
import checked from '../../assets/收付款.png'
import momeny from '../../assets/钱.png'
import licai from '../../assets/理财.png'
import phone from '../../assets/手机充值实.png'
import qq from '../../assets/qq.png'
import jingdong from '../../assets/京东icon-01.png'
import meituan from '../../assets/美团外卖.png'
import didi from '../../assets/滴滴出行.png'
@connect(({ pay }) => ({ pay }))
class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    const data = [
      { text: "信用卡还卡", icon: bankCard },
      { text: "微粒贷借钱", icon: momeny },
      { text: "理财通", icon: licai },
    ]
    const data2 = [
      { text: "手机充值", icon: phone },
      { text: "qq", icon: qq },
    ]
    const data3 = [
      { text: "京东购物", icon: jingdong },
      { text: "美团外卖", icon: meituan },
      { text: "滴滴出行", icon: didi },
    ]
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#F5F5F5", padding: 10 }}>
        {/* 导航栏 */}
        <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}
          rightContent={[
            <Icon key="1" type="ellipsis" onClick={() => { }} />,
          ]}
          style={{ background: "#F5F5F5", color: "black" }}
        />
        {/* 顶部卡片 */}
        <div className={styles.top_container}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* 收付款 */}
            <div>
              <div style={{ textAlign: 'center' }}>
                <img alt="" src={checked} className={styles.icon} />
              </div>
              <div className={styles.top_font}>收付款</div>
            </div>
            {/* 钱包 */}
            <div>
              <div style={{ textAlign: 'center' }}>
                <img alt="" src={card} className={styles.icon} />
              </div>
              <div className={styles.top_font} style={{ textAlign: "center" }}>钱包</div>
              <div style={{ textAlign: 'center', fontSize: 12, color: "#fff", fontWeight: "bolder" }}>{`$102.92`}</div>
            </div>
          </div>
        </div>
        <WhiteSpace />
        {/* 金融理财 */}
        <div className={styles.center_container}>
          <div style={{ color: "#A9A9A9", fontSize: 14 }}>金融理财</div>
          <Grid data={data} activeStyle={false} hasLine={false} />
        </div>
        <WhiteSpace />
        {/* 生活服务 */}
        <div className={styles.center_container}>
          <div style={{ color: "#A9A9A9", fontSize: 14 }}>生活服务</div>
          <Grid data={data2} activeStyle={false} hasLine={false} />
        </div>
        <WhiteSpace />
        {/* 交通出行 */}
        <div className={styles.center_container}>
          <div style={{ color: "#A9A9A9", fontSize: 14 }}>购物消费</div>
          <Grid data={data3} activeStyle={false} hasLine={false} />
        </div>
      </div>
    )
  }
}
export default Pay;
