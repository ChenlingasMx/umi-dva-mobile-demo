import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './index.less'
import Scroll from 'react-scroll-mobile'
import { Card, Flex } from 'antd-mobile'
import backgroud from '../../assets/headImage/WechatIMG1.jpeg'
import headImage from '../../assets/WechatIMG34.jpeg'
import headImage2 from '../../assets/headImage/WechatIMG37.jpeg'
import headImage3 from '../../assets/headImage/WechatIMG38.jpeg'
import set from '../../assets/更多,三个点.png'
import PreviewImage from '../../components/PreviewImage/index'
@connect(({ moments }) => ({ moments }))
class Moments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      previewImage: '',
      current: 90,
      transStyle: '',
      dataSource: [
        { id: 1, name: 'Sweetheart❤恋人', nickName: 'micomxx', content: '❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️', hours: 1 },
        { id: 2, name: 'Sweetheart❤恋人', nickName: 'micomxx', content: 'wx❤️mx&&mx❤️wx', hours: 2 },
      ]
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
  render() {
    const { visible, previewImage, current, transStyle, dataSource } = this.state
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#fff", position: "absolute" }}>
        <Scroll
          noMore={false}
          backTop
          pullDownRefresh={async () => { }}
          pullUpLoad={() => { }}
        >
          {/* 朋友圈背景 */}
          <img src={backgroud} alt="" className={styles.backgroud_image} />
          {/* 头像-名字 */}
          <div style={{ position: 'absolute', top: "34.5%", right: 10, zIndex: 99 }}>
            <span className={styles.name_font}>Sweetheart❤恋人</span>
            <span><img alt="" src={headImage} className={styles.head_Image} /></span>
          </div>
          {/* 列表 */}
          {dataSource.map(itm => (
            <Card>
              <Card.Body>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  {/* 头像 */}
                  <img alt="" src={headImage2} className={styles.head_Image} />
                  <div style={{ marginLeft: 10,width:"100%" }}>
                    {/* 名字 */}
                    <div className={styles.moments_font}>{itm.name}</div>
                    {/* 内容 */}
                    <div style={{ wordBreak: "break-all", width: "100%" }}>{itm.content}</div>
                    {/* 图片 */}
                    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: 'row', width: "60%" }}>
                      <img alt="" src={headImage} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage)} />
                      <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage2)} />
                      <img alt="" src={headImage3} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage3)} />
                      <img alt="" src={headImage2} className={styles.head_Image} style={{ marginRight: 5, marginBottom: 5 }} onClick={this.preview.bind(this, headImage2)} />
                    </div>
                    {/* 底部 */}
                    <div style={{ marginTop: 5, display: "flex", justifyContent: "space-between",width:"100%" }}>
                      <div style={{ color: "#A9A9A9" }}>{`${itm.hours}小时`}</div>
                      <img alt="" src={set} style={{ width: 20, height: 20 }} />
                    </div>
                    {/* 留言 */}
                    <div className={styles.remark_container}>
                      <span className={styles.remark_font}>{`${itm.nickName}:`}</span>
                      <span style={{ marginLeft: 5 }}>{itm.content}</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
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
export default Moments;
