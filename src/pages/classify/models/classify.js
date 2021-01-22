
import head1 from '../../../assets/headImage/WechatIMG37.jpeg'
import head2 from '../../../assets/headImage/WechatIMG38.jpeg'
import head3 from '../../../assets/headImage/WechatIMG39.jpeg'
import head4 from '../../../assets/headImage/WechatIMG40.jpeg'
import head5 from '../../../assets/headImage/WechatIMG41.jpeg'
import {selectChatPage} from '../../../services/chatList'
export default {
  namespace: 'classify',
  state: {
    logs: [],
    HOT_NAME: '❤️',
    HOT_SINGER_LEN: 10,
    currentIndex: 0,
    list: [],
    page:1,
    pageSize:10,
  },
  effects: {
    *selectChatPage({ payload }, { call, put, select }) {
      const params = yield select(({ classify }) => ({
        page:classify.page,
        pageSize:classify.pageSize
      }));
      const sourcelist = yield select(({classify})=>({
        list:classify.list
      }));
      const {list} = sourcelist 
      const data = yield call(selectChatPage, params)
      if(data.code===1){
        yield put({
          type:"updateData",
          payload:{
            list:[...list,...data.data.rows]
          }
        })
      }
    }
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
