
export default {
  namespace: 'login',
  state: {
    loginForm:{
      username:"",
      password:""
    },
    loginError:{
      usernameError:false,
      passwordError:false
    }
  },
  effects: {
  },
  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  }
};
