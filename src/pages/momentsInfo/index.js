import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './index.less'
import headImage from '../../assets/WechatIMG34.jpeg'
import headImage2 from '../../assets/headImage/WechatIMG1.jpeg'
import more from '../../assets/更多,三个点.png'
import love from '../../assets/爱心.png'
@connect(({ momentsInfo }) => ({ momentsInfo }))
class MomentsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#fff", padding: 10 }}>
        {/* 朋友圈内容 */}
        <div style={{ display: "flex" }}>
          <img alt="" src={headImage} className={styles.headImage} />
          <div style={{ paddingLeft: 10 }}>
            {/* 名字 */}
            <div className={styles.moments_font}>{`Sweetheart❤️恋人`}</div>
            {/* 内容 */}
            <div style={{ width: '100%', wordBreak: "break-all" }}>{`🍬`}</div>
            {/* 照片 */}
            <div style={{ width: '100%', wordBreak: "break-all" }}>
              <img alt="" src={headImage} className={styles.moments_image} />
              <img alt="" src={headImage2} className={styles.moments_image} />
              <img alt="" src={headImage} className={styles.moments_image} />
              <img alt="" src={headImage2} className={styles.moments_image} />
            </div>
            {/* 时间和更多 */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className={styles.date_font}>2021年1月16日 22:04</div>
              <img alt="" src={more} style={{ height: 20, width: 20 }} />
            </div>
          </div>
        </div>
        {/* 点赞和评论 */}
        <div style={{ background: "#F5F5F5" }}>
          {/* 点赞 */}
          <div style={{ width: "100%", padding: 10, display: "flex", alignContent: "center" }}>
            <img alt="" src={love} className={styles.icon_items} />
            <div style={{ width: '100%', wordBreak: "break-all", height: "100%" }}>
              <img alt="" src={headImage} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage2} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage2} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage2} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage2} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
              <img alt="" src={headImage2} style={{ width: 30, height: 30, borderRadius: 5, marginRight: 5,marginBottom:5 }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MomentsInfo;
