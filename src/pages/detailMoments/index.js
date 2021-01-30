import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './index.less'
import Scroll from 'react-scroll-mobile'
import { NavBar, Icon } from 'antd-mobile'
import router from 'umi/router';
import backgroud from '../../assets/headImage/WechatIMG1.jpeg'
import headImage from '../../assets/WechatIMG34.jpeg'
import headImage2 from '../../assets/headImage/WechatIMG37.jpeg'
import headImage3 from '../../assets/headImage/WechatIMG38.jpeg'
import PreviewImage from '../../components/PreviewImage/index'
@connect(({ detailMoments }) => ({ detailMoments }))
class DetailMoments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      previewImage: '',
      current: 90,
      transStyle: '',
    }
  }
  componentDidMount() {
  }
  preview = (src) => {
    this.setState({
      visible: true,
      previewImage: src
    })
  }
  renderChartsMomentsList = () => {
    const { detailMoments: { chartsData } } = this.props
    let content = chartsData.map(itm => {
      return (
        <div style={{ marginTop: 30, padding: 10 }} key={itm.id}>
          <div style={{ fontFamily: "cursive", fontWeight: "bolder", fontSize: 28, marginBottom: 20 }}>{`${itm.year}年`}</div>
          {itm.children.map(item => {
            return (
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginBottom: 20 }} key={item.id}>
                {/* 日期 */}
                <div>
                  <span style={{ fontFamily: "cursive", fontWeight: "bolder", fontSize: 20 }}>{item.day}</span>
                  <span style={{ fontFamily: "cursive", fontWeight: 400, fontSize: 14 }}>{item.year}</span>
                </div>
                {/* 照片 */}
                <div style={{ marginLeft: 10, width: 110, wordBreak: "break-all" }}>
                  <img alt="" src={headImage} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage)} />
                  <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage2)} />
                  <img alt="" src={headImage3} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage3)} />
                  <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage2)} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>{item.content}</div>
                  <div style={{ fontSize: 12, color: "#A9A9A9" }}>{'共四张'}</div>
                </div>
              </div>
            )
          }
          )}
        </div>
      )
    })
    return content
  }
  render() {
    const { visible, previewImage, current, transStyle } = this.state
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#fff", position: "absolute" }}>
        <Scroll
          noMore={false}
          backTop
          pullDownRefresh={async () => { }}
          pullUpLoad={() => { }}
        >
          {/* 导航栏 */}
          <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => router.goBack()}
            rightContent={[
              <Icon key="1" type="ellipsis" onClick={() => { }} />,
            ]}
            style={{ background: "#F5F5F5", color: "black" }}
          />
          {/* 朋友圈背景 */}
          <img src={backgroud} alt="" className={styles.backgroud_image} />
          {/* 头像-名字 */}
          <div style={{ position: 'absolute', top: "46.5%", right: 10, zIndex: 99 }}>
            <span className={styles.name_font}>Sweetheart❤恋人</span>
            <span><img alt="" src={headImage} className={styles.head_Image} /></span>
            <div style={{position:"absolute",right:0,marginTop:10}}>{`糕糕一只桃心丸❤️`}</div>
          </div>
          {/* 列表 */}
          {this.renderChartsMomentsList()}
        </Scroll>
        <PreviewImage
          visible={visible}
          previewImage={previewImage}
          current={current}
          transStyle={transStyle}
          setDate={(value) => {
            const { visible, current, transStyle, type } = value
            this.setState({
              visible: type === 'onClose' ? visible : true,
              current: current,
              transStyle: transStyle
            })
          }}
        />
      </div>
    )
  }
}
export default DetailMoments;
