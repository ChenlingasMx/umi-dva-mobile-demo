import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './index.less'
import { Card } from 'antd-mobile'
import backgroud from '../../assets/headImage/WechatIMG1.jpeg'
import headImage from '../../assets/WechatIMG34.jpeg'
import headImage2 from '../../assets/headImage/WechatIMG37.jpeg'
import headImage3 from '../../assets/headImage/WechatIMG38.jpeg'
import set from '../../assets/更多,三个点.png'
@connect(({ moments }) => ({ moments }))
class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#fff" }}>
        {/* 朋友圈背景 */}
        <img src={backgroud} alt="" className={styles.backgroud_image} />
        {/* 头像-名字 */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", top: "34.5%", right: 10, zIndex: 99 }}>
          <div className={styles.name_font}>Sweetheart❤恋人</div>
          <img alt="" src={headImage} className={styles.head_Image} />
        </div>
        {/* 列表 */}
        <Card>
          <Card.Body>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* 头像 */}
              <img alt="" src={headImage2} className={styles.head_Image} />
              <div style={{ marginLeft: 10 }}>
                {/* 名字 */}
                <div className={styles.moments_font}>Sweetheart❤恋人</div>
                {/* 内容 */}
                <div style={{ wordBreak: "break-all", width: "100%" }}>❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤</div>
                {/* 图片 */}
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: 'row', width: "60%" }}>
                  <img alt="" src={headImage} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                  <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                  <img alt="" src={headImage3} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                  <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                </div>
                {/* 底部 */}
                <div style={{ marginTop: 5,display:"flex",justifyContent:"space-between" }}>
                  <div style={{ color: "#A9A9A9" }}>1小时</div>
                  <img alt="" src={set} style={{ width: 20, height: 20 }} />
                </div>
                {/* 留言 */}
                <div className={styles.remark_container}>
                    <span className={styles.remark_font}>micomxx:</span>
                    <span style={{marginLeft:5}}>❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {/* 头像 */}
              <img alt="" src={headImage} className={styles.head_Image} />
              <div style={{ marginLeft: 10 }}>
                {/* 名字 */}
                <div className={styles.moments_font}>Sweetheart❤恋人</div>
                {/* 内容 */}
                <div style={{ wordBreak: "break-all", width: "100%" }}>wx❤mx</div>
                {/* 图片 */}
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: 'row', width: "60%" }}>
                  <img alt="" src={headImage} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                  <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                  <img alt="" src={headImage3} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                  <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} />
                </div>
                {/* 底部 */}
                <div style={{ marginTop: 5,display:"flex",justifyContent:"space-between" }}>
                  <div style={{ color: "#A9A9A9" }}>1小时</div>
                  <img alt="" src={set} style={{ width: 20, height: 20 }} />
                </div>
                {/* 留言 */}
                <div className={styles.remark_container}>
                    <span className={styles.remark_font}>micomxx:</span>
                    <span style={{marginLeft:5}}>wx❤mx</span>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
export default Moments;
