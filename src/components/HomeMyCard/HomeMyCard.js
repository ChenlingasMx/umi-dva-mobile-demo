import React from 'react'
import { connect } from 'dva';
import router from 'umi/router';
import { Card, Flex, Icon } from 'antd-mobile';
import styles from './index.less'
const HomeMyCard = ({
  my: { headImage }
}) => {
  return (
    <div>
      <Card full>
        <Card.Body style={{ padding: 20 }}>
          <Flex justify="around">
            {/* 左侧头像 */}
            <Flex.Item>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img className={styles.head_logo} src={headImage} alt="" />
                <div>
                  <div className={styles.real_name}>宋哈娜</div>
                  <div className={styles.en_name}>EnName:dva</div>
                </div>
              </div>
            </Flex.Item>
            {/* 右侧退出 */}
            <Flex.Item>
              <div style={{ display: "flow", float: "right" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                  <span className={styles.log_out} onClick={() => router.push('/login')}>退出</span>
                  <Icon type="right" />
                </div>
              </div>
            </Flex.Item>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  )
}
export default connect(state => ({
  my: state.my,
}))(HomeMyCard)