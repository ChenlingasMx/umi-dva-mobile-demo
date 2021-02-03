import {selectPage} from '../../../services/addressList'
export default {
  namespace: 'addressList',
  state: {
    logs: [],
    HOT_NAME: '❤️',
    HOT_SINGER_LEN: 10,
    currentIndex: 0,
    list: [],
    page:1,
    pageSize:5,
  },
  effects: {
    *selectaddressListPage({ payload }, { call, put, select }) {
      const params = yield select(({ addressList }) => ({
        page:addressList.page,
        pageSize:addressList.pageSize
      }));
      const sourcelist = yield select(({addressList})=>({
        list:addressList.list
      }));
      const {list} = sourcelist 
      const data = yield call(selectPage, params)
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
