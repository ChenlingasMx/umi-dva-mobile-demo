import React from 'react'
import { Card,Icon } from 'antd-mobile';
import styles from './index.less'
import star from '../../assets/星星.png'
import more from '../../assets/更多,三个点.png'
import router from 'umi/router';
const HeadCard = ({
  headImage,// 头像
  name, // 昵称
  nickName, //备注
  wxName, // 微信号
  address,// 地区
  sexIcon,// 性别icon
  ...props
}) => {
  return (
    <div>
      <Card full {...props}>
        <Card.Body style={{ paddingTop: 20, paddingRight: 20, paddingLeft: 20, paddingBottom: 20 }}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:5}}>
            <div onClick={()=>router.goBack()}><Icon type="left" /></div>
            <img className={styles.sex_icon}  src={more} alt="" />
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img className={styles.head_logo} src={headImage} alt="" />
                <div>
                  <div className={styles.real_name}>
                    <span>Sweetheart❤恋人<img src={sexIcon} alt="" className={styles.sex_icon} /></span>
                  </div>
                  <div className={styles.en_name}>昵称:{name && name || 'ღ'}</div>
                  <div className={styles.en_name}>微信号:{wxName && wxName || 'micomxx'}</div>
                  <div className={styles.en_name}>地区:{address && address || '江苏 南京'}</div>
                </div>
              </div>
            </div>
            <div>
              <img className={styles.sex_icon}  src={star} alt="" />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default HeadCard