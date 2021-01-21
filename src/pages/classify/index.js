import React, { Component } from 'react'
import { List } from 'antd-mobile'
import { connect } from 'dva';
import styles from './index.less'
@connect(({ classify }) => ({ classify }))

class ClassPage extends Component {
  componentDidMount() {
    this.handleList()
  }

  handleList = () => {
    const { classify: { HOT_NAME, HOT_SINGER_LEN, list } } = this.props
    //歌手列表渲染
    let map = {
      hot: {
        title: HOT_NAME,
        items: []
      }
    }
    list.forEach((item, index) => {
      if (index < HOT_SINGER_LEN) {
        map.hot.items.push({
          name: item.name,
          avatar: item.img
        })
      }
      const key = item.index
      if (!map[key]) {
        map[key] = {
          title: key,
          items: []
        }
      }
      map[key].items.push({
        name: item.name,
        avatar: item.img
      })
    })
    // 为了得到有序列表，我们需要处理 map
    let ret = []
    let hot = []
    for (let key in map) {
      let val = map[key]
      if (val.title.match(/[a-zA-Z]/)) {
        ret.push(val)
      } else if (val.title === HOT_NAME) {
        hot.push(val)
      }
    }
    ret.sort((a, b) => {
      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    })
    return this.props.dispatch({
      type: 'classify/updateData',
      payload: {
        logs: hot.concat(ret)
      }
    })
  }

  // 遍历通讯录列表
  renderList = () => {
    const { classify: { list } } = this.props
    let items = (
      <>
        {
          list.map((itm, index) => (
            <div key={index}>
              <div style={{ paddingLeft: 15, fontWeight: 500, fontFamily: "cursive", background: "#F5F5F5" }} >{itm.index}</div>
              {itm.children.map((val,index)=>(
                 <List>
                    <List.Item
                      thumb={<img src={val.img} alt="" className={styles.headImage} />}
                      arrow="horizontal"
                      onClick={() => { }}
                      key={val.id}
                    >
                      {val.name}
                    </List.Item>
                  </List>
              ))}
            </div>
          ))
        }
      </>
    )
    return items
  }

  render() {
    const { classify: { logs, currentIndex } } = this.props
    return (
      <div className={styles.log_list}>
        {this.renderList()}
        {/* 侧边字母导航 */}
        <div className={styles.list_shortcut}>
          {
            logs.map((item, index) => (
              <div className={currentIndex === index ? styles.current : null} key={index} >{item.title}</div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default ClassPage;
