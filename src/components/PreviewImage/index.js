import React, { Component } from 'react'
import { Modal } from 'antd-mobile';
import currentImage from '../../assets/WechatIMG34.jpeg'
import styles from './index.less'
import scroll from '../../assets/旋转 .png'
class PreviewImage extends Component {
  // 取消预览，这里需要将下一次旋转的初始值0,rotate(0deg)
  cancelPreview = () => {
    this.props.setDate({
      type:"onClose",
      visible: false,
      current: 90,
      transStyle: 'rotate(' + 0 + 'deg)'
    })
  }
  //  点击选择  设置当前current旋转角度为上一次+90°
  translate = () => {
    const { current } = this.props
    this.props.setDate({
      type:"translate",
      current: (current + 90) % 360,
      transStyle: 'rotate(' + current + 'deg)'
    });
  }

  render() {
    const { visible, previewImage, transStyle } = this.props
    const currentSrc = previewImage ? previewImage : currentImage
    console.log('transStyle',transStyle)
    return (
        <Modal
          closable
          visible={visible}
          maskClosable={true}
          onClose={this.cancelPreview.bind(this)}
          className={styles.modal_card}
        >
          <div style={{ transform: transStyle}}>
            <img
              alt=""
              style={{ width: '100%', height: '100%' }}
              src={currentSrc}
            />
            <div style={{top:'50%',right:'50%',position:"absolute"}} onClick={this.translate.bind(this)}>
              <img alt="" src={scroll} style={{height:20,width:20}} />
            </div>
          </div>
        </Modal>
    )
  }
}
export default PreviewImage