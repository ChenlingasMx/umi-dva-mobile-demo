import React from 'react'
import { Card} from 'antd-mobile';
import styles from './index.less'
const HeadCard = ({
  headImage,
  name,
  wxName,
  ...props
}) => {
  return (
    <div>
      <Card full {...props}>
        <Card.Body style={{ paddingTop:30,paddingRight:20,paddingLeft:20,paddingBottom:30 }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img className={styles.head_logo} src={headImage} alt="" />
                <div>
                  <div className={styles.real_name}>{name&&name||'ღ'}</div>
                  <div className={styles.en_name}>微信号:{wxName&&wxName||'micomxx'}</div>
                </div>
              </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default HeadCard