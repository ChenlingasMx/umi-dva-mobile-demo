import React, { useEffect } from 'react'
import { List, SearchBar, SwipeAction } from 'antd-mobile'
import { connect } from 'dva';
import styles from './index.less'
import Scroll from 'react-scroll-mobile'
import head1 from '@/assets/WechatIMG34.jpeg'

const ClassPage = ({
  dispatch,
  chat: { logs, currentIndex, HOT_NAME, HOT_SINGER_LEN, list, page },
  loading
}) => {
  useEffect(() => {
    dispatch({
      type: "chat/selectChatPage"
    })
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
      type: 'chat/updateData',
      payload: {
        logs: hot.concat(ret)
      }
    })
  }

  // 遍历通讯录列表
  const renderList = () => {
    let items = (
      <>
        <Scroll
          noMore={loading.effects['chat/selectChatPage']}
          backTop
          pullDownRefresh={async () => {
            dispatch({
              type: "chat/updateData",
              payload: {
                page: 1
              }
            })
            dispatch({
              type: "chat/selectChatPage"
            })
          }}
          pullUpLoad={() => {
            dispatch({
              type: "chat/updateData",
              payload: {
                page: page + 1
              }
            })
            dispatch({
              type: "chat/selectChatPage"
            })
          }}
        >
          {/* 搜索栏 */}
          <SearchBar placeholder="" maxLength={8} />
          {/* 通讯栏 */}
          {
            list.map((itm, index) => (
              <div key={index} >
                <div style={{ paddingLeft: 15, fontWeight: 500, fontFamily: "cursive", background: "#F5F5F5" }} >{itm.index}</div>
                {itm.children.map((val, index) => (
                  <SwipeAction
                    style={{ backgroundColor: 'gray' }}
                    key={index}
                    autoClose
                    right={[
                      {
                        text: '备注',
                        onPress: () =>{ },
                        style: { backgroundColor: '#ddd', color: 'white' },
                      },
                      {
                        text: '删除',
                        onPress: () => {},
                        style: { backgroundColor: '#F4333C', color: 'white' },
                      },
                    ]}
                    onOpen={() => console.log('global open')}
                    onClose={() => console.log('global close')}
                  >
                    <List.Item
                      key={index}
                      thumb={<img src={head1} alt="" className={styles.headImage} />}
                      arrow="horizontal"
                      onClick={() => {}}
                    >
                      {val.name}
                    </List.Item>
                  </SwipeAction>
                )
                )}
              </div>
            )
            )
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
  chat: state.chat,
  loading: state.loading,
}))(ClassPage)