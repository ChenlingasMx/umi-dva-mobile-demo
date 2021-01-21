import React, { useEffect, useState } from 'react'
import { List, SearchBar, WhiteSpace } from 'antd-mobile'
import { connect } from 'dva';
import styles from './index.less'
import Scroll from 'react-scroll-mobile'

const ClassPage = ({
  dispatch,
  classify: { logs, currentIndex, HOT_NAME, HOT_SINGER_LEN, list }
}) => {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    handleList()
  }, [])

  const handleList = () => {
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
    return dispatch({
      type: 'classify/updateData',
      payload: {
        logs: hot.concat(ret)
      }
    })
  }
  // 模拟请求数据
  const timeout = delay => new Promise(resolve => setTimeout(resolve, delay));
  // 遍历通讯录列表
  const renderList = () => {
    let items = (
      <>
        <Scroll
          noMore={status}
          backTop
          pullDownRefresh={async () => {
            setStatus(true)
            await timeout(1000);
            setStatus(false)
          }}
          pullUpLoad={() => { }}
        >
          {/* 搜索栏 */}
          <SearchBar placeholder="" maxLength={8} />
          {/* 通讯栏 */}
          {
            list.map((itm, index) => (
              <div key={index} >
                <div style={{ paddingLeft: 15, fontWeight: 500, fontFamily: "cursive", background: "#F5F5F5" }} >{itm.index}</div>
                {itm.children.map((val, index) => (
                  <List.Item
                    key={index}
                    thumb={<img src={val.img} alt="" className={styles.headImage} />}
                    arrow="horizontal"
                    onClick={() => { }}
                  >
                    {val.name}
                  </List.Item>
                ))}
              </div>
            ))
          }
        </Scroll>
      </>
    )
    return items
  }


  return (
    <div className={styles.log_list}>
      {/* 通讯+搜索 */}
      {renderList()}
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

export default connect(state => ({
  classify: state.classify,
}))(ClassPage)