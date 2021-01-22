import {selectChatPage} from '../../../services/chatList'
export default {
  namespace: 'chat',
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
      const params = yield select(({ chat }) => ({
        page:chat.page,
        pageSize:chat.pageSize
      }));
      const sourcelist = yield select(({chat})=>({
        list:chat.list
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
