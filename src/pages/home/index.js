import React, { Component } from 'react';
import { connect } from 'dva';
import { List, SearchBar } from 'antd-mobile'
import styles from './index.less'
import head from '../../assets/WechatIMG34.jpeg'
import head2 from '../../assets/headImage/WechatIMG37.jpeg'
import head3 from '../../assets/headImage/WechatIMG48.jpeg'
import head4 from '../../assets/headImage/WechatIMG47.jpeg'
@connect(({ home, login }) => ({ home, login }))
class Home extends Component {
  state = {
    imgList: [
      {
        img:head,
        name:"Sweetheart❤恋人"
      },
      {
        img:head2,
        name:"🌞"
      },
      {
        img:head3,
        name:"🌛"
      },
      {
        img:head4,
        name:"✨"
      },
      {
        img:head2,
        name:"🌟"
      },
      {
        img:head,
        name:"Sweet"
      },
      {
        img:head2,
        name:"Heart"
      },
      {
        img:head3,
        name:"Love"
      },
      {
        img:head4,
        name:"❤️"
      },
      {
        img:head2,
        name:"🌟"
      },
    ]
  }
  render() {
    return (
      <div style={{ flex: 1, height: "100%", width: "100%", background: "#F5F5F5" }}>
        {/* 搜索栏 */}
        <SearchBar placeholder="搜索" maxLength={8}  />
        {/* 卡片 */}
        {this.state.imgList.map((itm, index) => (
          <List  key={index} className={styles.list_item}>
            <List.Item
              thumb={<img src={itm.img} alt="" className={styles.headImage} />}
              extra={'15:14'}
            >
              <div>
                <span style={{ fontSize: 20 }}>{itm.name}</span>
                <div className={styles.en_name}>{`我在上班❤️`}</div>
              </div>
            </List.Item>
          </List>
        ))}
      </div>
    )
  }
}


export default Home;
