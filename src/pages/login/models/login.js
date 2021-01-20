import { login } from '../../../services/login'
import router from 'umi/router';
export default {
  namespace: 'login',
  state: {
    loginForm: {
      username: "",
      password: ""
    },
    loginError: {
      usernameError: false,
      passwordError: false
    }
  },
  effects: {
    *login({ payload }, { call, put, select }) {
      const params = yield select(({ login }) => ({
        ...login.loginForm
      }));
      const data = yield call(login, params)
      if(data.code===1){
         router.push('/home')
      }
    }
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
